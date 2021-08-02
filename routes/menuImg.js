// menuImgae route module.

var express = require('express');
var router = express.Router();
var menuImageController = require('../controllers/controllerMenuImage.js')

router.get('/img/:id', menuImageController.index);

module.exports = router;