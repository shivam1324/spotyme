const express = require('express');
const axios = require('axios');
const apis=require("./routes/apis");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apis);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});