const express = require('express');
const router = express.Router();
const proCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', proCtrl.index);
router.get('/new', isLoggedIn, proCtrl.new);
router.get('/:id', isLoggedIn, proCtrl.show);
router.post('/', isLoggedIn, proCtrl.create);

module.exports = router;