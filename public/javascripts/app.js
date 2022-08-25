// -------------- CHARACTER FUNCTIONALITY ----------------------------- \\
const charStat = document.getElementById('character-table');

const charWeapName = document.getElementById('char-weap-name');
const charGrip = document.getElementById('char-grip');
const charAttType = document.getElementById('char-att-type');
const charDamType = document.getElementById('char-dam-type');
const charPhysDam = document.getElementById('char-phys-dam');
const charMagDam = document.getElementById('char-mag-dam');
const charWeapCrit = document.getElementById('char-weap-crit');

const charShieldName = document.getElementById('char-shield-name');
const charShieldPhys = document.getElementById('char-shield-phys');
const charShieldMag = document.getElementById('char-shield-mag');
const charShieldRoll = document.getElementById('char-shield-roll');

const charArmorName = document.getElementById('char-armor-name');
const charArmorPhys = document.getElementById('char-armor-phys');
const charArmorMag = document.getElementById('char-armor-mag');
const charArmorDodge = document.getElementById('char-armor-dodge');
const charArmorType = document.getElementById('char-armor-type');

const endPhysDam = document.getElementById('end-phys-dam');
const endMagDam = document.getElementById('end-mag-dam');
const endWeapCrit = document.getElementById('end-weap-crit');
const endCritDam = document.getElementById('end-crit-dam');
const endWeapSpe = document.getElementById('end-weap-special');

const endShieldPhys = document.getElementById('end-shield-phys');
const endShieldMag = document.getElementById('end-shield-mag');
const endShieldPosPhys = document.getElementById('end-shield-pos-phys');
const endShieldPosMag = document.getElementById('end-shield-pos-mag');

const endArmorPhys = document.getElementById('end-armor-phys');
const endArmorMag = document.getElementById('end-armor-mag');
const endArmorDodge = document.getElementById('end-armor-dodge');


// window.onload = function() {
    console.log(charWeapCrit.innerText);
    console.log(charGrip.innerText);
    console.log(charDamType.innerText.split(' ')[0]);
    endPhysDam.innerText = charPhysDam.innerText;
    endMagDam.innerText = charMagDam.innerText;
    endWeapCrit.innerText = charWeapCrit.innerText;
    endShieldPhys.innerText = charShieldPhys.innerText;
    endShieldMag.innerText = charShieldMag.innerText;
    endArmorPhys.innerText = charArmorPhys.innerText;
    endArmorMag.innerText = charArmorMag.innerText;
    endArmorDodge.innerText = charArmorDodge.innerText;
    armorType = charArmorType.innerText;
    endRoll = charShieldRoll.innerText;
    let gameWeap = charWeapName.innerText;
    let gameShield = charShieldName.innerText;
    let gameArmor = charArmorName.innerText;
    let magDam = endMagDam.innerText;
    let physDam = endPhysDam.innerText;
    let weapCrit = endWeapCrit.innerText;
    let critDam = endCritDam.innerText;
    let shieldPhys = endShieldPhys.innerText;
    let shieldMag = endShieldMag.innerText;
    let armorPhys = endArmorPhys.innerText;
    let armorMag = endArmorMag.innerText;
    let armorDodge = endArmorDodge.innerText;

    if (charShieldName.innerText == 'Parrying Buckler') {
        armorDodge = Number(armorDodge) + 5;
        if (charGrip.innerText == 'OneHand') {
            if (charAttType.innerText == 'Magic') {
                magDam *= 1.1;
                weapCrit = Number(weapCrit) + 3;
            } else {
                physDam *= 1.05;
                weapCrit = Number(weapCrit) + 1;
            }
        }
        if (charGrip.innerText == 'TwoHand') {
            physDam *= 1.15;
            magDam *= 1.15;
            weapCrit = Number(weapCrit) + 5;
        }
    }
    if (charGrip.innerText == 'OneHand') {
        armorDodge = Number(armorDodge) + 5;
        critDam = 250;
    }
    if (charGrip.innerText == 'TwoHand') {
        armorDodge = Number(armorDodge) - 3;
        weapCrit = Number(weapCrit) + 3;
        critDam = 375;
    }
    if (charShieldName.innerText == 'Heater Shield') {
        if (charGrip.innerText == 'OneHand') {
            if (charAttType.innerText == 'Physical') {
                physDam *= 1.15;
                weapCrit = Number(weapCrit) + 3;
            } else {
                magDam *= 1.05;
                weapCrit = Number(weapCrit) + 1;
            }
        }
    }
    if (charArmorName.innerText == "Mage's Robes") {
        if (charAttType.innerText == 'Magic') {
            physDam *= 1.25;
            magDam *= 1.25;
            weapCrit = Number(weapCrit) + 7;
            armorDodge = Number(armorDodge) + 5;
        }
    }
    if (charArmorName.innerText == "Celtic Menagerie" || charArmorName.innerText == "Viking's Lamellar") {
        if (charGrip.innerText == 'TwoHand') {
            physDam *= 1.25;
            weapCrit = Number(weapCrit) + 7;
            armorPhys = Number(armorPhys) * 0.9;
            armorMag = Number(armorMag) * 0.9;
        }
        if (charDamType.innerText.split(' ')[0] == 'Frost' || charDamType.innerText.split(' ')[0] == 'Fire' || charDamType.innerText.split(' ')[0] == 'Lightning'  || charDamType.innerText.split(' ')[0] == 'Earth' || charDamType.innerText.split(' ')[0] == 'Wind') {
            magDam *= 1.15;
            weapCrit = Number(weapCrit) + 5;
        }
    }
    if (charArmorName.innerText == "Legionnaire's Regalia") {
        if (charWeapName.innerText == 'Gladius' || charWeapName.innerText == 'Pugio' || charWeapName.innerText == 'Spear') {
            physDam *= 1.25;
            weapCrit = Number(weapCrit) + 7;
            armorPhys = Number(armorPhys) * 1.1;
            armorMag = Number(armorMag) * 1.1;
            shieldPhys = Number(shieldPhys) * 1.2;
            shieldMag = Number(shieldMag) * 1.2;
        }
        if (charDamType.innerText.split(' ')[0] == 'Faith' || charDamType.innerText.split(' ')[0] == 'Spooky') {
            physDam *= 1.15;
            weapCrit = Number(weapCrit) + 5;
        }
    }
    if (charShieldName.innerText == "Scutum") {
        if (charWeapName.innerText == 'Gladius' || charWeapName.innerText == 'Pugio' || charWeapName.innerText == 'Spear') {
            physDam *= 1.25;
            weapCrit = Number(weapCrit) + 7;
            armorPhys = Number(armorPhys) * 1.1;
            armorMag = Number(armorMag) * 1.1;
            shieldPhys = Number(shieldPhys) * 1.2;
            shieldMag = Number(shieldMag) * 1.2;
        }
        if (charDamType.innerText.split(' ')[0] == 'Faith' || charDamType.innerText.split(' ')[0] == 'Spooky') {
            physDam *= 1.15;
            weapCrit = Number(weapCrit) + 5;
        }
    }
    if (charArmorName.innerText == "Knight's Full Plate" || charArmorName.innerText == "Poor Knight's Chainmail") {
        if (charGrip.innerText == 'OneHand') {
            physDam *= 1.1;
            weapCrit = Number(weapCrit) + 3;
            armorPhys = Number(armorPhys) * 1.1;
            armorMag = Number(armorMag) * 1.1;
            if (charDamType.innerText.split(' ')[0] == 'Faith' || charDamType.innerText.split(' ')[0] == 'Spooky') {
                magDam *= 1.1;
                weapCrit = Number(weapCrit) + 3;
            }
        }
    }
    if (charDamType.innerText.split(' ')[0] == 'Fire' || charDamType.innerText.split(' ')[0] == 'Sorcery' || charDamType.innerText.split(' ')[0] == 'Lightning') {
        magDam *= 1.15;
        armorPhys = Number(armorPhys) * 0.9;
        armorMag = Number(armorMag) * 0.9;
        armorDodge = Number(armorDodge) + 3;
        weapCrit = Number(weapCrit) + 3;
    }
    if (charDamType.innerText.split(' ')[0] == 'Faith' || charDamType.innerText.split(' ')[0] == 'Spooky') {
        physDam *= 1.1;
        magDam *= 1.1;
        armorPhys = Number(armorPhys) * 1.1;
        armorMag = Number(armorMag) * 1.1;
        shieldPhys = Number(shieldPhys) * 1.1;
        shieldMag = Number(shieldMag) * 1.1;
    }
    if (charDamType.innerText.split(' ')[0] == 'Earth' || charDamType.innerText.split(' ')[0] == 'Frost') {
        physDam *= 1.05;
        magDam *= 1.05;
        armorPhys = Number(armorPhys) * 1.15;
        armorMag = Number(armorMag) * 1.15;
        shieldPhys = Number(shieldPhys) * 1.25;
        shieldMag = Number(shieldMag) * 1.25;
    }
    if (charWeapName.innerText == 'Insanity') {
        endWeapSpe.innerText = 'Tendrils of Daethos';
    }
    if (charWeapName.innerText == 'Hand of God') {
        endWeapSpe.innerText = 'Hush of Daethos';
    }
    if (charWeapName.innerText == 'Lava Spit') {
        endWeapSpe.innerText = "Fyero's Fervor";
    }
    if (charWeapName.innerText == 'Lightning Spear') {
        endWeapSpe.innerText = "Astra's Burst";
        armorDodge = Number(armorDodge) + 3;
    }
    if (charWeapName.innerText == 'Arctic Bolt') {
        endWeapSpe.innerText = "Nyrolus's Shield";
    }
    if (charWeapName.innerText == 'Oak Crush') {
        endWeapSpe.innerText = "Quor'ei's Care";
    }
    if (charWeapName.innerText == 'Wind Fury') {
        endWeapSpe.innerText = "Ahn've's Fury";
        armorDodge = Number(armorDodge) + 3;
    }
    if (charWeapName.innerText == 'Magic Missile') {
        endWeapSpe.innerText = "Cambire's Chance";
    }
    if (charWeapName.innerText == 'God Hand') {
        endWeapSpe.innerText = "Daethos Unleashed";
    }
    if (charWeapName.innerText == 'Whirlwind' || charWeapName.innerText == 'Scythe') {
        endWeapSpe.innerText = "Reaping Storm";
    armorDodge = Number(armorDodge) + 3;
    }
    if (charWeapName.innerText == 'Gladius' || charWeapName.innerText == 'Pugio' || charWeapName.innerText == 'Spear') {
        endWeapSpe.innerText = 'Roman Barritus';
        armorDodge = Number(armorDodge) + 5;
        critDam *= 1.5;
    }
    if (charWeapName.innerText == 'War Hammer' || charWeapName.innerText == 'Battle Axe' || charWeapName.innerText == 'Claymore' || charWeapName.innerText == 'Halberd' || charWeapName.innerText == 'Mace' || charWeapName.innerText == 'Katana' || charWeapName.innerText == 'Dai=Katana') {
        endWeapSpe.innerText = "Song of Se'dyro";
    }
    if (charWeapName.innerText == 'Katana' || charWeapName.innerText == 'Halberd') {
        armorDodge = Number(armorDodge) + 3;
    }
    endMagDam.innerText = Math.round(magDam);
    endPhysDam.innerText = Math.round(physDam);
    endWeapCrit.innerText = '+' + weapCrit + '%';
    endShieldPhys.innerText = Math.round(shieldPhys) + Math.round(armorPhys) + '%';
    endShieldMag.innerText = Math.round(shieldMag) + Math.round(armorMag) + '%';
    endArmorPhys.innerText = Math.round(armorPhys) + '%';
    endArmorMag.innerText = Math.round(armorMag) + '%';
    endArmorDodge.innerText = armorDodge + '%';
    endCritDam.innerText = critDam + '%';
    currentMagDef = armorMag;
    currentPhysDef = armorPhys;
    gameAttType = charAttType.innerText;
    gameDamTypeOne = charDamType.innerText.split(' ')[0];
    gameDamTypeTwo = charDamType.innerText.split(' ')[2];
    //GAMEPLAY VARIABLES [magDam, physDam, weapCrit, shieldPhys, armorPhys, shieldMag, armorMag, armorDodge, critDam]
// }



// ----------------------------------- CONSTANTS ------------------------------------ \\
class HealthBars {
    constructor(x, y, w, h, maxHealth, color) {
      // Grants me working with static and length/width and variable length/widith
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }
    show(playContext) {
        playContext.lineWidth = 5;
        playContext.strokeStyle = "white";
        playContext.fillStyle = this.color;
        playContext.fillRect(this.x, this.y, this.w, this.h);
        playContext.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
    show(compContext) {
        compContext.lineWidth = 5;
        compContext.strokeStyle = "white";
        compContext.fillStyle = this.color;
        compContext.fillRect(this.x, this.y, this.w, this.h);
        compContext.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
    updateHealth(val) {
        this.health = val;
        this.w = (this.health / this.maxHealth) * this.maxWidth;
        this.innerText = val + ' / ' + this.maxHealth;
    }
}
    const computerHealth = document.querySelector('#computer-health');
    const playerHealth = document.querySelector('#player-health');
    const playContext = playerHealth.getContext('2d');
    const compContext = computerHealth.getContext('2d');
    const compHW = computerHealth.width = 650;
    const compHH = computerHealth.height = 30;
    const playHW = playerHealth.width = 425;
    const playHH = playerHealth.height = 20;
    const playHBW = 425;
    const playHBH = 20;
    const hX = playHW / 2 - playHBW / 2;
    const hY = playHH / 2 - playHBH / 2;
    const compHBW = 650;
    const compHBH = 30;
    const cX = compHW / 2 - compHBW / 2;
    const cY = compHH / 2 - compHBH / 2;
    let playHealth = 6000; 
    let compHealth = 9000; 
    const playHealthBar = new HealthBars(hX, hY, playHBW, playHBH, playHealth, 'green');
    const compHealthBar = new HealthBars(cX, cY, compHBW, compHBH, compHealth, 'green');
    let vh = window.innerHeight * 0.01;
    let docu = document.documentElement;
    docu.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    let docu = document.documentElement;
    docu.style.setProperty('--vh', `${vh}px`);
});
class Opponents {
    constructor(name, weapons, armor) {
        this.name = name;
        this.weapons = weapons;
        this.armor = armor;
    }
}
class Weapons {
    constructor(name, grip, attackType, [damageType], physDam, magDam, crit) {
        this.name = name;
        this.grip = grip; // One-Hand, Two-Hand
        this.attackType = attackType; // This evaluates against
        this.damageType = [damageType]; // This evaluates against magical resistance
        this.physDam = physDam; // Physical Damage NUMBER
        this.magDam = magDam; // Magical Damage NUMBER
        this.crit = crit; // crit chance
    }
}
class Armors {
    constructor(name, type, physRes, magRes, dodge) {
        this.name = name; //Name of the equipment
        this.type = type; //CLoth, ClothLeather, LeatherMail, ChainMail, PlateMail
        this.physRes = physRes; // Physical Resistance, affects PHYSICAL DAMAGE TYPE
        this.magRes = magRes; // Magical Resistance, affects SPELL DAMAGE TYPE
        this.dodge = dodge; // Chance to EVADE Attack, affects ROLL (DODGE)
    }
}
    // Opponent Equipment
    // Dorien
const bloodMoon = new Weapons('Blood Moon', 'Twohand', 'Physical', ['Pierce'], 600, 0, 10); 
const soulRend = new Weapons('Soul Rend', 'OneHand', 'Magic', ['Spooky', 'Blunt'], 300, 300, 0);
const fox = new Armors('Fatal Fox', 'plate-mail', 45, 65, 5);

    // Daethos
const mindBlast = new Weapons('Mind Blast', 'OneHand', 'Magic', ['Spooky'], 0, 750, 25);
const swDeath = new Weapons('Shadow Word: Death', 'OneHand', 'Magic', ['Spooky'], 0, 750, 25); 
const hush = new Armors('Of Hush and Tendril', 'leather-cloth', 75, 75, 25);

    // Guts
const hunkOfIron = new Weapons('Dragonslayer', 'Twohand', 'Physical', ['Slash'], 600, 0, 10); 
const handCannon = new Weapons('Hand Cannon', 'OneHand', 'Magic', ['Fire', 'Blunt'], 300, 300, 0);
const wolf = new Armors('Wolf Armor', 'plate-mail', 65, 45, 5);

    // Geralt
const ironSword = new Weapons('Iron Sword', 'Twohand', 'Physical', ['Slash'], 500, 0, 5);
const silverSword = new Weapons('Silver Sword', 'Twohand', 'Magic', ['Magic', 'Slash'], 100, 400, 5);
const witcher = new Armors("Witcher's Armor", 'leather-mail', 45, 55, 15);

    // Sinaethi
const blacksun = new Weapons('Black Sun', 'Twohand', 'Physical', ['Slash', 'Spooky'], 450, 150, 10);
const fade = new Weapons('Fade', 'OneHand', 'Magic', ['Spooky', 'Pierce'], 150, 450, 0);
const fengariou = new Armors("Fengariou", 'leather-mail', 45, 55, 15);

  // Fierous
const searous = new Weapons('Searous', 'OneHand', 'Physical', ['Pierce', 'Fire'], 250, 100, 10);
const torreous = new Weapons('Torreous', 'OneHand', 'Physcial', ['Pierce', 'Fire'], 100, 250, 10);
const phoenix = new Armors('Phoenix Armor', 'plate-mail', 65, 45, 5);

    // Gwyn
const greatLordGS = new Weapons('Great Lord Greatsword', 'Twohand', 'Physical', ['Slash', 'Fire'], 400, 200, 5);
const expHand = new Weapons('Explosive Hand', 'OneHand', 'Magic', ['Fire', 'Blunt'], 150, 450, 5);
const lordSet = new Armors('Great Lord Set', 'leather-mail', 45, 45, 15);

    // O&S
const ornstein = new Weapons('Dragonslayer Spear', 'Twohand', 'Physical', ['Pierce', 'Lightning'], 350, 250, 5);
const smough = new Weapons("Smough's Hammer", 'Twohand', 'Phsycal', ['Blunt'], 600, 0, 5);
const ons = new Armors('Ons Armor', 'plate-mail', 55, 55, 15);

    // Gwyndolin
    // Gael
    // Nameless King
    // ---------------------------- Opponents --------------------------------- \\
const dorien = new Opponents('Prince Dorien Caderyn', [bloodMoon, soulRend], fox);
const guts = new Opponents('Guts the Black Swordsman', [hunkOfIron, handCannon], wolf);
const daethos = new Opponents('Daethos the One Above', [mindBlast, swDeath], hush);
const geralt = new Opponents('Geralt of Rivia', [ironSword, silverSword], witcher);
const eugenes = new Opponents("Eugenes the Ma'ier", [blacksun, fade], fengariou);
const fierous = new Opponents('Fierous Ashfyre', [searous, torreous], phoenix);
const gwyn = new Opponents('Gwyn, Lord of Cinder', [greatLordGS, expHand], lordSet);
const ornsteinAndSmough = new Opponents("Ornstein & Smough", [ornstein, smough], ons);
    // ---------------------------- CACHED ELEMENT REFERENCES --------------------------------- \\
    // Starting Game Buttons
const startEls = document.querySelector('.start-buttons');
const confirmEl = document.querySelector('#confirm');
    // Starting-Ending Game Elements
const duelEl = document.querySelector('#duel');
const diedEl = document.querySelector('#died');
const backgroundEl = document.querySelector('#background');
const victoryEl = document.querySelector('#victory');
const continueEl = document.querySelector('#continue');
    // Equpment Button Elements
    // Action Button Elements
const actionsEl = document.querySelector('#actions');
const actionEls = document.getElementsByClassName('action');
const attackBtn = document.getElementById('attack');
const dodgeBtn = document.getElementById('dodge'); 
const postureBtn = document.getElementById('posture');
const rollBtn = document.getElementById('roll');
const initiateEl = document.getElementById('initiate');
    // Player Elements
const statEls = document.getElementsByClassName('stats');
const attTypeEl = document.getElementById('att-type');
const physDefEl = document.getElementById('phys-def');
const damTypeEl = document.getElementById('dam-type');
const magDefEl = document.getElementById('mag-def');
const damEl = document.getElementById('damage');
const dodgeEl = document.getElementById('dodge-el');
const critEl = document.getElementById('crit');
const rollT = document.getElementById('roll-timer');
const weapTT = document.querySelector('#weap-tt');
const shieldTT = document.querySelector('#shield-tt');
const armorTT = document.querySelector('#armor-tt');
const weapImg = document.querySelector('#weap-img');
const shieldImg = document.querySelector('#shield-img');
const armorImg = document.querySelector('#armor-img');
const helmImg = document.querySelector('#helm-img');
const greavesImg = document.querySelector('#greaves-img');
const playEl = document.querySelector('#play');
const playImg = document.getElementById('play-img');
    // Computer Elements
const compEl = document.querySelector('#comp');
const compName = document.getElementById('comp-name');
const compImg = document.getElementById('comp-img'); 
    // Delicious Textbox Elements
let textBoxArea = document.querySelector('.text-box');
const textBox = document.getElementById('console');
    // ---------------- STATE VARIABLES ----------------------------

let areaText = textBox.value;
    // Beginning Game Variables
let enemy;
let playerActionChoice = '';

let startChoice = [];
let confirmChoice = '';
  // Combat Game Variables
let playerDodge; 
let actionChoice = []; 
let playerInput = '';
let physAttDam;
let magAttDam;
let rollTimer;
let compAttackTimer;
let playAttackTimer;
damEl.innerText = Math.round(magDam) + Math.round(physDam);
attTypeEl.innerText = gameAttType;
damTypeEl.innerText = gameDamTypeOne;
physDefEl.innerText = Math.round(armorPhys) + '% / ' + (Math.round(shieldPhys) + Math.round(armorPhys)) + '%';
magDefEl.innerText = Math.round(armorMag) + '% / ' + (Math.round(shieldMag) + Math.round(armorMag)) + '%';
dodgeEl.innerText = armorDodge + '%';
critEl.innerText = '+' + weapCrit + '%';
rollT.innerText = endRoll + 's';

  // <------------------------------- EVENT LISTENERS ---------------------------------------- \\
attackBtn.addEventListener('click', function(e) {
    playerInput = e.target.innerText;
    textBox.value += 'You have chosen to ATTACK ' + enemy.name + '! Are you sure?' + '\n';
    initiateEl.style.display = 'inline-block';
    initiateEl.addEventListener('click', initiate);
});
dodgeBtn.addEventListener('click', function(e) {
    playerInput = e.target.innerText;
    textBox.value += 'You have chosen to DODGE! Are you sure?' + '\n';
    initiateEl.style.display = 'inline-block';
    initiateEl.addEventListener('click', initiate);
});
postureBtn.addEventListener('click', function(e) {
    playerInput = e.target.innerText;
    textBox.value += 'You have chosen to POSTURE with your ' + gameShield + '! Are you sure?' + '\n';
    initiateEl.style.display = 'inline-block';
    initiateEl.addEventListener('click', initiate);
}); 
rollBtn.addEventListener('click', function(e) {
    playerInput = e.target.innerText;
    textBox.value += 'Could I offer you this ROLL in these trying times?' + '\n';
    initiateEl.style.display = 'inline-block';
    initiateEl.addEventListener('click', initiate);
});
  // <------------------------------------- FUNCTIONS --------------------------------------- \\
init();
// render();

const playFrame = function() {
    playContext.clearRect(0, 0, playHW, playHH);
    playHealthBar.show(playContext);
    requestAnimationFrame(playFrame);
}

const compFrame = function() {
    compContext.clearRect(0, 0, compHW, compHH);
    compHealthBar.show(compContext);
    requestAnimationFrame(compFrame);
}

playFrame();
compFrame();
let startScroll;
let stopScroll;
function textBoxScroll() {
    if (!startScroll) {
    startScroll = setInterval(textScroll, 1000);
    return
    }
}

function textScroll() {
    areaText += Math.random() + '\n';
    textBox.scrollTop = textBox.scrollHeight;
    return
}

function stopTextScroll() {
    clearInterval(startScroll);
    startScroll = null;
    return
}

function compTimer() { 
    if (!compAttackTimer) {
    compAttackTimer = setInterval(computerAttack, 30000);
    playAttackTimer = setInterval(playerAttack, 30000);
    return
    }
}

function stopCompTimer() { 
    clearInterval(compAttackTimer);
    compAttackTimer = null;
    clearInterval(playAttackTimer);
    playAttackTimer = null;
    return
}

function roll() {
    textBox.value += "You roll through " + enemy.name + "'s attack. PHEW! Risky. Better not try that again." + '\n';
    hideRoll();
    // rollBtn.style.display = 'none';
    // rollTimer = setTimeout(noRoll, (10000 * player.shield.roll));
    playerAttack();
    return
}

function hideRoll() {
    rollBtn.style.display = 'none';
    rollTimer = setTimeout(noRoll, (1000 * endRoll));
    return
}

function noRoll() {
    rollBtn.style.display = 'inline-block';
    return
}

function showRoll() {
    clearTimeout(rollTimer);
    rollTimer = null;
}

async function attack() {
    textBox.value += 'You unleash a barrage of attacks at ' + enemy.name + '!' + '\n';
    playerAttack();
    await sleep(1250);
    playerAttack();
    await sleep(1250);
    computerAttack();
    return
};

async function posture() {
    textBox.value += "You have POSTURED with your " + gameShield + " like an ABSOLUTE UNIT!" + '\n';
    currentPhysDef = shieldPhys;
    currentMagDef = shieldMag;
    playerAttack();
    await sleep(1250);
    computerAttack();
    currentPhysDef = armorPhys;
    currentMagDef = armorMag;
    return
}

async function dodge() {
    shieldPhys;
    armorPhys;
    shieldMag;
    armorMag;
    armorDodge;
    let dodgeAttempt = Math.floor(Math.random() * 101);
    if (dodgeAttempt <= armorDodge)  {
        textBox.value += 'You dodged ' + enemy.name + "'s attack!" + '\n';
        playerAttack();
        return
    } else if (dodgeAttempt >= (armorDodge * 1.5)) {
            textBox.value += 'You did not dodge ' + enemy.name + "'s attack!" + '\n';
            computerAttack();
            await sleep(1250);
            playerAttack();
            return
    } else {
        let enemyDodgeWeapon;
        if (Math.floor(Math.random() * 101) > 50) {
            enemyDodgeWeapon = enemy.weapons[0];
        } else { 
            enemyDodgeWeapon = enemy.weapons[1];
        }
        let enemyPhysAttDam = enemyDodgeWeapon.physDam;
        let enemyMagAttDam = enemyDodgeWeapon.magDam;
        pad = enemyPhysAttDam * (1 - (armorPhys / 100));
        mad = enemyMagAttDam * (1 - (armorMag / 100));
        compDamTot = pad + mad;
        enemyAttMod();
        compDamTot *= (1 - (armorDodge / 200));
        Math.floor(compDamTot);
        playHealth -= compDamTot;
        textBox.value += 'You nearly dodge, yet ' + enemy.name + ' strikes you with ' + enemyDodgeWeapon.name + ' for ' + Math.round(compDamTot) + ' ' + enemyDodgeWeapon.damageType + ' damage! (Glancing Blow)' + '\n';
        playHealthBar.updateHealth(playHealth);
        if (playHealth <= 0) {
            compWin();
            return
        }
        playerAttack();
        return
    }
}

function initiate() {
    textBox.value += 'You have chosen to initiate the COMBAT round. Good luck!' + '\n';
    console.log(playerInput);
    initiateEl.style.display = 'none';
    if (playerInput === 'Attack') { 
        attack();
        return
    } else if (playerInput === 'Dodge') {
        dodge();
        return
    } else if (playerInput === 'Posture') {
        posture();
        return
    } else if (playerInput === 'Roll') {
        roll();
        return
    } else {
        return
    }
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

  // <----------------------------------- PLAYER WEAPON ATTACK -----------------------------------------> \\
async function playerAttack() {
  // <----------------- CHECKING FOR WIN CONDITIONS ---------------------------> \\
    if (playHealth <= 0) {
        compWin();
        return
    }
    if (compHealth <= 0) {
        playWin();
        return
    }
    // <--------------------------- SETTING UP VARIABLES FOR USE --------------------------> \\
    let playDamTot = 0;
    let playerNumber = Math.floor(Math.random() * 101);
    let physDamRes = enemy.armor.physRes;
    let magDamRes = enemy.armor.magRes;

//GAMEPLAY VARIABLES [magDam, physDam, weapCrit, shieldPhys, armorPhys, shieldMag, armorMag, armorDodge, critDam]
    magDam;
    physDam;
    weapCrit;
    critDam;
    shieldPhys;
    armorPhys;
    shieldMag;
    armorMag;
    armorDodge;
    gameWeap = charWeapName.innerText;
    gameShield = charShieldName.innerText;
    gameArmor = charArmorName.innerText;

    playDamTot = physDam + magDam;


// -------------------- SPECIAL WEAPON ATTACKS ------------------------------------- \\

    if (gameWeap === 'Wind Fury') {
        if (Math.floor(Math.random() * 101) > 92) {
            textBox.value += "Your fervor ushers forth the favor of Ahn've, a devastating storm posseses you with the Windfury!" + '\n';
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            playHealth *= .95;
            playHealthBar.updateHealth(playHealth);
            return
        }
    }

    if (gameWeap === 'God Hand') {
        if (Math.floor(Math.random() * 101) > 92) {
            textBox.value += 'Your fervor ushes forth the favor of Daethos, have unleashed the power of the GOD HAND!' + '\n';
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            playHealth *= .95;
            playHealthBar.updateHealth(playHealth);
            return
        }
    }

    if (gameWeap === 'Magic Missile') {
        if (Math.floor(Math.random() * 101) > 92) {
            textBox.value += 'Your fervor ushers forth the favor of Cambire, your magic missiles multiply!' + '\n';
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            physDam *= 1.05;
            magDam *= 1.05;
            playHealth *= .95;
            playHealthBar.updateHealth(playHealth);
            return
        }
    }

    if (gameWeap === 'Lava Spit') {
        if (Math.floor(Math.random() * 101) > 85) {
            textBox.value += "Your fervor ushers forth the favor of Fyero igniting through your body." + '\n';
            await sleep(750);
            playDamTot *= 1.75;
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "You scorch " + enemy.name + " for " + Math.round(playDamTot) + " Pure Fire Damage!" + '\n';
            playHealth *= .95;
            playHealthBar.updateHealth(playHealth);
            physDam *= 1.05;
            magDam *= 1.05;
            if (compHealth <= 0) {
                playWin();
                return
            }
            return
        }
    }

    if (gameWeap === 'Lightning Spear') {
        if (Math.floor(Math.random() * 101) > 85) {
            textBox.value += "Your fervor ushers forth the favor of Astra's lightning bursting from you!" + '\n';
            await sleep(750);
            playDamTot *= 1.75;
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "You melt " + enemy.name + " for " + Math.round(playDamTot) + " Pure Lightning Damage!" + '\n';
            playHealth *= .95;
            playHealthBar.updateHealth(playHealth);
            physDam *= 1.05;
            magDam *= 1.05;
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }

    if (gameWeap === 'Oak Crush') {
        if (Math.floor(Math.random() * 101) > 85) {
            playDamTot *= 1.5;
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "You crush " + enemy.name + " for " + Math.round(playDamTot) + " Pure Earth Damage!" + '\n';
            armorMag *= 1.05;
            shieldMag *= 1.05;
            shieldPhys *= 1.1;
            armorPhys *= 1.1;
            physDam *= 1.05;
            magDam *= 1.05;
            await sleep(1250);
            textBox.value += "Your resolve beckons with the favor of your Quor'ei, steeling you in their Caer." + '\n';
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }

    if (gameWeap === 'Arctic Bolt') {
        if (Math.floor(Math.random() * 101) > 85) {
            playDamTot *= 1.5;
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "You pierce " + enemy.name + " for " + Math.round(playDamTot) + " Pure Frost Damage!" + '\n';
            armorMag *= 1.1;
            armorPhys *= 1.05;
            shieldMag *= 1.1;
            shieldPhys *= 1.05;
            physDam *= 1.05;
            magDam *= 1.05;
            await sleep(1250);
            textBox.value += "Your calm swirls with the favor of Senari, holding you in her Caer." + '\n';
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }

    if (gameWeap === 'Whirlwind' || gameWeap === 'Scythe') {
        if (Math.floor(Math.random() * 101) > 92) {
        textBox.value += "The Whirlwind wraps its tendrils around you, unleashing a storm of attacks." + '\n';
        await sleep(1250);
        playerAttack();
        await sleep(1250);
        playerAttack();
        await sleep(1250);
        playerAttack();
        playHealth *= .95;
        playHealthBar.updateHealth(playHealth);
        return
        }
    }

    if (gameWeap === 'Pugio' || gameWeap === 'Spear' || gameWeap === 'Gladius') {
        if (Math.floor(Math.random() * 101) > 92) {
            textBox.value += 'The Roman Barritus surges through you. Praise Jupiter!' + '\n';
            await sleep(1250);
            playerAttack();
            await sleep(1250);
            playerAttack();
            return
        }
    }

    if (gameWeap === 'Hand of God') {
        if (Math.floor(Math.random() * 101) > 85) {
            let heal = 0;
            heal = magDam * (magDam / 100);
            if (playHealth >= 5800) {
                playHealth = 6000;
            } else {
                playHealth += heal;
                playHealthBar.updateHealth(playHealth);
                textBox.value += "Tendrils of Daethos wrap through your Caer, healing you for " + Math.round(heal) +  "." + '\n';
                await sleep(1250);
                armorMag *= 1.03;
                armorPhys *= 1.03;
                shieldMag *= 1.03;
            shieldPhys *= 1.03;
            }
        }
    }

    if (gameWeap === 'Insanity') {
        if (Math.floor(Math.random() * 101) > 85) {
            playDamTot *= 2.25;
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            playHealth *= .92;
            playHealthBar.updateHealth(playHealth);
            textBox.value += "Tendrils of Daethos reach through " + enemy.name + " and writhe within for " + Math.round(playDamTot) + " Spooky Damage. Your senses are palpably aflame." + '\n';
            await sleep(1250);
            physDam *= 1.05;
            magDam *= 1.05;
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }

    if (gameWeap === 'War Hammer' || gameWeap === 'Claymore' || gameWeap === 'Battle Axe' || gameWeap === 'Halberd' || gameWeap === 'Mace') {
        if (Math.floor(Math.random() * 101) > 92) {
            await sleep(1250);
            playDamTot = 2.75 * (physAttDam + magAttDam);
            playDamTot *= 1 - (physDamRes / 100);
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "The Caer of Se'dyro sings into your steel, " + enemy.name + ' receives ' + Math.round(playDamTot) + ' Crushing Damage!' + '\n';
            physDam *= 1.05;
            magDam *= 1.05;
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }

    if (gameWeap === 'Katana' || gameWeap === 'Dai-Katana') {
        if (Math.floor(Math.random() * 101) > 92) {
            await sleep(1250);
            playDamTot = 1.75 * (physAttDam + magAttDam);
            compHealth -= Math.round(playDamTot);
            compHealthBar.updateHealth(compHealth);
            textBox.value += "The Sharpness of your Katana is undeniable, Impaling " + enemy.name + ' for ' + Math.round(playDamTot) + ' Damage!' + '\n';
            if (compHealth <= 0) {
                playWin();
                return
            }
        return
        }
    }
    // <------------------------------------------- Basic Attack ----------------------------------------------> \\
    if ((playerNumber - weapCrit) > 5) {
        physAttDam = physDam * (1 - (physDamRes / 100));
        magAttDam = magDam * (1 - (magDamRes / 100));
        playDamTot = physAttDam + magAttDam;
        if (gameDamTypeOne == 'Pierce' || gameDamTypeTwo == 'Pierce') {
            if (enemy.armor.type == 'plate-mail') {
                playDamTot *= 0.8;
            } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
                playDamTot *= 1.15;
            }
        }
        if (gameDamTypeOne == 'Slash' || gameDamTypeTwo == 'Slash') {
            if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
                playDamTot *= 0.8;
            } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
                playDamTot *= 1.15;
            }
        }
        if (gameDamTypeOne == 'Blunt' || gameDamTypeTwo == 'Blunt') {
            if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
                playDamTot *=  0.8;
            } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
                playDamTot *= 1.15;
            }
        }
        if (gameAttType == 'Magic') {
            if (enemy.armor.type == 'leather-cloth') {
                playDamTot *= 0.8;
            } else if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
                playDamTot *= 1.15;
            }
        }
        if (enemy.weapons[0].damageType == 'Sorcery' || enemy.weapons[0].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
                playDamTot *= 1.1;
        }
        if (enemy.weapons[0].damageType == 'Earth' || enemy.weapons[0].damageType == 'Frost') {
                playDamTot *= 0.8;
        }
        if (enemy.weapons[0].damageType == 'Faith' || enemy.weapons[0].damageType == 'Spooky') {
                playDamTot *= 0.9;
        }
        if (enemy.weapons[1].damageType == 'Sorcery' || enemy.weapons[1].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
                playDamTot *= 1.1;
        }
        if (enemy.weapons[1].damageType == 'Earth' || enemy.weapons[1].damageType == 'Frost') {
                playDamTot *= 0.8;
        }
        if (enemy.weapons[1].damageType == 'Faith' || enemy.weapons[1].damageType == 'Spooky') {
                playDamTot *= 0.9;
        }
        console.log(playDamTot);
        Math.round(playDamTot);
        compHealth -= playDamTot;
        textBox.value += 'You attack ' + enemy.name + ' with your ' + gameWeap + ' for ' + Math.round(playDamTot) + ' ' + gameDamTypeOne  +  ' damage!' + '\n';
        compHealthBar.updateHealth(compHealth);
    // <--------------------------------- CRITICAL STRIKE ATTACK ----------------------------------> \\
    } else {
    // } else if ((playerNumber - playCrit) > 3) {
        physAttDam = physDam * (1 - (physDamRes / 100));
        magAttDam = magDam * (1 - (magDamRes / 100));
        playDamTot = physAttDam + magAttDam;
        if (gameDamTypeOne == 'Pierce' || gameDamTypeTwo == 'Pierce') {
            if (enemy.armor.type == 'plate-mail') {
                playDamTot *= 0.9;
            } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
                playDamTot *= 1.25;
            }
        }
        if (gameDamTypeOne == 'Slash' || gameDamTypeTwo == 'Slash') {
            if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
                playDamTot *= 0.9;
            } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
                playDamTot *= 1.25;
            }
        }
        if (gameDamTypeOne == 'Blunt' || gameDamTypeTwo == 'Blunt') {
            if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
                playDamTot *=  0.9;
            } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
                playDamTot *= 1.25;
            }
        }
        if (gameAttType == 'Magic') {
            if (enemy.armor.type == 'leather-cloth') {
                playDamTot *= 0.9;
            } else if (enemy.armor.type = 'chain-mail' || enemy.armor.type == 'plate-mail') {
                playDamTot *= 1.25;
            }
        }
        if (enemy.weapons[0].damageType == 'Sorcery' || enemy.weapons[0].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
            playDamTot *= 1.25;
        }
        if (enemy.weapons[0].damageType == 'Earth' || enemy.weapons[0].damageType == 'Frost') {
            playDamTot *= 0.9;
        }
        if (enemy.weapons[1].damageType == 'Sorcery' || enemy.weapons[1].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
            playDamTot *= 1.25;
        }
        if (enemy.weapons[1].damageType == 'Earth' || enemy.weapons[1].damageType == 'Frost') {
            playDamTot *= 0.9;
        }
        if (charGrip.innerText == 'OneHand') {
            playDamTot *= 1.5;
        }
        if (charGrip.innerText = 'TwoHand') {
            playDamTot *= 2.75;
        }
        // if (gameWeap === 'Gladius' || gameWeap === 'Spear' || gameWeap === 'Scythe' || gameWeap === 'Gladius') {
        //     playDamTot *= 1.833;
        // }
        Math.round(playDamTot);
        console.log(playDamTot);
        compHealth -= playDamTot;
        textBox.value += 'You CRITICALLY STRIKE ' + enemy.name + ' with your ' + gameWeap + ' for ' + Math.round(playDamTot) + ' ' + gameDamTypeOne + ' damage!' + '\n';
        compHealthBar.updateHealth(compHealth);
        await sleep(1250);
    }
    // <------------------------------ WIN CONDITION CHECK --------------------------------> \\
    if (compHealth <= 0) {
        playWin();
        return
    }
    return
}
  // <------------------------------------ ENEMY ATTACK FUNCTION -----------------------------------> \\
async function computerAttack() {
    // <--------------- CHECKING WIN CONDITIONS ---------------------------> \\
    if (compHealth <= 0) {
        playWin();
        return
    }
    if (playHealth <= 0) {
        compWin();
        return;
    }
    // <------------------------ SETTING UP VARIABLES ------------------------> \\
    let compDamTot = 0;
    let enAttNum = Math.floor(Math.random() * 101);
    let enemyCrit = enemy.weapons[0].crit + enemy.weapons[1].crit;
    let superPhysAtt = enemy.weapons[0].physDam + enemy.weapons[1].physDam;
    let superMagAtt = enemy.weapons[0].magDam + enemy.weapons[1].magDam;
    let firstWeapon = enemy.weapons[0].physDam + enemy.weapons[0].magDam;
    let secondWeapon = enemy.weapons[1].physDam + enemy.weapons[1].magDam;
    // <---------------------- PLAYER EQUIPMENT VARIABLES ----------------------> \\
    // <----------------- SPECIAL OPPONENT ATTACKS ----------------------------> \\
    if (enemy === guts) {
        if (enAttNum > 85) {
            compDamTot = superPhysAtt + superMagAtt;
            compDamTot *= 2.75;
            compDamTot *= 1 - (currentPhysDef / 100);
            playHealth -= Math.round(compDamTot);
            textBox.value += "Guts's cursed BERSERKER ARMOR sacrifices his life to smash you for " + Math.round(compDamTot) +  ' Heavy Metal Damage!' + '\n'
            playHealthBar.updateHealth(playHealth);
            compHealth *= 0.95;
            compHealthBar.updateHealth(compHealth);
            await sleep(1250);
            if (playHealth <= 0) {
                compWin();
                return;
            }
            return
        } 
    }
    if (enemy === fierous) {
        if (enAttNum > 92) {
            textBox.value += 'The Phoenix UNLEASHSES a SCORCHING array of attack!!' + '\n';
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            return
        } else if (enAttNum > 85) {
            compDamTot = superPhysAtt + superMagAtt;
            compDamTot *= 2.25;
            playHealth -= Math.round(compDamTot);
            textBox.value += 'The Phoenix uses his shotels to rip you apart for ' + Math.round(compDamTot) +  ' Fiery Pierce Damage!!' + '\n'
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            if (playHealth <= 0) {
                compWin();
                return;
            }
            return
        }
    }
    if (enemy === geralt) {
        if (enAttNum > 92) {
            textBox.value += 'Geralt traps you with Yrden to unlease another attack!!' + '\n';
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            return
        } else if (enAttNum > 85) {
            compDamTot = superPhysAtt + superMagAtt;
            compDamTot *= 1.5;
            compDamTot *= 1 - (currentMagDef / 100);
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Geralt knocks you back with Aard leaving you physically defenseless for ' + Math.round(compDamTot) + ' PURE damage!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            if (playHealth <= 0) {
                compWin();
                return;
            }
            return
        }
    }
    if (enemy === eugenes) {
        if (enAttNum > 92) {
            textBox.value += "Eugenes's Caer shreds himself through this world before reappearing with his Black Sun in full breadth!" + '\n';
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            return
        } else if (enAttNum > 85) {
            compDamTot = superPhysAtt + superMagAtt;
            compDamTot *= 1.5;
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Eugenes tears through you for ' + Math.round(compDamTot) + ' PURE damage!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            if (playHealth <= 0) {
                compWin();
                return;
            }
            return
        }
    }
    if (enemy === dorien) {
        if (enAttNum > 92) {
            textBox.value += "Prince Dorien's Caer writhes in your mind as his Blood Moon poises for several strikes!" + '\n';
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            return
        } else if (enAttNum > 85) {
            compDamTot = superPhysAtt + superMagAtt;
            compDamTot *= 1.5;
            playHealth -= Math.round(compDamTot);
            textBox.value += 'The Fatal Fox IMPALES you for ' + Math.round(compDamTot) + ' Pure Damage!!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            if (playHealth <= 0) {
                compWin();
                return;
            }
            return
        }
    }
    if (enemy === gwyn) {
        if (enAttNum > 95) {
            textBox.value += 'The Lord of Cinders renews himself to unleash a barrage of attacks!' + '\n';
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            await sleep(1250);
            computerAttack();
            return
        }
        if (enAttNum > 90) {
            compDamTot = firstWeapon;
            compDamTot *= 2.25;
            playHealth -= Math.round(compDamTot);
            textBox.value += 'The Lord of Cinders IMPALES you for ' + Math.round(compDamTot) + ' Pure Steel Damage!!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
        if (enAttNum > 85) {
            compDamTot = secondWeapon;
            compDamTot *= 1.75;
            playHealth -= Math.round(compDamTot);
            textBox.value += 'The Lord of Cinders grabs you, seeping embers into your body, EXPLODING for ' + Math.round(compDamTot) + ' Pure Fire Damage!!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
    }
    if (enemy === ornsteinAndSmough) {
        if (enAttNum > 92) {
            let physAttDam = enemy.weapons[0].physDam;
            let magAttDam = enemy.weapons[0].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            compDamTot *= 3;
            if (armorType == 'plate-mail') {
                compDamTot *=  0.95;
            }
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *= 1.25;
            }
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Ornstein impales you before unleashing lightning from his Dragonslayer Spear, hurling you to the ground for ' + Math.round(compDamTot) + ' Lightning and Physical Damage!!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
        if (enAttNum > 85) {
            let physAttDam = enemy.weapons[0].physDam;
            let magAttDam = enemy.weapons[0].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            compDamTot *= 3;
            if (armorType == 'plate-mail') {
                compDamTot *=  0.95;
            }
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *= 1.25;
            }
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Ornstein unleashes a bolt of lightning from his Dragonslayer Spear for ' + Math.round(compDamTot) + ' Lightning Damage!!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
        if (enAttNum > 50) {
            let physAttDam = enemy.weapons[0].physDam;
            let magAttDam = enemy.weapons[0].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            if (armorType == 'plate-mail') {
                compDamTot *=  0.85;
            } 
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *= 1.1;
            }
            playHealth -= Math.round(compDamTot);
            playHealthBar.updateHealth(playHealth);
            textBox.value += 'Ornstein unleashes a bolt of lightning from his Dragonslayer Spear for ' + Math.round(compDamTot) + ' Lightning Damage!!' + '\n';
            await sleep(1250);
            return
        }
        if (enAttNum > 42) {
            let physAttDam = enemy.weapons[1].physDam;
            let magAttDam = enemy.weapons[1].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            compDamTot *= 3;
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *=  0.95;
            } 
            if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.25;
            }
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Smough charges up and UPPERCUTS you with his Hammer for ' + Math.round(compDamTot) + ' Blunt Damage!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
        if (enAttNum > 35) {
            let physAttDam = enemy.weapons[1].physDam;
            let magAttDam = enemy.weapons[1].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            compDamTot *= 3;
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *=  0.95;
            } 
            if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.25;
            }
            playHealth -= Math.round(compDamTot);
            textBox.value += 'Smough leaps in the air and SMASHES DOWN on you for ' + Math.round(compDamTot) + ' Lightning Damage!' + '\n';
            playHealthBar.updateHealth(playHealth);
            await sleep(1250);
            return
        }
        if (enAttNum > 0) {
            let physAttDam = enemy.weapons[1].physDam;
            let magAttDam = enemy.weapons[1].magDam;
            pad = physAttDam * (1 - (currentPhysDef / 100));
            mad = magAttDam * (1 - (currentMagDef / 100));
            compDamTot = pad + mad;
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *=  0.85;
            } 
            if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.1;
            }
            playHealth -= Math.round(compDamTot);
            playHealthBar.updateHealth(playHealth);
            textBox.value += 'Smough OVERHEAD SMASHES you for ' + Math.round(compDamTot) + ' Blunt Damage!!' + '\n';
            await sleep(1250);
            return
        }
    }
    // <--------------------------- ENEMY REGULAR ATTACK ---------------------------> \\
    if ((enAttNum - enemyCrit > 10)) {
        let weapon;
        if (Math.floor(Math.random() * 101) > 50) {
            weapon = enemy.weapons[0];
        } else { 
            weapon = enemy.weapons[1];
        }
        let enemyPhysAttDam = weapon.physDam;
        let enemyMagAttDam = weapon.magDam;
        pad = enemyPhysAttDam * (1 - (currentPhysDef / 100));
        mad = enemyMagAttDam * (1 - (currentMagDef / 100));
        compDamTot = pad + mad;
        if (weapon.damageType == 'Pierce') {
            if (armorType == 'plate-mail') {
                compDamTot *= 0.8;
            } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *= 1.15;
            } else {
                compDamTot;
            }
        }
        if (weapon.damageType == 'Slash') {
            if (armorType == 'chain-mail' || armorType == 'plate-mail') {
                compDamTot *= 0.8;
            } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
                compDamTot *= 1.15;
            } else {
                compDamTot;
            }
        }
        if (weapon.damageType == 'Blunt') {
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *=  0.8;
            } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.15;
            }
        }
        if (weapon.attackType == 'Magic') {
            if (armorType == 'leather-cloth') {
                compDamTot *= 0.8;
            } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.15;
            } else {
                compDamTot;
            }
        }
        playHealth -= Math.round(compDamTot);
        textBox.value += enemy.name + ' attacks you with ' + weapon.name + ' for ' + Math.round(compDamTot) + ' ' + weapon.damageType + ' damage!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
        // <-------------------------- ENEMY CRITICAL ATTACK ------------------------> \\
    } else if ((enAttNum - enemyCrit > 5)) {
        let weapon;
        if (Math.floor(Math.random() * 101) > 50) {
            weapon = enemy.weapons[0];
        } else { 
            weapon = enemy.weapons[1];
        }
        let enemyPhysAttDam = weapon.physDam;
        let enemyMagAttDam = weapon.magDam;
        pad = enemyPhysAttDam * (1 - (currentPhysDef / 100));
        mad = enemyMagAttDam * (1 - (currentMagDef / 100));
        compDamTot = pad + mad;
        if (weapon.damageType == 'Pierce') {
            if (armorType == 'plate-mail') {
                compDamTot *= 0.9;
            } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *= 1.25;
            } else {
                compDamTot;
            }
        }
        if (weapon.damageType == 'Slash') {
            if (armorType == 'chain-mail' || armorType == 'plate-mail') {
                compDamTot *= 0.9;
            } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
                compDamTot *= 1.25;
            } else {
                compDamTot;
            }
        }
        if (weapon.damageType == 'Blunt') {
            if (armorType === 'leather-mail' || armorType === 'leather-cloth') {
                compDamTot *=  0.9;
            } else if (armorType === 'plate-mail' || armorType === 'chain-mail') {
                compDamTot *= 1.25;
            }
        }
        if (weapon.attackType == 'Magic') {
            if (armorType === 'leather-cloth') {
                compDamTot *= 0.9;
            } else if (armorType === 'plate-mail' || armorType === 'chain-mail') {
                compDamTot *= 1.25;
            } else {
                compDamTot;
            }
        }
        if (weapon.grip == 'OneHand') {
            compDamTot *= 2;
        }
        if (weapon.grip == 'TwoHand') {
            compDamTot *= 3;
        }
        playHealth -= Math.round(compDamTot);
        textBox.value += enemy.name + ' CRITICALLY STRIKES you with ' + weapon.name + ' for ' + Math.round(compDamTot) + ' ' + weapon.damageType + ' damage!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250); 
    } else {
      // <----------------------------- ENEMY CRUSHING ATTACK ------------------------------> \\
        let weapon1;
        let weapon2;
        weapon1 = enemy.weapons[0];
        weapon2 = enemy.weapons[1];
        let enemyMagAttDam = weapon1.magDam + weapon2.magDam;
        let enemyPhysAttDam = weapon1.physDam + weapon2.physDam;
        pad = enemyPhysAttDam * (1 - (currentPhysDef / 100));
        mad = enemyMagAttDam * (1 - (currentMagDef / 100));
        compDamTot = pad + mad;
        if (weapon1.damageType == 'Pierce' || weapon2.damageType == 'Pierce') {
            if (armorType == 'plate-mail') {
                compDamTot *= 0.9;
            } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
            compDamTot *= 1.25;
            }
        }
        if (weapon1.damageType == 'Slash' || weapon2.damageType == 'Slash') {
            if (armorType == 'chain-mail' || armorType == 'plate-mail') {
                compDamTot *= 0.9;
            } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
            compDamTot *= 1.25;
            }
        }
        if (weapon1.damageType == 'Blunt' || weapon2.damageType == 'Blunt') {
            if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
                compDamTot *=  0.9;
            } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
            compDamTot *= 1.25;
            }
        }
        if (weapon2.attackType == 'Magic') {
            if (armorType == 'leather-cloth') {
                compDamTot *= 0.9;
            } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
                compDamTot *= 1.25;
            }
        }
        compDamTot *= 1.75;
        playHealth -= Math.round(compDamTot);
        textBox.value += enemy.name + ' CRUSHES you with ' + weapon1.name + ' and ' + weapon2.name + ' for ' + Math.round(compDamTot) + ' ' + weapon1.damageType + ' and ' + weapon2.damageType + ' damage!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
    }
    if (playHealth <= 0) {
        compWin();
        return
    }
}
  // ---------------------------- STARTING GAME FUNCTIONS --------------------------------- \\
function randomArena() {
    ranArena = Math.floor(Math.random() * 101);
    if (ranArena > 84) {
        backgroundEl.src = '/images/GladiatorArena.jpg';
    } else if (ranArena > 68) {
        backgroundEl.src = '/images/fantasy-arena-2.png';
    } else if (ranArena > 51) {
        backgroundEl.src = '/images/fantasy-arena-1.jpg';
    } else if (ranArena > 34) {
        backgroundEl.src = '/images/fantasy-arena-3.jpg';
    } else if (ranArena > 17) {
        backgroundEl.src = '/images/fantasy-arena-4.jpg';
    } else {
        backgroundEl.src = '/images/fantasy-arena-5.jpg';
    }
}
function randomEnemy() { 
    let enemyNumber = Math.floor(Math.random() * 101);
    if (enemyNumber > 87) {
        enemy = guts;
        compImg.src = '/images/Guts-Wolf.png';
    } else if (enemyNumber > 74) {
        enemy = dorien;
        compImg.src = '/images/Dorien-custom.png';
    } else if (enemyNumber > 61) {
        enemy = geralt;
        compImg.src = '/images/geralt-custom.png';
    } else if (enemyNumber > 48) {
        enemy = eugenes;
        compImg.src = '/images/eugenes-custom.png';
    } else if (enemyNumber > 35) {
        enemy = fierous;
        compImg.src = '/images/fierous.png';
    } else if (enemyNumber > 20) {
        enemy = ornsteinAndSmough;
        compImg.src = '/images/OnS.png';
    } else if (enemyNumber > 5) {
        enemy = gwyn;
        compImg.src = '/images/Gwyn.png';
        compImg.bottom = 100;
    } else {
        enemy = daethos;
        compImg.src = '/images/Daethos.png';
        compImg.opacity = 0.75;
    }
    compName.innerText = enemy.name;
    textBox.value += 'Your last opponent is ' + enemy.name + '!' + '\n';
    console.log(enemy);
}
function init() {
    playerChoice = [];
    playerActionChoice = null;
    startChoice = [];
    confirmChoice = null;
    playDamTot = 0; 
    compDamTot = 0; 
    actionChoice = []; 
    playerInput = null;
    rollTimer = null;
    compAttackTimer;
    playAttackTimer;
    playHealth = 6000;
    compHealth = 9000;
    initiateEl.style.display = 'none';
    confirmEl.style.display = 'inline-block';
    compEl.style.display = 'none';
    actionsEl.style.display = 'none';
    duelEl.style.display = 'inline-block';
    backgroundEl.style.display = 'inline-block';
    diedEl.style.display = 'none';
    initiateEl.style.display = 'none';
    victoryEl.style.display = 'none';
    continueEl.style.display = 'none';
    confirmEl.addEventListener('click', render);
}
function render() {
    confirmEl.removeEventListener('click', render);
    continueEl.removeEventListener('click', render);
    textBox.value += 'The game is now rendering, good luck!' + '\n';
    confirmEl.style.display = 'none';
    duelEl.style.display = 'none';
    diedEl.style.display = 'none';
    backgroundEl.style.display = 'inline-block';
    playEl.style.display = 'inline-block';
    compEl.style.display = 'inline-block';
    victoryEl.style.display = 'none';
    actionsEl.style.display = 'inline-block';
    initiateEl.style.display = 'none';
    rollBtn.style.display = 'inline-block';
    victoryEl.style.display = 'none';
    continueEl.style.display = 'none';
    confirmChoice = null;
    randomEnemy();
    textBoxScroll();
    compEl.style.display = 'inline-block';
    weapTT.innerText = gameWeap + '\n' + 'Attack Type: ' + gameAttType + '\n' +  'Damage Type: ' + gameDamTypeOne +
    '\n' + 'Magic Damage: ' + Math.round(magDam) + '\n' + ' Physical Damage: ' + Math.round(physDam) + '\n' + 'Crit Chance: ' + '+' + weapCrit + '%';
    shieldTT.innerText = gameShield + '\n' + 'Physical Defense: ' + Math.round(shieldPhys) + '%' + '\n' + 'Magical Defense: ' + Math.round(shieldMag) + '%' +
    '\n' + 'Roll Timer: ' + charShieldRoll.innerText;
    armorTT.innerText = gameArmor + '\n' + 'Physical Defense: ' + Math.round(armorPhys) + '%' + '\n' + 'Magical Defense: ' + Math.round(armorMag) + '%' +
    '\n' + 'Dodge: ' + armorDodge + '%';
    compHealth = 9000;
    playHealth = 6000;
    playHealthBar.updateHealth(playHealth);
    compHealthBar.updateHealth(compHealth);
    compTimer();
    randomArena();
}

function playWin() {
    textBox.value += 'Congratulations, you have won the Ascea! Would you like to play again?' + '\n';
    actionsEl.style.display = 'none';
    compEl.style.display = 'none';
    victoryEl.style.display = 'inline-block';
    continueEl.style.display = 'inline-block';
    confirmChoice = null;
    stopCompTimer();
    stopTextScroll();
    showRoll();
    continueEl.addEventListener('click', function(e) {
        confirmChoice = e.target.innerText;
        textBox.value += 'You have chosen to CONTINUE your champion. Are you sure? Select CONTINUE again to confirm.' + '\n';
      // confirmEl.style.display = 'inline-block';
        continueEl.addEventListener('click', render);
        // Get rid of event listener aftewards
})};

function compWin() {
    textBox.value += 'YOU DIED' + '\n'
    continueEl.style.display = 'inline-block';
    actionsEl.style.display = 'none';
    playEl.style.display = 'none';
    backgroundEl.style.display = 'none';
    compEl.style.display = 'none';
    diedEl.style.display = 'inline-block';
    confirmChoice = null;
    stopCompTimer();
    stopTextScroll();
    showRoll();
    continueEl.addEventListener('click', function(e) {
        confirmChoice = e.target.innerText;
        textBox.value += 'You have chosen to CONTINUE your champion. Are you sure? Select CONTINUE again to confirm.' + '\n';
      // confirmEl.style.display = 'inline-block';
        continueEl.addEventListener('click', render);
        // Get rid of event listener aftewards
})};

function attackModifiers() {
    if (gameDamTypeOne == 'Pierce' || gameDamTypeTwo == 'Pierce') {
        if (enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
            playDamTot *= 1.15;
        }
    }
    if (gameDamTypeOne == 'Slash' || gameDamTypeTwo == 'Slash') {
        if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
            playDamTot *= 1.15;
        }
    }
    if (gameDamTypeOne == 'Blunt' || gameDamTypeTwo == 'Blunt') {
        if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
            playDamTot *=  0.9;
        } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
            playDamTot *= 1.15;
        }
    }
    if (gameAttType == 'Magic') {
        if (enemy.armor.type == 'leather-cloth') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
            playDamTot *= 1.15;
        }
    }
    if (enemy.weapons[0].damageType == 'Sorcery' || enemy.weapons[0].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
            playDamTot *= 1.1;
    }
    if (enemy.weapons[0].damageType == 'Earth' || enemy.weapons[0].damageType == 'Frost') {
            playDamTot *= 0.85;
    }
    if (enemy.weapons[0].damageType == 'Faith' || enemy.weapons[0].damageType == 'Spooky') {
            playDamTot *= 0.9;
    }
    if (enemy.weapons[1].damageType == 'Sorcery' || enemy.weapons[1].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
            playDamTot *= 1.1;
    }
    if (enemy.weapons[1].damageType == 'Earth' || enemy.weapons[1].damageType == 'Frost') {
            playDamTot *= 0.85;
    }
    if (enemy.weapons[1].damageType == 'Faith' || enemy.weapons[1].damageType == 'Spooky') {
            playDamTot *= 0.9;
    }
}
function critModifiers() {
    if (gameDamTypeOne == 'Pierce' || gameDamTypeTwo == 'Pierce') {
        if (enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
            playDamTot *= 1.25;
        }
    }
    if (gameDamTypeOne == 'Slash' || gameDamTypeTwo == 'Slash') {
        if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
            playDamTot *= 1.25;
        }
    }
    if (gameDamTypeOne == 'Blunt' || gameDamTypeTwo == 'Blunt') {
        if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
            playDamTot *=  0.9;
        } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
            playDamTot *= 1.25;
        }
    }
    if (gameAttType == 'Magic') {
        if (enemy.armor.type == 'leather-cloth') {
            playDamTot *= 0.9;
        } else if (enemy.armor.type = 'chain-mail' || enemy.armor.type == 'plate-mail') {
            playDamTot *= 1.25;
        }
    }
    if (enemy.weapons[0].damageType == 'Sorcery' || enemy.weapons[0].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
        playDamTot *= 1.1;
    }
    if (enemy.weapons[0].damageType == 'Earth' || enemy.weapons[0].damageType == 'Frost') {
        playDamTot *= 0.85;
    }
    if (enemy.weapons[0].damageType == 'Faith' || enemy.weapons[0].damageType == 'Spooky') {
        playDamTot *= 0.9;
    }
    if (enemy.weapons[1].damageType == 'Sorcery' || enemy.weapons[1].damageType == 'Fire' || enemy.weapons[0].damageType == 'Lightning') {
        playDamTot *= 1.1;
    }
    if (enemy.weapons[1].damageType == 'Earth' || enemy.weapons[1].damageType == 'Frost') {
        playDamTot *= 0.85;
    }
    if (enemy.weapons[1].damageType == 'Faith' || enemy.weapons[1].damageType == 'Spooky') {
        playDamTot *= 0.9;
    }
}
function enemyAttMod() {
    if (enemy.weapons[0].damageType == 'Pierce') {
        if (armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
            compDamTot *= 1.1;
        } else {
            compDamTot;
        }
    }
    if (enemy.weapons[0].damageType == 'Slash') {
        if (armorType == 'chain-mail' || armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
            compDamTot *= 1.1;
        } else {
            compDamTot;
        }
    }
    if (enemy.weapons[0].damageType == 'Blunt') {
        if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
            compDamTot *=  0.9;
        } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
            compDamTot *= 1.1;
        }
    }
    if (enemy.weapons[0].attackType == 'Magic') {
        if (armorType == 'leather-cloth') {
            compDamTot *= 0.9;
        } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
            compDamTot *= 1.1;
        } else {
            compDamTot;
        }
    }
}
function enemyCritMod() {
    if (weapon.damageType == 'Pierce') {
        if (armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
            compDamTot *= 1.15;
        } else {
            compDamTot;
        }
    }
    if (weapon.damageType == 'Slash') {
        if (armorType == 'chain-mail' || armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
            compDamTot *= 1.15;
        } else {
            compDamTot;
        }
    }
    if (weapon.damageType == 'Blunt') {
        if (armorType === 'leather-mail' || armorType === 'leather-cloth') {
            compDamTot *=  0.9;
        } else if (armorType === 'plate-mail' || armorType === 'chain-mail') {
            compDamTot *= 1.15;
        }
    }
    if (weapon.attackType == 'Magic') {
        if (armorType === 'leather-cloth') {
            compDamTot *= 0.9;
        } else if (armorType === 'plate-mail' || armorType === 'chain-mail') {
            compDamTot *= 1.15;
        } else {
            compDamTot;
        }
    }
    if (weapon.grip == 'oneHand') {
        compDamTot *= 1.5;
    }
    if (weapon.grip = 'twoHand') {
        compDamTot *= 2;
    }
}
function enemyCrushMod() {    
    if (weapon1.damageType == 'Pierce') {
        if (armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
        compDamTot *= 1.25;
        }
    }
    if (weapon1.damageType == 'Slash') {
        if (armorType == 'chain-mail' || armorType == 'plate-mail') {
            compDamTot *= 0.9;
        } else if (armorType == 'leather-cloth' || armorType == 'leather-mail') {
        compDamTot *= 1.25;
        }
    }
    if (weapon1.damageType == 'Blunt') {
        if (armorType == 'leather-mail' || armorType == 'leather-cloth') {
            compDamTot *=  0.9;
        } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
        compDamTot *= 1.25;
        }
    }
    if (weapon2.attackType == 'Magic') {
        if (armorType == 'leather-cloth') {
            compDamTot *= 0.9;
        } else if (armorType == 'plate-mail' || armorType == 'chain-mail') {
            compDamTot *= 1.25;
        }
    }
}
  // Helm-Chest-Legs ratio: 15-10-5. Treating head strikes as most important and eating up most of the split.