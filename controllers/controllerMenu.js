// Display list of all Genre.
exports.show = function(req, res) {

    //todo prepare url here

    res.render('menu', {title:'Mola Cafe', menuUrl:'/img/'+req.params.id });
};