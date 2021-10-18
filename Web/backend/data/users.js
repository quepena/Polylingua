const users = [
    {
        username: 'antoine123',
        password: 'antoine123',
        knownAs: 'Antoine',
        nativeLanguage: 2,
        alsoSpeaks: 5,
        isLearning: 6,
        dateOfBirth: '02.08.1999',
        gender: 0,
        country: 5,
        introduction: "Hi! I\'m Antoine!",
        interests: 'games, plants, food',
        created: '16.10.2021',
        lastActive: '16.10.2021 10:05',
        photo: 'Web/frontend/public/images/polylingua.png',
        username: 'antoine123',
        password: crypted,
        knownAs: 'Antoine',
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
    },
    {
        id: '2',
        username: 'jessica1407',
        password: 'jessy',
        knownAs: 'Jessica',
        nativeLanguage: 7,
        alsoSpeaks: 5,
        isLearning: 1,
        dateOfBirth: '21.05.2002',
        gender: 1,
        country: 6,
        introduction: "I just wanna talk",
        interests: 'anime, music, art',
        created: '17.10.2021',
        lastActive: '17.10.2021 16:21',
        photo: 'Web/frontend/public/images/polylingua.png',
    }
]

export default users