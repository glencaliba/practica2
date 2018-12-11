'use strict';

var gcd = require('@fav/math.gcd');

function lcm(x, y) {
  var z = gcd(x, y);
  return Math.abs(x / z * y);
}

module.exports = lcm;
