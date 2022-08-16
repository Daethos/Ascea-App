// const mongoose = require('mongoose');
// class Weapons {
//     constructor(name, grip, attackType, [damageType], physDam, magDam, crit, imgURL) {
//         this.name = name;
//         this.grip = grip; // One-Hand, Two-Hand
//         this.attackType = attackType; // This evaluates against
//         this.damageType = [damageType]; // This evaluates against magical resistance
//         this.physDam = physDam; // Physical Damage NUMBER
//         this.magDam = magDam; // Magical Damage NUMBER
//         this.crit = crit; // crit chance
//         this.imgURL = imgURL;
//     }
//   }
//   class Shields {
//       constructor(name, physRes, magRes, roll, imgURL) {
//       this.name = name;
//       this.physRes = physRes;
//       this.magRes = magRes;
//       this.roll = roll;
//       this.imgURL = imgURL;
//       }
//   }
//   class Armors {
//    constructor(name, type, physRes, magRes, dodge, imgURLTop, imgURLMid, imgURLBot) {
//      this.name = name; //Name of the equipment
//      this.type = type; //CLoth, ClothLeather, LeatherMail, ChainMail, PlateMail
//      this.physRes = physRes; // Physical Resistance, affects PHYSICAL DAMAGE TYPE
//      this.magRes = magRes; // Magical Resistance, affects SPELL DAMAGE TYPE
//      this.dodge = dodge; // Chance to EVADE Attack, affects ROLL (DODGE)
//      this.imgURLTop = imgURLTop;
//      this.imgURLMid = imgURLMid;
//      this.imgURLBot = imgURLBot;
//    }
//   }

// const gladius = new Weapons('Gladius', 'oneHand', 'Physical', ['Pierce'], 425, 0, 5, './images/gladius.png');
// const pugio = new Weapons('Pugio', 'oneHand', 'Physical', ['Pierce'], 375, 0, 10, './images/pugio.png');
// const scythe = new Weapons('Scythe', 'oneHand', 'Physical', ['Pierce'], 375, 0, 5, './images/scythe.png');
// const spear = new Weapons('Spear', 'oneHand', 'Physical', ['Pierce'], 375, 0, 7, './images/spear.png'); 
// const katana = new Weapons('Katana', 'oneHand', 'Physical', ['Slash'], 425, 0, 5, './images/katana.png');
// const halberd = new Weapons('Halberd', 'twoHand', 'Physical', ['Pierce'], 575, 0, 3, './images/halberd.png');
// const claymore = new Weapons('Claymore', 'twoHand', 'Physical', ['Slash'], 575, 0, 3, './images/claymore.png');
// const battleAxe = new Weapons('Battle Axe', 'twoHand', 'Physical', ['Slash'], 575, 0, 3, './images/battleaxe.png');
// const warHammer = new Weapons('War Hammer', 'twoHand', 'Physical', ['Blunt'], 575, 0, 3, './images/warhammer.png');
// const mace = new Weapons('Mace', 'oneHand', 'Physical', ['Blunt'] , 425, 0, 5, './images/mace.png');
// const daiKatana = new Weapons('Dai-Katana', 'twoHand', 'Physical', ['Slash'], 225, 225, 5, './images/dai-katana.png'); 
// const godHand = new Weapons('God Hand', 'oneHand', 'Physical', ['Blunt'], 350, 0, 7, './images/godHand.png');
// const whirlWind = new Weapons('Whirlwind', 'twoHand', 'Physical', ['Slash'], 275, 275, 7, './images/whirlwind.png');
// // Spell Possibilities
// const lavaSpit = new Weapons('Lava Spit', 'oneHand', 'Magic', ['Fire', 'Blunt'], 0, 525, 10, './images/fire.png');
// const lightningSpear = new Weapons('Lightning Spear', 'oneHand', 'Magic', ['Lightning', 'Pierce'], 0, 525, 10, './images/lightning-spear.png');
// const magicMissile = new Weapons('Magic Missle', 'oneHand', 'Magic', ['Sorcery', 'Blunt'], 0, 350, 7, './images/sorcery.png');
// const arcticBolt = new Weapons('Arctic Bolt', 'oneHand', 'Magic', ['Frost', 'Pierce'], 0, 425, 5, './images/frost.png');
// const oakCrush = new Weapons('Oak Crush', 'oneHand', 'Magic', ['Earth', 'Blunt'], 0, 425, 5, './images/earth.png'); 
// const handOfGod = new Weapons('Hand of God', 'oneHand', 'Magic', ['Faith', 'Slash'], 200, 225, 7, './images/faith.png'); 
// const insanity = new Weapons('Insanity', 'oneHand', 'Magic', ['Spooky', 'Blunt'], 150, 325, 7, './images/insanity.png');
// const windFury = new Weapons('Wind Fury', 'oneHand', 'Magic', ['Wind', 'Slash'], 0, 350, 7, './images/windfury.png');
// // Shield Possibilties
// const smallShield = new Shields('Parrying Buckler', 5, 5, 1.5, './images/buckler.png'); 
// const mediumShield = new Shields('Heater Shield', 10, 10, 2.5, './images/heater-shield.png'); 
// const largeShield = new Shields('Scutum', 15, 15, 3.5, './images/scutum.png');
// const greatShield = new Shields('Pavise', 20, 20, 4.5, './images/pavise.png');
// // Armor Possibilities
// const legionnaire = new Armors("Legionnaire's Regalia", 'leather-mail', 30, 30, 30, './images/legion-helm.png', './images/legion-armor.png', './images/legion-legs.png'); 
// const knight = new Armors("Knight's Full Plate", 'plate-mail', 50, 40, 5, './images/knight-helm.png', './images/knight-armor.png', './images/knight-legs.png'); 
// const mage = new Armors("Mage's Robes", 'leather-cloth', 10, 50, 35, './images/mage-helm.png', './images/mage-robes.png', './images/mage-legs.png'); 
// const celt = new Armors("Celtic Menagerie", 'leather-mail', 25, 40, 25, './images/celt-helm.png', './images/celt-armor.png', './images/celt-legs.png'); 
// const poorKnight = new Armors("Poor Knight's Chainmail", "chain-mail", 40, 35, 15, './images/chain-helm.png', './images/chain-armor.png', './images/chain-legs.png'); 
// const viking = new Armors("Viking's Lamellar", 'leather-mail', 40, 25, 25, './images/viking-helmn.png', './images/viking-armor.png', './images/viking-legs.png'); 

// exports = {
//     Weapons,
//     Shields,
//     Armors
// }
