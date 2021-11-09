import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true
    },
    sender: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        // ref: 'User'
    },
    contents: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    read: {
        type: Date
    }
}, {
    timestamps: true,
})

const Message = mongoose.model('Messages', messageSchema);

export default Message