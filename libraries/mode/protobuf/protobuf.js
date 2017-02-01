(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64"];var n=t(r);e.registerHelper("hintWords","protobuf",r);var i=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");function o(e){if(e.eatSpace())return null;if(e.match("//")){e.skipToEnd();return"comment"}if(e.match(/^[0-9\.+-]/,false)){if(e.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}if(e.match(/^"([^"]|(""))*"/)){return"string"}if(e.match(/^'([^']|(''))*'/)){return"string"}if(e.match(n)){return"keyword"}if(e.match(i)){return"variable"}e.next();return null}e.defineMode("protobuf",function(){return{token:o}});e.defineMIME("text/x-protobuf","protobuf")});