import mongoose from 'mongoose'

const countrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }],
}, {
    timestamps: true,
})

const Country = mongoose.model('Countries', countrySchema);

module.exports = Country;