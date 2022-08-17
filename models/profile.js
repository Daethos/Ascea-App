const mongoose = require('mongoose');
const { schema } = require('./user');

const profileSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        characters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Character'}]
    },
);

module.exports = mongoose.model('Profile', profileSchema);