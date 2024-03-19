const express = require('express');
const pug = require('pug');


// initialize method
const app = express();

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index", {
        title: 'INFT 2202 - Pug Templates',
        message: 'Welcome Nadia!'
    });
})



app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})