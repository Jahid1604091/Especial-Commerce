const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const products = require('./data/products');
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
app.get('/api/products', (req, res) => {
    res.json(products)
})

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`);
})