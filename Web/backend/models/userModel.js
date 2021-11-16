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
        type: String,
        required: true,
    },
    isLearning: {
        type: String,
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
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
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
    photo: {
        type: String,
        required: false
    }
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