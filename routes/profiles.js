const express = require('express');
const router = express.Router();
const proCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', proCtrl.index);
router.get('/', proCtrl.new);
router.get('/:id', proCtrl.show);
router.post('/new', proCtrl.create);

module.exports = router;