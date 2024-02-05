require("dotenv").config();

require('./config/db.connection')

const { PORT } = process.env;

const express = require("express");

const app = express();

const cors = require("cors")
const morgan = require("morgan")

const ridesRouter = require('./routes/rides');
const reviewsRouter = require('./routes/reviews');

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 

app.use(cors());
app.use(morgan("dev"));

app.use('/rides', ridesRouter)
app.use('/reviews', reviewsRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));