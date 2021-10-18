import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    contents: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Section'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    numberOfComments: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
}, {
    timestamps: true
})

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;