import express from 'express'
const router = express.Router();
import { getLanguages } from '../controllers/languageController.js';

router.route('/').get(getLanguages);

export default router;