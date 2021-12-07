import express from 'express'
import { getUsersForAdmin, deleteUserForAdmin } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/users').get(protect, admin, getUsersForAdmin);

router.route('/users/:id').delete(protect, admin, deleteUserForAdmin)

export default router;