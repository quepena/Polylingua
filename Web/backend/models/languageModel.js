import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
    languageName: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
})

const Language = mongoose.model('Languages', languageSchema);

export default Language;