// Display list of all Genre.
var path = require('path');
var menuRepo = require('../repositories/menuRepo.js');
var QRCode = require('qrcode')

exports.show = function (req, res) {
    var img = null;

    var menuUrl = req.protocol + '://' + req.get('host') + '/menu/' + req.params.id;
    QRCode.toDataURL(menuUrl, {
        errorCorrectionLevel: 'H'
    }, function (err, url) {

        // prepare img buffer
        img = Buffer.from(url.split(',')[1], 'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': img.length
        });
        // send img response
        res.end(img);
    })
};