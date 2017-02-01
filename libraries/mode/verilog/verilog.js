(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("verilog",function(t,r){var n=t.indentUnit,i=r.statementIndentUnit||n,a=r.dontAlignCalls,l=r.noIndentKeywords||[],o=r.multiLineStrings,s=r.hooks||{};function u(e){var t={},r=e.split(" ");for(var n=0;n<r.length;++n)t[r[n]]=true;return t}var f=u("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind "+"bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config "+"const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable "+"dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup "+"endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask "+"enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin "+"function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import "+"incdir include initial inout input inside instance int integer interconnect interface intersect join join_any "+"join_none large let liblist library local localparam logic longint macromodule matches medium modport module "+"nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed "+"parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup "+"pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg "+"reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime "+"s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify "+"specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on "+"table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior "+"trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void "+"wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor");var c=/[\+\-\*\/!~&|^%=?:]/;var v=/[\[\]{}()]/;var d=/\d[0-9_]*/;var p=/\d*\s*'s?d\s*\d[0-9_]*/i;var C=/\d*\s*'s?b\s*[xz01][xz01_]*/i;var m=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i;var h=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i;var w=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i;var g=/^((\w+)|[)}\]])/;var x=/[)}\]]/;var k;var y;var b=u("case checker class clocking config function generate interface module package"+"primitive program property specify sequence table task");var _={};for(var F in b){_[F]="end"+F}_["begin"]="end";_["casex"]="endcase";_["casez"]="endcase";_["do"]="while";_["fork"]="join;join_any;join_none";_["covergroup"]="endgroup";for(var z in l){var F=l[z];if(_[F]){_[F]=undefined}}var P=u("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function q(e,t){var r=e.peek(),n;if(s[r]&&(n=s[r](e,t))!=false)return n;if(s.tokenBase&&(n=s.tokenBase(e,t))!=false)return n;if(/[,;:\.]/.test(r)){k=e.next();return null}if(v.test(r)){k=e.next();return"bracket"}if(r=="`"){e.next();if(e.eatWhile(/[\w\$_]/)){return"def"}else{return null}}if(r=="$"){e.next();if(e.eatWhile(/[\w\$_]/)){return"meta"}else{return null}}if(r=="#"){e.next();e.eatWhile(/[\d_.]/);return"def"}if(r=='"'){e.next();t.tokenize=A(r);return t.tokenize(e,t)}if(r=="/"){e.next();if(e.eat("*")){t.tokenize=S;return S(e,t)}if(e.eat("/")){e.skipToEnd();return"comment"}e.backUp(1)}if(e.match(w)||e.match(p)||e.match(C)||e.match(m)||e.match(h)||e.match(d)||e.match(w)){return"number"}if(e.eatWhile(c)){return"meta"}if(e.eatWhile(/[\w\$_]/)){var i=e.current();if(f[i]){if(_[i]){k="newblock"}if(P[i]){k="newstatement"}y=i;return"keyword"}return"variable"}e.next();return null}function A(e){return function(t,r){var n=false,i,a=false;while((i=t.next())!=null){if(i==e&&!n){a=true;break}n=!n&&i=="\\"}if(a||!(n||o))r.tokenize=q;return"string"}}function S(e,t){var r=false,n;while(n=e.next()){if(n=="/"&&r){t.tokenize=q;break}r=n=="*"}return"comment"}function j(e,t,r,n,i){this.indented=e;this.column=t;this.type=r;this.align=n;this.prev=i}function I(e,t,r){var n=e.indented;var i=new j(n,t,r,null,e.context);return e.context=i}function M(e){var t=e.context.type;if(t==")"||t=="]"||t=="}"){e.indented=e.context.indented}return e.context=e.context.prev}function E(e,t){if(e==t){return true}else{var r=t.split(";");for(var n in r){if(e==r[n]){return true}}return false}}function $(){var e=[];for(var t in _){if(_[t]){var r=_[t].split(";");for(var n in r){e.push(r[n])}}}var i=new RegExp("[{}()\\[\\]]|("+e.join("|")+")$");return i}return{electricInput:$(),startState:function(e){var t={tokenize:null,context:new j((e||0)-n,0,"top",false),indented:0,startOfLine:true};if(s.startState)s.startState(t);return t},token:function(e,t){var r=t.context;if(e.sol()){if(r.align==null)r.align=false;t.indented=e.indentation();t.startOfLine=true}if(s.token)s.token(e,t);if(e.eatSpace())return null;k=null;y=null;var n=(t.tokenize||q)(e,t);if(n=="comment"||n=="meta"||n=="variable")return n;if(r.align==null)r.align=true;if(k==r.type){M(t)}else if(k==";"&&r.type=="statement"||r.type&&E(y,r.type)){r=M(t);while(r&&r.type=="statement")r=M(t)}else if(k=="{"){I(t,e.column(),"}")}else if(k=="["){I(t,e.column(),"]")}else if(k=="("){I(t,e.column(),")")}else if(r&&r.type=="endcase"&&k==":"){I(t,e.column(),"statement")}else if(k=="newstatement"){I(t,e.column(),"statement")}else if(k=="newblock"){if(y=="function"&&r&&(r.type=="statement"||r.type=="endgroup")){}else if(y=="task"&&r&&r.type=="statement"){}else{var i=_[y];I(t,e.column(),i)}}t.startOfLine=false;return n},indent:function(t,r){if(t.tokenize!=q&&t.tokenize!=null)return e.Pass;if(s.indent){var l=s.indent(t);if(l>=0)return l}var o=t.context,u=r&&r.charAt(0);if(o.type=="statement"&&u=="}")o=o.prev;var f=false;var c=r.match(g);if(c)f=E(c[0],o.type);if(o.type=="statement")return o.indented+(u=="{"?0:i);else if(x.test(o.type)&&o.align&&!a)return o.column+(f?0:1);else if(o.type==")"&&!f)return o.indented+i;else return o.indented+(f?0:n)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});e.defineMIME("text/x-verilog",{name:"verilog"});e.defineMIME("text/x-systemverilog",{name:"verilog"});var t={">":"property","->":"property","-":"hr","|":"link","?$":"qualifier","?*":"qualifier","@-":"variable-3","@":"variable-3","?":"qualifier"};function r(e,r){var n=2;var i=-1,a=0,l=e.indentation();switch(r.tlvCurCtlFlowChar){case"\\":l=0;break;case"|":if(r.tlvPrevPrevCtlFlowChar=="@"){a=-2;break}if(t[r.tlvPrevCtlFlowChar])a=1;break;case"M":if(r.tlvPrevPrevCtlFlowChar=="@"){a=-2;break}if(t[r.tlvPrevCtlFlowChar])a=1;break;case"@":if(r.tlvPrevCtlFlowChar=="S")a=-1;if(r.tlvPrevCtlFlowChar=="|")a=1;break;case"S":if(r.tlvPrevCtlFlowChar=="@")a=1;if(t[r.tlvPrevCtlFlowChar])a=1;break}var o=n;i=l+a*o;return i>=0?i:l}e.defineMIME("text/x-tlv",{name:"verilog",hooks:{"\\":function(e,t){var n=0,i=false;var a=e.string;if(e.sol()&&(/\\SV/.test(e.string)||/\\TLV/.test(e.string))){a=/\\TLV_version/.test(e.string)?"\\TLV_version":e.string;e.skipToEnd();if(a=="\\SV"&&t.vxCodeActive){t.vxCodeActive=false}if(/\\TLV/.test(a)&&!t.vxCodeActive||a=="\\TLV_version"&&t.vxCodeActive){t.vxCodeActive=true}i="keyword";t.tlvCurCtlFlowChar=t.tlvPrevPrevCtlFlowChar=t.tlvPrevCtlFlowChar="";if(t.vxCodeActive==true){t.tlvCurCtlFlowChar="\\";n=r(e,t)}t.vxIndentRq=n}return i},tokenBase:function(e,n){var i=0,a=false;var l=/[\[\]=:]/;var o={"**":"variable-2","*":"variable-2",$$:"variable",$:"variable","^^":"attribute","^":"attribute"};var s=e.peek();var u=n.tlvCurCtlFlowChar;if(n.vxCodeActive==true){if(/[\[\]{}\(\);\:]/.test(s)){a="meta";e.next()}else if(s=="/"){e.next();if(e.eat("/")){e.skipToEnd();a="comment";n.tlvCurCtlFlowChar="S"}else{e.backUp(1)}}else if(s=="@"){a=t[s];n.tlvCurCtlFlowChar="@";e.next();e.eatWhile(/[\w\$_]/)}else if(e.match(/\b[mM]4+/,true)){e.skipTo("(");a="def";n.tlvCurCtlFlowChar="M"}else if(s=="!"&&e.sol()){a="comment";e.next()}else if(l.test(s)){e.eatWhile(l);a="operator"}else if(s=="#"){n.tlvCurCtlFlowChar=n.tlvCurCtlFlowChar==""?s:n.tlvCurCtlFlowChar;e.next();e.eatWhile(/[+-]\d/);a="tag"}else if(o.propertyIsEnumerable(s)){a=o[s];n.tlvCurCtlFlowChar=n.tlvCurCtlFlowChar==""?"S":n.tlvCurCtlFlowChar;e.next();e.match(/[a-zA-Z_0-9]+/)}else if(a=t[s]||false){n.tlvCurCtlFlowChar=n.tlvCurCtlFlowChar==""?s:n.tlvCurCtlFlowChar;e.next();e.match(/[a-zA-Z_0-9]+/)}if(n.tlvCurCtlFlowChar!=u){i=r(e,n);n.vxIndentRq=i}}return a},token:function(e,t){if(t.vxCodeActive==true&&e.sol()&&t.tlvCurCtlFlowChar!=""){t.tlvPrevPrevCtlFlowChar=t.tlvPrevCtlFlowChar;t.tlvPrevCtlFlowChar=t.tlvCurCtlFlowChar;t.tlvCurCtlFlowChar=""}},indent:function(e){return e.vxCodeActive==true?e.vxIndentRq:-1},startState:function(e){e.tlvCurCtlFlowChar="";e.tlvPrevCtlFlowChar="";e.tlvPrevPrevCtlFlowChar="";e.vxCodeActive=true;e.vxIndentRq=0}}})});