(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"),require("../xml/xml"),require("../meta"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror","../xml/xml","../meta"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("markdown",function(t,i){var n=e.getMode(t,"text/html");var r=n.name=="null";function a(i){if(e.findModeByName){var n=e.findModeByName(i);if(n)i=n.mime||n.mimes[0]}var r=e.getMode(t,i);return r.name=="null"?null:r}if(i.highlightFormatting===undefined)i.highlightFormatting=false;if(i.maxBlockquoteDepth===undefined)i.maxBlockquoteDepth=0;if(i.underscoresBreakWords===undefined)i.underscoresBreakWords=true;if(i.taskLists===undefined)i.taskLists=false;if(i.strikethrough===undefined)i.strikethrough=false;if(i.tokenTypeOverrides===undefined)i.tokenTypeOverrides={};var l={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough"};for(var f in l){if(l.hasOwnProperty(f)&&i.tokenTypeOverrides[f]){l[f]=i.tokenTypeOverrides[f]}}var o=/^([*\-_])(?:\s*\1){2,}\s*$/,s=/^[*\-+]\s+/,h=/^[0-9]+([.)])\s+/,u=/^\[(x| )\](?=\s)/,g=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,m=/^ *(?:\={1,}|-{1,})\s*$/,c=/^[^#!\[\]*_\\<>` "'(~]+/,d=new RegExp("^("+(i.fencedCodeBlocks===true?"~~~+|```+":i.fencedCodeBlocks)+")[ \\t]*([\\w+#-]*)");function k(e,t,i){t.f=t.inline=i;return i(e,t)}function p(e,t,i){t.f=t.block=i;return i(e,t)}function v(e){return!e||!/\S/.test(e.string)}function S(e){e.linkTitle=false;e.em=false;e.strong=false;e.strikethrough=false;e.quote=0;e.indentedCode=false;if(r&&e.f==L){e.f=b;e.block=x}e.trailingSpace=0;e.trailingSpaceNewLine=false;e.prevLine=e.thisLine;e.thisLine=null;return null}function x(t,n){var r=t.sol();var f=n.list!==false,c=n.indentedCode;n.indentedCode=false;if(f){if(n.indentationDiff>=0){if(n.indentationDiff<4){n.indentation-=n.indentationDiff}n.list=null}else if(n.indentation>0){n.list=null}else{n.list=false}}var p=null;if(n.indentationDiff>=4){t.skipToEnd();if(c||v(n.prevLine)){n.indentation-=4;n.indentedCode=true;return l.code}else{return null}}else if(t.eatSpace()){return null}else if((p=t.match(g))&&p[1].length<=6){n.header=p[1].length;if(i.highlightFormatting)n.formatting="header";n.f=n.inline;return q(n)}else if(!v(n.prevLine)&&!n.quote&&!f&&!c&&(p=t.match(m))){n.header=p[0].charAt(0)=="="?1:2;if(i.highlightFormatting)n.formatting="header";n.f=n.inline;return q(n)}else if(t.eat(">")){n.quote=r?1:n.quote+1;if(i.highlightFormatting)n.formatting="quote";t.eatSpace();return q(n)}else if(t.peek()==="["){return k(t,n,D)}else if(t.match(o,true)){n.hr=true;return l.hr}else if((v(n.prevLine)||f)&&(t.match(s,false)||t.match(h,false))){var S=null;if(t.match(s,true)){S="ul"}else{t.match(h,true);S="ol"}n.indentation=t.column()+t.current().length;n.list=true;while(n.listStack&&t.column()<n.listStack[n.listStack.length-1]){n.listStack.pop()}n.listStack.push(n.indentation);if(i.taskLists&&t.match(u,false)){n.taskList=true}n.f=n.inline;if(i.highlightFormatting)n.formatting=["list","list-"+S];return q(n)}else if(i.fencedCodeBlocks&&(p=t.match(d,true))){n.fencedChars=p[1];n.localMode=a(p[2]);if(n.localMode)n.localState=e.startState(n.localMode);n.f=n.block=T;if(i.highlightFormatting)n.formatting="code-block";n.code=-1;return q(n)}return k(t,n,n.inline)}function L(t,i){var a=n.token(t,i.htmlState);if(!r){var l=e.innerMode(n,i.htmlState);if(l.mode.name=="xml"&&l.state.tagStart===null&&(!l.state.context&&l.state.tokenize.isInText)||i.md_inside&&t.current().indexOf(">")>-1){i.f=b;i.block=x;i.htmlState=null}}return a}function T(e,t){if(t.fencedChars&&e.match(t.fencedChars,false)){t.localMode=t.localState=null;t.f=t.block=F;return null}else if(t.localMode){return t.localMode.token(e,t.localState)}else{e.skipToEnd();return l.code}}function F(e,t){e.match(t.fencedChars);t.block=x;t.f=b;t.fencedChars=null;if(i.highlightFormatting)t.formatting="code-block";t.code=1;var n=q(t);t.code=0;return n}function q(e){var t=[];if(e.formatting){t.push(l.formatting);if(typeof e.formatting==="string")e.formatting=[e.formatting];for(var n=0;n<e.formatting.length;n++){t.push(l.formatting+"-"+e.formatting[n]);if(e.formatting[n]==="header"){t.push(l.formatting+"-"+e.formatting[n]+"-"+e.header)}if(e.formatting[n]==="quote"){if(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=e.quote){t.push(l.formatting+"-"+e.formatting[n]+"-"+e.quote)}else{t.push("error")}}}}if(e.taskOpen){t.push("meta");return t.length?t.join(" "):null}if(e.taskClosed){t.push("property");return t.length?t.join(" "):null}if(e.linkHref){t.push(l.linkHref,"url")}else{if(e.strong){t.push(l.strong)}if(e.em){t.push(l.em)}if(e.strikethrough){t.push(l.strikethrough)}if(e.linkText){t.push(l.linkText)}if(e.code){t.push(l.code)}if(e.image){t.push(l.image)}if(e.imageAltText){t.push(l.imageAltText,"link")}if(e.imageMarker){t.push(l.imageMarker)}}if(e.header){t.push(l.header,l.header+"-"+e.header)}if(e.quote){t.push(l.quote);if(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=e.quote){t.push(l.quote+"-"+e.quote)}else{t.push(l.quote+"-"+i.maxBlockquoteDepth)}}if(e.list!==false){var r=(e.listStack.length-1)%3;if(!r){t.push(l.list1)}else if(r===1){t.push(l.list2)}else{t.push(l.list3)}}if(e.trailingSpaceNewLine){t.push("trailing-space-new-line")}else if(e.trailingSpace){t.push("trailing-space-"+(e.trailingSpace%2?"a":"b"))}return t.length?t.join(" "):null}function M(e,t){if(e.match(c,true)){return q(t)}return undefined}function b(t,r){var a=r.text(t,r);if(typeof a!=="undefined")return a;if(r.list){r.list=null;return q(r)}if(r.taskList){var f=t.match(u,true)[1]!=="x";if(f)r.taskOpen=true;else r.taskClosed=true;if(i.highlightFormatting)r.formatting="task";r.taskList=false;return q(r)}r.taskOpen=false;r.taskClosed=false;if(r.header&&t.match(/^#+$/,true)){if(i.highlightFormatting)r.formatting="header";return q(r)}var o=t.sol();var s=t.next();if(r.linkTitle){r.linkTitle=false;var h=s;if(s==="("){h=")"}h=(h+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");var g="^\\s*(?:[^"+h+"\\\\]+|\\\\\\\\|\\\\.)"+h;if(t.match(new RegExp(g),true)){return l.linkHref}}if(s==="`"){var m=r.formatting;if(i.highlightFormatting)r.formatting="code";t.eatWhile("`");var c=t.current().length;if(r.code==0){r.code=c;return q(r)}else if(c==r.code){var d=q(r);r.code=0;return d}else{r.formatting=m;return q(r)}}else if(r.code){return q(r)}if(s==="\\"){t.next();if(i.highlightFormatting){var k=q(r);var v=l.formatting+"-escape";return k?k+" "+v:v}}if(s==="!"&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,false)){r.imageMarker=true;r.image=true;if(i.highlightFormatting)r.formatting="image";return q(r)}if(s==="["&&r.imageMarker){r.imageMarker=false;r.imageAltText=true;if(i.highlightFormatting)r.formatting="image";return q(r)}if(s==="]"&&r.imageAltText){if(i.highlightFormatting)r.formatting="image";var k=q(r);r.imageAltText=false;r.image=false;r.inline=r.f=C;return k}if(s==="["&&t.match(/[^\]]*\](\(.*\)| ?\[.*?\])/,false)&&!r.image){r.linkText=true;if(i.highlightFormatting)r.formatting="link";return q(r)}if(s==="]"&&r.linkText&&t.match(/\(.*?\)| ?\[.*?\]/,false)){if(i.highlightFormatting)r.formatting="link";var k=q(r);r.linkText=false;r.inline=r.f=C;return k}if(s==="<"&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,false)){r.f=r.inline=w;if(i.highlightFormatting)r.formatting="link";var k=q(r);if(k){k+=" "}else{k=""}return k+l.linkInline}if(s==="<"&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,false)){r.f=r.inline=w;if(i.highlightFormatting)r.formatting="link";var k=q(r);if(k){k+=" "}else{k=""}return k+l.linkEmail}if(s==="<"&&t.match(/^(!--|\w)/,false)){var S=t.string.indexOf(">",t.pos);if(S!=-1){var x=t.string.substring(t.start,S);if(/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x))r.md_inside=true}t.backUp(1);r.htmlState=e.startState(n);return p(t,r,L)}if(s==="<"&&t.match(/^\/\w*?>/)){r.md_inside=false;return"tag"}var T=false;if(!i.underscoresBreakWords){if(s==="_"&&t.peek()!=="_"&&t.match(/(\w)/,false)){var F=t.pos-2;if(F>=0){var M=t.string.charAt(F);if(M!=="_"&&M.match(/(\w)/,false)){T=true}}}}if(s==="*"||s==="_"&&!T){if(o&&t.peek()===" "){}else if(r.strong===s&&t.eat(s)){if(i.highlightFormatting)r.formatting="strong";var d=q(r);r.strong=false;return d}else if(!r.strong&&t.eat(s)){r.strong=s;if(i.highlightFormatting)r.formatting="strong";return q(r)}else if(r.em===s){if(i.highlightFormatting)r.formatting="em";var d=q(r);r.em=false;return d}else if(!r.em){r.em=s;if(i.highlightFormatting)r.formatting="em";return q(r)}}else if(s===" "){if(t.eat("*")||t.eat("_")){if(t.peek()===" "){return q(r)}else{t.backUp(1)}}}if(i.strikethrough){if(s==="~"&&t.eatWhile(s)){if(r.strikethrough){if(i.highlightFormatting)r.formatting="strikethrough";var d=q(r);r.strikethrough=false;return d}else if(t.match(/^[^\s]/,false)){r.strikethrough=true;if(i.highlightFormatting)r.formatting="strikethrough";return q(r)}}else if(s===" "){if(t.match(/^~~/,true)){if(t.peek()===" "){return q(r)}else{t.backUp(2)}}}}if(s===" "){if(t.match(/ +$/,false)){r.trailingSpace++}else if(r.trailingSpace){r.trailingSpaceNewLine=true}}return q(r)}function w(e,t){var n=e.next();if(n===">"){t.f=t.inline=b;if(i.highlightFormatting)t.formatting="link";var r=q(t);if(r){r+=" "}else{r=""}return r+l.linkInline}e.match(/^[^>]+/,true);return l.linkInline}function C(e,t){if(e.eatSpace()){return null}var n=e.next();if(n==="("||n==="["){t.f=t.inline=B(n==="("?")":"]",0);if(i.highlightFormatting)t.formatting="link-string";t.linkHref=true;return q(t)}return"error"}var y={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/};function B(e){return function(t,n){var r=t.next();if(r===e){n.f=n.inline=b;if(i.highlightFormatting)n.formatting="link-string";var a=q(n);n.linkHref=false;return a}t.match(y[e]);n.linkHref=true;return q(n)}}function D(e,t){if(e.match(/^([^\]\\]|\\.)*\]:/,false)){t.f=_;e.next();if(i.highlightFormatting)t.formatting="link";t.linkText=true;return q(t)}return k(e,t,b)}function _(e,t){if(e.match(/^\]:/,true)){t.f=t.inline=H;if(i.highlightFormatting)t.formatting="link";var n=q(t);t.linkText=false;return n}e.match(/^([^\]\\]|\\.)+/,true);return l.linkText}function H(e,t){if(e.eatSpace()){return null}e.match(/^[^\s]+/,true);if(e.peek()===undefined){t.linkTitle=true}else{e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,true)}t.f=t.inline=b;return l.linkHref+" url"}var O={startState:function(){return{f:x,prevLine:null,thisLine:null,block:x,htmlState:null,indentation:0,inline:b,text:M,formatting:false,linkText:false,linkHref:false,linkTitle:false,code:0,em:false,strong:false,header:0,hr:false,taskList:false,list:false,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:false,strikethrough:false,fencedChars:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(n,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:false,linkTitle:t.linkTitle,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,header:t.header,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedChars:t.fencedChars}},token:function(e,t){t.formatting=false;if(e!=t.thisLine){var i=t.header||t.hr;t.header=0;t.hr=false;if(e.match(/^\s*$/,true)||i){S(t);if(!i)return null;t.prevLine=null}t.prevLine=t.thisLine;t.thisLine=e;t.taskList=false;t.trailingSpace=0;t.trailingSpaceNewLine=false;t.f=t.block;var n=e.match(/^\s*/,true)[0].replace(/\t/g,"    ").length;t.indentationDiff=Math.min(n-t.indentation,4);t.indentation=t.indentation+t.indentationDiff;if(n>0)return null}return t.f(e,t)},innerMode:function(e){if(e.block==L)return{state:e.htmlState,mode:n};if(e.localState)return{state:e.localState,mode:e.localMode};return{state:e,mode:O}},blankLine:S,getType:q,fold:"markdown"};return O},"xml");e.defineMIME("text/x-markdown","markdown")});