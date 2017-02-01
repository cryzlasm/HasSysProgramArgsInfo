(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("ttcn",function(e,t){var n=e.indentUnit,r=t.keywords||{},i=t.builtin||{},o=t.timerOps||{},s=t.portOps||{},a=t.configOps||{},l=t.verdictOps||{},u=t.sutOps||{},c=t.functionOps||{},f=t.verdictConsts||{},p=t.booleanConsts||{},d=t.otherConsts||{},m=t.types||{},b=t.visibilityModifiers||{},h=t.templateMatch||{},y=t.multiLineStrings,v=t.indentStatements!==false;var x=/[+\-*&@=<>!\/]/;var g;function k(e,t){var n=e.next();if(n=='"'||n=="'"){t.tokenize=O(n);return t.tokenize(e,t)}if(/[\[\]{}\(\),;\\:\?\.]/.test(n)){g=n;return"punctuation"}if(n=="#"){e.skipToEnd();return"atom preprocessor"}if(n=="%"){e.eatWhile(/\b/);return"atom ttcn3Macros"}if(/\d/.test(n)){e.eatWhile(/[\w\.]/);return"number"}if(n=="/"){if(e.eat("*")){t.tokenize=w;return w(e,t)}if(e.eat("/")){e.skipToEnd();return"comment"}}if(x.test(n)){if(n=="@"){if(e.match("try")||e.match("catch")||e.match("lazy")){return"keyword"}}e.eatWhile(x);return"operator"}e.eatWhile(/[\w\$_\xa1-\uffff]/);var y=e.current();if(r.propertyIsEnumerable(y))return"keyword";if(i.propertyIsEnumerable(y))return"builtin";if(o.propertyIsEnumerable(y))return"def timerOps";if(a.propertyIsEnumerable(y))return"def configOps";if(l.propertyIsEnumerable(y))return"def verdictOps";if(s.propertyIsEnumerable(y))return"def portOps";if(u.propertyIsEnumerable(y))return"def sutOps";if(c.propertyIsEnumerable(y))return"def functionOps";if(f.propertyIsEnumerable(y))return"string verdictConsts";if(p.propertyIsEnumerable(y))return"string booleanConsts";if(d.propertyIsEnumerable(y))return"string otherConsts";if(m.propertyIsEnumerable(y))return"builtin types";if(b.propertyIsEnumerable(y))return"builtin visibilityModifiers";if(h.propertyIsEnumerable(y))return"atom templateMatch";return"variable"}function O(e){return function(t,n){var r=false,i,o=false;while((i=t.next())!=null){if(i==e&&!r){var s=t.peek();if(s){s=s.toLowerCase();if(s=="b"||s=="h"||s=="o")t.next()}o=true;break}r=!r&&i=="\\"}if(o||!(r||y))n.tokenize=null;return"string"}}function w(e,t){var n=false,r;while(r=e.next()){if(r=="/"&&n){t.tokenize=null;break}n=r=="*"}return"comment"}function E(e,t,n,r,i){this.indented=e;this.column=t;this.type=n;this.align=r;this.prev=i}function C(e,t,n){var r=e.indented;if(e.context&&e.context.type=="statement")r=e.context.indented;return e.context=new E(r,t,n,null,e.context)}function I(e){var t=e.context.type;if(t==")"||t=="]"||t=="}")e.indented=e.context.indented;return e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new E((e||0)-n,0,"top",false),indented:0,startOfLine:true}},token:function(e,t){var n=t.context;if(e.sol()){if(n.align==null)n.align=false;t.indented=e.indentation();t.startOfLine=true}if(e.eatSpace())return null;g=null;var r=(t.tokenize||k)(e,t);if(r=="comment")return r;if(n.align==null)n.align=true;if((g==";"||g==":"||g==",")&&n.type=="statement"){I(t)}else if(g=="{")C(t,e.column(),"}");else if(g=="[")C(t,e.column(),"]");else if(g=="(")C(t,e.column(),")");else if(g=="}"){while(n.type=="statement")n=I(t);if(n.type=="}")n=I(t);while(n.type=="statement")n=I(t)}else if(g==n.type)I(t);else if(v&&((n.type=="}"||n.type=="top")&&g!=";"||n.type=="statement"&&g=="newstatement"))C(t,e.column(),"statement");t.startOfLine=false;return r},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});function t(e){var t={},n=e.split(" ");for(var r=0;r<n.length;++r)t[n[r]]=true;return t}function n(t,n){if(typeof t=="string")t=[t];var r=[];function i(e){if(e)for(var t in e)if(e.hasOwnProperty(t))r.push(t)}i(n.keywords);i(n.builtin);i(n.timerOps);i(n.portOps);if(r.length){n.helperType=t[0];e.registerHelper("hintWords",t[0],r)}for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}n(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:t("activate address alive all alt altstep and and4b any"+" break case component const continue control deactivate"+" display do else encode enumerated except exception"+" execute extends extension external for from function"+" goto group if import in infinity inout interleave"+" label language length log match message mixed mod"+" modifies module modulepar mtc noblock not not4b nowait"+" of on optional or or4b out override param pattern port"+" procedure record recursive rem repeat return runs select"+" self sender set signature system template testcase to"+" type union value valueof var variant while with xor xor4b"),builtin:t("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue"+" decomp decvalue float2int float2str hex2bit hex2int"+" hex2oct hex2str int2bit int2char int2float int2hex"+" int2oct int2str int2unichar isbound ischosen ispresent"+" isvalue lengthof log2str oct2bit oct2char oct2hex oct2int"+" oct2str regexp replace rnd sizeof str2bit str2float"+" str2hex str2int str2oct substr unichar2int unichar2char"+" enum2int"),types:t("anytype bitstring boolean char charstring default float"+" hexstring integer objid octetstring universal verdicttype timer"),timerOps:t("read running start stop timeout"),portOps:t("call catch check clear getcall getreply halt raise receive"+" reply send trigger"),configOps:t("create connect disconnect done kill killed map unmap"),verdictOps:t("getverdict setverdict"),sutOps:t("action"),functionOps:t("apply derefers refers"),verdictConsts:t("error fail inconc none pass"),booleanConsts:t("true false"),otherConsts:t("null NULL omit"),visibilityModifiers:t("private public friend"),templateMatch:t("complement ifpresent subset superset permutation"),multiLineStrings:true})});