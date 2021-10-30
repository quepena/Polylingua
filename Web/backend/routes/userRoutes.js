import express from 'express'
const router = express.Router();
import { getUsers, authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);

router.route('/users').get(getUsers);

router.route('/users/:id').get(protect, getUserProfile);

router.route('/login').post(authUser);

export default router;
