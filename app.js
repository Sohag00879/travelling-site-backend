const express = require('express');
const servicesRouter = require('./routes/services');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://sohag879:lfJj7zkm0JMKvAoF@cluster0.9m1rtxw.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database is connected');
})
.catch((err)=>{
    console.log(err)
})

app.use('/services',servicesRouter);

module.exports = app;