// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.0.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-first@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-first-code-point@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-first-grapheme-cluster@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";var p=["grapheme","code_point","code_unit"],h={grapheme:d,code_point:n,code_unit:o},j=i(p);function g(i){var o,n,d,g;if(!e(i))throw new TypeError(m("1gp3F,Ex",i));if(d={mode:"grapheme"},1===(n=arguments.length))g=1;else if(2===n){if(t(g=arguments[1]))o=g,g=1;else if(!s(g))throw new TypeError(m("1gp3X,F1",g))}else{if(!s(g=arguments[1]))throw new TypeError(m("1gp3X,F1",g));if(!t(o=arguments[2]))throw new TypeError(m("1gp2V,FD",o))}if(o&&r(o,"mode")&&(d.mode=o.mode,!j(d.mode)))throw new TypeError(m("1gpLi","mode",p.join('", "'),d.mode));return h[d.mode](i,g)}export{g as default};
//# sourceMappingURL=index.mjs.map
