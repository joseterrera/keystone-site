var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'practice';

  // Load Products
  view.query('fields', keystone.list('Field').model.find());

  // Render View
  view.render('fields');
}