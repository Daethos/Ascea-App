const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const armorSchema = new Schema(
    {
        name: String,
        type: String,
        physRes: Number,
        magRes: Number,
        dodge: Number,
        imgURLTop: String,
        imgURLMid: String,
        imgURLBot: String
    }
);
module.exports = mongoose.model('Armors', armorSchema);