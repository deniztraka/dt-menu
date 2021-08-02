var menu = require('./../db');

exports.getById = function (id) {
    return menu.db.find(e => e.id == id);
};