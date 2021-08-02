// Display list of all Genre.
var path = require('path');

exports.index = function(req, res) {

    //todo prepare url here
    res.sendFile(path.resolve('public/menuImgs/'+req.params.id + '/index.jpg'));

    //res.sendFile('../menuImgs/'+req.params.id + '/index.jpg');
    //res.sendFile('public/menuImgs/'+req.params.id + '/index.jpg',{ root: __dirname });
};