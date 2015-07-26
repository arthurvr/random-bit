'use strict';
var assert = require('assert');
var randomBit = require('./');

it('should return a random bit', function () {
	var bit = randomBit();
	assert(bit === 0 || bit === 1);
});
