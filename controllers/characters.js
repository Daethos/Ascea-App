const Character = require('../models/character');

module.exports = {
    new: newChar,
    create
}

function newChar(req, res) {
        res.render('characters/new');
}
function create(req, res) {
    console.log(req.body);
    Character.create(req.body, function(err, charCreatedInDB) {
        if(err) {
            console.log(err, '<-error in character creation');
            return res.render('characters/new');
        }
        console.log(charCreatedInDB, '<- Damn, look at that BEAST!');
        res.redirect(`/characters/${Character._id}`);
    })
}
