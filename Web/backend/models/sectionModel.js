import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
    // languageId: {
    //     type: String,
    //     required: true,
    // },
    // posts: [{
    //    type: Array
    // }],
    // subscribers: [{
    //     type: Array
    // }],
    // numberOfSubscribers: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
}, {
    timestamps: true
})

const Section = mongoose.model('Sections', sectionSchema);

export default Section