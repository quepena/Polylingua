import express from 'express'
const router = express.Router();
import { createPost, getPostsBySection } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

// router.route('/:sectionId').post(protect, createPost);

router.route('/:userId').get(getPostsBySection)

export default router;