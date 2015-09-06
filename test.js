'use strict';
var test = require('ava');
var randomBit = require('./');

test('should return a random bit', function (t) {
	var bit = randomBit();
	t.true(bit === 0 || bit === 1);

	t.end();
});
