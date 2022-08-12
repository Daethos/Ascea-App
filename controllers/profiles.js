const Character = require('../models/character');
const Profile = require('../models/profile');

module.exports = {
    index,
    show
};

function show(req, res) {
    Profile.findById(req.params.id)
    .populate('characters')
    .exec(function(err, proDoc) {
        console.log(proDoc, "<- show page")
        Character.find({_id: {nin: proDoc.characters }}, function(err, characters) {
            console.log(characters, '<- characters')
            res.render(`profiles/show/${Profile._id}`, {
                title: 'Profile Characters',
                proDoc: proDoc,
                characters: characters
            })
        })
    })
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
    res.render('profiles/index.ejs');        
}