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
		for (let arg of args) {
			if (!(arg instanceof Object)) continue;
			for (let key in arg) this._set(key, arg[key]);
		}
	};

	get count () {
		return Object.keys(this._scope).length;
	}

	get keys () {
		return Object.keys(this._scope).map(key => Scope._4key(key));
	}

	_is (key) {
		return Scope._2key(key) in this._scope;
	}

	_get (key) {
		if (this._is(key)) return this._scope[Scope._2key(key)];
		throw new Error('Scope._get called with key not in Scope');
	}

	_set (key, value) {
		const result = this._is(key);
		this._scope[Scope._2key(key)] = value;
		return result;
	}

	_unset (key) {
		const result = this._is(key);
		delete this._scope[Scope._2key(key)];
		return result;
	}

	isItem (...args) {
		return this._is(...args);
	}

	getItem (...args) {
		return this._get(...args);
	}

	setItem (...args) {
		return this._set(...args);
	}

	unsetItem (...args) {
		return this._unset(...args);
	}

}

exports.Scope = Scope;
