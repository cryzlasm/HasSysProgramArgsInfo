if(!this.JSON){this.JSON={}}(function(){function f(t){return t<10?"0"+t:t}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(t){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(t){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(t){escapable.lastIndex=0;return escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return typeof e==="string"?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,r,f,o,i=gap,u,a=e[t];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(t)}if(typeof rep==="function"){a=rep.call(e,t,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){o=a.length;for(n=0;n<o;n+=1){u[n]=str(n,a)||"null"}f=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]";gap=i;return f}if(rep&&typeof rep==="object"){o=rep.length;for(n=0;n<o;n+=1){r=rep[n];if(typeof r==="string"){f=str(r,a);if(f){u.push(quote(r)+(gap?": ":":")+f)}}}}else{for(r in a){if(Object.hasOwnProperty.call(a,r)){f=str(r,a);if(f){u.push(quote(r)+(gap?": ":":")+f)}}}}f=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}";gap=i;return f}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(t,e,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=e;if(e&&typeof e!=="function"&&(typeof e!=="object"||typeof e.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":t})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(t,e){var n,r,f=t[e];if(f&&typeof f==="object"){for(n in f){if(Object.hasOwnProperty.call(f,n)){r=walk(f,n);if(r!==undefined){f[n]=r}else{delete f[n]}}}}return reviver.call(t,e,f)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();