const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const shieldSchema = new Schema(
    {
        name: String,
        physRes: Number,
        magRes: Number,
        roll: Number,
        imgURL: String
    }
);
module.exports = mongoose.model('Shields', shieldSchema);