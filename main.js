(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.subtag = global.subtag || {})));
}(this, (function (exports) { 'use strict';

const dash = /[_-]+/;
const empty = '';
const set = (method, pattern) => Object.defineProperty(method, 'pattern', { value: pattern });

const language = tag => tag.split(dash).slice(0, 1).find(sub => language.pattern.test(sub)) || empty;
const extlang = tag => tag.split(dash).slice(1, 2).find(sub => extlang.pattern.test(sub)) || empty;
const region = tag => tag.split(dash).slice(1).reverse().find(sub => region.pattern.test(sub)) || empty;
const script = tag => tag.split(dash).slice(1).reverse().find(sub => script.pattern.test(sub)) || empty;

set(language, /^[a-zA-Z]{2,3}$/);
set(extlang, /^[a-zA-Z]{3}$/);
set(region, /^[a-zA-Z]{2}$|^[0-9]{3}$/);
set(script, /^[a-zA-Z]{4}$/);

exports.language = language;
exports.extlang = extlang;
exports.region = region;
exports.script = script;

Object.defineProperty(exports, '__esModule', { value: true });

})));
