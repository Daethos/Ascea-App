const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;

const charSchema = new Schema(
    {
        name: {type: String, required: true, unique: true},
        description: String,
        weapon: {type: Schema.Types.ObjectId, ref: 'Weapons', required: true},
        shield: {type: Schema.Types.ObjectId, ref: 'Shields', required: true},
        armor: {type: Schema.Types.ObjectId, ref: 'Armors', required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Character', charSchema);
