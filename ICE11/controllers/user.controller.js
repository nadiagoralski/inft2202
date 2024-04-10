const bcrypt = require("bcrypt");
const saltRounds = 12;

const { User } = require("../models/user");

/**
 * renders home view
 * @param {*} req
 * @param {*} res
 */
exports.homeView = (req, res) => {
  res.render("home", {
    pageTitle: "INFT 2202 - Home Page",
  });
};

/**
 * render the login page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "Login",
    errorMessage: "",
  });
};

/**
 * render the login failure page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getLoginFailure = (req, res) => {
  res.render("login", {
    pageTitle: "Login",
    errorMessage:
      "Username/password combination does not exist. Please try again.",
  });
};

/**
 * render the login success page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getLoginSuccess = (req, res) => {
  res.render("login-success", {
    pageTitle: "",
    user: { username: req.body.username },
  });
};

/**
 * handle login form submit
 * @param {*} req
 * @param {*} res
 * @param {*} nex
 */
exports.postLogin = (req, res) => {
  let usernameEntry = req.body.username;
  let passwordEntry = req.body.password;
  // check to see if user pass combo exists
  // render either login-failure or login-success
  // check against DB instead of hardcoded values
  User.findOne({ username: usernameEntry }).then(function (user) {
    if (user) {
      // username match
      // check password hash
      bcrypt.compare(passwordEntry, user.hashPassword, function (err, result) {
        if (err == null && result) {
          // correct password
          getLoginSuccess(req, res);
        } else {
          // either an error or incorrect password entry
          getLoginFailure(req, res);
        }
      });
    } else {
      // username not found
      // show error
      getLoginFailure(req, res);
    }
  });
};

/**
 * render the register page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getRegister = (req, res, next) => {
  res.render("register", {
    pageTitle: "Register a New Account",
    errorMessage: "",
  });
};

/**
 * handle register form submit
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.postRegister = (req, res) => {
  let usernameEntry = req.body.username?.trim();
  let passwordEntry = req.body.password?.trim();
  User.findOne({ username: usernameEntry })
    .then(function (user) {
      if (user) {
        // user exists
        res.render("register", {
          pageTitle: "Register a New Account",
          errorMessage: "Username already in use, please try another.",
        });
      } else {
        // else user does not exist, create new record

        // hash password before adding
        bcrypt.hash(passwordEntry, saltRounds, function (err, hash) {
          if (err == null && hash) {
            // no error, hash successful

            // create user object
            let userData = {
              username: usernameEntry,
              hashPassword: hash,
            };

            // creates schema model object
            let newUser = new User(userData);
            // save new user
            newUser.save();
            res.render("login", {
                pageTitle: "Login",
                errorMessage: "",
            });
          } else {
            console.log(err);
          }
        });
      }
    })
    .catch((err) => {
      console.log("An error occurred", err);
    });
};

module.exports = exports;
