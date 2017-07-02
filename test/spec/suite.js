'use strict';

let february = require('../../february.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return february.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return february.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


