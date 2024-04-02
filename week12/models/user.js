const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// mongoose.set('useCreateIndex', true);

// declare Schema
let Schema = mongoose.Schema;

// Student schema
let userSchema = new Schema({
    username: String,
    email: String,
    hashPassword: String
}, {
    collection: 'users'
});

// Export schemas as models
module.exports.Student = mongoose.model('user', userSchema);