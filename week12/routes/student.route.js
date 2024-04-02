const express = require('express');
const { studentView, addEditStudent } = require('../controllers/student.controller');

// Create an express router object
const router = express.Router();

// Handle the '/student' URL with a GET method to use studentView function
router.get('/student', studentView);
router.post('/addEditStudent', addEditStudent);

// Export the router
module.exports = router;