#!/usr/bin/env node

'use strict';

class Scope {

	static init (...args) {
		return Object.freeze(new Scope(...args));
	};

	static _2key (key) {
		return JSON.stringify(key);
	}

	static _4key (key) {
		return JSON.parse(key);
	}

	constructor (...args) {
		this._scope = {};
		for (let a of args) {
			if (!(a instanceof Object)) continue;
			for (let k in a) this.setItem(k, a[k]);
		}
	};

	get count () {
		return Object.keys(this._scope).length;
	}

	get keys () {
		return Object.keys(this._scope).map(key => Scope._4key(key));
	}

	hasItem (key) {
		return Scope._2key(key) in this._scope;
	}

	getItem (key) {
		if (this.hasItem(key)) return this._scope[Scope._2key(key)];
		throw new Error('Scope.getItem called with key not in Scope');
	}

	setItem (key, value) {
		const result = this.hasItem(key);
		this._scope[Scope._2key(key)] = value;
		return result;
	}

}

exports.Scope = Scope;
