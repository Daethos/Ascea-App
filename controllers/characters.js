const Character = require('../models/character');
const Profile = require('../models/profile');
const Weapons = require('../models/weapon');
const Shields = require('../models/shield');
const Armors = require('../models/armor');
const { profile } = require('console');

module.exports = {
    new: newChar,
    create
}

function newChar(req, res) {
    Weapons.find({}, function(err, weapons) {
        Shields.find({}, function(err, shields) {
            Armors.find({}, function(err, armors) {
                res.render('characters/new', {
                    title: 'New Character',
                    weapons,
                    shields,
                    armors
                });
            })
        })
    })
        // res.render('characters/new', {
        //     title: 'New Character',
        //     weapons: Weapons,
        //     shields: Shields,
        //     armor: Armors
        // });

}
function create(req, res) {
    console.log(req.body, "<- Character Creation Content");
    req.body.profile = req.params.id;
    console.log(req.params.id, "<- Linked Profile ID")
    Character.weapon = req.weapon.id;
    console.log(Character.weapon, "<- Is this a thing? (Character.weapon)")
    console.log(req.weapon.id, "<- Is this a thing? (req.weapon._id)")
    Character.create(req.body, function(err, character) {
        console.log(character, '<- Damn, look at that BEAST!');
        if(err) {
            console.log(err, '<- Error in Character Creation!');
            return res.render('characters/new');
        }
        profile.save(function(err) {  
            res.redirect(`/profiles/${Profile._id}`);
        });
        // console.log(character, '<- Damn, look at that BEAST!');
        // res.redirect(`/profiles/${Profile._id}`);
    });
}
