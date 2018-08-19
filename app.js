let express = require('express');
let bodyParser = require('body-parser');

let indexRouters = require('./routes/index');
let api = require('./routes/api');

const app = express();

//==============================Settings==============================//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));

//==============================Routers==============================//

app.get('/', indexRouters['/']);

app.use('/api', api);

// 404
app.get('*', indexRouters['404']);

module.exports = app;
