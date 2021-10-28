import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(users);
})

app.use('/api/users', userRoutes);

app.listen(5000, console.log('Server'));