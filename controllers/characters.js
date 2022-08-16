const Character = require('../models/character');
const Profile = require('../models/profile');
const Weapons = require('../models/weapon');
const Shields = require('../models/shield');
const Armors = require('../models/armor');
const { profile } = require('console');

module.exports = {
    new: newChar,
    create,
    addToProfile
}

function newChar(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        Character.find({profile: profile._id}, function(err, characters) {
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

    // Weapons.find({}, function(err, weapons) {
    //     Shields.find({}, function(err, shields) {
    //         Armors.find({}, function(err, armors) {
    //             res.render(`/profiles/${Profile._id}/characters/new`, {
    //                 title: 'New Character',
    //                 weapons,
    //                 shields,
    //                 armors
    //             });
    //         })
    //     })
    // })
        // res.render('characters/new', {
        //     title: 'New Character',
        //     weapons: Weapons,
        //     shields: Shields,
        //     armor: Armors
        // });

}
function addToProfile(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        profile.characters.push(req.body.characterId);
        profile.save(function(err) {
            res.redirect(`/profiles/${req.params.id}`)
        })
    })
}

function create(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        console.log(req.body, "<- Character Creation Content");
        Character.profile = Profile._id;
        console.log(Profile._id, "<- Linked Profile ID")
        Character.weapon = res.json(req.body.weapon._id);
        Character.shield = res.json(req.body.shield._id);
        Character.armor = res.json(req.body.armor._id);
        Character.create(req.body, function(err, character) {
        console.log(character, '<- Damn, look at that BEAST!');
        if(err) {
            console.log(err, '<- Error in Character Creation!');
            return res.render('characters/new');
        }
        profile.save(function(err) {  
            res.redirect(`/profiles/${Profile._id}`, {
                title: 'Profile',
                profile,
                character
            });
        });
        // console.log(character, '<- Damn, look at that BEAST!');
        // res.redirect(`/profiles/${Profile._id}`);
    });
    })
    // console.log(req.body, "<- Character Creation Content");
    // Character.profile = Profile._id;
    // console.log(Profile._id, "<- Linked Profile ID")
    // Character.weapon = req.body.weapon.id;
    // Character.shield = req.body.shield.id;
    // Character.armor = req.body.armor.id;
    // Character.create(req.body, function(err, character) {
    //     console.log(character, '<- Damn, look at that BEAST!');
    //     if(err) {
    //         console.log(err, '<- Error in Character Creation!');
    //         return res.render('characters/new');
    //     }
    //     profile.save(function(err) {  
    //         res.redirect(`/profiles/${Profile._id}`);
    //     });
    //     // console.log(character, '<- Damn, look at that BEAST!');
    //     // res.redirect(`/profiles/${Profile._id}`);
    // });
}
