// Display list of all Genre.
var path = require('path');
var menuRepo = require('./../repositories/menuRepo.js');

exports.index = function(req, res) {
    
    var menuObj = menuRepo.getById(req.params.id);

    //todo prepare url here
    res.sendFile(path.resolve('public/menuImgs/'+req.params.id + '/' + menuObj.menuImagePath));
};