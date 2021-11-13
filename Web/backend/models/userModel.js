import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        // ref: 'Language',
    },
    alsoSpeaks: {
        type: String
    },
    isLearning: {
        // type: mongoose.Schema.Types.ObjectId,
        type: Array,
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
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true,
        ref: 'Country'
    },
    city: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
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

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('Users', userSchema);

export default User