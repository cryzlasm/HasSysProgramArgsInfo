(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("mumps",function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]");var r=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))");var n=new RegExp("^[\\.,:]");var i=new RegExp("[()]");var o=new RegExp("^[%A-Za-z][A-Za-z0-9]*");var a=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"];var $=["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"];var c=e($);var f=e(a);function m(e,a){if(e.sol()){a.label=true;a.commandMode=0}var $=e.peek();if($==" "||$=="\t"){a.label=false;if(a.commandMode==0)a.commandMode=1;else if(a.commandMode<0||a.commandMode==2)a.commandMode=0}else if($!="."&&a.commandMode>0){if($==":")a.commandMode=-1;else a.commandMode=2}if($==="("||$==="\t")a.label=false;if($===";"){e.skipToEnd();return"comment"}if(e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/))return"number";if($=='"'){if(e.skipTo('"')){e.next();return"string"}else{e.skipToEnd();return"error"}}if(e.match(r)||e.match(t))return"operator";if(e.match(n))return null;if(i.test($)){e.next();return"bracket"}if(a.commandMode>0&&e.match(f))return"variable-2";if(e.match(c))return"builtin";if(e.match(o))return"variable";if($==="$"||$==="^"){e.next();return"builtin"}if($==="@"){e.next();return"string-2"}if(/[\w%]/.test($)){e.eatWhile(/[\w%]/);return"variable"}e.next();return"error"}return{startState:function(){return{label:false,commandMode:0}},token:function(e,t){var r=m(e,t);if(t.label)return"tag";return r}}});e.defineMIME("text/x-mumps","mumps")});