const ChatRooms = require("../models/chatRoom.model")
//change names to fit current project
module.exports.addChatRooms = (req, res) => {
    ChatRooms.create(req.body)
        .then(newChatRoom => res.json({  ChatRoom : newChatRoom }))
        .catch(err => res.status(400).json(err))
}

module.exports.showAllChatRooms = (req, res) => {
    ChatRooms.find().sort({"name" : 1})
        .then(allChatRooms => res.json({  ChatRoom : allChatRooms}))
        .catch(err => res.json({ message : 'Something went wrong', error : err}))
}

module.exports.showOneChatRoom = (req , res) => {
    ChatRooms.findOne( {_id:  req.params.id} )
        .then(oneChatRoom => res.json( { ChatRoom : oneChatRoom }))
        .catch(err => res.status(400).json(err))

}

module.exports.updateExistingChatRoom = ( req , res ) => {
    ChatRooms.findOneAndUpdate( {_id : req.params.id}, req.body, { new : true, runValidators : true  })
        .then(updateChatRoom => res.json({  ChatRoom : updateChatRoom }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteChatRoom = (req, res) => {
    ChatRooms.deleteOne( {_id : req.params.id})
        .then(result => res.json({ result : result }))
        .catch(err => res.json({ message : "Something went wrong ", error : err }))
}