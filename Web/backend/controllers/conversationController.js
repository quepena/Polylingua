import Message from "../models/messageModel.js";
import asyncHandler from 'express-async-handler';
import Conversation from "../models/conversationModel.js";

const createConversation = asyncHandler(async (req, res) => {
    const newConversation = await Conversation.create({
        participants: [req.body.sender, req.body.reciever]
    })

    if (newConversation) {
        res.status(201).json({
            _id: newConversation._id,
            participants: newConversation.participants,
        })
    } else {
        res.status(400).json({ message: "Invalid conversation data" });
    }
})

const getConversationByUser = asyncHandler(async (req, res) => {
    const conversation = await Conversation.find({
        participants: { $in: [req.params.userId] }
    })

    res.json(conversation);
})

export { createConversation, getConversationByUser };