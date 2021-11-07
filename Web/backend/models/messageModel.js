import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    contents: {
        type: String,
        trim: true,
        required: true
    },
    participants: [{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        // ref: 'User' 
    }],
    sender: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        // ref: 'User'
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