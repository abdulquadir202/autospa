var express = require('express'),
 app = express(),
 partials= require('express-partials'),
 routes = require('./routes'),
 errorHandlers = require('./middleware/errorHandlers');


 app.set('view engine', 'ejs');
 app.set('view options', {defoultLayout:'layout'});
 app.use(express.static(__dirname + '/static'));
 app.use(partials());

 

 app.get('/', routes.index);

 app.get('/error', function(req, res, next) {
 	next(new Error('A contrived error'));
 });

 app.listen(3006)
 console.log('server running port 3006');