const express = require('express');
const router = express.Router();
const gameCtrl = require('../controllers/games');
const isLoggedIn = require('../config/auth');

router.get('/profiles/:profileId/characters/:characterId', gameCtrl.returnToChar);
router.get('/profiles/:profileId/characters/:charactersId/games/show', isLoggedIn, gameCtrl.show);

module.exports = router;