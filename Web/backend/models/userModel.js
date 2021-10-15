import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    knownAs: {
        type: String,
        required: true,
        lowercase: true,
    },
    nativeLanguage: {
        type: Number,
        required: true,
    },
    alsoSpeaks: Number,
    isLearning: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: Number,
        required: true,
    },
    country: {
        type: Number,
        required: true,
    },
    introduction: {

    },
    interests: {

    },
    created: {

    },
    lastActive: {

    },
    //photos, created and lastactive are dates right now
})

const User = mongoose.model('Users', userSchema);

module.exports = User;