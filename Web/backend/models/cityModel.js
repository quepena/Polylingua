import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Country'
    },
}, {
    timestamps: true
})

const City = mongoose.model('Cities', citySchema);

export default City