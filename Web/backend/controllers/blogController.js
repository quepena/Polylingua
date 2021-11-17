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
    const currentUser = await User.findById(req.params.userId);

    // const sections = await currentUser.isLearning.map((lang) => {
    //        return Post.find({ sectionId: lang })
    //     })

    // let sectionPosts = await Post.find({ sectionId: sections })

    const sectionPosts = await Post.find({ sectionId: currentUser.isLearning })

    // const sectionPosts = await Promise.all(
    //     currentUser.isLearning.map((lang) => {
    //         return Post.find({ sectionId: lang })
    //     })
    // )

    res.json(sectionPosts);
})

// const getPostsByUser = asyncHandler(async (req, res) => {
//     const usersSections = User.find({
//         isLearning: { $in: [req.params.isLearning] }
//     })

//     const posts = await Post.find({
//         sectionId: req.params.usersSections
//     })

//     if (posts) {
//         res.json(posts);
//     } else {
//         res.status(404).json({ message: 'Posts not found' });
//     }
// })

// const getConversationByUser = asyncHandler(async (req, res) => {
//     const conversation = await Conversation.find({
//         participants: { $in: [req.params.userId] }
//     })

//     res.json(conversation);

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ sectionId: req.params.sectionId }).sort({createdAt: -1})

    res.json(posts);
})
// })

export { createPost, getPostsBySection, getPosts };