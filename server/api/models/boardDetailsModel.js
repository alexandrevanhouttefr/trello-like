'use script';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardDetailsSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the board',
        index: { unique: true }
    },
});

var BoardDetails = mongoose.model('BoardDetails', BoardDetailsSchema);
module.exports = Board;