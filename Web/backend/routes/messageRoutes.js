import express from 'express'
import { createMessage, getMessageByConversation } from '../controllers/messageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createMessage);
router.route('/:conversation').get(protect, getMessageByConversation);

export default router;