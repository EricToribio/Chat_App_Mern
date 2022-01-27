const  mongoose = require("mongoose")
//change names to fit project
const ChatRoomSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [
            true ,
            "Name is required"
        ]   
    },
    chats : Array
},{ timestamps : true})

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema)

module.exports = ChatRoom