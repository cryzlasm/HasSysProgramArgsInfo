(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("jinja2",function(){var e=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,i=["true","false"],r=/^(\d[+\-\*\/])?\d+(\.\d+)?/;e=new RegExp("(("+e.join(")|(")+"))\\b");i=new RegExp("(("+i.join(")|(")+"))\\b");function a(a,o){var f=a.peek();if(o.incomment){if(!a.skipTo("#}")){a.skipToEnd()}else{a.eatWhile(/\#|}/);o.incomment=false}return"comment"}else if(o.intag){if(o.operator){o.operator=false;if(a.match(i)){return"atom"}if(a.match(r)){return"number"}}if(o.sign){o.sign=false;if(a.match(i)){return"atom"}if(a.match(r)){return"number"}}if(o.instring){if(f==o.instring){o.instring=false}a.next();return"string"}else if(f=="'"||f=='"'){o.instring=f;a.next();return"string"}else if(a.match(o.intag+"}")||a.eat("-")&&a.match(o.intag+"}")){o.intag=false;return"tag"}else if(a.match(n)){o.operator=true;return"operator"}else if(a.match(t)){o.sign=true}else{if(a.eat(" ")||a.sol()){if(a.match(e)){return"keyword"}if(a.match(i)){return"atom"}if(a.match(r)){return"number"}if(a.sol()){a.next()}}else{a.next()}}return"variable"}else if(a.eat("{")){if(f=a.eat("#")){o.incomment=true;if(!a.skipTo("#}")){a.skipToEnd()}else{a.eatWhile(/\#|}/);o.incomment=false}return"comment"}else if(f=a.eat(/\{|%/)){o.intag=f;if(f=="{"){o.intag="}"}a.eat("-");return"tag"}}a.next()}return{startState:function(){return{tokenize:a}},token:function(e,n){return n.tokenize(e,n)}}})});