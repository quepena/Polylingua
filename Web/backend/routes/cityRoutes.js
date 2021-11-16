import express from 'express'
const router = express.Router();
import { getCities } from '../controllers/cityController.js';

router.route('/:countryId').get(getCities);

export default router;