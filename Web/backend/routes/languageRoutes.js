import express from 'express'
const router = express.Router();
import { getLanguages, createLanguage } from '../controllers/languageController.js';

router.route('/').get(getLanguages).post(createLanguage);

export default router;