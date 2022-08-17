const express = require('express');
const router = express.Router();
const charCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth');

router.get('/profiles/:id/characters/new', charCtrl.new);
router.post('/profiles/:id/characters/new', charCtrl.create);
router.post('/profiles/:id', charCtrl.addToProfile);
router.post('profiles/:id', charCtrl.delete);

module.exports = router;