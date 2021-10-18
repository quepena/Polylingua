import mongoose from 'mongoose'

const photoSchema = new mongoose.Schema({
    Url: {
        type: String,
        required: true
    },
    isMain: {
        type: boolean,
        required: true,
        default: 0,
    },
    publicId: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Photo = mongoose.model('Photos', photoSchema);

export default Photo;