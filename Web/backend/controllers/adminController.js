import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const getUsersForAdmin = asyncHandler(async (req, res) => {
    const users = await User.find({})

    res.json(users);
})

const deleteUserForAdmin = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.remove();
        res.json({ messsage: 'User removed' })
    } else {
        res.status(404).json({ message: 'User not found' });
    };
})

export {
    getUsersForAdmin,
    deleteUserForAdmin,
}
