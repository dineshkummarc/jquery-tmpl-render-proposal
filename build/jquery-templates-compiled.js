(function(){var m=/(?=\${[^}]*}|{{(?:(?:=|[a-z][^\W_]*)[\S\s]*?|\/(?:=|[a-z][^\W_]*)\s*)}})/gi,n=/^\s*(?:\(\s*([$_a-z]\w*)\s*(?:,\s*([$_a-z]\w*)\s*)?\)\s*)?(\S(?:[\S\s]*\S)?)\s*$/i,r=/^\s*(?:\(([\S\s]*)\)\s*)?([^\s()](?:[^()]*[^\s()])?)\s*$/,s={each:1,"if":1,wrap:1};function t(d){var a={};$.each(d.split(m),function(d,e){var c=e.match(/^{{\/(=|[a-z][^\W_]*)[\S\s]*}}/i);c&&(a[c[1]]=1)});return a}
function u(d,a){var b=["",""],e=[b],c=b,k=0;$.each(d.replace(/{#[\S\s]*?#}/g,"").replace(/{{!?|}}|(?:[^{}]|{(?!{)|}(?!}))+/g,function(a){return a==="{{!"?(++k,""):k?(a==="}}"?--k:a==="{{"&&++k,""):a}).split(m),function(d,b){var f=b.match(/^{{(\/?)(=|[a-z][^\W_]*)([\S\s]*)}}/i);if(f){if(f[1])c=e[--e.length-1];else{var j=[f[2],f[3]];c.push(j);a[f[2]]===1&&e.push(c=j)}b=b.substring(f[0].length)}else b.substring(0,2)==="${"&&(f=b.indexOf("}"),c.push(["=",b.substring(2,f)]),b=b.substring(f+1));b&&c.push(b)});
return b};$.extAll=function(d){var a=arguments,b,e,c;for(b=1;b<a.length;++b)for(c in e=a[b])d[c]=e[c];return d};
function v(d){var a=["var $$tmplVar0;$item=$item||{};with($data=$.extAll(Object.create?Object.create(null):{},$data||{})){return("],b=[],e,c=0;$.each(d.slice(2),function l(d,f){e&&a.push("+");var j;if(typeof f==="string")a.push("'"+String(f).replace(w,x)+"'");else{var i=f[0],g=f[1];j=f.length;var h="$$tmplVar"+c;if(i==="="){e||a.push("''+");var o="",p="",g=g.replace(/(=>[\w$.[\]]+)+$/,function(a){a=a.split("=>");p=Array(a.length).join(")");o=a.reverse().join("(");return""});a.push("(",h,"=(",g,"),",
o,"'function'!==typeof ",h,"?",h,":",h,".call(null,arguments))",p)}else if(i==="if"){h=2;for(g=e=1;g;h=i+1){i=j;for(g=h;g<i;++g)f[g][0]==="else"&&(i=g);var q=h<j?(h===2?f:f[h-1])[1]:"",g=/\S/.test(q);a.push(e?"":"''",h===2?"((":"):(",q,g?")?(":"");e=0;$.each(f.slice(h,i),l)}a.push(e?"))":"''))")}else i==="each"?(j=g.match(n),i=j[1]||"$index",g=j[2]||"$value",j=j[3],++c,a.push("(",h,"=[],$.each((",j,"),function(",i,",",g,"){var ","$$tmplVar",c,";",h,".push("),e=0,b.push(i+":"+i,g+":"+g),$.each(f.slice(2),
l),b.length-=2,e||a.push("''"),a.push(")}),",h,".join(''))"),--c):i==="tmpl"&&(j=g.match(r),i=j[1],a.push("(",h,"=",i?"$.extend([],arguments,["+i+"])":b.length?"[$.extAll({},$data,{"+b+"}),$item]":"arguments",",$.template((",j[2],")).tmpl(",h,"[0],",h,"[1]))"))}e=1});a.push(e?")}":"'')}");return Function("$data","$item",a.join(""))};$.templatePlugins=[];function y(d){return(d=$.templates[d])&&"function"!==typeof d.tmpl}
function z(d,a){function b(a){return function(c){var d;for(d=0;d<a;++d)c=$.templatePlugins[d](c,b(d));return c}}var e={};$.each(d,function l(a,c){e[a]!==1&&(e[a]=1,$.each(c,function(a,c){if(c[0]==="tmpl"||c[0]==="wrap"){var b=c[1].match(r);b&&(b=Function("return "+b[2])(),y(b)&&e[b]!==1&&l(b,d[b]=$.templates[b]))}}))});var c;$.each(b($.templatePlugins.length)(d),function(b,d){var e={tmpl:v(d)};b!==a?$.templates[b]=e:c=e});return c}$.templates={};
$.template=function A(a,b){var e=$.templates,c;if(arguments.length===1){if(a.indexOf("<")+1)return A(null,a);y(a)&&(c={},c[a]=e[a],z(c));return e[a]}c=u(b,$.extend(t(b),s));if(a===null)return z({_:c},"_");e[a]=c};var B={"&":"&amp;","<":"&lt;",">":"&gt;"};function C(d){return B[d]||(B[d]="&#"+d.charCodeAt(0)+";")}var D={"\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r","/":"\\/","\\":"\\\\"};function x(d){var a;if(!(a=D[d])){a=d.charCodeAt(0).toString(16);var b=a.length<=2?"\\x00":"\\u0000";a=b.substring(0,b.length-a.length)+a;a=D[d]=a}return a}var E=/[\0"&'<>]/g,w=/[\0\b-\r"&'/<->\\\x85\u2028\u2029]/g;function F(d){return d===void 0?"":String(d).replace(E,C)}$.encode=F;$.templatePlugins.push(function(d){$.each(d,function b(d,c){typeof c!=="string"&&(c[0]==="="?c[1]+="=>$.encode":c[0]==="html"?c[0]="=":$.each(c,b))});return d})}())
