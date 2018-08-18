let express = require('express');
//let cookieParser = require('cookie-parser');

let indexRouters = require('./routes/index');
let apiRouters = require('./routes/api');

const app = express();

//==============================Settings==============================//

// app.set('views', './views');
// app.set('view engine', 'pug');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static('./public'));

//==============================Routers==============================//

app.get('/', indexRouters['/']);

app.get('/api', apiRouters['/api']);

// 404
app.get('*', indexRouters['404']);

module.exports = app;
