'use script';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the board',
        index: { unique: true }
    },
    position: {
        type: Number
    },
    members: {
        type: [Schema.ObjectId],
        required: 'Should have a member',
    },
    list: {
        type: [Schema.ObjectId],
    },
});

var Board = mongoose.model('Board', BoardSchema);
module.exports = Board;