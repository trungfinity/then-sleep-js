'use strict';

try {
  var Promise = require('bluebird');
} catch (_) {
  var Promise = global.Promise;
}

module.exports = function (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
