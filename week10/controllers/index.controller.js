/**
 * render home.pug view
 * @param {*} req 
 * @param {*} res 
 */
function homeView(req, res) {
   // render index.pug in views

    res.render('./pages/home', {
        title: "INFT2202 Node101 - MVC101 with Pug templates",
        message: "Welcome to my site.",
        homePageParagraph: "Here is something interesting bout my site",
        showGreenHeader: false
    });
}

/**
 * render about.pug view
 * @param {*} req 
 * @param {*} res 
 */
function aboutView(req, res) {
    // render index.pug in views
     res.render('./pages/about', {
         title: "INFT2202 Node101 - MVC101 with Pug templates",
         message: "About Us"
     });
 }

// Export the controller function
module.exports = {
    homeView,
    aboutView
};