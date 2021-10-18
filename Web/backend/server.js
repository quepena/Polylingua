import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import users from './data/users.js';

dotenv.config();

connectDB();

// const express = require('express');
// const users = require('./data/users');

const app = express();

app.get('/', (req, res) => {
    res.send('API');
})

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find((p) => p.id === req.params.id);
    res.json(user);
})

app.listen(5000, console.log('Server'));