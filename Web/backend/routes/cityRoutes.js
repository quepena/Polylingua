import express from 'express'
const router = express.Router();
import { getCities } from '../controllers/cityController.js';

router.route('/').get(getCities);

export default router;