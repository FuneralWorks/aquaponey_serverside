var mongoose = require('mongoose');

//Data Schema

var DataSchema = new mongoose.Schema({
    value: Number,
    date: Date
});

var Data = mongoose.model('Data', DataSchema);

module.exports = Data;
