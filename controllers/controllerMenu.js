var menuRepo = require('./../repositories/menuRepo.js');

exports.show = function (req, res) {

    var menuObj = menuRepo.getById(req.params.id);

    res.render('menu', {
        menu: menuObj
    });
};