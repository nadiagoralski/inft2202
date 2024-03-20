const express = require('express');
const pug = require('pug');

require('dotenv').config();

// routes
const index = require('./routes/index.router');

// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

// initialize method
const app = express();

// configure express routes
app.use('/', index);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    // output the value from .env file with the key MY_SECRET_KEY
    console.log(`My secret value from .env=${process.env.MY_SECRET_KEY}`);
})