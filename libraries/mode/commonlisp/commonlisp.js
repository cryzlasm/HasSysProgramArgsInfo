(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("commonlisp",function(e){var t=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/;var n=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/;var r=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/;var i=/[^\s'`,@()\[\]";]/;var o;function l(e){var t;while(t=e.next()){if(t=="\\")e.next();else if(!i.test(t)){e.backUp(1);break}}return e.current()}function c(e,i){if(e.eatSpace()){o="ws";return null}if(e.match(r))return"number";var c=e.next();if(c=="\\")c=e.next();if(c=='"')return(i.tokenize=u)(e,i);else if(c=="("){o="open";return"bracket"}else if(c==")"||c=="]"){o="close";return"bracket"}else if(c==";"){e.skipToEnd();o="ws";return"comment"}else if(/['`,@]/.test(c))return null;else if(c=="|"){if(e.skipTo("|")){e.next();return"symbol"}else{e.skipToEnd();return"error"}}else if(c=="#"){var c=e.next();if(c=="["){o="open";return"bracket"}else if(/[+\-=\.']/.test(c))return null;else if(/\d/.test(c)&&e.match(/^\d*#/))return null;else if(c=="|")return(i.tokenize=s)(e,i);else if(c==":"){l(e);return"meta"}else return"error"}else{var f=l(e);if(f==".")return null;o="symbol";if(f=="nil"||f=="t"||f.charAt(0)==":")return"atom";if(i.lastType=="open"&&(t.test(f)||n.test(f)))return"keyword";if(f.charAt(0)=="&")return"variable-2";return"variable"}}function u(e,t){var n=false,r;while(r=e.next()){if(r=='"'&&!n){t.tokenize=c;break}n=!n&&r=="\\"}return"string"}function s(e,t){var n,r;while(n=e.next()){if(n=="#"&&r=="|"){t.tokenize=c;break}r=n}o="ws";return"comment"}return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:c}},token:function(t,r){if(t.sol()&&typeof r.ctx.indentTo!="number")r.ctx.indentTo=r.ctx.start+1;o=null;var i=r.tokenize(t,r);if(o!="ws"){if(r.ctx.indentTo==null){if(o=="symbol"&&n.test(t.current()))r.ctx.indentTo=r.ctx.start+e.indentUnit;else r.ctx.indentTo="next"}else if(r.ctx.indentTo=="next"){r.ctx.indentTo=t.column()}r.lastType=o}if(o=="open")r.ctx={prev:r.ctx,start:t.column(),indentTo:null};else if(o=="close")r.ctx=r.ctx.prev||r.ctx;return i},indent:function(e,t){var n=e.ctx.indentTo;return typeof n=="number"?n:e.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}});e.defineMIME("text/x-common-lisp","commonlisp")});