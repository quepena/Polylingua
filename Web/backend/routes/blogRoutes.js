import express from 'express'
const router = express.Router();
import { getPostsBySection, createPost } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/:sectionId').get(getPostsBySection).post(protect, createPost);

export default router;