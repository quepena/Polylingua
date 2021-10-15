// import connectDB from './config/db.js';

// connectDB();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('API');
})

app.get('/api/users', (req, res) => {
    res.send('')
})

app.listen(5000, console.log('Server'));