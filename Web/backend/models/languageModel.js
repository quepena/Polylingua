import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
    languageName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    flagUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const Language = mongoose.model('Languages', languageSchema);

module.exports = Language;