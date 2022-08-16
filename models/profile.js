const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        characters: [{type: Schema.Types.ObjectId, ref: 'Character'}]
    },
);

module.exports = mongoose.model('Profile', profileSchema);