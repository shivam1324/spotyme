const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});