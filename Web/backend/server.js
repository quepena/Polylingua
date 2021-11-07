import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import languageRoutes from './routes/languageRoutes.js'
import countryRoutes from './routes/countryRoutes.js'
import cityRoutes from './routes/cityRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(users);
})

app.use('/api/users', userRoutes);

app.use('/api/languages', languageRoutes);

app.use('/api/countries', countryRoutes);

app.use('/api/cities', cityRoutes);

app.use('/api/admin', adminRoutes);

app.use('/api/messages', messageRoutes);

app.listen(5000, console.log('Server'));