const mongoose = require('mongoose');

const charSchema = new mongoose.Schema(
    {
        name: String,
        weapon: {
            type: String,
            required: true,
        },
        shield: {
            type: String,
            required: true,
        },
        armor: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Character', charSchema);