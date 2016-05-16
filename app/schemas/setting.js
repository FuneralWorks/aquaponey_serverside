var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var settingSchema = new mongoose.Schema({
    name: String,
    id: ObjectId,
    hasBeenModified: Number
});

module.exports = settingSchema;
