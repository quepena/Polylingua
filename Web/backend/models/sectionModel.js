import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
    languageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Language'
    },
    posts: [postSchema],
    subscribers: [userSchema],
    numberOfSubscribers: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true
})

const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;