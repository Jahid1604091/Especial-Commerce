const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
require('dotenv').config();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
connectDB();

app.use('/api/products', require('./routes/products'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`);
})