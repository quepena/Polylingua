import City from "../models/cityModel.js";
import asyncHandler from 'express-async-handler';

const getCities = asyncHandler(async(req, res) => {
    const cities = await City.find({})

    res.json(cities);
})

export { getCities };