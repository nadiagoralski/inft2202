const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;

// Student schema
let studentSchema = new Schema({
    studentId: Number,
    firstName: String,
    lastName: String
}, {
    collection: 'students'
});

// Export schemas as models
module.exports.Student = mongoose.model('student', studentSchema);