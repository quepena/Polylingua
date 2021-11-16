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
    numberOfSubscribers: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true
})

const Language = mongoose.model('Languages', languageSchema);

export default Language;