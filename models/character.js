const mongoose = require('mongoose');
const { schema } = require('./user');
const Schema = mongoose.Schema;
const Weapon = require('./weapon');
const Shield = require('./shield');
const Armor = require('./armor');


// const weapSchema = new Schema(    
//     {
//         name: String,
//         grip: String,
//         attackType: String,
//         damageType: [String],
//         physDam: Number,
//         magDam: Number,
//         crit: Number,
//         imgURL: String
//     },
// );
// module.exports = mongoose.model('Weapons', weapSchema);

// const shieldSchema = new Schema(
//     {
//         name: String,
//         physRes: Number,
//         magRes: Number,
//         roll: Number,
//         imgURL: String
//     }
// );
// module.exports = mongoose.model('Shields', shieldSchema);

// const armorSchema = new Schema(
//     {
//         name: String,
//         type: String,
//         physRes: Number,
//         magRes: Number,
//         dodge: Number,
//         imgURLTop: String,
//         imgURLMid: String,
//         imgURLBot: String
//     }
// );
// module.exports = mongoose.model('Armors', armorSchema);

const charSchema = new Schema(
    {
        name: {type: String, required: true, unique: true},
        description: String,
        weapon: {type: Schema.Types.ObjectId, ref: 'Weapons', required: true},
        shield: {type: Schema.Types.ObjectId, ref: 'Shields', required: true},
        armor: {type: Schema.Types.ObjectId, ref: 'Armors', required: true},
        profile: {type: Schema.Types.ObjectId, ref: 'Profile'}
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Character', charSchema);



// function createWeapon(value) {
//     name.value = value[0],
//     grip.value = value[1],
//     attackType.value = value[2],
//     damageType.value = value[3],
//     physDam.value = value[4],
//     magDam.value = value[5],
//     crit.value = value[6],
//     imgURL.value = value[7]
// }

// module.exports = {
//     gladius, pugio, scythe, spear, katana, halberd, claymore, battleAxe,
//     warHammer, mace, daiKatana, godHand, whirlWind, lavaSpit, lightningSpear,
//     magicMissile, arcticBolt, oakCrush, handOfGod, insanity, windFury,
//     smallShield, mediumShield, largeShield, greatShield,
//     legionnaire, knight, mage, celt, poorKnight, viking
// }