var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); //M06U03


require('dotenv').config();//M05U03
var session = require('express-session');//M05U04
var fileUpload = require('express-fileupload');// M06U02
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
//var adminRouter = require('./routes/admin/novedades');// anterior de novedadades
var adminRouter = require('./routes/admin/panel');// CAMBIO novedades por panel
var novedadesRouter = require('./routes/admin/novedades');// novedades
var destinosRouter = require('./routes/admin/destinos');// destinos

var apiRouter = require('./routes/api'); // M06U03
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*M05U04 . session----------------------------------- */
app.use(session({
	secret: 'PW2021awqyeudj',
	cookie: { maxAge: null },
	resave: false,
	saveUninitialized: true
}))
//seguridad
secured = async (req, res, next) => {
	try {
		console.log(req.session.id_usuario);
		if (req.session.id_usuario) {
			next();
		} else {
			res.redirect('/admin/login');
		}
	} catch (error) {
		console.log(error);
	}
}
/*---------------------------------------- */

/*M06U03----------------------------------- */
app.use(fileUpload({
	useTempFiles: true,
	tempFileDir: '/tmp/'
}));
/*---------------------------------------- */

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/panel', secured, adminRouter);//panel
app.use('/admin/novedades', secured, novedadesRouter);//Novedades
app.use('/admin/destinos', secured, destinosRouter);//Destinos
app.use('/api', cors(), apiRouter);//M0603

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
