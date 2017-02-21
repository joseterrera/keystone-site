var keystone = require('keystone');
var Types = keystone.Field.Types;

var Field = new keystone.List('Field', {
	map: {name: 'title'},
	singular: 'Field',
	plural: 'Fields',
	autokey: {path: 'slug', from: 'title', unique: true }
});


Field.add({
	title: {type: String, requires: true },
	price: { type: Number },
	description: { type: Types.Html, wysiwyg: true, height: 300 },
	image: { type: Types.CloudinaryImage },
	publishedDate: { type: Date, default: Date.now}
});



Field.register();