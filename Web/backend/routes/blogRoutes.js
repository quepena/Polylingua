import express from 'express'
const router = express.Router();
import { createPost, getPostsBySection, getPosts } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/:sectionId').post(protect, createPost).get(getPosts);

router.route('/blogs/:userId').get(getPostsBySection)

export default router;