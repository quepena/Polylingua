import express from 'express'
const router = express.Router();
import { getUsers, authUser, getUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/register').post(registerUser);

router.route('/').get(getUsers);

router.route('/:id').get(protect, getUserProfile);

router.route('/login').post(authUser);

export default router;
