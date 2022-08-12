const express = require('express');
const router = express.Router();
const proCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', proCtrl.index);
router.get('/:id', isLoggedIn, proCtrl.show);

module.exports = router;