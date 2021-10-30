import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import languageRoutes from './routes/languageRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(users);
})

app.use('/api/users', userRoutes);

app.use('/api/languages', languageRoutes);

app.listen(5000, console.log('Server'));