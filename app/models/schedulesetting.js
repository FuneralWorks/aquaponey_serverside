var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');

var SettingSchema = require('../schemas/setting');

//ScheduleSetting
var ScheduleSettingSchema = SettingSchema.extend({
    duration: Number// à revoir (un ou plusieurs temps)
});

var ScheduleSetting = mongoose.model('ScheduleSetting', ScheduleSettingSchema);

module.exports = ScheduleSetting;
