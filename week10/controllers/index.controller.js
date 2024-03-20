/**
 * render index.pug view
 * @param {*} req 
 * @param {*} res 
 */
function homeView(req, res) {
   // render index.pug in views
    res.render('index', {
        title: "INFT2202 Node101 - MVC101 with Pug templates",
        message: "Welcome to my site."
    });
}

// Export the controller function
module.exports = {
    homeView
};