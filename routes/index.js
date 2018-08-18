let routes = [];

routes['/'] = function(req, res) {
    res.sendFile('/views/index.html', {root: './' });
};

routes['404'] = function(req, res) {
    res.sendFile('/views/404.html', {root: './' });
};

module.exports = routes;
