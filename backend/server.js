const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const cors = require("cors")
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors({
    origin: "*",
}))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/api/scrabble', require('./routes/scrabbleRoutes'));
app.use('/scrabble', require('./routes/scrabbleRoutes'));

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

