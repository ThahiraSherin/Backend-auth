const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, { timestamps: true});

module.exports = mongoose.model('User', newSchema, 'Users');