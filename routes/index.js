exports.index = function(req, res){
  res.render('index');
};
exports.menu = require('./menu');
exports.menuImg = require('./menuImg');
exports.qrcode = require('./qrcode');