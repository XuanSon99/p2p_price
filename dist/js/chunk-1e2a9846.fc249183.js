(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e2a9846"],{"0cb2":function(e,t,r){var a=r("7b0b"),n=Math.floor,i="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,c,l,u){var f=r+e.length,v=c.length,d=o;return void 0!==l&&(l=a(l),d=s),i.call(u,d,(function(a,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":s=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return a;if(o>v){var u=n(o/10);return 0===u?a:u<=v?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):a}s=c[o-1]}return void 0===s?"":s}))}},1148:function(e,t,r){"use strict";var a=r("a691"),n=r("577e"),i=r("1d80");e.exports=function(e){var t=n(i(this)),r="",s=a(e);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("577e"),s=r("d039"),o=r("ad6d"),c="toString",l=RegExp.prototype,u=l[c],f=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),v=u.name!=c;(f||v)&&a(RegExp.prototype,c,(function(){var e=n(this),t=i(e.source),r=e.flags,a=i(void 0===r&&e instanceof RegExp&&!("flags"in l)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("d039"),i=r("825a"),s=r("a691"),o=r("50c4"),c=r("577e"),l=r("1d80"),u=r("8aa5"),f=r("0cb2"),v=r("14c3"),d=r("b622"),p=d("replace"),h=Math.max,m=Math.min,g=function(e){return void 0===e?e:String(e)},b=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),y=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,r){var a=_?"$":"$0";return[function(e,r){var a=l(this),n=void 0==e?void 0:e[p];return void 0!==n?n.call(e,a,r):t.call(c(a),e,r)},function(e,n){var l=i(this),d=c(e);if("string"===typeof n&&-1===n.indexOf(a)&&-1===n.indexOf("$<")){var p=r(t,l,d,n);if(p.done)return p.value}var b="function"===typeof n;b||(n=c(n));var _=l.global;if(_){var y=l.unicode;l.lastIndex=0}var x=[];while(1){var I=v(l,d);if(null===I)break;if(x.push(I),!_)break;var C=c(I[0]);""===C&&(l.lastIndex=u(d,o(l.lastIndex),y))}for(var N="",S=0,P=0;P<x.length;P++){I=x[P];for(var w=c(I[0]),k=h(m(s(I.index),d.length),0),A=[],E=1;E<I.length;E++)A.push(g(I[E]));var F=I.groups;if(b){var M=[w].concat(A,k,d);void 0!==F&&M.push(F);var $=c(n.apply(void 0,M))}else $=f(w,d,k,A,F,n);k>=S&&(N+=d.slice(S,k)+$,S=k+w.length)}return N+d.slice(S)}]}),!y||!b||_)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("577e"),i=r("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(e){return function(t){var r=n(a(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5e89":function(e,t,r){var a=r("861d"),n=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var i,s;return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(s=i.prototype)&&s!==r.prototype&&n(e,s),e}},"8ba4":function(e,t,r){var a=r("23e7"),n=r("5e89");a({target:"Number",stat:!0},{isInteger:n})},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),s=r("6eeb"),o=r("5135"),c=r("c6b6"),l=r("7156"),u=r("d9b5"),f=r("c04e"),v=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,m=r("9bf2").f,g=r("58a8").trim,b="Number",_=n[b],y=_.prototype,x=c(d(y))==b,I=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,a,n,i,s,o,c,l=f(e,"number");if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(i=l.slice(2),s=i.length,o=0;o<s;o++)if(c=i.charCodeAt(o),c<48||c>n)return NaN;return parseInt(i,a)}return+l};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(x?v((function(){y.valueOf.call(r)})):c(r)!=b)?l(new _(I(t)),r,N):I(t)},S=a?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;S.length>P;P++)o(_,C=S[P])&&!o(N,C)&&m(N,C,h(_,C));N.prototype=y,y.constructor=N,s(n,b,N)}},b680:function(e,t,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),s=r("1148"),o=r("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},v=function(e,t,r){var a=-1,n=r;while(++a<6)n+=t*e[a],e[a]=n%1e7,n=l(n/1e7)},d=function(e,t){var r=6,a=0;while(--r>=0)a+=e[r],e[r]=l(a/t),a=a%t*1e7},p=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var a=String(e[t]);r=""===r?a:r+s.call("0",7-a.length)+a}return r},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,o,c=i(this),l=n(e),h=[0,0,0,0,0,0],m="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(t=f(c*u(2,69,1))-69,r=t<0?c*u(2,-t,1):c/u(2,t,1),r*=4503599627370496,t=52-t,t>0){v(h,0,r),a=l;while(a>=7)v(h,1e7,0),a-=7;v(h,u(10,a,1),0),a=t-1;while(a>=23)d(h,1<<23),a-=23;d(h,1<<a),v(h,1,1),d(h,2),g=p(h)}else v(h,0,r),v(h,1<<-t,0),g=p(h)+s.call("0",l);return l>0?(o=g.length,g=m+(o<=l?"0."+s.call("0",l-o)+g:g.slice(0,o-l)+"."+g.slice(o-l))):g=m+g,g}})},bb51:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("v-container",{staticClass:"mt-3"},[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"6"}},[r("v-card",[r("v-card-title",{staticClass:"pb-0"},[r("span",{staticClass:"buy"},[e._v("Mua")]),r("v-spacer"),r("div",{staticClass:"d-flex"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Số lượng"},model:{value:e.buy_search,callback:function(t){e.buy_search=t},expression:"buy_search"}})],1)],1),r("v-data-table",{attrs:{headers:e.headers,items:e.buy_data,"items-per-page":9,"footer-props":{"items-per-page-options":[9,9]},page:e.page.buy,"server-items-length":e.totalItems},on:{"update:page":function(t){return e.$set(e.page,"buy",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[r("div",{staticClass:"align-center d-flex name mb-1"},[r("span",{staticClass:"mr-1"},[e._v(e._s(a.advertiser.nickName))]),"profession"==a.adv.classify?r("img",{attrs:{src:"/img/authentication_icon.svg",alt:""}}):e._e()]),r("div",{staticClass:"overview"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.formatVNPrice(a.advertiser.monthOrderCount))+" lệnh")]),r("span",[e._v(e._s(e.toFixedValue(100*a.advertiser.monthFinishRate))+"% hoàn tất")])])]}},{key:"item.price",fn:function(t){var a=t.item;return[r("div",{staticClass:"price"},[e._v(e._s(e.formatVNPrice(a.adv.price))+" "),r("span",[e._v("VND")])])]}},{key:"item.limit",fn:function(t){var a=t.item;return[r("div",{staticClass:"limit"},[r("div",{staticClass:"mb-1"},[e._v("Khả dụng: "),r("b",[e._v(e._s(e.formatPrice(a.adv.tradableQuantity))+" USDT")])]),r("div",[r("span",[e._v("Giới hạn: "),r("b",[e._v("₫"+e._s(e.formatPrice(a.adv.minSingleTransAmount)))])]),e._v(" - "),r("span",[r("b",[e._v("₫"+e._s(e.formatPrice(a.adv.dynamicMaxSingleTransAmount)))])])])])]}},{key:"item.payments",fn:function(t){var a=t.item;return e._l(a.adv.tradeMethods.slice(0,2),(function(t,a){return r("div",{key:a,staticClass:"payments",style:{color:t.tradeMethodBgColor}},[e._v(" "+e._s(t.tradeMethodName)+" ")])}))}}],null,!0)})],1)],1),r("v-col",{attrs:{cols:"12",lg:"6"}},[r("v-card",[r("v-card-title",{staticClass:"pb-0"},[r("span",{staticClass:"sell"},[e._v("Bán")]),r("v-spacer"),r("div",{staticClass:"d-flex"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Số lượng"},model:{value:e.sell_search,callback:function(t){e.sell_search=t},expression:"sell_search"}})],1)],1),r("v-data-table",{attrs:{headers:e.headers,items:e.sell_data,"items-per-page":9,"footer-props":{"items-per-page-options":[9,9]},page:e.page.sell,"server-items-length":e.totalItems},on:{"update:page":function(t){return e.$set(e.page,"sell",t)}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[r("div",{staticClass:"align-center d-flex name mb-1"},[r("span",{staticClass:"mr-1"},[e._v(e._s(a.advertiser.nickName))]),"profession"==a.adv.classify?r("img",{attrs:{src:"/img/authentication_icon.svg",alt:""}}):e._e()]),r("div",{staticClass:"overview"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.formatVNPrice(a.advertiser.monthOrderCount))+" lệnh")]),r("span",[e._v(e._s(e.toFixedValue(100*a.advertiser.monthFinishRate))+"% hoàn tất")])])]}},{key:"item.price",fn:function(t){var a=t.item;return[r("div",{staticClass:"price"},[e._v(e._s(e.formatVNPrice(a.adv.price))+" "),r("span",[e._v("VND")])])]}},{key:"item.limit",fn:function(t){var a=t.item;return[r("div",{staticClass:"limit"},[r("div",{staticClass:"mb-1"},[e._v("Khả dụng: "),r("b",[e._v(e._s(e.formatPrice(a.adv.tradableQuantity))+" USDT")])]),r("div",[r("span",[e._v("Giới hạn: "),r("b",[e._v("₫"+e._s(e.formatPrice(a.adv.minSingleTransAmount)))])]),e._v(" - "),r("span",[r("b",[e._v("₫"+e._s(e.formatPrice(a.adv.dynamicMaxSingleTransAmount)))])])])])]}},{key:"item.payments",fn:function(t){var a=t.item;return e._l(a.adv.tradeMethods.slice(0,2),(function(t,a){return r("div",{key:a,staticClass:"payments",style:{color:t.tradeMethodBgColor}},[e._v(" "+e._s(t.tradeMethodName)+" ")])}))}}],null,!0)})],1)],1)],1),r("div",{staticClass:"d-flex justify-center mt-5"},[r("v-btn",{staticClass:"primary",on:{click:e.refreshHandle}},[e._v("Làm mới")])],1)],1)],1)},n=[],i=(r("99af"),r("b680"),r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("8ba4"),r("a9e3"),{data:function(){return{headers:[{text:"Tên",value:"name",sortable:!1},{text:"Giá",value:"price",sortable:!1},{text:"Giới hạn/Khả dụng",value:"limit",sortable:!1},{text:"Thanh toán",value:"payments",sortable:!1}],buy_search:"",buy_data:[],sell_search:"",sell_data:[],buy_top:[],sell_top:[],refresh:10,is_refresh:!1,totalItems:99,page:{buy:1,sell:1},setInter:""}},mounted:function(){var e=this;this.getBuyPrice(),this.getSellPrice(),setInterval((function(){0!=e.refresh?e.refresh=e.refresh-1:e.refresh=10}),1e3)},methods:{refreshHandle:function(){this.buy_data=[],this.sell_data=[],this.getBuyPrice(),this.getSellPrice()},getBuyPrice:function(){var e=this;this.CallAPI("get","p2p?type=buy&asset=usdt&fiat=vnd&transAmount=".concat(this.buy_search,"&page=").concat(this.page.buy),{},(function(t){e.buy_data=t.data.data}))},getSellPrice:function(){var e=this;this.CallAPI("get","p2p?type=sell&asset=usdt&fiat=vnd&transAmount=".concat(this.sell_search,"&page=").concat(this.page.sell),{},(function(t){e.sell_data=t.data.data}))},formatVNPrice:function(e){var t=(e/1).toFixed(0);return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatPrice:function(e){var t=(e/1).toFixed(2);return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},toFixedValue:function(e){return Number.isInteger(e)?e:e.toFixed(2)}},watch:{"page.buy":function(){this.getBuyPrice()},"page.sell":function(){this.getSellPrice()},is_refresh:function(){var e=this;if(this.is_refresh)return this.refresh=10,void(this.setInter=setInterval((function(){e.getBuyPrice(),e.getSellPrice()}),11e3));clearInterval(this.setInter)}}}),s=i,o=r("2877"),c=Object(o["a"])(s,a,n,!1,null,null,null);t["default"]=c.exports}}]);