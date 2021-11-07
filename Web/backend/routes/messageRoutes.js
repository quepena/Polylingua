import express from 'express'
const router = express.Router();
import { getMessages, createMessage } from '../controllers/messageController.js';

router.route('/').get(getMessages).post(createMessage);

export default router;