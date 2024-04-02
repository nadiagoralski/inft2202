const { response } = require("express");

// Hardcoded user names, we would normally do a find
let usernames = ['admin', 'bsmith'];
function userExists(usernameToFind) {
    for (let i = 0; i < usernames.length; i++) {
        if (username[i] === usernameToFind) {
            return true;
        }
    }

    return false;
}



/**
 * renders student view
 * @param {*} req 
 * @param {*} res 
 */
function homeView(req, res) {
    res.render('./pages/home', {
        pageTitle: 'INFT 2202 - Home Pages',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getLogin = (req, res, next) => {
    res.render('./pages/login', {
        pageTitle: 'Login to Your Account',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getRegister = (req, res, next) => {
    res.render('./pages/register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    })
}

/**
 * handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const postRegister = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (userExists(username)) { 
        res.render('./pages/register', {
            pageTitle: 'Register a New Account',
            errorMessage: 'Username is already in use'
        })  
    } else {
        usernames.push(username);

        res.render('./pages/registerConfirmed', {
            username: username,
            pageTitle: 'Thank you for registering!'
        })
    }

    console.log('REGISTER!' , req.body, res.body)
}

/**
 * handle user login
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const login = (req, res, next) => {
    // if (userExists(username)) {
    //     res.render('./pages/loginConfirmed', {
    //         pageTitle: 'Login Successfi'
    //     })
    // }
    console.log('LOGIN!' , req.body, res.body)
}


// Exports
module.exports = {
    homeView,
    getLogin,
    getRegister,
    login,
    postRegister
};
