(function(){var s={2048:'"',4096:"'",6144:""},y=[1,1,1,1,1,1,,,,1,,1],C=[0,1,4,4,5,5,,1,2,10,,9,9,12,12,12,7,,,6,6,8,2],D={"break":1,"case":1,"continue":1,"delete":1,"do":1,"else":1,"finally":1,"instanceof":1,"return":1,"throw":1,"try":1,"typeof":1}
function E(a){var b=a.length,d=a.charAt(b-1);switch(d){case "+":case "-":for(var e=b-1;e>0&&a.charAt(e-1)===d;)--e;a=b-e;return(a&1)===1;case ".":if(b===1)return 1;a=a.charAt(b-2);return!("0"<=a&&a<="9");case "/":return b===1;default:if(/[#%&(*,:-?\[^{-~]/.test(d))return 1;return(a=a.match(/[\w$]+$/))&&D[a[0]]===1}}
function F(a,b){if(a===b)return a;if(a===(b&-24577|a&24576))return a&-24577|24576;var d=a&229376;if(a===(b&-229377|d)){var e=b&229376;return a&-229377|(d!==131072&&e!==131072&&d!==196608&&e!==196608?163840:196608)}d=a&31;e=b&31;if(d>e)var j=a,a=b,b=j,j=d,d=e,e=j;if(d==3&&e==4)return b;if(d===4&&(a&224)===(b&224)&&(e===5||(b&6144)===6144))return a;return 23}function G(a){var b=a&31;b===6&&(a=H(a&224,a&1792,6144));return a}
function H(a,b,d){var e,j=0,q=0;switch(b){case 1024:e=8;break;case 256:e=16;j=8192;break;case 512:e=9;break;case 768:e=22;q=32768;break;default:throw Error(b)}return e|a|b|d|j|q}
var da=function(){function a(a){if(a.indexOf("&")<0)return a;return a.replace(/&(?:#(?:(x[0-9a-f]+)|([0-9]+))|(lt|gt|amp|quot|apos));/gi,function(a,J,b,g){if(J||b)return String.fromCharCode(0+(J||b));return c[g.toLowerCase()]})}function b(a){this.a=a}function d(a,g,f){var c=a.prototype=new b(/(?!)/);c.constructor=a;c.f=g;if(f)c.i=f}function e(a,b){this.a=a;this.p=b}function j(a,b){this.a=a;this.q=b}function q(a){this.a=a}function t(a){this.a=a}function h(a){this.a=a}function v(a,b){this.a=a;this.o=
b}function l(a,b){this.a=a;this.g=b}function i(a,b){this.a=a;this.g=b}function z(a){this.a=a}function o(a){this.a=a}function m(a){this.a=a}function w(a){this.a=a}function A(a){this.a=a}function B(a){this.a=a}function u(a){this.a=a}function x(){this.b=this.c=0}function g(b,g){for(;b;){var c;var f=b,n=g&6144;c=f.length;n===0?c=-1:n===6144?c=(f=f.match(/[\s>]/))?f.index:c:(f=f.indexOf(s[n]),c=f>=0?f:c);if(c===-1)c=new x,c.j(b,g),b=b.substring(c.c),g=c.b;else{for(var f=b.length,f=c<f?c+s[g&6144].length:
-1,n=a(b.substring(0,c)),d=new x;n.length!==0;)d.j(n,g),n=n.substring(d.c),g=d.b;if(f!==-1)b=b.substring(f),g=4|g&224;else{if(c!==b.length)throw Error();b=""}}}return g}var c={u:"<",t:">",r:"&",v:'"',s:"'"};b.prototype.i=function(){return 1};b.prototype.f=function(){throw Error()};d(e,function(){return this.p});d(j,function(){return 4|this.q});var aa={32:8208,64:9,224:0,160:1,96:1,128:1,192:1};d(q,function(a){a&=224;var b=aa[a];if(typeof b!=="number")throw Error(a);return b===1?b|a:b});d(t,function(a){return 4|
a&224});var ba={action:1,archive:1,background:1,cite:1,classid:1,codebase:1,data:1,dsync:1,href:1,longdesc:1,src:1,usemap:1};d(h,function(a,b){var c=b[1].toLowerCase(),c="on"===c.substring(0,2)?256:"style"===c?512:ba[c]===1?768:1024;return 5|a&224|c});d(v,function(a){return H(a&224,a&1792,this.o)});d(l,function(a){return a&-229408|this.g});d(i,function(a){return a&8160|this.g});d(z,function(a,b){switch(a&24576){case 16384:return a&-24608|8208;case 8192:return a&-24608|21;default:throw Error("Ambiguous / could be a RegExp or division.  Please add parentheses before `"+
b[0]+"`")}});d(o,function(a,b){return a&-24577|(E(b[0])?8192:16384)});d(m,function(a){return a});var p=new m(/$/),n=new b(/[?#]|$/);n.f=function(a,b){var c=a&229376;c===32768&&(c=65536);if(c!==131072){var g=b[0];"?"===g&&c!==196608?c=98304:"#"===g&&(c=131072)}return a&-229377|c};d(w,function(){return 228},function(a){return(a&1792)===0});var r=new w(/<\/script\b/i),k=new w(/<\/style\b/i),ca={96:"textarea",128:"title",160:"listing",192:"xmp"};d(A,function(){return 228},function(a,b){return b[1].toLowerCase()===
ca[a&224]});d(B,function(a,b){var c=b[1],c='"'===c?14:"'"===c?15:13;return a&-229408|c|32768});d(u,function(a){return a&-24608|16400});var f=[];f[0]=[new m(/^[^<]+/),new e(/<\!--/,7),new j(/<script(?=[\s>\/]|$)/i,32),new j(/<style(?=[\s>\/]|$)/i,64),new j(/<textarea(?=[\s>\/]|$)/i,96),new j(/<title(?=[\s>\/]|$)/i,128),new j(/<xmp(?=[\s>\/]|$)/i,192),new e(/<\/?/,2)];f[2]=[new e(/^[a-z]+/i,3),new e(/^(?=[^a-z])/i,0)];f[3]=[new m(/^[a-z0-9:-]*(?:[a-z0-9]|$)/i),new j(/^(?=[\/\s>])/,224)];f[4]=[new h(/^\s*([a-z][\w-]*)/i),
new q(/^\s*\/?>/),new m(/^\s+$/)];f[5]=[new l(/^\s*=/,6),new t(/^/)];f[6]=[new v(/^\s*"/,2048),new v(/^\s*'/,4096),new v(/^(?=[^"'\s>])/,6144),new t(/^(?=>|\s+[\w-]+\s*=)/),new m(/^\s+/)];f[7]=[new e(/--\>/,0),p];f[8]=[p];f[9]=[new l(/\/\*/,10),new l(/"/,11),new l(/'/,12),new B(/\burl\s*\(\s*(["']?)/i),k,p];f[10]=[new l(/\*\//,9),k,p];f[11]=[new l(/"/,9),new m(/\\(?:\r\n?|[\n\f"])/),new e(/[\n\r\f]/,23),k,p];f[12]=[new l(/'/,9),new m(/\\(?:\r\n?|[\n\f'])/),new e(/[\n\r\f]/,23),k,p];f[13]=[new l(/[\\)\s]/,
9),n,new l(/["']/,23),k];f[15]=[new l(/'/,9),n,new m(/\\(?:\r\n?|[\n\f'])/),new e(/[\n\r\f]/,23),k];f[14]=[new l(/"/,9),n,new m(/\\(?:\r\n?|[\n\f"])/),new e(/[\n\r\f]/,23),k];f[16]=[new l(/\/\*/,18),new l(/\/\//,17),new i(/"/,19),new i(/'/,20),new z(/\//),new o(/(?:[^<\/"'\s\\]|<(?!\/script))+/i),new m(/\s+/),r];f[18]=[new l(/\*\//,16),r,p];f[17]=[new l(/[\r\n\u2028\u2029]/,16),r,p];f[19]=[new u(/"/),r,new m(/^(?:[^"\\\r\n\u2028\u2029<]|\\(?:\r\n?|[^\r<]|<(?!\/script))|<(?!\/script))+/i)];f[20]=[new u(/'/),
r,new m(/^(?:[^'\\\r\n\u2028\u2029<]|\\(?:\r\n?|[^\r<]|<(?!\/script))|<(?!\/script))+/i)];f[21]=[new u(/\//),r,new m(/^(?:[^\[\\/<\r\n\u2028\u2029]|\\[^\r\n\u2028\u2029]|\\?<(?!\/script)|\[(?:[^\]\\<\r\n\u2028\u2029]|\\(?:[^\r\n\u2028\u2029]))*|\\?<(?!\/script)\])+/i)];f[22]=[n];f[1]=[new A(/<\/(\w+)\b/),p];x.prototype.j=function(a,b){if((b&31)===23)this.c=a.length,this.b=b;else{var c=2147483647,g=-1,n,d,p=f[b&31],e,r,j,k,l,i=p.length;for(l=0;l<i;++l)if(e=p[l],r=a.match(e.a))j=r.index,j<c&&(k=j+r[0].length,
e.i(b,r)&&(c=j,g=k,n=e,d=r));n?(this.b=n.f(b,d),this.c=g):(this.b=23,this.c=a.length);if(this.c===0&&(this.b&31)===(b&31))throw Error(b)}};return g}();function I(){}I.prototype.toString=function(){return this.content};function K(){function a(a){this.content=a}var b=a.prototype=new I;b.constructor=a;b.contentKind=0;return a}var ea=K(0),fa=K(1),ga=K(2);SanitizedHtml=ea;SanitizedJsStrChars=fa;SanitizedUri=ga
function L(a){return a&&a.contentKind===0?a:a instanceof Array?a.map(L).join(""):String(a).replace(M,N)}function ha(a){if(a&&a.contentKind===0)return String(a.content).replace(O,N);return String(a).replace(M,N)}function ia(a){if(a&&a.contentKind===0)return a=String(a.content).replace(P,""),a=String(a).replace(O,N);return String(a).replace(M,N)}function ja(a){if(a&&a.contentKind===0)return a=String(a.content).replace(P,""),a=String(a).replace(ka,N);return String(a).replace(la,N)}
function ma(a){a=String(a);a=na.test(a)?a:"zSafehtmlz";var b,d=a.indexOf("=");return d>=0&&(b=a.charAt(a.length-1))!='"'&&b!="'"?a.substring(0,d+1)+'"'+a.substring(d+1)+'"':a}function oa(a){a=String(a);a=pa.test(a)?a:"zSafehtmlz";return a}function Q(a){if(a&&a.contentKind===1)return a.content;return String(a).replace(qa,R)}function ra(a){var b;return a==null?" null ":(b=typeof a)=="boolean"||b=="number"?" "+a+" ":"'"+Q(a)+"'"}function sa(a){return String(a).replace(ta,R)}var S=/['()]/g
function T(a){return"%"+a.charCodeAt(0).toString(16)}function ua(a){if(a&&a.contentKind===2)return U(a);a=encodeURIComponent(a);return a.replace(S,T)}function U(a){a=String(a);if(/[\0- "<>\\{}\x7f\x85\xa0\u2028\u2029\uff00-\uffff]|%(?![a-f0-9]{2})/i.test(a)){for(var a=a.split(/(%[a-f0-9]{2}|[#$&+,/:;=?@\[\]])/i),b=a.length-1;b>=0;b-=2)a[b]=encodeURIComponent(a[b]);a=a.join("")}return a.replace(S,T)}function va(a){var b=String(a);return wa.test(b)?U(a):"#zSafehtmlz"}
function xa(a){return String(a).replace(ya,za)}function Aa(a){if(a==null)return"";a=String(a);a=Ba.test(a)?a:"zSafehtmlz";return a}var V={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"};function N(a){return V[a]||(V[a]="&#"+a.charCodeAt(0)+";")}var W={"\x08":"\\b","\t":"\\t","\n":"\\n","\x0c":"\\f","\r":"\\r","/":"\\/","\\":"\\\\"};function R(a){var b;if(!(b=W[a])){b=a.charCodeAt(0).toString(16);var d=b.length<=2?"\\x00":"\\u0000";b=d.substring(0,d.length-b.length)+b;b=W[a]=b}return b}var X={}
function za(a){return X[a]||(X[a]="\\"+a.charCodeAt(0).toString(16)+" ")}
var M=/[\x00\x22\x26\x27\x3c\x3e]/g,O=/[\x00\x22\x27\x3c\x3e]/g,la=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,ka=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,qa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ta=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g,ya=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,Ba=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9][_a-z0-9-]*)(?:-[_a-z][_a-z0-9-]*)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9])(?:[a-z]{1,2}|%)?|!important|)$/i,
wa=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,na=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*|dir=(?:ltr|rtl))$/i,pa=/^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i,P=/<(?:!|\/?[a-z])(?:[^>'"]|"[^"]*"|'[^']*')*>/gi,Y=[L,ha,ia,ja,oa,ma,Q,ra,sa,xa,Aa,ua,U];Y[13]=va
function Z(a,b){var d={};a.replace(/\{\{\/([a-z]\w*)\}/gi,function(a,b){d[b]=1});var e=["T",b?String(b):""],j=[e],q=e,t=String(a).match(/\$\{[^}]*\}|\{\{\/?[a-z][a-z0-9]*\b(?:\}?[^}])*\}\}|[\s\S][^{$]*/gi);if(t)for(var h,v=0,l=t.length;v<l;++v){var i=t[v];h=i.substring(0,2);if(h=="${"){h=i.match(/^\$\{([\s\S]+)\}$/);if(!h)break;q.push(["$",h[1]])}else if(h=="{{"){h=i.match(/^\{\{(\/?)([a-z][a-z0-9]*)((?:\}?[^}])*)\}\}$/i);if(!h)break;var i=h[2],z=h[3];h[1]?j.length>1&&q[0]===i&&(q=j[--j.length-1]):
(h=[i,z],q.push(h),1===d[i]&&j.push(q=h))}else h=q.length-1,h>1&&"string"===typeof q[h]?q[h]+=i:q[h+1]=i}return e}function Ca(a){function b(a){for(var b=2,e=a.length;b<e;++b)d(a[b])}function d(a){if(typeof a==="string")e.push(a);else{var d=a[0],t=a[1];d==="$"?e.push("${",t,"}"):(e.push("{{",d,t,"}}"),b(a),e.push("{{/",d,"}}"))}}var e=[];a[0]==="T"?b(a):d(a);return e.join("")}
function Da(a){function b(a){if(typeof a==="object"){a.e=++z;for(var c=2,d=a.length;c<d;++c)b(a[c])}}function d(a){function b(a){function c(){}c.prototype=a;return new c}var d={},e;for(e in a)l.call(a,e)&&(d[e]=b(a[e]));return d}function e(a,b,e){if(--B<=0)throw Error("too much recursion");var i=a.e;if(i in e.d)return e.d[i];var p=d(e);p.d[i]=b;var n=j(a,b,p);if(n!==b&&(p.d[i]=n,p=d(e),b=j(a,b,p),b!==n))throw n=a.h,Error(n);var a=p,r;for(r in e)if(l.call(e,r)){var p=e[r],b=a[r],k;for(k in b)l.call(b,
k)&&(p[k]=b[k])}return n}function j(a,c,d){function j(a,c,g){if(typeof a==="string")return da(a,c);var k=2,h=a.length,f=c;switch(a[0]){case "html":return a[0]="$",a[1]="new SanitizedHtml("+a[1]+")",a.length=2,j(a,c,g);case "if":for(var g=c,m=h;--m>=2;){var o=a[m];if("else"===o[0]){""===o[1]&&(g=null);break}}for(;k<=h;++k)if(o=a[k],k===h||"else"===o[0]){if(g!==null&&(c=F(g,c),(c&31)===23))throw Error();g=c;c=f}else c=j(o,c,a);c=g;break;case "each":for(k=2;--k>=0;){h=c;a[0]="";try{m=j(a,c,g),c=F(h,
m)}finally{a[0]="each"}if((c&31)===23)throw Error()}break;case "tmpl":case "wrap":if(f=q(a)){if(!/__C\d+$/.test(f)&&(g=f,f=c?g+"__C"+c:g,l.call(i,f)?f=i[f]:l.call(i,g)?(g=i[g],g=w(g),g.h=f,b(g),f=i[f]=g):f=void 0,f))d.k[a.e]=f.h,c=e(f,c,d)}else throw Error();if("wrap"===a[0]){for(f=0;k<h;++k)f=j(a[k],f,a);if(f!=0)throw Error()}break;case "$":c=G(c);k={};a:{h=k;c=G(c);f=C[c&31];switch(c&229376){case 32768:f=13;c=c&-229377|65536;break;case 98304:f=11;break;case 0:break;case 131072:case 65536:(c&1792)!==
768&&(f=12);break;default:c=23;break a}if(f===void 0)c=23;else{g=null;m=c&6144;if(m!==0)switch(f){case 0:break;case 2:m===6144&&(f=3);break;case 3:break;default:y[f]||(g=m===6144?3:2)}h.m=f;h.n=g}}if((c&31)===23)throw Error();h=/^\s*(?:\$\.encode|noAutoescape)\b/;if(!h.test(a[1])&&typeof k.m==="number"){h=[];h[0]=k.m;if(typeof k.n==="number")h[1]=k.n;d.l[a.e]=h}break;default:for(;k<h;++k)c=j(a[k],c,a)}return c}return j(a,c)}function q(a){return(a=a[1].match(/(?:^|\))\s*"#([^)\s]+)"\s*$/))&&a[1]}function t(a){var b=
a[0];if(b==="tmpl"||b==="wrap")if((b=q(a))&&h(b))return 1;for(b=a.length;--b>=2;)if(t(a[b]))return 1;return 0}function h(a){if(l.call(u,a))return u[a];var b=i[a];if(b){for(var d=b.length;--d>=0;)if("noAutoescape"===b[d][0])return u[a]=0,u[a]=t(b);return u[a]=1}}function v(a){var b=a.e;switch(a[0]){case "noAutoescape":return x=0,"";case "$":if(x){var d=A.l[b];if(d){for(var e=a[1],b=0;b<d.length;++b)e="$.encode["+d[b]+"]("+e+")";a[1]=e}}break;case "tmpl":case "wrap":(b=A.k[b])&&(a[1]=a[1].replace(/\s*"#[^)\s]+"\s*$/,
' "#'+b+'"'))}b=2;for(d=a.length;b<d;++b)e=a[b],typeof e!=="string"&&(a[b]=v(e));return a}var l=Object.hasOwnProperty,i={},z=0,o;for(o in a)if(l.call(a,o)){var m=a[o];typeof m==="string"&&(m=Z(m));m.h=o;b(i[o]=m)}var w;w=typeof JSON!==void 0?function(a){return JSON.parse(JSON.stringify(a))}:function(a){for(var a=a.slice(),b=a.length;--b>=0;)typeof a[b]=="object"&&(a[b]=w(a[b]));return a};var A={l:{},k:{},d:{}},B=10,u={};for(o in i)l.call(i,o)&&h(o);for(o in u)1===u[o]&&e(i[o],0,A);var x;for(o in i)l.call(i,
o)&&(x=1,v(i[o]));return i}parseJqueryTemplate=Z;renderJqueryTemplate=Ca;sanitizeTemplates=Da;$.extend($.encode,Y)})()
