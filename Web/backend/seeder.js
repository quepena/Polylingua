import connectDB from './config/db.js';
import City from './models/cityModel.js';
import cities from './data/cities.js';
import Country from './models/countryModel.js';
import countries from './data/countries.js';
import languages from './data/languages.js';
import Language from './models/languageModel.js';
import dotenv from 'dotenv'
import Section from './models/sectionModel.js';
import sections from './data/sections.js'

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Language.deleteMany();
        await City.deleteMany();
        await Country.deleteMany();
        await Section.deleteMany();

        const sampleLanguages = languages.map(language => {
            return { ...language }
        });

        await Language.insertMany(sampleLanguages);

        const sampleCountries = countries.map(country => {
            return { ...country }
        });

        await Country.insertMany(sampleCountries);

        const sampleCities = cities.map(city => {
            return { ...city }
        });

        await City.insertMany(sampleCities);

        const sampleSections = sections.map(section => {
            return { ...section }
        });

        await Section.insertMany(sampleSections);

        console.log('Data imported');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        proccess.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Language.deleteMany();

        console.log('Data destroyed');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        proccess.exit(1);
    }
}

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}