// menuImgae route module.

var express = require('express');
var router = express.Router();
var controllerQrCode = require('../controllers/controllerQrCode.js')

router.get('/qrcode/:id', controllerQrCode.show);

module.exports = router;