
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
const bloodMoon = new Weapons('Blood Moon', 'twoHand', 'Physical', ['Pierce'], 600, 0, 10); 
const soulRend = new Weapons('Soul Rend', 'oneHand', 'Magic', ['Spooky', 'Blunt'], 300, 300, 0);
const fox = new Armors('Fatal Fox', 'plate-mail', 45, 60, 5);

    // Daethos
const mindBlast = new Weapons('Mind Blast', 'oneHand', 'Magic', ['Spooky'], 0, 750, 15);
const swDeath = new Weapons('Shadow Word: Death', 'oneHand', 'Magic', ['Spooky'], 0, 750, 15); 
const hush = new Armors('Of Hush and Tendril', 'leather-cloth', 65, 65, 25);

    // Guts
const hunkOfIron = new Weapons('Dragonslayer', 'twoHand', 'Physical', ['Slash'], 600, 0, 10); 
const handCannon = new Weapons('Hand Cannon', 'oneHand', 'Magic', ['Fire', 'Blunt'], 300, 300, 0);
const wolf = new Armors('Wolf Armor', 'plate-mail', 60, 45, 5);

    // Geralt
const ironSword = new Weapons('Iron Sword', 'twoHand', 'Physical', ['Slash'], 500, 0, 5);
const silverSword = new Weapons('Silver Sword', 'twoHand', 'Magic', ['Magic', 'Slash'], 100, 400, 5);
const witcher = new Armors("Witcher's Armor", 'leather-mail', 35, 45, 15);

    // Sinaethi
const blacksun = new Weapons('Black Sun', 'twoHand', 'Physical', ['Slash', 'Spooky'], 450, 150, 10);
const fade = new Weapons('Fade', 'oneHand', 'Magic', ['Spooky', 'Pierce'], 150, 450, 0);
const fengariou = new Armors("Fengariou", 'leather-mail', 35, 55, 15);

  // Fierous
const searous = new Weapons('Searous', 'oneHand', 'Physical', ['Pierce', 'Fire'], 250, 100, 10);
const torreous = new Weapons('Torreous', 'oneHand', 'Physcial', ['Pierce', 'Fire'], 100, 250, 10);
const phoenix = new Armors('Phoenix Armor', 'plate-mail', 60, 40, 5);

    // Gwyn
const greatLordGS = new Weapons('Great Lord Greatsword', 'twoHand', 'Physical', ['Slash', 'Fire'], 400, 200, 5);
const expHand = new Weapons('Explosive Hand', 'oneHand', 'Magic', ['Fire', 'Blunt'], 150, 450, 5);
const lordSet = new Armors('Great Lord Set', 'leather-mail', 45, 45, 15);

    // O&S
const ornstein = new Weapons('Dragonslayer Spear', 'twoHand', 'Physical', ['Pierce', 'Lightning'], 350, 250, 5);
const smough = new Weapons("Smough's Hammer", 'twoHand', 'Phsycal', ['Blunt'], 600, 0, 5);
const ons = new Armors('Ons Armor', 'plate-mail', 55, 55, 15);

    // Gwyndolin
    // Gael
    // Nameless King
    // Armor Possibilities
const legionnaire = new Armors("Legionnaire's Regalia", 'leather-mail', 30, 30, 30); 
const knight = new Armors("Knight's Full Plate", 'plate-mail', 50, 40, 5); 
const mage = new Armors("Mage's Robes", 'leather-cloth', 10, 50, 35); 
const celt = new Armors("Celtic Menagerie", 'leather-mail', 25, 40, 25); 
const poorKnight = new Armors("Poor Knight's Chainmail", "chain-mail", 40, 35, 15); 
const viking = new Armors("Viking's Lamellar", 'leather-mail', 40, 25, 25); 

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
const createEl = document.querySelector('#create');
const randomEl = document.querySelector('#random');
const confirmEl = document.querySelector('#confirm');
    // Starting-Ending Game Elements
const duelEl = document.querySelector('#duel');
const diedEl = document.querySelector('#died');
const backgroundEl = document.querySelector('#background');
const victoryEl = document.querySelector('#victory');
const onceMoreEl = document.querySelector('#play-again');
const continueEl = document.querySelector('#continue');
    // Equpment Button Elements
const weaponBtns = document.querySelector('.weapons');
const armorBtns = document.querySelector('.armors');
const shieldBtns = document.querySelector('.shields');
const hideBtns = document.querySelector('.hide-button');
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
let playPhysPos = player.armor.physRes; 
let playMagPos = player.armor.magRes; 
let playDamTot = 0; 
let compDamTot = 0; 
let actionChoice = []; 
let playerInput = '';
let physAttDam;
let magAttDam;
let rollTimer;
let compAttackTimer;
let playAttackTimer;
  
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
    textBox.value += 'You have chosen to POSTURE with your ' + player.shield.name + '! Are you sure?' + '\n';
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
    rollTimer = setTimeout(noRoll, (10000 * player.shield.roll));
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
    textBox.value += "You have POSTURED with your " + player.shield.name + " like an ABSOLUTE UNIT!" + '\n';
    playPhysPos = player.armor.physRes + player.shield.physRes;
    playMagPos = player.armor.magRes + player.shield.magRes;
    playerAttack();
    await sleep(1250);
    computerAttack();
    playPhysPos = player.armor.physRes;
    playMagPos = player.armor.magRes;
    return
  }
  
  async function dodge() {
  
    playerDodge = player.armor.dodge;
    let dodgeAttempt = Math.floor(Math.random() * 101);
    if (player.weapon.grip == 'oneHand') {
        playerDodge += 5;
    } 
    if (player.weapon == pugio || player.weapon == spear || player.weapon == scythe) {
      playerDodge += 5;
    } 
    if (player.weapon == katana || player.weapon == windFury || player.weapon == whirlWind || player.weapon == halberd) {
      playerDodge += 3;
    }
    if (player.shield == smallShield) {
      playerDodge += 5;
    }
   
    if (dodgeAttempt <= playerDodge)  {
  
      textBox.value += 'You dodged ' + enemy.name + "'s attack!" + '\n';
      playerAttack();
      return
  
    } else {
  
      if (dodgeAttempt >= (playerDodge * 1.5)) {
  
      textBox.value += 'You did not dodge ' + enemy.name + "'s attack!" + '\n';
      computerAttack();
      await sleep(1250);
      playerAttack();
      return
  
      } else {
  
        let weapon;
  
      if (Math.floor(Math.random() * 101) > 50) {
  
        weapon = enemy.weapons[0];
  
        } else { 
  
          weapon = enemy.weapons[1];
        }
  
          let physAttDam = weapon.physDam;
          let magAttDam = weapon.magDam;
          pad = physAttDam * (1 - (playPhysPos / 100));
          mad = magAttDam * (1 - (playMagPos / 100));
          compDamTot = pad + mad;
          if (weapon.damageType == 'Pierce') {
             if (player.armor.type == 'plate-mail') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
          if (weapon.damageType == 'Slash') {
            if (player.armor.type == 'chain-mail' || player.armor.type == 'plate-mail') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'leather-cloth' || player.armor.type == 'leather-mail') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
          if (weapon.damageType == 'Blunt') {
            if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
              compDamTot *=  0.9;
            } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
              compDamTot *= 1.1;
            }
          }
          if (weapon.attackType == 'Magic') {
             if (player.armor.type == 'leather-cloth') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'chain-mail' || player.armor.type == 'plate-mail') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
        if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
          compDamTot *= 1.1;
        }
        if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Earth') {
          compDamTot *= 0.85;
        }
        if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
          compDamTot *= 0.9
        }
        compDamTot *= (1 - (playerDodge / 200));
        Math.floor(compDamTot);
        playHealth -= compDamTot;
        textBox.value += 'You nearly dodge, yet ' + enemy.name + ' strikes you with ' + weapon.name + ' for ' + Math.round(compDamTot) + ' ' + weapon.damageType + ' damage! (Glancing Blow)' + '\n';
        playHealthBar.updateHealth(playHealth);
        if (playHealth <= 0) {
          compWin();
          return
        }
        playerAttack();
        return
      }
    }
  }
  
  function initiate() {
    textBox.value += 'You have chosen to initiate the COMBAT round. Good luck!' + '\n';
    console.log(playerInput);
    initiateEl.style.display = 'none';
    if (playerInput == 'Attack') { 
      attack();
      return
    } else if (playerInput == 'Dodge') {
      dodge();
      return
    } else if (playerInput == 'Posture') {
      posture();
      return
    } else if (playerInput == 'Roll') {
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
    let physAttDam = player.weapon.physDam;
    let magAttDam = player.weapon.magDam;
    let physDamRes = enemy.armor.physRes;
    let magDamRes = enemy.armor.magRes;
    let playCrit = player.weapon.crit;
    playDamTot = physAttDam + magAttDam;
  
    // <-------------------------- PLAYER EQUIPMENT VARIABLES --------------------------------------- \\
  
    if (player.armor == mage) {
      if (player.weapon.attackType == 'Magic') {
        playDamTot *= 1.25;
        playCrit += 7;
      }
    }
  
    if (player.shield == smallShield) {
      if (player.weapon.grip == 'oneHand') {
        if (player.weapon.attackType == 'Magic') {
          playDamTot *= 1.1;
          playCrit += 3;
        } else {
          playDamTot *= 1.05;
          playCrit += 1;
        }
      }
      if (player.weapon.grip == 'twoHand') {
        playDamTot *= 1.15;
        playCrit += 5;
      }
    }
  
    if (player.shield == mediumShield) {
      if (player.weapon.grip == 'oneHand') {
        if (player.weapon.attackType == 'Physical') {
          playDamTot *= 1.15;
          playCrit += 3;
        } else {
          playCrit += 1;
          playDamTot *= 1.05;
        }
      }
    }
  
    if (player.armor == legionnaire) {
      if (player.weapon == pugio || player.weapon == gladius || player.weapon == spear) {
        playDamTot *= 1.25;
        playCrit += 7;
      }
      if (player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Spooky') {
        playDamTot *= 1.15;
        playCrit += 5;
      }
    }
  
    if (player.shield == largeShield) {
      if (player.weapon == pugio || player.weapon == gladius || player.weapon == spear) {
        playDamTot *= 1.25;
        playCrit += 7;
      }
      if (player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Spooky') {
        playDamTot *= 1.15;
        playCrit += 5;
      }
    }
  
    if (player.armor == celt || player.armor == viking) {
      if (player.weapon.grip == 'twoHand') {
        playDamTot *= 1.15;
        playCrit += 5;
      }
      if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Lightning'  || player.weapon.damageType == 'Earth' || player.weapon.damageType == 'Wind') {
        playDamTot *= 1.15;
        playCrit += 5;
      }
    }
  
    if (player.armor == knight || player.armor == poorKnight) {
      if (player.weapon.grip == 'oneHand') {
          playDamTot *= 1.1;
          playCrit += 3;
      }
      if (player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Spooky') {
        playDamTot *= 1.1;
        playCrit += 3;
      }
    }
    // if (player.shield == greatShield) {
    //   if (player.weapon.grip == 'oneHand') {
    //     if (player.weapon.attackType == 'Physical') {
    //       playDamTot *= 1.15;
    //     } else {
    //       playDamTot *= 1.05;
    //     }
    //   }
    // }
    // <---------------------------- SPECIAL WEAPON ATTACKS ------------------------------------- \\
  
    if (player.weapon == windFury) {
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
  
    if (player.weapon == godHand) {
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
  
    if (player.weapon == magicMissile) {
      if (Math.floor(Math.random() * 101) > 92) {
        textBox.value += 'Your fervor ushers forth the favor of Cambire, your magic missiles multiply!' + '\n';
        await sleep(1250);
        playerAttack();
        await sleep(1250);
        playerAttack();
        await sleep(1250);
        playerAttack();
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        playHealth *= .95;
        playHealthBar.updateHealth(playHealth);
        return
      }
    }
  
    if (player.weapon == lavaSpit) {
      if (Math.floor(Math.random() * 101) > 85) {
        textBox.value += "Your fervor ushers forth the favor of Fyero igniting through your body." + '\n';
        await sleep(750);
        playDamTot *= 1.75;
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        textBox.value += "You scorch " + enemy.name + " for " + Math.round(playDamTot) + " Pure Fire Damage!" + '\n';
        playHealth *= .95;
        playHealthBar.updateHealth(playHealth);
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == lightningSpear) {
      if (Math.floor(Math.random() * 101) > 85) {
        textBox.value += "Your fervor ushers forth the favor of Astra's lightning bursting from you!" + '\n';
        await sleep(750);
        playDamTot *= 1.75;
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        textBox.value += "You melt " + enemy.name + " for " + Math.round(playDamTot) + " Pure Lightning Damage!" + '\n';
        playHealth *= .95;
        playHealthBar.updateHealth(playHealth);
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == oakCrush) {
      if (Math.floor(Math.random() * 101) > 85) {
        playDamTot *= 1.5;
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        textBox.value += "You crush " + enemy.name + " for " + Math.round(playDamTot) + " Pure Earth Damage!" + '\n';
        player.armor.magRes *= 1.05;
        player.armor.physRes *= 1.1;
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        await sleep(1250);
        textBox.value += "Your resolve beckons with the favor of your Quor'ei, steeling you in their Caer." + '\n';
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == arcticBolt) {
      if (Math.floor(Math.random() * 101) > 85) {
        playDamTot *= 1.5;
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        textBox.value += "You pierce " + enemy.name + " for " + Math.round(playDamTot) + " Pure Frost Damage!" + '\n';
        player.armor.magRes *= 1.1;
        player.armor.physRes *= 1.05;
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        await sleep(1250);
        textBox.value += "Your calm swirls with the favor of Senari, holding you in her Caer." + '\n';
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == whirlWind || player.weapon == scythe) {
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
  
    if (player.weapon == pugio || player.weapon == spear || player.weapon == gladius) {
      if (Math.floor(Math.random() * 101) > 92) {
        textBox.value += 'The Roman Barritus surges through you. Praise Jupiter!' + '\n';
        await sleep(1250);
        playerAttack();
        await sleep(1250);
        playerAttack();
        return
      }
    }
  
    if (player.weapon == handOfGod) {
      if (Math.floor(Math.random() * 101) > 85) {
        let heal = 0;
        heal = magAttDam + player.armor.magRes + player.armor.physRes;
        if (playHealth >= 4800) {
          playHealth = 5000;
        } else {
        playHealth += heal;
        playHealthBar.updateHealth(playHealth);
        textBox.value += "Tendrils of Daethos wrap through your Caer, healing you for " + heal +  "." + '\n';
        await sleep(1250);
        player.armor.magRes *= 1.03;
        player.armor.physRes *= 1.03;
        }
      }
    }
  
    if (player.weapon == insanity) {
      if (Math.floor(Math.random() * 101) > 85) {
        playDamTot *= 2.25;
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        playHealth *= .92;
        playHealthBar.updateHealth(playHealth);
        textBox.value += "Tendrils of Daethos reach through " + enemy.name + " and writhe within for " + Math.round(playDamTot) + " Spooky Damage. Your senses are palpably aflame." + '\n';
        await sleep(1250);
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == warHammer || player.weapon == claymore || player.weapon == battleAxe || player.weapon == halberd || player.weapon == mace) {
      if (Math.floor(Math.random() * 101) > 92) {
        await sleep(1250);
        playDamTot = 2.75 * (physAttDam + magAttDam);
        playDamTot *= 1 - (physDamRes / 100);
        compHealth -= Math.round(playDamTot);
        compHealthBar.updateHealth(compHealth);
        textBox.value += "The Caer of Se'dyro sings into your steel, " + enemy.name + ' receives ' + Math.round(playDamTot) + ' Crushing Damage!' + '\n';
        player.weapon.physDam *= 1.05;
        player.weapon.magDam *= 1.05;
        if (compHealth <= 0) {
          playWin();
          return
        }
        return
      }
    }
  
    if (player.weapon == katana || player.weapon == daiKatana) {
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
  
  
    if ((playerNumber - playCrit) > 5) {
  
      physAttDam = physAttDam * (1 - (physDamRes / 100));
      magAttDam = magAttDam * (1 - (magDamRes / 100));
      playDamTot = physAttDam + magAttDam;
      playDamTot * 1.15
  
      if (player.weapon.damageType == 'Pierce') {
        if (enemy.armor.type == 'plate-mail') {
          playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
          playDamTot *= 1.15;
        }
      }
      if (player.weapon.damageType == 'Slash') {
        if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
          playDamTot *= 0.9;
        } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
          playDamTot *= 1.15;
        }
      }
      if (player.weapon.damageType == 'Blunt') {
        if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
          playDamTot *=  0.9;
        } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
          playDamTot *= 1.15;
        }
      }
      if (player.weapon.attackType == 'Magic') {
        if (enemy.armor.type == 'leather-cloth') {
          playDamTot *= 0.9;
        } else if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
          playDamTot *= 1.15;
        }
      }
      if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
        playDamTot *= 1.15;
      }
      if (player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Spooky') {
        playDamTot *= 1.1;
      }
      if (player.weapon.damageType == 'Earth' || player.weapon.damageType == 'Frost') {
        playDamTot *= 1.05;
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
      console.log(playDamTot);
      Math.round(playDamTot);
      compHealth -= playDamTot;
      textBox.value += 'You attack ' + enemy.name + ' with your ' + player.weapon.name + ' for ' + Math.round(playDamTot) + ' ' + player.weapon.damageType[0]  +  ' damage!' + '\n';
      compHealthBar.updateHealth(compHealth);
  
  
    // <--------------------------------- CRITICAL STRIKE ATTACK ----------------------------------> \\
  
    } else {
    // } else if ((playerNumber - playCrit) > 3) {
  
      physAttDam = physAttDam * (1 - (physDamRes / 100));
      magAttDam = magAttDam * (1 - (magDamRes / 100));
      playDamTot = physAttDam + magAttDam;
      playDamTot *= 1.15;
  
      if (player.weapon.grip == 'oneHand') {
        playDamTot *= 2.5;
      }
  
      if (player.weapon.grip == 'twoHand') {
        playDamTot *= 3.75;
      }
  
      if (player.weapon == pugio || player.weapon == spear || player.weapon == scythe || player.weapon == gladius) {
        playDamTot *= 1.5;
      }
  
      if (player.weapon.damageType == 'Pierce') {
          if (enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
          } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
            playDamTot *= 1.25;
          }
      }
      if (player.weapon.damageType == 'Slash') {
          if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
            playDamTot *= 0.9;
          } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
            playDamTot *= 1.25;
          }
      }
      if (player.weapon.damageType == 'Blunt') {
        if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
          playDamTot *=  0.9;
        } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
          playDamTot *= 1.25;
        }
      }
      if (player.weapon.attackType == 'Magic') {
        if (enemy.armor.type == 'leather-cloth') {
          playDamTot *= 0.9;
        } else if (enemy.armor.type = 'chain-mail' || enemy.armor.type == 'plate-mail') {
          playDamTot *= 1.25;
        }
      }
      if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
        playDamTot *= 1.25;
      }
      if (player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Spooky') {
        playDamTot *= 1.15;
      }
      if (player.weapon.damageType == 'Earth' || player.weapon.damageType == 'Earth') {
        playDamTot *= 1.1;
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
  
      Math.round(playDamTot);
      console.log(playDamTot);
      compHealth -= playDamTot.toFixed(2);
      textBox.value += 'You CRITICALLY STRIKE ' + enemy.name + ' with your ' + player.weapon.name + ' for ' + Math.round(playDamTot) + ' ' + player.weapon.damageType[0] + ' damage!' + '\n';
      compHealthBar.updateHealth(compHealth);
      await sleep(1250);
  
    // } else {
  
  
    //   // <----------------------------- MULTI-STRIKE ATTACK ----------------------------> \\
  
  
    //   physAttDam = physAttDam * (1 - (physDamRes / 100));
    //   magAttDam = magAttDam * (1 - (magDamRes / 100));
    //   playDamTot = physAttDam + magAttDam;
  
    //   if (player.weapon.damageType == 'Pierce') {
    //     if (enemy.armor.type == 'plate-mail') {
    //       playDamTot *= 0.9;
    //     } else if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
    //       playDamTot *= 1.15;
    //     }
    //   }
    //   if (player.weapon.damageType == 'Slash') {
    //     if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
    //       playDamTot *= 0.9;
    //     } else if (enemy.armor.type == 'leather-cloth' || enemy.armor.type == 'leather-mail') {
    //       playDamTot *= 1.15;
    //     }
    //   }
    //   if (player.weapon.damageType == 'Blunt') {
    //     if (enemy.armor.type == 'leather-mail' || enemy.armor.type == 'leather-cloth') {
    //       playDamTot *=  0.9;
    //     } else if (enemy.armor.type == 'plate-mail' || enemy.armor.type == 'chain-mail') {
    //       playDamTot *= 1.15;
    //     }
    //   }
    //   if (player.weapon.attackType == 'Magic') {
    //     if (enemy.armor.type == 'leather-cloth') {
    //       playDamTot *= 0.9;
    //     } else if (enemy.armor.type == 'chain-mail' || enemy.armor.type == 'plate-mail') {
    //       playDamTot *= 1.15;
    //     }
    //   }
  
    //   if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Lightning' || player.weapon.damageType == 'Sorcery') {
    //     playDamTot *= 1.2;
    //   }
    //   if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
    //     playDamTot *= 1.1;
    //   }
    //   if (player.weapon.damageType == 'Earth' || player.weapon.damageType == 'Earth') {
    //     playDamTot *= 1.05;
    //   }
    //   if (player.weapon.grip == 'oneHand') {
    //     playDamTot *= 1.25;
    //   }
    //   if (player.weapon.grip == 'twoHand') {
    //     playDamTot *= 1.5;
    //   }
    //   console.log(playDamTot);
    //   compHealth -= Math.round(playDamTot);
    //   textBox.value += 'You frenzy into a rage and MULTI-STRIKE ' + enemy.name + ' with your ' + player.weapon.name + ' for ' + Math.round(playDamTot) + ' ' + player.weapon.damageType[0] + ' damage!' + '\n';
    //   compHealthBar.updateHealth(compHealth);
    //   await sleep(1250);
    //   compHealth -= Math.round(playDamTot);
    //   textBox.value += 'You frenzy into a rage and MULTI-STRIKE ' + enemy.name + ' with your ' + player.weapon.name + ' for ' + Math.round(playDamTot) + ' ' + player.weapon.damageType[0] + ' damage!' + '\n';
    //   compHealthBar.updateHealth(compHealth);
    //   await sleep(1250);
    //   compHealth -= Math.round(playDamTot);
    //   textBox.value += 'You frenzy into a rage and MULTI-STRIKE ' + enemy.name + ' with your ' + player.weapon.name + ' for ' + Math.round(playDamTot) + ' ' + player.weapon.damageType[0] + ' damage!' + '\n';
    //   compHealthBar.updateHealth(compHealth);
    //   await sleep(1250);
    //   textBox.value += 'You attempt to flurry into further strikes!' + '\n';
    //   playerAttack();
    //   return
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
    let physDamMit = playPhysPos;
    let magDamMit = playMagPos;
    let fullDamMit = playPhysPos + playMagPos;
  
    let firstWeapon = enemy.weapons[0].physDam + enemy.weapons[0].magDam;
    let secondWeapon = enemy.weapons[1].physDam + enemy.weapons[1].magDam;
  
  
  
    // <---------------------- PLAYER EQUIPMENT VARIABLES ----------------------> \\
  
  
  
    // <----------------- SPECIAL OPPONENT ATTACKS ----------------------------> \\
  
  
    if (enemy === guts) {
      if (enAttNum > 85) {
      compDamTot = superPhysAtt + superMagAtt;
      compDamTot *= 2.75;
      compDamTot *= 1 - (physDamMit / 100);
      playHealth -= Math.round(compDamTot);
      textBox.value += "Guts's cursed BERSERKER ARMOR sacrifices his life to smash you for " + Math.round(compDamTot) +  ' Heavy Metal Damage!' + '\n'
      playHealthBar.updateHealth(playHealth);
      compHealth *= 0.95;
      compHealthBar.updateHealth(compHealth);
      await sleep(1250);
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
        compDamTot *= 1 - (magDamMit / 100);
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
        compDamTot *= 1.75;
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
        compDamTot = firstWeapon
        compDamTot *= 3;
        compDamTot *= 1 - (playPhysPos / 100);
        playHealth -= Math.round(compDamTot);
        textBox.value += 'Ornstein impales you before unleashing lightning from his Dragonslayer Spear, hurling you to the ground for ' + Math.round(compDamTot) + ' Lightning and Physical Damage!!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
        return
      }
      if (enAttNum > 85) {
        compDamTot = firstWeapon;
        compDamTot *= 3;
        compDamTot *= 1 - (playMagPos / 100);
        playHealth -= Math.round(compDamTot);
        textBox.value += 'Ornstein unleashes a bolt of lightning from his Dragonslayer Spear ' + ' for ' + Math.round(compDamTot) + ' Lightning Damage!!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
        return
      }
      if (enAttNum > 50) {
        let physAttDam = enemy.weapons[0].physDam;
        let magAttDam = enemy.weapons[0].magDam;
        pad = physAttDam * (1 - (playPhysPos / 100));
        mad = magAttDam * (1 - (playMagPos / 100));
        compDamTot = pad + mad;
         if (player.armor.type == 'plate-mail') {
           compDamTot *=  0.9;
         } else if (player.armor.type == 'leather-mail' || player.armor.type == 'cloth-leather') {
           compDamTot *= 1.1;
         }
        if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
          compDamTot *= 1.1;
        }
        if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Earth') {
          compDamTot *= 0.85;
        }
        if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
          compDamTot *= 0.9;
        }
        playHealth -= Math.round(compDamTot);
        playHealthBar.updateHealth(playHealth);
        textBox.value += 'Ornstein unleashes a bolt of lightning from his Dragonslayer Spear' + ' for ' + Math.round(compDamTot) + ' Lightning Damage!!' + '\n';
        await sleep(1250);
        return
      }
      if (enAttNum > 42) {
        compDamTot = secondWeapon;
        compDamTot *= 3;
        compDamTot *= 1 - (playPhysPos / 100);
        playHealth -= Math.round(compDamTot);
        textBox.value += 'Smough charges up and UPPERCUTS you with his Hammer for ' + Math.round(compDamTot) + ' Blunt Damage!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
        return
      }
      if (enAttNum > 35) {
        compDamTot = secondWeapon;
        compDamTot *= 3;
        compDamTot *= 1 - (playMagPos / 100);
        playHealth -= Math.round(compDamTot);
        textBox.value += 'Smough leaps in the air and SMASHES DOWN on you for ' + Math.round(compDamTot) + ' Lightning Damage!' + '\n';
        playHealthBar.updateHealth(playHealth);
        await sleep(1250);
        return
      }
      if (enAttNum > 0) {
        let physAttDam = enemy.weapons[1].physDam;
        let magAttDam = enemy.weapons[1].magDam;
        pad = physAttDam * (1 - (playPhysPos / 100));
        mad = magAttDam * (1 - (playMagPos / 100));
        compDamTot = pad + mad;
         if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
           compDamTot *=  0.9;
         } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
           compDamTot *= 1.1;
         }
        if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
          compDamTot *= 1.1;
        }
        if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Earth') {
          compDamTot *= 0.85;
        }
        if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
          compDamTot *= 0.9;
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
          let physAttDam = weapon.physDam;
          let magAttDam = weapon.magDam;
          pad = physAttDam * (1 - (playPhysPos / 100));
          mad = magAttDam * (1 - (playMagPos / 100));
          compDamTot = pad + mad;
  
          if (weapon.damageType == 'Pierce') {
             if (player.armor.type == 'plate-mail') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
          if (weapon.damageType == 'Slash') {
            if (player.armor.type == 'chain-mail' || player.armor.type == 'plate-mail') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'leather-cloth' || player.armor.type == 'leather-mail') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
          if (weapon.damageType == 'Blunt') {
            if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
              compDamTot *=  0.9;
            } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
              compDamTot *= 1.1;
            }
          }
          if (weapon.attackType == 'Magic') {
             if (player.armor.type == 'leather-cloth') {
              compDamTot *= 0.9;
            } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
              compDamTot *= 1.1;
            } else {
              compDamTot;
            }
          }
        if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
          compDamTot *= 1.1;
        }
        if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Earth') {
          compDamTot *= 0.85;
        }
        if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
          compDamTot *= 0.9
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
          let physAttDam = weapon.physDam;
          let magAttDam = weapon.magDam;
          pad = physAttDam * (1 - (playPhysPos / 100));
          mad = magAttDam * (1 - (playMagPos / 100));
          compDamTot = 2 * (pad + mad);
  
        if (weapon.damageType == 'Pierce') {
          if (player.armor.type == 'plate-mail') {
            compDamTot *= 0.9;
          } else if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
            compDamTot *= 1.15;
          } else {
            compDamTot;
          }
        }
        if (weapon.damageType == 'Slash') {
          if (player.armor.type == 'chain-mail' || player.armor.type == 'plate-mail') {
            compDamTot *= 0.9;
          } else if (player.armor.type == 'leather-cloth' || player.armor.type == 'leather-mail') {
            compDamTot *= 1.15;
          } else {
            compDamTot;
          }
        }
        if (weapon.damageType == 'Blunt') {
          if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
            compDamTot *=  0.9;
          } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
            compDamTot *= 1.15;
          }
        }
  
        if (weapon.attackType == 'Magic') {
            if (player.armor.type == 'leather-cloth') {
            compDamTot *= 0.9;
          } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
            compDamTot *= 1.15;
          } else {
            compDamTot;
          }
        }
      if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
        compDamTot *= 1.15;
      }
      if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Earth') {
        compDamTot *= 0.85;
      }
      if (player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith') {
        compDamTot *= 0.9
      }
      if (weapon.grip == 'oneHand') {
        compDamTot *= 1.25;
      }
      if (weapon.grip = 'twoHand') {
        compDamTot *= 1.5;
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
      let magAttDam = weapon1.magDam + weapon2.magDam;
      let physAttDam = weapon1.physDam + weapon2.physDam;
      pad = physAttDam * (1 - (playPhysPos / 100));
      mad = magAttDam * (1 - (playMagPos / 100));
      compDamTot = pad + mad;
  
      if (weapon1.damageType == 'Pierce') {
        if (player.armor.type == 'plate-mail') {
          compDamTot *= 0.9;
        } else if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
          compDamTot *= 1.1;
        }
      }
      if (weapon1.damageType == 'Slash') {
        if (player.armor.type == 'chain-mail' || player.armor.type == 'plate-mail') {
          compDamTot *= 0.9;
        } else if (player.armor.type == 'leather-cloth' || player.armor.type == 'leather-mail') {
          compDamTot *= 1.1;
        }
      }
      if (weapon1.damageType == 'Blunt') {
        if (player.armor.type == 'leather-mail' || player.armor.type == 'leather-cloth') {
          compDamTot *=  0.9;
        } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
          compDamTot *= 1.1;
        }
      }
      if (weapon2.attackType == 'Magic') {
        if (player.armor.type == 'leather-cloth') {
          compDamTot *= 0.9;
        } else if (player.armor.type == 'plate-mail' || player.armor.type == 'chain-mail') {
          compDamTot *= 1.1;
        }
      }
      if (player.weapon.damageType == 'Fire' || player.weapon.damageType == 'Sorcery' || player.weapon.damageType == 'Lightning') {
        compDamTot *= 1.1;
      }
      if (player.weapon.damageType == 'Frost' || player.weapon.damageType == 'Spooky' || player.weapon.damageType == 'Faith' || player.weapon.damageType == 'Earth') {
        compDamTot *= 0.9;
      }
      compDamTot *= 1.5;
      playHealth -= Math.round(compDamTot);
      textBox.value += enemy.name + ' CRUSHES you with their ' + weapon1.name + ' and ' + weapon2.name + ' for ' + Math.round(compDamTot) + ' ' + weapon1.damageType + ' and ' + weapon2.damageType + ' damage!' + '\n';
      playHealthBar.updateHealth(playHealth);
      await sleep(1250);
    }
    if (playHealth <= 0) {
      compWin();
      return
    }
  }
  
  // ---------------------------- STARTING GAME FUNCTIONS --------------------------------- \\
  
  function playerChoose() {
    playEl.style.display = 'inline-block';
    chooseWeapon();
  }
  function chooseWeapon() {
    confirmEl.style.display = 'inline-block';
    weaponBtns.style.display = 'inline-block';
    weaponBtns.addEventListener('click', function(e) {
    textBox.value += 'You have selected the ' + e.target.innerText + '!' + '\n';
    playerWeaponChoice = e.target.innerText;
    weapTT.innerText = player.weapon.name + '\n' + 'Attack Type: ' + player.weapon.attackType + '\n' +  'Damage Type: ' + player.weapon.damageType +
    '\n' + 'Damage: ' + (player.weapon.magDam + player.weapon.physDam) + '\n' + 'Crit Chance: ' + player.weapon.crit + '%';
    if (playerWeaponChoice == 'Gladius') {
      playerWeaponChoice = gladius;
      weapImg.src = './Img/gladius.png';
    } else if (playerWeaponChoice == 'Pugio') {
      playerWeaponChoice = pugio;
      weapImg.src = './Img/pugio.png';
    } else if (playerWeaponChoice == 'Scythe') {
      playerWeaponChoice = scythe;
      weapImg.src = './Img/scythe.png';
    } else if (playerWeaponChoice == 'Spear') {
      playerWeaponChoice = spear;
      weapImg.src = './Img/spear.png';
    } else if (playerWeaponChoice == 'Katana') {
      playerWeaponChoice = katana;
      weapImg.src = './Img/katana.png';
    } else if (playerWeaponChoice == 'Halberd') {
      playerWeaponChoice = halberd;
      weapImg.src = './Img/halberd.png';
    } else if (playerWeaponChoice == 'Claymore') {
      playerWeaponChoice = claymore;
      weapImg.src = './Img/claymore.png';
    } else if (playerWeaponChoice == 'Battle Axe') {
      playerWeaponChoice = battleAxe;
      weapImg.src = './Img/battleaxe.png';
    } else if (playerWeaponChoice == 'War Hammer') {
      playerWeaponChoice = warHammer;
      weapImg.src = './Img/warhammer.png';
    } else if (playerWeaponChoice == 'Lava Spit') {
      playerWeaponChoice = lavaSpit;
      weapImg.src = './Img/fire.png';
    } else if (playerWeaponChoice == 'Lightning Spear') {
      playerWeaponChoice = lightningSpear;
      weapImg.src = './Img/lightning-spear.png';
    } else if (playerWeaponChoice == 'Arctic Bolt') {
      playerWeaponChoice = arcticBolt;
      weapImg.src = './Img/frost.png';
    } else if (playerWeaponChoice == 'Magic Missile') {
      playerWeaponChoice = magicMissile;
      weapImg.src = './Img/sorcery.png';
    } else if (playerWeaponChoice == 'Mace') {
      playerWeaponChoice = mace;
      weapImg.src = './Img/mace.png';
    } else if (playerWeaponChoice == 'Hand of God') {
      playerWeaponChoice = handOfGod;
      weapImg.src = './Img/faith.png';
    } else if (playerWeaponChoice == 'Insanity') {
      playerWeaponChoice = insanity;
      weapImg.src = './Img/dark.png';
    } else if (playerWeaponChoice == 'Dai-Katana') {
      playerWeaponChoice = daiKatana;
      weapImg.src = './Img/dai-katana.png';
    } else if (playerWeaponChoice == 'Oak Crush') {
      playerWeaponChoice = oakCrush;
      weapImg.src = './Img/earth.png';
    } else if (playerWeaponChoice == 'Wind Fury') {
      playerWeaponChoice = windFury;
      weapImg.src = './Img/windfury.png';
    } else if (playerWeaponChoice == 'God Hand') {
      playerWeaponChoice = godHand;
      weapImg.src = './Img/godHand.png';
    } else if (playerWeaponChoice == 'Whirlwind') {
      playerWeaponChoice = whirlWind;
      weapImg.src = './Img/whirlwind.png';
    }
    player.weapon = playerWeaponChoice;
    damEl.innerText = playerWeaponChoice.physDam + playerWeaponChoice.magDam;
    attTypeEl.innerText = playerWeaponChoice.attackType;
    damTypeEl.innerText = playerWeaponChoice.damageType;
    confirmEl.addEventListener('click', function(e) {
      chooseShield();
    });
  });
  }
  function chooseShield() {
    weaponBtns.style.display = 'none';
    shieldBtns.style.display = 'inline-block';
    armorBtns.style.display = 'none';
    shieldBtns.addEventListener('click', function(e) {
      textBox.value += 'You have selected the ' + e.target.innerText + '!' + '\n';
      playerShieldChoice = e.target.innerText;
      shieldTT.innerText = player.shield.name + '\n' + 'Physical Defense: ' + player.shield.physRes + '\n' + 'Magical Defense: ' + player.shield.magRes +
    '\n' + 'Roll Timer: ' + (player.shield.roll * 10) +'s';
      if (playerShieldChoice == 'Parrying Buckler'){
        playerShieldChoice = smallShield;
        shieldImg.src = './Img/buckler.png';
      } else if (playerShieldChoice == "Heater Shield") {
        playerShieldChoice = mediumShield;
        shieldImg.src = './Img/heater-shield.png';
      } else if (playerShieldChoice == "Scutum") {
        playerShieldChoice = largeShield;
        shieldImg.src = './Img/scutum.png';
      } else if (playerShieldChoice == "Pavise") {
        playerShieldChoice = greatShield;
        shieldImg.src = './Img/pavise.png';
      }
      player.shield = playerShieldChoice;
      confirmEl.addEventListener('click', function(e) {
        chooseArmor();
      });
    });
  }
  function chooseArmor() {
    shieldBtns.style.display = 'none';
    armorBtns.style.display = 'inline-block';
    armorBtns.addEventListener('click', function(e) {
      textBox.value += 'You have selected the ' + e.target.innerText + '!' + '\n';
      playerArmorChoice = e.target.innerText;
      armorTT.innerText = player.armor.name + '\n' + 'Physical Defense: ' + player.armor.physRes + '\n' + 'Magical Defense: ' + player.armor.magRes +
    '\n' + 'Dodge: ' + player.armor.dodge + '%';
      if (playerArmorChoice == 'Celtic Menagerie'){
        playerArmorChoice = celt;
        armorImg.src = './Img/celt-armor.png';
        helmImg.src = './Img/celt-helm.png';
        greavesImg.src = './Img/celt-legs.png';
      } else if (playerArmorChoice == "Knight's Full Plate") {
        playerArmorChoice = knight;
        armorImg.src = './Img/knight-armor.png';
        helmImg.src = './Img/knight-helm.png';
        greavesImg.src = './Img/knight-legs.png';
      } else if (playerArmorChoice == "Legionnaire's Regalia") {
        playerArmorChoice = legionnaire;
        armorImg.src = './Img/legion-armor.png';
        helmImg.src = './Img/legion-helm.png';
        greavesImg.src = './Img/legion-legs.png';
      } else if (playerArmorChoice == "Mage's Robes") {
        playerArmorChoice = mage;
        armorImg.src = './Img/mage-robes.png';
        helmImg.src = './Img/mage-helm.png';
        greavesImg.src = './Img/mage-legs.png';
      } else if (playerArmorChoice == "Poor Knight's Chainmail") {
        playerArmorChoice = poorKnight;
        armorImg.src = './Img/chain-armor.png';
        helmImg.src = './Img/chain-helm.png';
        greavesImg.src = './Img/chain-legs.png';
      } else if (playerArmorChoice == "Viking Lamellar") {
        playerArmorChoice = viking;
        armorImg.src = './Img/viking-armor.png';
        helmImg.src = './Img/viking-helm.png';
        greavesImg.src = './Img/viking-legs.png';
      }
      player.armor = playerArmorChoice;
      physDefEl.innerText = playerArmorChoice.physRes;
      magDefEl.innerText = playerArmorChoice.magRes;
      dodgeEl.innerText = playerArmorChoice.dodge;
      console.log(player);
      confirmEl.addEventListener('click', render);
      textBox.value += 'You have confirmed your selection. Good luck!' + '\n';
        // confirmEl.removeEventListener('keyup', listener)
    })
  };
  function playerRandom() {
    playEl.style.display = 'inline-block';
    randomWeapon();
  }
  function randomWeapon() {
    ranWeapon = Math.floor(Math.random() * weapons.length);
    player.weapon = weapons[ranWeapon];
    damEl.innerText = player.weapon.physDam + player.weapon.magDam;
    attTypeEl.innerText = player.weapon.attackType;
    damTypeEl.innerText = player.weapon.damageType;
    textBox.value += 'You have randomized and received the ' + player.weapon.name + '!' + '\n';
    if (player.weapon == gladius) {
      weapImg.src = './Img/gladius.png';
    } else if (player.weapon == pugio) {
      weapImg.src = './Img/pugio.png';
    } else if (player.weapon == scythe) {
      weapImg.src = './Img/scythe.png';
    } else if (player.weapon == spear) {
      weapImg.src = './Img/spear.png';
    } else if (player.weapon == katana) {
      weapImg.src = './Img/katana.png';
    } else if (player.weapon == halberd) {
      weapImg.src = './Img/halberd.png';
    } else if (player.weapon == claymore) {
      weapImg.src = './Img/claymore.png';
    } else if (player.weapon == battleAxe) {
      weapImg.src = './Img/battleaxe.png';
    } else if (player.weapon == warHammer) {
      weapImg.src = './Img/warhammer.png';
    } else if (player.weapon == lavaSpit) {
      weapImg.src = './Img/fire.png';
    } else if (player.weapon == lightningSpear) {
      weapImg.src = './Img/lightning-spear.png';
    } else if (player.weapon == arcticBolt) {
      weapImg.src = './Img/frost.png';
    } else if (player.weapon == magicMissile) {
      weapImg.src = './Img/sorcery.png';
    } else if (player.weapon == mace) {
      weapImg.src = './Img/mace.png';
    } else if (player.weapon == handOfGod) {
      weapImg.src = './Img/faith.png';
    } else if (player.weapon == insanity) {
      weapImg.src = './Img/dark.png';
    } else if (player.weapon == daiKatana) {
      weapImg.src = './Img/dai-katana.png';
    } else if (player.weapon == oakCrush) {
      weapImg.src = './Img/earth.png';
    } else if (player.weapon == windFury) {
      weapImg.src = './Img/windfury.png';
    } else if (player.weapon == godHand) {
      weapImg.src = './Img/godHand.png';
    } else if (player.weapon == whirlWind) {
      weapImg.src = './Img/whirlwind.png';
    }
    randomShield();
  }
  function randomShield() {
    ranShield = Math.floor(Math.random() * shields.length);
    player.shield = shields[ranShield];
    textBox.value += 'You have randomized and received the ' + player.shield.name + '!' + '\n';
    if (player.shield == smallShield){
      shieldImg.src = './Img/buckler.png';
    } else if (player.shield == mediumShield) {
      shieldImg.src = './Img/heater-shield.png';
    } else if (player.shield == largeShield) {
      shieldImg.src = './Img/scutum.png';
    } else if (player.shield == greatShield) {
      shieldImg.src = './Img/pavise.png';
    }
    randomArmor();
  }
  function randomArmor() {
    ranArmor = Math.floor(Math.random() * armors.length);
    player.armor = armors[ranArmor];
    physDefEl.innerText = player.armor.physRes;
    magDefEl.innerText = player.armor.magRes;
    dodgeEl.innerText = player.armor.dodge;
    textBox.value += 'You have randomized and received the ' + player.armor.name + '!' + '\n';
    if (player.armor == celt){
      armorImg.src = './Img/celt-armor.png';
      helmImg.src = './Img/celt-helm.png';
      greavesImg.src = './Img/celt-legs.png';
    } else if (player.armor == knight) {
      armorImg.src = './Img/knight-armor.png';
      helmImg.src = './Img/knight-helm.png';
      greavesImg.src = './Img/knight-legs.png';
    } else if (player.armor == legionnaire) {
      armorImg.src = './Img/legion-armor.png';
      helmImg.src = './Img/legion-helm.png';
      greavesImg.src = './Img/legion-legs.png';
    } else if (player.armor == mage) {
      armorImg.src = './Img/mage-robes.png';
      helmImg.src = './Img/mage-helm.png';
      greavesImg.src = './Img/mage-legs.png';
    } else if (player.armor == poorKnight) {
      armorImg.src = './Img/chain-armor.png';
      helmImg.src = './Img/chain-helm.png';
      greavesImg.src = './Img/chain-legs.png';
    } else if (player.armor == viking) {
      armorImg.src = './Img/viking-armor.png';
      helmImg.src = './Img/viking-helm.png';
      greavesImg.src = './Img/viking-legs.png';
    }
    render();
  }
  
  function randomArena() {
    ranArena = Math.floor(Math.random() * 101);
    if (ranArena > 84) {
      backgroundEl.src = './Img/GladiatorArena.jpg';
    } else if (ranArena > 68) {
      backgroundEl.src = './Img/fantasy-arena-2.png';
    } else if (ranArena > 51) {
      backgroundEl.src = './Img/fantasy-arena-1.jpg';
    } else if (ranArena > 34) {
      backgroundEl.src = './Img/fantasy-arena-3.jpg';
    } else if (ranArena > 17) {
      backgroundEl.src = './Img/fantasy-arena-4.jpg';
    } else {
      backgroundEl.src = './Img/fantasy-arena-5.jpg';
    }
  }
  
  function randomEnemy() { 
    let enemyNumber = Math.floor(Math.random() * 101);
    if (enemyNumber > 87) {
      enemy = guts;
      compImg.src = './Img/Guts-Wolf.png';
    } else if (enemyNumber > 74) {
      enemy = dorien;
      compImg.src = './Img/Dorien-custom.png';
    } else if (enemyNumber > 61) {
      enemy = geralt;
      compImg.src = './Img/geralt-custom.png';
    } else if (enemyNumber > 48) {
      enemy = eugenes;
      compImg.src = './Img/eugenes-custom.png';
    } else if (enemyNumber > 35) {
      enemy = fierous;
      compImg.src = './Img/fierous.png';
    } else if (enemyNumber > 20) {
      enemy = ornsteinAndSmough;
      compImg.src = './Img/OnS.png';
    } else if (enemyNumber > 5) {
      enemy = gwyn;
      compImg.src = './Img/Gwyn.png';
      compImg.bottom = 100;
    } else {
      enemy = daethos;
      compImg.src = './Img/Daethos.png';
      compImg.opacity = 0.75;
    }
    compName.innerText = enemy.name;
    textBox.value += 'Your last opponent is ' + enemy.name + '!' + '\n';
    console.log(enemy);
  }
  function init() {
  playerChoice = [];
  playerActionChoice = '';
  playerWeaponChoice = '';
  playerShieldChoice = '';
  playerArmorChoice = '';
  weapons = [gladius, pugio, scythe, spear, katana, halberd, claymore, battleAxe, warHammer, lavaSpit, lightningSpear, arcticBolt, magicMissile, mace, godHand, insanity, 
    daiKatana, windFury, oakCrush, handOfGod, whirlWind];
  shields = [smallShield, mediumShield, largeShield, greatShield];
  armors = [celt, knight, legionnaire, mage, poorKnight, viking];
  ranWeapon; 
  ranShield; 
  ranArmor; 
  startChoice = [];
  confirmChoice = '';
  // Combat Game Variables
  player = {
    weapon: {
      name: '',
      grip: '',
      attackType: '',
      damageType: '',
      physDam: 0,
      magDam: 0,
      crit: 0,
    },
    shield: {
      name: '',
      physRes: 0,
      magRes: 0,
      roll: 0,
    },
    armor: {
      name: '',
      type: '',
      physRes: 0,
      magRes: 0,
      dodge: 0,
    }
  };
  playerDodge; 
  playPhysPos = player.armor.physRes; 
  playMagPos = player.armor.magRes; 
  playDamTot = 0; 
  compDamTot = 0; 
  actionChoice = []; 
  playerInput = '';
  physAttDam;
  magAttDam;
  rollTimer = null;
  compAttackTimer;
  playAttackTimer;
  playHealth = 6000;
  compHealth = 9000;
  initiateEl.style.display = 'none';
  confirmEl.style.display = 'none';
  compEl.style.display = 'none';
  weaponBtns.style.display = 'none';
  shieldBtns.style.display = 'none';
  armorBtns.style.display = 'none';
  actionsEl.style.display = 'none';
  createEl.style.display = 'inline-block';
  randomEl.style.display = 'inline-block';
  duelEl.style.display = 'inline-block';
  backgroundEl.style.display = 'inline-block';
  diedEl.style.display = 'none';
  initiateEl.style.display = 'none';
  victoryEl.style.display = 'none';
  onceMoreEl.style.display = 'none';
  continueEl.style.display = 'none';
  createEl.addEventListener('click', function(e) {
    confirmChoice = e.target.innerText;
    textBox.value += 'You have chosen to CREATE your champion. Are you sure?' + '\n';
    // confirmEl.style.display = 'inline-block';  
    createEl.addEventListener('click', startCreate);  
  });
  randomEl.addEventListener('click', function(e) {
    confirmChoice = e.target.innerText;
    textBox.value += 'You have chosen to RANDOMIZE your champion. Are you sure?' + '\n';
    // confirmEl.style.display = 'inline-block';
    randomEl.addEventListener('click', startRandom); 
  });
  }
  
  function initiateStart() {
    if (confirmChoice === 'Create') { 
      startCreate();
      return
    } else if (confirmChoice === 'Random') {
      startRandom();
      return
    } else {
      return
    }
  }
  
  function slickInit() {
    playerChoice = [];
  playerActionChoice = '';
  playerWeaponChoice = '';
  playerShieldChoice = '';
  playerArmorChoice = '';
  weapons = [gladius, pugio, scythe, spear, katana, halberd, claymore, battleAxe, warHammer, lavaSpit, lightningSpear, arcticBolt, magicMissile, mace, godHand, insanity, 
    daiKatana, windFury, oakCrush, handOfGod, whirlWind];
  shields = [smallShield, mediumShield, largeShield, greatShield];
  armors = [celt, knight, legionnaire, mage, poorKnight, viking];
  ranWeapon; 
  ranShield; 
  ranArmor; 
  startChoice = [];
  confirmChoice = '';
  // Combat Game Variables
  player = {
    weapon: {
      name: '',
      grip: '',
      attackType: '',
      damageType: '',
      physDam: 0,
      magDam: 0,
      crit: 0,
    },
    shield: {
      name: '',
      physRes: 0,
      magRes: 0,
      roll: 0,
    },
    armor: {
      name: '',
      type: '',
      physRes: 0,
      magRes: 0,
      dodge: 0,
    }
  };
  playerDodge; 
  playPhysPos = player.armor.physRes; 
  playMagPos = player.armor.magRes; 
  playDamTot = 0; 
  compDamTot = 0; 
  actionChoice = []; 
  playerInput = '';
  physAttDam;
  magAttDam;
  rollTimer = null;
  compAttackTimer;
  playAttackTimer;
  playHealth = 6000;
  compHealth = 9000;
  initiateEl.style.display = 'none';
  confirmEl.style.display = 'none';
  compEl.style.display = 'none';
  weaponBtns.style.display = 'none';
  shieldBtns.style.display = 'none';
  armorBtns.style.display = 'none';
  actionsEl.style.display = 'none';
  createEl.style.display = 'inline-block';
  randomEl.style.display = 'inline-block';
  duelEl.style.display = 'inline-block';
  backgroundEl.style.display = 'inline-block';
  diedEl.style.display = 'none';
  initiateEl.style.display = 'none';
  victoryEl.style.display = 'none';
  onceMoreEl.style.display = 'none';
  continueEl.style.display = 'none';
  }
  
  function startCreate() {
    textBox.value += 'You have chosen to start the duel. Good luck!' + '\n';
    createEl.style.display = 'none';
    randomEl.style.display = 'none';
    onceMoreEl.style.display = 'none';
    playerActionChoice = '';
    playerWeaponChoice = '';
    playerShieldChoice = '';
    textBox.value += 'You have chosen to CREATE your champion.' + '\n';
    playerChoose();
  }
  
  function startRandom() {
    textBox.value += 'You have chosen to start the duel. Good luck!' + '\n';
    createEl.style.display = 'none';
    randomEl.style.display = 'none';
    onceMoreEl.style.display = 'none';
    playerActionChoice = '';
    playerWeaponChoice = '';
    playerShieldChoice = '';
    textBox.value += 'You have chosen to RANDOMIZE your champion.' + '\n';
    playerRandom();
  }
  
  onceMoreEl.addEventListener('click', function(e) {
    slickInit();
    onceMoreEl.style.display = 'inline-block';
    createEl.addEventListener('click', function(e) {
      randomEl.style.display = 'none';
      confirmChoice = e.target.innerText;
      textBox.value += 'You have chosen to CREATE your champion. Are you sure? Select CREATE again to confirm' + '\n';
      // confirmEl.style.display = 'inline-block';  
      createEl.addEventListener('click', startCreate);  
    });
    randomEl.addEventListener('click', function(e) {
      createEl.style.display = 'none';
      confirmChoice = e.target.innerText;
      textBox.value += 'You have chosen to RANDOMIZE your champion. Are you sure? Select RANDOM again to confirm' + '\n';
      // confirmEl.style.display = 'inline-block';
      randomEl.addEventListener('click', startRandom); 
    });
  });
  function playWin() {
    textBox.value += 'Congratulations, you have won the Ascea! Would you like to play again?' + '\n';
    actionsEl.style.display = 'none';
    onceMoreEl.style.display = 'inline-block';
    compEl.style.display = 'none';
    victoryEl.style.display = 'inline-block';
    continueEl.style.display = 'inline-block';
    confirmChoice = '';
    stopCompTimer();
    stopTextScroll();
    showRoll();
    continueEl.addEventListener('click', function(e) {
      confirmChoice = e.target.innerText;
      textBox.value += 'You have chosen to CONTINUE your champion. Are you sure? Select CONTINUE again to confirm.' + '\n';
      // confirmEl.style.display = 'inline-block';
      continueEl.addEventListener('click', render);
        // Get rid of event listener aftewards
    })}
  
  
  function compWin() {
    textBox.value += 'YOU DIED' + '\n'
    onceMoreEl.style.display = 'inline-block';
    actionsEl.style.display = 'none';
    playEl.style.display = 'none';
    backgroundEl.style.display = 'none';
    compEl.style.display = 'none';
    diedEl.style.display = 'inline-block';
    confirmChoice = '';
    stopCompTimer();
    stopTextScroll();
    showRoll();
  }
  function render() {
    confirmEl.removeEventListener('click', render);
    createEl.removeEventListener('click', startCreate);
    randomEl.removeEventListener('click', startRandom);
    continueEl.removeEventListener('click', render);
    textBox.value += 'The game is now rendering, good luck!' + '\n';
    createEl.style.display = 'none';
    confirmEl.style.display = 'none';
    randomEl.style.display = 'none';
    duelEl.style.display = 'none';
    diedEl.style.display = 'none';
    backgroundEl.style.display = 'inline-block';
    playEl.style.display = 'inline-block';
    compEl.style.display = 'inline-block';
    victoryEl.style.display = 'none';
    armorBtns.style.display = 'none';
    actionsEl.style.display = 'inline-block';
    initiateEl.style.display = 'none';
    rollBtn.style.display = 'inline-block';
    victoryEl.style.display = 'none';
    onceMoreEl.style.display = 'none';
    continueEl.style.display = 'none';
    weaponBtns.style.display = 'none';
    armorBtns.style.display = 'none';
    shieldBtns.style.display = 'none';
    confirmChoice = '';
    randomEnemy();
    textBoxScroll();
    compEl.style.display = 'inline-block';
    weapTT.innerText = player.weapon.name + '\n' + 'Attack Type: ' + player.weapon.attackType + '\n' +  'Damage Type: ' + player.weapon.damageType +
    '\n' + 'Damage: ' + (player.weapon.magDam + player.weapon.physDam) + '\n' + 'Crit Chance: ' + player.weapon.crit + '%';
    shieldTT.innerText = player.shield.name + '\n' + 'Physical Defense: ' + player.shield.physRes + '\n' + 'Magical Defense: ' + player.shield.magRes +
    '\n' + 'Roll Timer: ' + (player.shield.roll * 10) +'s';
    armorTT.innerText = player.armor.name + '\n' + 'Physical Defense: ' + player.armor.physRes + '\n' + 'Magical Defense: ' + player.armor.magRes +
    '\n' + 'Dodge: ' + player.armor.dodge + '%';
    playPhysPos = player.armor.physRes;
    playMagPos = player.armor.magRes;
    player.weapon = player.weapon;
    player.armor = player.armor;
    player.shield = player.shield;
    compHealth = 9000;
    playHealth = 6000;
    playHealthBar.updateHealth(playHealth);
    compHealthBar.updateHealth(compHealth);
    compTimer();
    randomArena();
  }
  
  // Helm-Chest-Legs ratio: 15-10-5. Treating head strikes as most important and eating up most of the split.