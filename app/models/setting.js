var mongoose = require('mongoose');

//setting schema
var SettingSchema = require('../schemas/setting');


var Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;
