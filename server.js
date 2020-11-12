const express = require("express");
// const mongojs = require("mongojs")
const mongoose = require("mongoose");

const logger = require("morgan");

// Setting up Express
const PORT = process.env.PORT || 3001;
const app = express();

// Set up logger
app.use(logger("dev"));


app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static("public"));

// Setting up Mongo DB for heroku and localhost
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`)
});