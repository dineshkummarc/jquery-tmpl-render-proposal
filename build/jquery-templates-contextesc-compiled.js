(function(){var g=null,q=1,r=0,aa=RegExp("(?=\\$\\{[^}]*\\}|\\{\\{(?:(?:=|[a-z][a-z0-9]*)[\\s\\S]*?|/(?:=|[a-z][a-z0-9]*)\\s*)\\}\\})","gi"),ba=/^\s*(?:\(\s*([$_a-z]\w*)\s*(?:,\s*([$_a-z]\w*)\s*)?\)\s*)?(\S(?:[\S\s]*\S)?)\s*$/i,ca=/^\s*(?:\(([\S\s]*)\)\s*)?([^\s()](?:[^()]*[^\s()])?)\s*$/,da="$index",ea="$value",s="templates",ga="tmpl",ha={each:q,"if":q,wrap:q};function ia(a){var c={};$.each(a.split(aa),function(a,d){var e=d.match(/^\{\{\/(=|[a-z][^\W_]*)[\S\s]*}}/i);e&&(c[e[1]]=q)});return c}
function ja(a,c){var b=["",""],d=[b],e=b,t=0;$.each(a.replace(/\{#[\S\s]*?#}/g,"").replace(/\{\{!?|}}|(?:[^{}]|\{(?!\{)|}(?!}))+/g,function(a){return a==="{{!"?(++t,""):t?(a==="}}"?--t:a==="{{"&&++t,""):a}).split(aa),function(a,b){var h=b.match(/^\{\{(\/?)(=|[a-z][^\W_]*)([\S\s]*)}}/i);if(h){if(h[1])e=d[--d.length-1];else{var i=[h[2],h[3]];e.push(i);c[h[2]]===q&&d.push(e=i)}b=b.substring(h[0].length)}else b.substring(0,2)==="${"&&(h=b.indexOf("}"),e.push(["=",b.substring(2,h)]),b=b.substring(h+1));
b&&e.push(b)});return b};$.extAll=function(a){var c=arguments,b,d,e;for(b=1;b<c.length;++b)for(e in d=c[b])a[e]=d[e];return a};
function ka(a){var c=["var $$tmplVar0;$item=$item||{};with($data=$.extAll(Object.create?Object.create(null):{},$data||{})){return("],b=[],d,e=0;$.each(a.slice(2),function w(a,h){d&&c.push("+");var i;if(typeof h==="string")c.push(la(h));else{var j=h[0],k=h[1];i=h.length;var f="$$tmplVar"+e;if(j==="="){d||c.push("''+");var p="",z="",k=k.replace(/(=>[\w$.]+)+$/,function(a){a=a.split("=>");z=Array(a.length).join(")");p=a.reverse().join("(");return""});c.push("(",f,"=(",k,"),",p,"'function'!==typeof ",
f,"?",f,":",f,".call(null,arguments))",z)}else if(j==="if"){f=2;for(k=d=q;k;f=j+1){j=i;for(k=f;k<j;++k)h[k][0]==="else"&&(j=k);var u=f<i?(f===2?h:h[f-1])[1]:"",k=/\S/.test(u);c.push(d?"":"''",f===2?"((":"):(",u,k?")?(":"");d=r;$.each(h.slice(f,j),w)}c.push(d?"))":"''))")}else j==="each"?(i=k.match(ba),j=i[1]||da,k=i[2]||ea,i=i[3],++e,c.push("(",f,"=[],$.each((",i,"),function(",j,",",k,"){var ","$$tmplVar",e,";",f,".push("),d=r,b.push(j+":"+j,k+":"+k),$.each(h.slice(2),w),b.length-=2,d||c.push("''"),
c.push(")}),",f,".join(''))"),--e):j==="tmpl"&&(i=k.match(ca),j=i[1],c.push("(",f,"=",j?"$.extend([],arguments,["+j+"])":b.length?"[$.extAll({},$data,{"+b+"}),$item]":"arguments",",$.template((",i[2],")).tmpl(",f,"[0],",f,"[1]))"))}d=q});c.push(d?")}":"'')}");return Function("$data","$item",c.join(""))};$.templatePlugins=[];function ma(a){return(a=$[s][a])&&"function"!==typeof a[ga]}function na(a,c){function b(a){return function(c){var d;for(d=0;d<a;++d)c=$.templatePlugins[d](c,b(d));return c}}var d={};$.each(a,function w(c,b){d[c]!==q&&(d[c]=q,$.each(b,function(c,b){if(b[0]==="tmpl"||b[0]==="wrap"){var e=b[1].match(ca);e&&(e=e[2],ma(e)&&d[e]!==q&&w(e,a[e]=$[s][e]))}}))});var e;$.each(b($.templatePlugins.length)(a),function(a,b){var d={tmpl:ka(b)};a!==c?$[s][a]=d:e=d});return e}$[s]={};
$.template=function oa(c,b){var d=$[s],e;if(arguments.length===1){if(c.indexOf("<")+1)return oa(g,c);ma(c)&&(e={},e[c]=d[c],na(e));return d[c]}e=ja(b,$.extend(ia(b),ha));if(c===g)return na({_:e},"_");d[c]=e};var v=3,A=4,B=5,C=8,E=9,F=16,G=22,H=23,I=31,J=224,pa=256,qa=512,ra=768,K=1792,sa=0,M=6144,O=6144,ta=0,Q=24576,ua=0,R=131072,S=196608,T=229376,va={2048:'"',4096:"'"};va[M]="";var U=0,r=0,q=1,V=[];V[U]=q;V[1]=q;V[2]=q;V[3]=q;V[4]=q;V[5]=q;V[9]=q;V[11]=q;var W=[];W[0]=U;W[1]=1;W[2]=4;W[v]=4;W[A]=5;W[B]=5;W[7]=1;W[C]=2;W[E]=10;W[11]=9;W[12]=9;W[13]=12;W[14]=12;W[15]=12;W[F]=7;W[19]=6;W[20]=6;W[21]=8;W[G]=2;function wa(){}wa.prototype.toString=function(){return this.content};function xa(){function a(a){this.content=a}var c=a.prototype=new wa;c.constructor=a;c.contentKind=0;return a}var ya=xa(),za=xa(),Aa=xa();SanitizedHtml=ya;SanitizedJsStrChars=za;SanitizedUri=Aa;function X(a){return a&&a.contentKind===0?a:a instanceof Array?a.map(X).join(""):a===void 0?"":String(a).replace(Ba,Y)}function Ca(a){return a&&a.contentKind===1?a.content:String(a).replace(Da,Fa)}
function la(a){var c;return a==g?" null ":(c=typeof a)=="boolean"||c=="number"?" "+a+" ":"'"+Ca(a)+"'"}var Ga=/['-)]/g;function Ha(a){return"%"+a.charCodeAt(0).toString(16)}function Ia(a){a=String(a);if(/[\0- "<>\\{}\x7f\x85\xa0\u2028\u2029\uff00-\uffff]|%(?![\da-f]{2})/i.test(a)){for(var a=a.split(/(%[\da-f]{2}|[#$&+,/:;=?@[\]])/i),c=a.length-1;c>=0;c-=2)a[c]=encodeURIComponent(a[c]);a=a.join("")}return a.replace(Ga,Ha)}var Ja={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"};
function Y(a){return Ja[a]||(Ja[a]="&#"+a.charCodeAt(0)+";")}var Ka={"\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r","/":"\\/","\\":"\\\\"};function Fa(a){var d;var c;if(!(c=Ka[a])){c=a.charCodeAt(0).toString(16);var b=c.length<=2?"\\x00":"\\u0000";d=Ka[a]=b.substring(0,b.length-c.length)+c,c=d}return c}var La={};function Ma(a){return La[a]||(La[a]="\\"+a.charCodeAt(0).toString(16)+" ")}
var Ba=/[\0"&'<>]/g,Na=/[\0"'<>]/g,Oa=/[\0\t-\r "&'/<->`\x85\xa0\u2028\u2029-]/g,Pa=/[\0\t-\r "'/<->`\x85\xa0\u2028\u2029-]/g,Da=/[\0\b-\r"&'/<->\\\x85\u2028\u2029]/g,Qa=/[\0\b-\r"$&-/:<-?[-^{-}\x85\u2028\u2029]/g,Ra=/[\0\b-\r"&-*/:->@\\{}\x85\xa0\u2028\u2029]/g,Sa=/^(?!-*(?:expression|(?:moz-)?binding))(?:[#.]?-?\w[\w-]*(?:-[_a-z][\w-]*)*-?|-?(?:\d+(?:\.\d*)?|\.\d)(?:[a-z]{1,2}|%)?|!important|)$/i,Ta=/^(?:(?:https?|mailto):|[^#&/:?]*(?:[#/?]|$))/i,Ua=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[\w$:-]*|dir=(?:ltr|rtl))$/i,
Va=/^(?!script|style|title|textarea|xmp|no)[\w$:-]*$/i,Wa=/<(?:!|\/?[a-z])(?:[^"'>]|"[^"]*"|'[^']*')*>/gi,Z=[];Z[U]=X;Z[1]=function(a){return a&&a.contentKind===0?String(a.content).replace(Na,Y):String(a).replace(Ba,Y)};Z[2]=function(a){a&&a.contentKind===0?(a=String(a.content).replace(Wa,""),a=String(a).replace(Na,Y)):a=String(a).replace(Ba,Y);return a};Z[3]=function(a){a&&a.contentKind===0?(a=String(a.content).replace(Wa,""),a=String(a).replace(Pa,Y)):a=String(a).replace(Oa,Y);return a};
Z[4]=function(a){a=String(a);return!Va.test(a)?"zSafehtmlz":a};Z[5]=function(a){var a=String(a),a=!Ua.test(a)?"zSafehtmlz":a,c,b=a.indexOf("=");return b>=0&&(c=a.charAt(a.length-1))!='"'&&c!="'"?a.substring(0,b+1)+'"'+a.substring(b+1)+'"':a};Z[6]=Ca;Z[7]=la;Z[8]=function(a){return String(a).replace(Qa,Fa)};Z[9]=function(a){return String(a).replace(Ra,Ma)};Z[10]=function(a){a==g?a="":(a=String(a),a=!Sa.test(a)?"zSafehtmlz":a);return a};
Z[11]=function(a){return a&&a.contentKind===2?Ia(a):encodeURIComponent(a).replace(Ga,Ha)};Z[12]=Ia;Z[13]=function(a){return Ta.test(String(a))?Ia(a):"#zSafehtmlz"};X[U]=$.encode=$.extend(X,Z);var Xa={"break":q,"case":q,"continue":q,"delete":q,"do":q,"else":q,"finally":q,"instanceof":q,"return":q,"throw":q,"try":q,"typeof":q};function Ya(a){var c=a.length,b=a.charAt(c-1);switch(b){case "+":case "-":for(var d=c-1;d>0&&a.charAt(d-1)===b;)--d;return(c-d&1)===1;case ".":if(c===1)return q;a=a.charAt(c-2);return!("0"<=a&&a<="9");case "/":return c===1;default:return/[#%&(*,:-?[^{-~]/.test(b)?q:(a=a.match(/[\w$]+$/))&&Xa[a[0]]===q}}
function Za(a,c){if(a===c)return a;if(a===(c&~Q|a&Q))return a&~Q|24576;var b=a&T;if(a===(c&~T|b)){var d=c&T;return a&~T|(b!==R&&d!==R&&b!==S&&d!==S?163840:S)}b=a&I;d=c&I;if(b>d)var e=a,a=c,c=e,e=b,b=d,d=e;return b==v&&d==A?c:b===A&&(a&J)===(c&J)&&(d===B||(c&O)===M)?a:H}function $a(a){(a&I)===6&&(a=ab(a&J,a&K,M));return a}function ab(a,c,b){var d,e=ta,t=ua;switch(c){case 1024:d=C;break;case pa:d=F;e=8192;break;case qa:d=E;break;case ra:d=G;t=32768;break;default:throw Error(c)}return d|a|c|b|e|t}
var bb=function(){function a(a){return a.indexOf("&")<0?a:a.replace(/&(?:#(?:(x[\da-f]+)|(\d+))|(lt|gt|amp|quot|apos));/gi,function(a,c,Ea,b){return c||Ea?String.fromCharCode(0+(c||Ea)):cb[b.toLowerCase()]})}function c(a){this.pattern=a}function b(a,b,d){var n=a.prototype=new c(/(?!)/);n.constructor=a;n.d=b;if(d)n.h=d}function d(a,c){this.pattern=a;this.m=c}function e(a,c){this.pattern=a;this.n=c}function t(a){this.pattern=a}function w(a){this.pattern=a}function P(a){this.pattern=a}function h(a,c){this.pattern=
a;this.l=c}function i(a,c){this.pattern=a;this.state=c}function j(a,c){this.pattern=a;this.state=c}function k(a){this.pattern=a}function f(a){this.pattern=a}function p(a){this.pattern=a}function z(a){this.pattern=a}function u(a){this.pattern=a}function N(a){this.pattern=a}function m(a){this.pattern=a}function o(){this.next=this.a=0}var cb={r:"<",q:">",o:"&",s:'"',p:"'"};c.prototype.h=function(){return q};c.prototype.d=function(){throw Error()};b(d,function(){return this.m});b(e,function(){return A|
this.n});var x={};x[32]=F|8192;x[64]=E;x[224]=0;x[160]=1;x[96]=1;x[128]=1;x[192]=1;b(t,function(a){a&=J;var c=x[a];if(typeof c!=="number")throw Error(a);return c===1?c|a:c});b(w,function(a){return A|a&J});var fa={action:q,archive:q,background:q,cite:q,classid:q,codebase:q,data:q,dsync:q,href:q,longdesc:q,src:q,usemap:q};b(P,function(a,c){var b=c[1].toLowerCase();return B|a&J|("on"===b.substring(0,2)?pa:"style"===b?qa:fa[b]===q?ra:1024)});b(h,function(a){return ab(a&J,a&K,this.l)});b(i,function(a){return a&
~(T|I)|this.state});b(j,function(a){return a&(J|K|O)|this.state});b(k,function(a,c){switch(a&Q){case 16384:return a&~(I|Q)|F|8192;case 8192:return a&~(I|Q)|21|ta;default:throw Error("Ambiguous / could be a RegExp or division.  Please add parentheses before `"+c[0]+"`")}});b(f,function(a,c){return a&~Q|(Ya(c[0])?8192:16384)});b(p,function(a){return a});var n=new p(/$/),D=new c(/[#?]|$/);D.d=function(a,c){var b=a&T;b===32768&&(b=65536);if(b!==R){var d=c[0];"?"===d&&b!==S?b=98304:"#"===d&&(b=R)}return a&
~T|b};b(z,function(){return A|224},function(a){return(a&K)===0});var y=new z(/<\/script\b/i),L=new z(/<\/style\b/i),db={96:"textarea",128:"title",160:"listing",192:"xmp"};b(u,function(){return A|224},function(a,c){return c[1].toLowerCase()===db[a&J]});b(N,function(a,c){var b=c[1];return a&~(I|T)|('"'===b?14:"'"===b?15:13)|32768});b(m,function(a){return a&~(I|Q)|F|16384});var l=[];l[0]=[new p(/^[^<]+/),new d(/<\!--/,7),new e(/<script(?=[\s/>]|$)/i,32),new e(/<style(?=[\s/>]|$)/i,64),new e(/<textarea(?=[\s/>]|$)/i,
96),new e(/<title(?=[\s/>]|$)/i,128),new e(/<xmp(?=[\s/>]|$)/i,192),new d(/<\/?/,2)];l[2]=[new d(/^[a-z]+/i,v),new d(/^(?=[\W\d_])/,0)];l[v]=[new p(/^[\d:a-z-]*(?:[^\W_]|$)/i),new e(/^(?=[\s/>])/,224)];l[A]=[new P(/^\s*([a-z][\w-]*)/i),new t(/^\s*\/?>/),new p(/^\s+$/)];l[B]=[new i(/^\s*=/,6),new w(/^/)];l[6]=[new h(/^\s*"/,2048),new h(/^\s*'/,4096),new h(/^(?=[^\s"'>])/,M),new w(/^(?=>|\s+[\w-]+\s*=)/),new p(/^\s+/)];l[7]=[new d(/--\>/,0),n];l[C]=[n];l[E]=[new i(/\/\*/,10),new i(/"/,11),new i(/'/,
12),new N(/\burl\s*\(\s*(["']?)/i),L,n];l[10]=[new i(/\*\//,E),L,n];l[11]=[new i(/"/,E),new p(/\\(?:\r\n?|[\n\f"])/),new d(/[\n\f\r]/,H),L,n];l[12]=[new i(/'/,E),new p(/\\(?:\r\n?|[\n\f'])/),new d(/[\n\f\r]/,H),L,n];l[13]=[new i(/[\s)\\]/,E),D,new i(/["']/,H),L];l[15]=[new i(/'/,E),D,new p(/\\(?:\r\n?|[\n\f'])/),new d(/[\n\f\r]/,H),L];l[14]=[new i(/"/,E),D,new p(/\\(?:\r\n?|[\n\f"])/),new d(/[\n\f\r]/,H),L];l[F]=[new i(/\/\*/,18),new i(/\/\//,17),new j(/"/,19),new j(/'/,20),new k(/\//),new f(/(?:[^\s"'/<\\]|<(?!\/script))+/i),
new p(/\s+/),y];l[18]=[new i(/\*\//,F),y,n];l[17]=[new i(RegExp("[\r\n\u2028\u2029]"),F),y,n];l[19]=[new m(/"/),y,new p(RegExp('^(?:[^"\\\\\r\n\u2028\u2029<]|\\\\(?:\\r\\n?|[^\\r<]|<(?!/script))|<(?!/script))+',"i"))];l[20]=[new m(/'/),y,new p(RegExp("^(?:[^'\\\\\r\n\u2028\u2029<]|\\\\(?:\\r\\n?|[^\\r<]|<(?!/script))|<(?!/script))+","i"))];l[21]=[new m(/\//),y,new p(RegExp("^(?:[^\\[\\\\/<\r\n\u2028\u2029]|\\\\[^\r\n\u2028\u2029]|\\\\?<(?!/script)|\\[(?:[^\\]\\\\<\r\n\u2028\u2029]|\\\\(?:[^\r\n\u2028\u2029]))*|\\\\?<(?!/script)\\])+",
"i"))];l[G]=[D];l[1]=[new u(/<\/(\w+)\b/),n];o.prototype.j=function(a,c){if((c&I)===H)this.a=a.length,this.next=c;else{var b=2147483647,d=-1,n,e,m=l[c&I],o,i,f,x,j,fa=m.length;for(j=0;j<fa;++j)if(o=m[j],i=a.match(o.pattern))f=i.index,f<b&&(x=f+i[0].length,o.h(c,i)&&(b=f,d=x,n=o,e=i));n?(this.next=n.d(c,e),this.a=d):(this.next=H,this.a=a.length);if(this.a===0&&(this.next&I)===(c&I))throw Error(c)}};return function(c,b){for(;c;){var d;var n=c,e=b&O;d=n.length;e===sa?d=-1:e===M?d=(n=n.match(/[\s>]/))?
n.index:d:(n=n.indexOf(va[e]),d=n>=0?n:d);if(d===-1)d=new o,d.j(c,b),c=c.substring(d.a),b=d.next;else{for(var n=d<c.length?d+va[b&O].length:-1,e=a(c.substring(0,d)),m=new o;e.length!==0;)m.j(e,b),e=e.substring(m.a),b=m.next;if(n!==-1)c=c.substring(n),b=A|b&J;else{if(d!==c.length)throw Error();c=""}}}return b}}();var eb;eb=typeof JSON!=="undefined"?function(a){return JSON.parse(JSON.stringify(a))}:function(a){for(var a=a.slice(),c=a.length;--c>=0;)typeof a[c]=="object"&&(a[c]=eb(a[c]));return a};
$.templatePlugins.push(function(a){function c(a){if(typeof a==="object"){a.c=++k;for(var b=2,d=a.length;b<d;++b)c(a[b])}}function b(a){function c(a){function b(){}b.prototype=a;return new b}var b={},d;for(d in a)i.call(a,d)&&(b[d]=c(a[d]));return b}function d(a,c,d){var f=a.c;if(f in d.b)return d.b[f];var j=b(d);j.b[f]=c;var n=e(a,c,j);if(n!==c&&(j.b[f]=n,j=b(d),e(a,c,j)!==n))throw Error();var a=j,D;for(D in d)if(i.call(d,D)){var c=d[D],f=a[D],y;for(y in f)i.call(f,y)&&(c[y]=f[y])}return n}function e(a,
b,e){function f(a,b,m){if(typeof a==="string")return bb(a,b);var o=2,h=a.length,k=b,l=a[0];if(l==="html")a[0]="=",a[1]="new SanitizedHtml("+a[1]+")",a.length=2,b=f(a,b,m);else if(l==="if"){for(var m=b,p=h;--p>=2;)if(l=a[p],"else"===l[0]){""===l[1]&&(m=g);break}for(;o<=h;++o)if(l=a[o],o===h||"else"===l[0]){if(m!==g&&(b=Za(m,b),(b&I)===H))throw Error();m=b;b=k}else b=f(l,b,a);b=m}else if(l==="each")for(o=2;--o>=0;){h=b;a[0]="";try{p=f(a,b,m),b=Za(h,p)}finally{a[0]="each"}if((b&I)===H)throw Error();
}else if(l==="tmpl"||l==="wrap"){if(m=t(a)){if(!/__C\d+$/.test(m)&&(k=b?m+"__C"+b:m,i.call(j,k)?k=j[k]:i.call(j,m)?(m=eb(j[m]),m.i=k,c(m),k=j[k]=m):k=void 0,k))e.e[a.c]=k.i,b=d(k,b,e)}else throw Error();if("wrap"===a[0]){for(k=0;o<h;++o)k=f(a[o],k,a);if(k!==0)throw Error()}}else if(l==="="){b=$a(b);o={};a:{b=$a(b);h=W[b&I];switch(b&T){case 32768:h=13;b=b&~T|65536;break;case 98304:h=11;break;case ua:break;case R:case 65536:(b&K)!==ra&&(h=12);break;default:b=H;break a}if(h===void 0)b=H;else{k=g;m=
b&O;if(m!==sa)switch(h){case U:break;case 2:m===M&&(h=3);break;case 3:break;default:V[h]||(k=m===M?3:2)}o.g=h;o.k=k}}if((b&I)===H)throw Error();if(!/^\s*(?:\$\.encode|noAutoescape)\b/.test(a[1])&&typeof o.g==="number"){h=[];h[0]=o.g;if(typeof o.k==="number")h[1]=o.k;e.f[a.c]=h}}else for(;o<h;)b=f(a[o++],b,a);return b}return f(a,b)}function t(a){return(a=a[1].match(/(?:^|\))\s*"#([^\s)]+)"\s*$/))&&a[1]}function w(a){var b=a[0];if(b==="tmpl"||b==="wrap")if((b=t(a))&&P(b))return q;for(b=a.length;--b>=
2;)if(w(a[b]))return q;return r}function P(a){if(i.call(u,a))return u[a];var b=j[a];if(b){for(var c=b.length;--c>=0;)if("noAutoescape"===b[c][0])return u[a]=r,u[a]=w(b);return u[a]=q}}function h(a){var b=a.c;switch(a[0]){case "noAutoescape":return N=r,"";case "=":if(N){var c=z.f[b];if(c){for(var d=a[1],b=0;b<c.length;++b)d="$.encode"+("["+c[b]+"]")+"("+d+")";a[1]=d}}break;case "tmpl":case "wrap":(b=z.e[b])&&(a[1]=a[1].replace(/\s*"#[^\s)]+"\s*$/,' "#'+b+'"'))}b=2;for(c=a.length;b<c;++b)d=a[b],typeof d!==
"string"&&(a[b]=h(d));return a}var i=Object.hasOwnProperty,j={},k=0,f;for(f in a)if(i.call(a,f)){var p=a[f];p.i=f;c(j[f]=p)}var z={f:{},e:{},b:{}},u={};for(f in j)i.call(j,f)&&P(f);for(f in u)q===u[f]&&d(j[f],0,z);var N;for(f in j)i.call(j,f)&&(N=q,h(j[f]));return j})}())
