const mongoose = require('mongoose');
const Weapons = require('./models/weapon');
const Shields = require('./models/shield');
const Armors = require('./models/armor');

mongoose.connect(`mongodb+srv://Daethos:<password>@cluster0.ivsipz0.mongodb.net/?retryWrites=true&w=majority`, 
    {
    useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Mongo Connection Open!');
        })
        .catch((err) => {
            console.log(err)
        });

const seedWeapons = [
    {
        name: 'Gladius',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Pierce'],
        physDam: 425,
        magDam: 0,
        crit: 5,
        imgURL: '/images/gladius.png'
    },
    {
        name: 'Pugio',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Pierce'],
        physDam: 375,
        magDam: 0,
        crit: 10,
        imgURL: '/images/pugio.png'
    },
    {
        name: 'Scythe',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Pierce'],
        physDam: 375,
        magDam: 0,
        crit: 5,
        imgURL: '/images/scythe.png'
    },
    {
        name: 'Spear',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Pierce'],
        physDam: 375,
        magDam: 0,
        crit: 7,
        imgURL: '/images/spear.png'
    },
    {
        name: 'Katana',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Slash'],
        physDam: 425,
        magDam: 0,
        crit: 5,
        imgURL: '/images/katana.png'
    },
    {
        name: 'Halberd',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Pierce'],
        physDam: 575,
        magDam: 0,
        crit: 3,
        imgURL: '/images/halberd.png'
    },
    {
        name: 'Claymore',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Slash'],
        physDam: 575,
        magDam: 0,
        crit: 3,
        imgURL: '/images/claymore.png'
    },
    {
        name: 'Battle Axe',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Slash'],
        physDam: 575,
        magDam: 0,
        crit: 3,
        imgURL: '/images/battleaxe.png'
    },
    {
        name: 'War Hammer',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Blunt'],
        physDam: 575,
        magDam: 0,
        crit: 3,
        imgURL: '/images/warhammer.png'
    },
    {
        name: 'Mace',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Blunt'],
        physDam: 425,
        magDam: 0,
        crit: 5,
        imgURL: '/images/mace.png'
    },
    {
        name: 'Dai-Katana',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Slash'],
        physDam: 225,
        magDam: 225,
        crit: 5,
        imgURL: '/images/dai-katana.png'
    },
    {
        name: 'God Hand',
        grip: 'oneHand',
        attackType: 'Physical',
        damageType: ['Blunt'],
        physDam: 350,
        magDam: 0,
        crit: 7,
        imgURL: '/images/godHand.png'
    },
    {
        name: 'Whirlwind',
        grip: 'twoHand',
        attackType: 'Physical',
        damageType: ['Slash'],
        physDam: 275,
        magDam: 275,
        crit: 7,
        imgURL: '/images/whirlwind.png'
    },
    {
        name: 'Lava Spit',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Fire', 'Blunt'],
        physDam: 0,
        magDam: 525,
        crit: 10,
        imgURL: '/images/fire.png'
    },
    {
        name: 'Lightning Spear',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Lightning', 'Pierce'],
        physDam: 0,
        magDam: 525,
        crit: 10,
        imgURL: '/images/lightning-spear.png'
    },
    {
        name: 'Magic Missile',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Sorcery', 'Pierce'],
        physDam: 0,
        magDam: 350,
        crit: 7,
        imgURL: '/images/sorcery.png'
    },
    {
        name: 'Arctic Bolt',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Frost', 'Pierce'],
        physDam: 0,
        magDam: 425,
        crit: 5,
        imgURL: '/images/frost.png'
    },
    {
        name: 'Oak Crush',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Earth', 'Blunt'],
        physDam: 0,
        magDam: 425,
        crit: 5,
        imgURL: '/images/earth.png'
    },
    {
        name: 'Hand of God',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Faith', 'Slash'],
        physDam: 200,
        magDam: 225,
        crit: 7,
        imgURL: '/images/faith.png'
    },
    {
        name: 'Insanity',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Spooky', 'Blunt'],
        physDam: 150,
        magDam: 325,
        crit: 7,
        imgURL: '/images/insanity.png'
    },
    {
        name: 'Wind Fury',
        grip: 'oneHand',
        attackType: 'Magic',
        damageType: ['Wind', 'Slash'],
        physDam: 0,
        magDam: 350,
        crit: 7,
        imgURL: '/images/windfury.png'
    }
];

const seedShields = [
    {
        name: 'Parrying Buckler',
        physRes: 5,
        magRes: 5,
        roll: 15,
        imgURL: '/images/buckler.png'
    },
    {
        name: 'Heater Shield',
        physRes: 10,
        magRes: 10,
        roll: 25,
        imgURL: '/images/heater-shield.png'
    },
    {
        name: 'Scutum',
        physRes: 15,
        magRes: 15,
        roll: 35,
        imgURL: '/images/scutum.png'
    },
    {
        name: 'Pavise',
        physRes: 20,
        magRes: 20,
        roll: 45,
        imgURL: '/images/pavise.png'
    }
];
const seedArmors = [
    {
        name: "Legionnaire's Regalia",
        type: "leather-mail",
        physRes: 30,
        magRes: 30,
        dodge: 30,
        imgURLTop: '/images/legion-helm.png',
        imgURLMid: '/images/legion-armor.png',
        imgURLBot: '/images/legion-legs.png'
    },
    {
        name: "Knight's Full Plate",
        type: "plate-mail",
        physRes: 50,
        magRes: 40,
        dodge: 5,
        imgURLTop: '/images/knight-helm.png',
        imgURLMid: '/images/knight-armor.png',
        imgURLBot: '/images/knight-legs.png'
    },
    {
        name: "Mage's Robes",
        type: "leather-cloth",
        physRes: 10,
        magRes: 50,
        dodge: 35,
        imgURLTop: '/images/mage-helm.png',
        imgURLMid: '/images/mage-armor.png',
        imgURLBot: '/images/mage-legs.png'
    },
    {
        name: "Celtic Menagerie",
        type: "leather-mail",
        physRes: 25,
        magRes: 40,
        dodge: 25,
        imgURLTop: '/images/celt-helm.png',
        imgURLMid: '/images/celt-armor.png',
        imgURLBot: '/images/celt-legs.png'
    },
    {
        name: "Poor Knight's Chainmail",
        type: "chain-mail",
        physRes: 40,
        magRes: 35,
        dodge: 15,
        imgURLTop: '/images/chain-helm.png',
        imgURLMid: '/images/chain-armor.png',
        imgURLBot: '/images/chain-legs.png'
    },
    {
        name: "Viking's Lamellar",
        type: "leather-mail",
        physRes: 40,
        magRes: 25,
        dodge: 25,
        imgURLTop: '/images/viking-helm.png',
        imgURLMid: '/images/viking-armor.png',
        imgURLBot: '/images/viking-legs.png'
    },
];

const seedDB = async () => {
    await Weapons.deleteMany({});
    await Weapons.insertMany(seedWeapons);
    console.log(seedWeapons, "Here are the seeded weapons");
    await Shields.deleteMany({});
    await Shields.insertMany(seedShields);

    await Armors.deleteMany({});
    await Armors.insertMany(seedArmors);

};
seedDB().then(() => {
    mongoose.connection.close();
});
