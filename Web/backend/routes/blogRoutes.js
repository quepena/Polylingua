import express from 'express';
import { createPost, getPosts } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:sectionId').post(protect, createPost).get(getPosts);

export default router;