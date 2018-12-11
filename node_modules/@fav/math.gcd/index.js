'use strict';

function gcd(x, y) {
  if (!x || !y) {
    return 1;
  }

  var m;
  while (y !== 0) {
    m = x % y;
    x = y;
    y = m;
  }

  return Math.abs(x);
}

module.exports = gcd;
