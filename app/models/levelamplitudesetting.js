var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');

var SettingSchema = require('../schemas/setting');

//LevelAmplitude Setting
var LevelAmplitudeSettingSchema = SettingSchema.extend({
    amplitude: Number,
    level: Number
});

var LevelAmplitudeSetting = mongoose.model('LevelAmplitudeSetting', LevelAmplitudeSettingSchema);

module.exports = LevelAmplitudeSetting;
