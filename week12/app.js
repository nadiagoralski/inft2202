const express = require('express');
const pug = require('pug');
const student = require('./routes/student.route');
require('dotenv').config();

// intialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
// configure routes
app.use('/', student);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// app.get('/', (req, res) => {
//     res.render('./pages/home', {
//         pageTitle: "INFT 2202 - Home"
//     })
// });

// Listent on port
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})