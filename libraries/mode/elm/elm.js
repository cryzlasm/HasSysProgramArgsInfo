(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("elm",function(){function e(e,r,t){r(t);return t(e,r)}var r=/[a-z_]/;var t=/[A-Z]/;var n=/[0-9]/;var i=/[0-9A-Fa-f]/;var a=/[0-7]/;var f=/[a-z_A-Z0-9\']/;var u=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/;var o=/[(),;[\]`{}]/;var l=/[ \t\v\f]/;function c(){return function(c,m){if(c.eatWhile(l)){return null}var h=c.next();if(o.test(h)){if(h=="{"&&c.eat("-")){var x="comment";if(c.eat("#"))x="meta";return e(c,m,v(x,1))}return null}if(h=="'"){if(c.eat("\\"))c.next();else c.next();if(c.eat("'"))return"string";return"error"}if(h=='"'){return e(c,m,s)}if(t.test(h)){c.eatWhile(f);if(c.eat("."))return"qualifier";return"variable-2"}if(r.test(h)){var d=c.pos===1;c.eatWhile(f);return d?"variable-3":"variable"}if(n.test(h)){if(h=="0"){if(c.eat(/[xX]/)){c.eatWhile(i);return"integer"}if(c.eat(/[oO]/)){c.eatWhile(a);return"number"}}c.eatWhile(n);var x="number";if(c.eat(".")){x="number";c.eatWhile(n)}if(c.eat(/[eE]/)){x="number";c.eat(/[-+]/);c.eatWhile(n)}return x}if(u.test(h)){if(h=="-"&&c.eat(/-/)){c.eatWhile(/-/);if(!c.eat(u)){c.skipToEnd();return"comment"}}c.eatWhile(u);return"builtin"}return"error"}}function v(e,r){if(r==0){return c()}return function(t,n){var i=r;while(!t.eol()){var a=t.next();if(a=="{"&&t.eat("-")){++i}else if(a=="-"&&t.eat("}")){--i;if(i==0){n(c());return e}}}n(v(e,i));return e}}function s(e,r){while(!e.eol()){var t=e.next();if(t=='"'){r(c());return"string"}if(t=="\\"){if(e.eol()||e.eat(l)){r(m);return"string"}if(!e.eat("&"))e.next()}}r(c());return"error"}function m(r,t){if(r.eat("\\")){return e(r,t,s)}r.next();t(c());return"error"}var h=function(){var e={};var r=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"];for(var t=r.length;t--;)e[r[t]]="keyword";return e}();return{startState:function(){return{f:c()}},copyState:function(e){return{f:e.f}},token:function(e,r){var t=r.f(e,function(e){r.f=e});var n=e.current();return h.hasOwnProperty(n)?h[n]:t}}});e.defineMIME("text/x-elm","elm")});