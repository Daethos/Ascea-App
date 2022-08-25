const Character = require('../models/character');
const Profile = require('../models/profile');


module.exports = {
    show,
    returnToChar
}

function show(req, res) {
    Profile.findById(req.params.profileId, function(err, profile) {
        Character.findById(req.params.charactersId)
            .populate('weapon')
            .populate('shield')
            .populate('armor')
            .exec(function(err, characters) {
                res.render('games/show', {
                    title: 'Gameplay Page',
                    profile,
                    characters
            });
        });
    });
}

function returnToChar(req, res) {
    Profile.findById(req.params.profileId, function(err, profile) {
        Character.findById(req.params.charactersId)
            .populate('weapon')
            .populate('shield')
            .populate('armor')
            .exec(function(err, characters) {
                res.render('characters/show', {
                    title: 'Character Stat Page',
                    profile,
                    characters
            });
        });
    });
}