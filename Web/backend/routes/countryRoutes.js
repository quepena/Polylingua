import express from 'express'
import { getCountries, createCountry } from '../controllers/countryController.js';

const router = express.Router();

router.route('/').get(getCountries).post(createCountry);

export default router;