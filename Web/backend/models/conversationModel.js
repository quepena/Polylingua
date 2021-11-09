import mongoose from 'mongoose'

const conversationSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const Conversation = mongoose.model('Conversations', conversationSchema);

export default Conversation