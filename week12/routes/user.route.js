const express = require('express');
const { homeView, getLogin, login, getRegister, postRegister } = require('../controllers/user.controller');

// Create an express router object
const router = express.Router();

// Handle the '/' URL with a GET method to use homeView function
router.get('/', homeView);

router.get('/login', getLogin);
router.post('/login', login)

router.get('/register', getRegister);
router.post('/processRegister', postRegister)

// Export the router
module.exports = router;