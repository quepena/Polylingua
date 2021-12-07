import express from 'express'
import { createConversation, getConversationByUser } from '../controllers/conversationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createConversation);
router.route('/:userId').get(protect, getConversationByUser);

export default router;