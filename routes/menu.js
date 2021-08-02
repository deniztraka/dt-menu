// menu route module.

var express = require('express');
var router = express.Router();
var menuController = require('../controllers/controllerMenu.js')

router.get('/menu/:id', menuController.show);

module.exports = router;