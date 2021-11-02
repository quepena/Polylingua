import express from 'express'
const router = express.Router();
import { getUsers, authUser, getUserProfile, registerUser, getCurrentUserProfile, updateCurrentUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);

router.route('/users').get(getUsers);

router.route('/users/profile').get(protect, getCurrentUserProfile).put(protect, updateCurrentUserProfile);

router.route('/users/:id').get(getUserProfile)

router.route('/login').post(authUser);

export default router;
