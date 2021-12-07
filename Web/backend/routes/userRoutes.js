import express from 'express'
import { getUsers, authUser, getUserProfile, registerUser, getCurrentUserProfile, updateCurrentUserProfile, deleteCurrentUserAccount } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);

router.route('/users').get(protect, getUsers);

router.route('/users/profile').get(protect, getCurrentUserProfile).put(protect, updateCurrentUserProfile)

router.route('/users/:id').get(getUserProfile).delete(protect, deleteCurrentUserAccount);

router.route('/login').post(authUser);

export default router;
