(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.subtag = global.subtag || {})));
}(this, (function (exports) { 'use strict';

const empty = '';
const set = (method, pattern) => Object.defineProperty(method, 'pattern', { value: pattern });
const pattern = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;
const match = tag => tag.match(pattern) || [];

const parse = function(tag) {
  tag = match(tag);
  return {
    language: tag[1] || empty,
    extlang: tag[2] || empty,
    script: tag[3] || empty,
    region: tag[4] || empty
  }
};

const language = tag => match(tag)[1] || empty;
const extlang = tag => match(tag)[2] || empty;
const script = tag => match(tag)[3] || empty;
const region = tag => match(tag)[4] || empty;

set(language, /^[a-zA-Z]{2,3}$/);
set(extlang, /^[a-zA-Z]{3}$/);
set(region, /^[a-zA-Z]{2}$|^[0-9]{3}$/);
set(script, /^[a-zA-Z]{4}$/);

exports.parse = parse;
exports.language = language;
exports.extlang = extlang;
exports.script = script;
exports.region = region;

Object.defineProperty(exports, '__esModule', { value: true });

})));
