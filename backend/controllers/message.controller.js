import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async(req,resp) => {
    // console.log("Message Sent!",req.params.id)
    try {
        const {message} = req.body;
        const {id:receiverId} =req.params;//aliasing
        const senderId=req.user._id;

      let conversation =  await Conversation.findOne({
            participants: {$all:[senderId,receiverId]},
        });
        if(!conversation)
          {
            conversation = await Conversation.create({
                participants: [senderId,receiverId]
            });
          }
    const newMessage = new Message({
             senderId,
             receiverId,
             message
    });
    if(newMessage)
        {
            conversation.messages.push(newMessage._id);
        }
    //SOCKET_IO FUNCTIONALITY GO HERE
    // await conversation.save();
    // await newMessage.save();
    //below will run in parallel
    await Promise.all([conversation.save(),newMessage.save()]);
    resp.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage Controller :",error.message);
        resp.status(500).json({error:"Internal Server Error"});
    }
}
export const getMessage = async(req,resp) =>{
    try {
        const {id:userToChatId} =req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChatId]},
        }).populate("messages");
        if(!conversation)
        resp.status(200).json([]);
        const messages =conversation.messages;//just an optimization
        resp.status(200).json(messages);
    } catch (error) {
        console.log("Error in sendMessage Controller :",error.message);
        resp.status(500).json({error:"Internal Server Error"});
    }
}