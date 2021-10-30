import Country from "../models/countryModel.js";
import asyncHandler from 'express-async-handler';

const getCountries = asyncHandler(async(req, res) => {
    const countries = await Country.find({})

    res.json(countries);
})

export { getCountries };