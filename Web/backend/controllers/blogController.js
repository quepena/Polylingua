import Post from "../models/postModel.js";
import asyncHandler from 'express-async-handler';

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

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ sectionId: req.params.sectionId }).sort({createdAt: -1})

    res.json(posts);
})

export { createPost, getPosts };