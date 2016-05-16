var mongoose = require('mongoose');


var Setting = require('./setting');
var Data = require('./data');
var Sensor = require('./sensor');




module.exports = mongoose.model('DataHandler',{
    name: String,
    sensor: Sensor.schema,
    setting: Setting.schema,
    datas: [Data.schema]
});
