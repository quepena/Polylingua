import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    countryId: {
        type: Number,
        required: true,
    },
})

const City = mongoose.model('Cities', citySchema);

module.exports = City;