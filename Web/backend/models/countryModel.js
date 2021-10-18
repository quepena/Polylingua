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
        required: true,
        ref: 'City' 
    }],
}, {
    timestamps: true,
})

const Country = mongoose.model('Countries', countrySchema);

export default Country;
