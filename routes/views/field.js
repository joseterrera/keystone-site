var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
locals.section = 'practice';

  locals.section = 'practice';
  locals.filters = {
    field: req.params.field
  }
  locals.data = {
    fields:[]
  }

view.on('init', function(next){
  var q = keystone.list('Field').model.findOne({
    slug: locals.filters.field
  });

  q.exec(function(err, result){
    locals.data.field = result;
    next(err);
  });
});


  view.query('fields', keystone.list("Field").model.find());

  // Render View
  view.render('field');
}