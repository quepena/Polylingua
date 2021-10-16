import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
    languageName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    flag: {
        type: String,
        required: true,
    },
})

const Language = mongoose.model('Languages', languageSchema);

module.exports = Language;