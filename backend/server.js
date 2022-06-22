const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;


const app = express();

app.use('/api/scrabble', require('./routes/scrabbleRoutes'));

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

