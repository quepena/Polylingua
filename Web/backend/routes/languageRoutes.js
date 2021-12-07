import express from 'express'
import { getLanguages, createLanguage } from '../controllers/languageController.js';

const router = express.Router();

router.route('/').get(getLanguages).post(createLanguage);

export default router;