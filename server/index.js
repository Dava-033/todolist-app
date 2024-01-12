import express  from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
// const express = require ('express');
// const api = require('./src/api');


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const PORT = 5000;


app.listen(PORT, () => { 
    console.log("Server up and running...")
});