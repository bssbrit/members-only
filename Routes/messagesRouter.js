const { Router} = require("express")
const messageController = require("../Controllers/messagesController")
const messagesRouter = Router()

messagesRouter.route('/')
.get(messageController.getAllMessages)

 

messagesRouter.route("/:id")
//.delete()

module.exports = {messagesRouter}