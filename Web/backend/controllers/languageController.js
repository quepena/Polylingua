import Language from "../models/languageModel.js";
import asyncHandler from 'express-async-handler';

const getLanguages = asyncHandler(async(req, res) => {
    const languages = await Language.find({})

    res.json(languages);
})

export { getLanguages };