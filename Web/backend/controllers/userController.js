import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})

    res.json(users);
})

const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);

    if(user) {
        res.json(user)
    } else {
        res.status(404).json({message: 'User not found'});
    };
})

const authUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({username});

    if(!user) {
        res.status(401).json({message: 'Invalid username'});
    }
    else if(!(await user.matchPassword(password))) {
        res.status(401).json({message: 'Invalid password'});
    }
    else if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        });
    }
})

const registerUser = asyncHandler(async(req, res) => {
    const { username, password, knownAs, nativeLanguage, isLearning, dateOfBirth, gender, country, city, introduction } = req.body;

    const userExists = await User.findOne({ username });

    if(userExists) {
        res.status(400).json({message: "User already exists"});
    }

    const user = await User.create({
        username, password, knownAs, nativeLanguage, isLearning, dateOfBirth, gender, country, city, introduction
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).json({message: "Invalid user data"});
    }
})

export {
    getUsers,
    getUserProfile,
    authUser,
    registerUser
}