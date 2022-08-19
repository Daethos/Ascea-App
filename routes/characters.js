const express = require('express');
const router = express.Router();
const charCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth');

router.get('/profiles/:id/characters/new', charCtrl.new);
router.post('/profiles/:id/characters/new', isLoggedIn, charCtrl.create);
router.post('/profiles/:id', isLoggedIn, charCtrl.addToProfile);
router.delete('/characters/:id', isLoggedIn, charCtrl.delete);
router.put('/characters/:id', isLoggedIn, charCtrl.update);
router.get('/profiles/:profileId/characters/:charactersId', isLoggedIn, charCtrl.show);

module.exports = router;