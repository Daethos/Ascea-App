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

// async function deleteCharacter(req, res) {
//     try {
//         const profileDocument = await Profile.find({
//             'characters._id': req.user._id,
//             'characters.user': req.user._id
//         });
//         if(profileDocument) return res.redirect(`/profiles/${profileDocument._id}`)

//         profileDocument.characters.remove(req.params.id);
//         await profileDocument.save();
//         res.redirect(`/profiles/${profileDocument._id}`);

//         // Character.findById(req.params.id, function (err, characters) {
//         //     characters.remove(req.params.id);
            
//         // })
//         // await characters.save();
//         //     res.redirect(`/profiles`)

//     } catch(err) {
//         res.send(err)
//     }
// }
function deleteCharacter(req, res) {
    Profile.findOne(
        // Ensure that the Character was created by the logged in user
        {characters: req.params.id}, function(err, profile) {
            if (err) return res.redirect(`/profiles/${profile._id}`);
            // Getting rid of that darn character!
            profile.characters.remove(req.params.id);
            // Character.delete(req.params.id);
            profile.save(function(err) {
                Character.findOneAndDelete({_id: req.params.id, user: req.user._id}, function(err) {
                    res.redirect(`/profiles/${profile._id}`);
                })
                // res.redirect(`/profiles/${profile._id}`);
            })
        }
    )
}

// function deleteCharacter(req, res) {
//     Profile.findOne({characters: charID}, function(err, profile) {
//         console.log(charID, "<- Character to Delete")
//         if (err) {
//             res.send(err)
//         }
//         profile.characters.remove(charID);
//         profile.save();
//         res.redirect(`/profiles/${profile._id}`);
//     })
// }

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
        req.body.user = req.user._id;
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
