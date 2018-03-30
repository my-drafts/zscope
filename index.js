#!/usr/bin/env node

'use strict';

class Scope {
	static init () {
		return Object.freeze(new Scope(...arguments));
	};

	static _2key (key) {
		return JSON.stringify(key);
	}

	static _4key (key) {
		return JSON.parse(key);
	}

	constructor () {
		this._scope = {};
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
		if (!this.hasItem(key)) throw 1;
		else return this._scope[Scope._2key(key)];
	}

	setItem (key, value) {
		const result = this.hasItem(key);
		this._scope[Scope._2key(key)] = value;
		return result;
	}

}

exports.Scope = Scope;
