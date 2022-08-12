const express = require('express');
const router = express.Router();
const charCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth');

router.get('/characters/new', charCtrl.new);
router.post('/profiles/:id/characters', isLoggedIn, charCtrl.create);

module.exports = router;