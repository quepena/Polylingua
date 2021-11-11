import Post from "../models/postModel.js";
import asyncHandler from 'express-async-handler';
import Section from "../models/sectionModel.js";
import User from "../models/userModel.js";

const createPost = asyncHandler(async (req, res) => {
    const { title, contents, userId, sectionId } = req.body;

    const newPost = await Post.create({
        title, contents, userId, sectionId
    })

    if (newPost) {
        res.status(201).json({
            _id: newPost._id,
            title: newPost.title, 
            contents: newPost.contents, 
            userId: newPost.userId, 
            sectionId: newPost.sectionId
        })
    } else {
        res.status(400).json({ message: "Invalid post data" });
    }
})

const getPostsBySection = asyncHandler(async (req, res) => {
    const posts = await Post.find({
        sectionId: req.params.sectionId
    })

    res.json(posts);
})

const getSectionByUser = asyncHandler(async (req, res) => {
    const section = await User.find({
        sectionId: req.params.isLearning
    })

    res.json(section);
})

// const getConversationByUser = asyncHandler(async (req, res) => {
//     const conversation = await Conversation.find({
//         participants: { $in: [req.params.userId] }
//     })

//     res.json(conversation);
// })

export { getPostsBySection, createPost, getSectionByUser };