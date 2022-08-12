const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema(
    {
        name: String,
        characters: {type: Schema.Types.ObjectId, ref: 'Character'}
    },
);

module.exports = mongoose.model('Profile', profileSchema);