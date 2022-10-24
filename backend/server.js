const express = require('express');
const app = express();
const PORT = 5000;
const products = require('./data/products');

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})