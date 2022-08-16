const { profile } = require('console');
const Character = require('../models/character');
const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    index,
    new: newProfile,
    create,
    show
};

function show(req, res) {
    Profile.findById(req.params.id)
    .populate('characters')
    .exec(function(err, profile) {
        console.log(profile, "<- show page")
        Character.find({}, function(err, characters) {
            console.log(characters, '<- characters')
            res.render('profiles/show', {
                title: 'Profile Characters',
                profile: profile,
                characters: characters
            })
        })
    })
    // res.render(`profiles/${Profile._id}`, {
    //     title: 'Profile Page',
    //     profile: profile
    // Character.find({profile: profile._id}, function(err, characters) {

    // });

}
function index(req, res) {
    // Character.find({}, function(err, allChar) {
    //     console.log(allChar, "<- All Characters Created!");
    //     if(err) {
    //         res.send('You have an error trying to find the characters, check the terminal');
    //     }
    //     res.render('characters/index.ejs');
    //         characters: allChar
    // })
    if (User.profile === true) {
        res.render(`profiles`)
    } else {
        Profile.find({}, function(err, profile) {
            res.render('profiles/new.ejs', {
                title: 'Create Profile',
                profile
            });
        })
    }


    // res.render('profiles/index.ejs');        
}

function create(req, res) {
    console.log(req.body, "<- Profile Name!")
    Profile.create(req.body, function(err, profile) {
        if(err) {
            console.log(err, '<- Error in Profile Creation')
            return res.render('profiles/new.ejs')
        }
        console.log(profile, '<- Profile Created!')
        res.redirect(`/profiles/${profile._id}`, {
            title: 'Profile Characters',
            profile: profile,
            // characters: profile.characters
        });
    });
}


function newProfile(req, res) {
    Profile.find({}, function(err, profile) {
        res.render('profiles/new.ejs', {
            title: 'Create Profile',
            profile
        });
    })
}