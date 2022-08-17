const Character = require('../models/character');
const Profile = require('../models/profile');
const Weapons = require('../models/weapon');
const Shields = require('../models/shield');
const Armors = require('../models/armor');
const { profile } = require('console');

module.exports = {
    new: newChar,
    create,
    addToProfile,
    delete: deleteCharacter
}

async function deleteCharacter(req, res) {
    try {
        const profileDoc = await Profile.findOne({
            'characters': req.params.id
        });
        if(profileDoc) return res.redirect(`/profiles/${profileDoc._id}`);
        profileDoc.characters.remove(req.params.id);
        await profileDoc.save();
        res.redirect(`/profiles/${profileDoc._id}`);

    } catch(err) {
        res.send(err)
    }
}

function newChar(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        Character.find({}, function(err, characters) {
            Weapons.find({}, function(err, weapons) {
                Shields.find({}, function(err, shields) {
                    Armors.find({}, function(err, armors) {
                        res.render('characters/new', {
                            title: 'New Character',
                            profile,
                            characters,
                            weapons,
                            shields,
                            armors
                        });
                    });
                });
            });
        });
    });
}
function addToProfile(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        console.log(req.params.id, "<-Profile ID in addToProfile")
        profile.characters.push(req.body.characterId);
        console.log(profile.characters, "<- Character ID pushed into Profile.Character Array")
        profile.save(function(err) {
            res.redirect(`/profiles/${req.params.id}`)
        });
    });
}

function create(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        console.log(req.body, "<- Character Creation Content");
        Character.weapon = req.body.weapon._id;
        Character.shield = req.body.shield._id;
        Character.armor = req.body.armor._id;
        Character.create(req.body, function(err, characters) {
            console.log(characters, '<- Damn, look at that BEAST!');
            // const charArr = this.characters;
            if(err) {
                console.log(err, '<- Error in Character Creation!');
                return res.render('characters/new');
            }
            res.redirect(`/profiles/${req.params.id}/characters/new`);
        });
    });
}
