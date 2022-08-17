const { profile } = require('console');
const Character = require('../models/character');
const Profile = require('../models/profile');
const User = require('../models/user');
const Weapon = require('../models/weapon');
const Shield = require('../models/shield');
const Armor = require('../models/armor');
const { unsubscribe } = require('../routes');
// const characters = require('./characters');

module.exports = {
    index,
    new: newProfile,
    create,
    show
};

function show(req, res) {
    Profile.findById(req.params.id)
    // .populate('characters')
    .exec(function(err, profile) {
        console.log(profile, "<- show page")
        Character.find({_id: {$in: profile.characters}})
        .populate('weapon', '-_id -imgURL -__v')
        .populate('shield', '-_id -imgURL -__v')
        .populate('armor', '-_id -imgURLTop -imgURLMid -imgURLBot -__v')
        .exec(function(err, characters) {
            // console.log(characters, '<- characters')
            res.render('profiles/show', {
                title: 'Profile Characters',
                profile,
                characters
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
    Profile.find({}, function(err, profile) {
        
        if(err) {
            res.send('Error trying to find profiles, check terminal');
        }
        if (profile.user === true) {
            res.render(`profiles/${profile._id}`)
        } else {
        res.render('profiles/index.ejs', {
            title: 'Create Profile',
            profile
        });
        }
    });
    // if (Profile.user === true) {
    //     res.render(`profiles/${Profile._id}`)
    // } else {
        // Profile.find({}, function(err, profile) {
        //     res.render('profiles/new.ejs', {
        //         title: 'Create Profile',
        //         profile
        //     });
        // })
}


    // res.render('profiles/index.ejs');        


function create(req, res) {
    req.body.user = req.user._id;
    // console.log(req.user, "<- Req.user!")
    // console.log(req.body, "Did this add the user?");
    // console.log(req.params.id, "<- Profile ID Created")
    Profile.create(req.body, function(err, profile) {
        if(err) {
            console.log(err, '<- Error in Profile Creation')
            return res.render('profiles/new.ejs')
        }
        console.log(profile, '<- Profile Created!')
        res.redirect(`/profiles/${profile._id}`);
    });
}


function newProfile(req, res) {
    // User.findById(req.params.id, function(err, user) {
        Profile.find({}, function(err, profile) {
            res.render('profiles/new.ejs', {
                title: 'Create Profile',
                // user,
                profile
            });
        })
    }
//     )
// }