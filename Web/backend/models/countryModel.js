import mongoose from 'mongoose'

const countrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
})

const Country = mongoose.model('Countries', countrySchema);

module.exports = Country;