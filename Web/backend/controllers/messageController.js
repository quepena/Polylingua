import Message from "../models/messageModel.js";
import asyncHandler from 'express-async-handler';

const createMessage = asyncHandler(async(req, res) => {
    const { sender, participants, contents } = req.body;

    const newMessage = await Message.create({
        sender, participants, contents
    })

    if(newMessage) {
        res.status(201).json({
            _id: newMessage._id,
            sender: newMessage.sender,
            participants: newMessage.participants,
            contents: newMessage.contents,
        })
    } else {
        res.status(400).json({message: "Invalid message data"});
    }
})

const getMessages = asyncHandler(async(req, res) => {
    const messages = await Message.find({})

    res.json(messages);
})

export { getMessages, createMessage };