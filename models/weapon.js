const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const weapSchema = new Schema(    
    {
        name: String,
        grip: String,
        attackType: String,
        damageType: [String],
        physDam: Number,
        magDam: Number,
        crit: Number,
        imgURL: String
    },
);
module.exports = mongoose.model('Weapons', weapSchema);