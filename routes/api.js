let routes = [];

routes['/api'] = function(req, res) {
    res.send('api');
};

module.exports = routes;