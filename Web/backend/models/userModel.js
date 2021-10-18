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
    alsoSpeaks: {
        type: Number,
    },
    isLearning: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Unknown']
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'City',
    },
    introduction: {
        type: String,
        required: true,
    },
    interests: {
        type: String,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastActive: {
        type: Date,
        required: true,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Photo'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
})

const User = mongoose.model('Users', userSchema);

module.exports = User;