exports.notFound = function notFound (req, res, next) {
res.status(404).render('404', {
	layout:'layout',
	title:'page not found'
});
};

exports.error = function error (req, res, next) {
	console.log(error);
	res.status(500).render('500', {
		layout:'layout',
		title:'internal server error'
	});
};