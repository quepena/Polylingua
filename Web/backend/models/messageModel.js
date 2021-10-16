import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    
})

const Message = mongoose.model('Messages', messageSchema);

module.exports = Message;