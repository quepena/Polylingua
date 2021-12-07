import express from 'express'
import { getCities, createCities } from '../controllers/cityController.js';

const router = express.Router();

router.route('/:countryId').get(getCities).post(createCities);

export default router;