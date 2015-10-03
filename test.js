import test from 'ava';
import randomBit from './';

test('should return a random bit', t => {
	var bit = randomBit();
	t.true(bit === 0 || bit === 1);

	t.end();
});
