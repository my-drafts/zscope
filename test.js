const Assert = require('assert');
const Scope = require('./').Scope;

class Test {
	constructor () {
	};

	run () {
		return [
			this.check_Scope,
			this.check_ScopeInit,
			this.check_ScopeHasItem,
			this.check_ScopeGetItem,
			this.check_ScopeSetItem,
			this.check_ScopeCount,
			this.check_ScopeKeys,
			this.call_ScopeSetItem,
			this.call_ScopeGetItem,
			this.call_ScopeHasItem
		]
		.map((method) => {
			try {
				method();
				return false;
			}
			catch (E) {
				return E;
			}
		})
		.filter((test) => test)
		.map((error) => error.message);
	};

	check_Scope () {
		let s = Scope;
		Assert.ok(s instanceof Object, 'Exporting class "Scope"');
	};

	check_ScopeInit () {
		let s = Scope.init;
		Assert.ok(s instanceof Function, 'Calling static method "init" of class "Scope"');
	}

	check_ScopeHasItem () {
		let s = Scope.init();
		Assert.ok(s.hasItem instanceof Function, 'Calling instance method "hasItem" of class "Scope"');
	}

	check_ScopeGetItem () {
		let s = Scope.init();
		Assert.ok(s.getItem instanceof Function, 'Calling instance method "getItem" of class "Scope"');
	}

	check_ScopeSetItem () {
		let s = Scope.init();
		Assert.ok(s.setItem instanceof Function, 'Calling instance method "setItem" of class "Scope"');
	}

	check_ScopeCount () {
		let s = Scope.init();
		Assert.equal(s.count, 0, 'Calling instance property "count" of class "Scope" with value "0"');
	}

	check_ScopeKeys () {
		let s = Scope.init();
		Assert.deepEqual(s.keys, [], 'Calling instance property "keys" of class "Scope" with value "[]"');
	}

	call_ScopeSetItem () {
		let s = Scope.init();
		s.setItem([], []);
		s.setItem('key-1', 'value-1');
		s.setItem('key-2', 'value-2');
		Assert.deepEqual(s.keys, [[], 'key-1', 'key-2'], 'Calling instance method "setItem" of class "Scope"');
	}

	call_ScopeGetItem () {
		let s = Scope.init();
		s.setItem([], []);
		s.setItem('key-1', 'value-1');
		s.setItem('key-2', 'value-2');
		Assert.deepEqual(s.getItem('key-1'), 'value-1', 'Calling instance method "getItem" of class "Scope"');
	}

	call_ScopeHasItem () {
		let s = Scope.init();
		s.setItem([], []);
		s.setItem('key-1', 'value-1');
		s.setItem('key-2', 'value-2');
		Assert.deepEqual(s.hasItem('key-1'), true, 'Calling instance method "hasItem" of class "Scope"');
	}
}

const test = new Test();
console.log(test.run());

