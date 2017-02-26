'use strict';

var Promise = require('native-or-bluebird');

module.exports = function (ms) {
	return new Promise(res => setTimeout(res, ms));
};
