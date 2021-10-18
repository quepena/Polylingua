import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    contents: {
        type: String,
        required: true,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
}, {
    timestamps: true
})

const Comment = mongoose.model('Comments', commentSchema);

module.exports = Comment;