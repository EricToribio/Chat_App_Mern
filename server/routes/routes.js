const ChatRoomController = require('../controllers/chatRooms.controller')
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")


module.exports = app=>{
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("/logout", UserController.logout)

    app.post("/api/chatroom/new", ChatRoomController.addChatRooms)
    app.get("/api/chatroom", ChatRoomController.showAllChatRooms)
    app.get("/api/chatroom/:id" , ChatRoomController.showOneChatRoom)
    app.put("/api/chatroom/update/:id" , ChatRoomController.updateExistingChatRoom)
    app.delete("/api/chatroom/delete/:id" , ChatRoomController.deleteChatRoom)
}