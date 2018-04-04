const assert = require('assert');
const Scope = require('..').Scope;

describe('Scope', () => {
	it('class', () => {
		assert.ok(Scope instanceof Function);
		let s = new Scope();
		assert.ok(s instanceof Object);
	});

	it('init', () => {
		assert.ok(Scope.init instanceof Function);
		let s = Scope.init({ 'key-1': 'value-1' }, { 'key-2': 'value-2' });
		assert.deepEqual(s.hasItem('key-1'), true);
	});

	it('hasItem', () => {
		let s = Scope.init({'key-1': 'value-1'}, {'key-2': 'value-2'});
		assert.ok(s.hasItem instanceof Function, 'Calling instance method "hasItem" of class "Scope"');
		assert.deepEqual(s.hasItem('key-1'), true, 'Calling instance method "hasItem" of class "Scope"');
	});

	it('getItem', () => {
		let s = Scope.init({'key-1': 'value-1'}, {'key-2': 'value-2'});
		assert.ok(s.getItem instanceof Function, 'Calling instance method "getItem" of class "Scope"');
		assert.deepEqual(s.getItem('key-1'), 'value-1', 'Calling instance method "getItem" of class "Scope"');
		try {
			s.getItem('key-3');
			throw new Error('Calling instance method "getItem" of class "Scope" with wrong key');
		}
		catch (E) {
		}
	});

	it('setItem', () => {
		let s = Scope.init({'key-1': 'value-1'}, {'key-2': 'value-2'});
		assert.ok(s.setItem instanceof Function, 'Calling instance method "setItem" of class "Scope"');
		s.setItem([], []);
		assert.deepEqual(s.keys, ['key-1', 'key-2', []], 'Calling instance method "setItem" of class "Scope"');
	});

	it('count', () => {
		let s = Scope.init({'key-1': 'value-1'}, {'key-2': 'value-2'});
		assert.equal(s.count, 2, 'Calling instance property "count" of class "Scope" with value "2"');
	});

	it('keys', () => {
		let s = Scope.init();
		assert.deepEqual(s.keys, [], 'Calling instance property "keys" of class "Scope" with value "[]"');
	});

});

