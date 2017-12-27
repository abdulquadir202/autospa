module.exports.index = index;

function index (req, res) {
	res.render('index', {
		layout:'layout',
		title:'home page'
	});
};