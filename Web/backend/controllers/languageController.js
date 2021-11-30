import Language from "../models/languageModel.js";
import asyncHandler from 'express-async-handler';

const getLanguages = asyncHandler(async(req, res) => {
    const languages = await Language.find({})

    res.json(languages);
})

const createLanguage = asyncHandler(async (req, res) => {
    const { languageName, flagUrl } = req.body;

    const newLanguage = await Language.create({
        languageName,
        flagUrl
    })

    if (newLanguage) {
        res.status(201).json(newLanguage)
    } else {
        res.status(400).json({ message: "Invalid language data" });
    }
})

export { getLanguages, createLanguage };