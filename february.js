'use strict';

let february = require('wikijs').default().page('february');

module.exports = {
	data : () => february.then(page => page.content()),
	images : () => february.then(page => page.images())
};