var mongoose = require('mongoose');

//sensor Schema
var sensorSchema = new mongoose.Schema({
    name: String,
    value: Number
});

var Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
