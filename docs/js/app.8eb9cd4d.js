(function(t){function e(e){for(var r,a,u=e[0],o=e[1],p=e[2],c=0,m=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var o=n[u];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0da0":function(t,e,n){},"2b8c":function(t,e,n){},"35c0":function(t,e,n){t.exports=n.p+"img/gophersmu.b434a67d.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen font-sans",attrs:{id:"app"}},[n("router-view")],1)},s=[],a=(n("034f"),n("2877")),u={},o=Object(a["a"])(u,i,s,!1,null,null,null),p=o.exports,l=n("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home"},[n("HomeHero"),n("HomeIntro"),n("HomeGallery")],1)},m=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-hero h-screen flex"},[r("div",{staticClass:"backgrounds"}),r("div",{staticClass:"backgrounds backgrounds-alternate"}),r("div",{staticClass:"info-section  flex flex-col  justify-center px-10 text-white"},[r("div",{staticClass:"background-holder"}),r("div",{staticClass:"relative text-6xl m-auto my-0 md:ml-auto md:mr-0 md:text-right font-bold"},[r("img",{staticClass:"relative w-32 md:w-64 ml-auto ",attrs:{src:n("35c0"),alt:""}})]),r("p",{staticClass:"relative text-xl md:text-2xl text-center md:text-right py-5"},[t._v("Join us for "),r("strong",[t._v('"Hands on GoLang"')])]),r("div",{staticClass:"relative countdown"},[r("div",{staticClass:"slot"},[t._v("SAT")]),r("div",{staticClass:"slot"},[t._v("28")]),r("div",{staticClass:"slot"},[t._v("MAR")]),r("div",{staticClass:"slot"},[t._v("2020")])]),r("div",{staticClass:"relative countdown p-0"},[r("div",{staticClass:"slot-labels"},[t._v("day")]),r("div",{staticClass:"slot-labels"},[t._v("date")]),r("div",{staticClass:"slot-labels"},[t._v("month")]),r("div",{staticClass:"slot-labels"},[t._v("year")])]),r("a",{staticClass:"relative bg-red-500 px-4 py-2 text-white w-32 text-center rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer uppercase",attrs:{href:"#upcoming-event"}},[t._v(" more info ")])])])}],h=(n("eeab"),{}),v=Object(a["a"])(h,d,g,!1,null,null,null),f=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"py-10 px-10 text-xl text-gray-800 text-left"},[n("div",[n("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center",attrs:{id:"upcoming-event"}},[t._v("Upcoming event")]),n("event",t._b({},"event",t.events.upcoming,!1))],1)]),t._m(0),t.events.past.length?n("div",{staticClass:"py-10 px-10 text-xl text-gray-800 text-left"},[n("div",[n("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center"},[t._v("Past events")]),t._l(t.events.past,(function(e,r){return n("event",t._b({key:r},"event",e,!1))}))],2)]):t._e()])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blue-gradient text-white py-10 text-xl text-justify"},[n("div",{staticClass:"home-intro"},[n("h1",{staticClass:"text-4xl font-black font-sans py-4 text-center",attrs:{id:"about-us"}},[t._v("About Us")]),n("p",[t._v("Go is an open source programming language supported by Google.")]),n("p",[t._v("The language makes it easy to build simple, reliable, and efficient software.")]),n("p",[t._v("We are gophers (Go developers) from the paradise island of Mauritius. A tiny island in the Indian Ocean with loads of sunshine and equally bright minds.")]),n("p",[t._v("Our fellowship is a new one, initiated with developers who fell in love with Go and have used it professionally. We look forward to sharing our experience with more people; hoping we can make friends to learn and laugh along the way.")])])])}],j={registerURL:"https://www.meetup.com/GDG-Mauritius/events/266919961/",date:"2019-12-21",title:"Go: All you ever wanted to know but didn't dare to ask",description:"\nOur agenda is as follows:\n\n- Keynote (Intro to Go - short presentation)\n- First steps with Go\n- Building web APIs\n- Format: Talk and Code trial; bring your own laptop.\n    \n**Special Guest:** [Natalie Pistunovich](https://twitter.com/nataliepis), GDE for Go\n    ",host:"GDG Mauritius",hostURL:"https://www.meetup.com/GDG-Mauritius",venue:"Flying Dodo, Bagatelle",venueCode:"QFGW+84",pictures:{thumbs:["/meetup/2019-12-21/picture-01.thumb.jpg","/meetup/2019-12-21/picture-02.thumb.jpg","/meetup/2019-12-21/picture-03.thumb.jpg","/meetup/2019-12-21/picture-04.thumb.jpg","/meetup/2019-12-21/picture-05.thumb.jpg","/meetup/2019-12-21/picture-06.thumb.jpg","/meetup/2019-12-21/picture-07.thumb.jpg","/meetup/2019-12-21/picture-08.thumb.jpg","/meetup/2019-12-21/picture-09.thumb.jpg","/meetup/2019-12-21/picture-10.thumb.jpg","/meetup/2019-12-21/picture-11.thumb.jpg","/meetup/2019-12-21/picture-12.thumb.jpg","/meetup/2019-12-21/picture-13.thumb.jpg","/meetup/2019-12-21/picture-14.thumb.jpg","/meetup/2019-12-21/picture-15.thumb.jpg","/meetup/2019-12-21/picture-16.thumb.jpg","/meetup/2019-12-21/picture-17.thumb.jpg","/meetup/2019-12-21/picture-18.thumb.jpg","/meetup/2019-12-21/picture-19.thumb.jpg","/meetup/2019-12-21/picture-20.thumb.jpg","/meetup/2019-12-21/picture-21.thumb.jpg","/meetup/2019-12-21/picture-22.thumb.jpg","/meetup/2019-12-21/picture-23.thumb.jpg","/meetup/2019-12-21/picture-24.thumb.jpg","/meetup/2019-12-21/picture-25.thumb.jpg"],full:["/meetup/2019-12-21/picture-01.jpg","/meetup/2019-12-21/picture-02.jpg","/meetup/2019-12-21/picture-03.jpg","/meetup/2019-12-21/picture-04.jpg","/meetup/2019-12-21/picture-05.jpg","/meetup/2019-12-21/picture-06.jpg","/meetup/2019-12-21/picture-07.jpg","/meetup/2019-12-21/picture-08.jpg","/meetup/2019-12-21/picture-09.jpg","/meetup/2019-12-21/picture-10.jpg","/meetup/2019-12-21/picture-11.jpg","/meetup/2019-12-21/picture-12.jpg","/meetup/2019-12-21/picture-13.jpg","/meetup/2019-12-21/picture-14.jpg","/meetup/2019-12-21/picture-15.jpg","/meetup/2019-12-21/picture-16.jpg","/meetup/2019-12-21/picture-17.jpg","/meetup/2019-12-21/picture-18.jpg","/meetup/2019-12-21/picture-19.jpg","/meetup/2019-12-21/picture-20.jpg","/meetup/2019-12-21/picture-21.jpg","/meetup/2019-12-21/picture-22.jpg","/meetup/2019-12-21/picture-23.jpg","/meetup/2019-12-21/picture-24.jpg","/meetup/2019-12-21/picture-25.jpg"]}},_={url:"https://www.eventbrite.com/e/go-meetup-hands-on-golang-tickets-97489671231",date:"2020-03-28",title:"Hands on Golang",description:"\nMini workshop with hands-on Go development.\n\nWe will tackle the following exercises together:\n\n- Hello World with Golang\n- Introduction to Golang routines\n- Writing a proxy using Golang\n\n**Attendees are requested to bring their own laptops.**\n    ",host:"MCB Digital Factory",hostURL:"https://digitalfactory.mu/",venue:"MCB Digital Factory",venueCode:"RGQ2+9C Port Louis"},w={upcoming:_,past:[j]},y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:flex lg:flex-col"},[n("div",{staticClass:"lg:flex container mx-auto"},[n("div",{staticClass:"lg:w-1/2 flex-col flex justify-center text-center lg:text-right px-10"},[n("p",{staticClass:"text-3xl"},[n("span",{staticClass:"uppercase text-xl"},[t._v(" "+t._s(t.hostingText))]),t._v(" "),n("br"),n("a",{staticClass:"font-bold",attrs:{target:"_blank",href:t.registerURL}},[t._v('"'+t._s(t.title)+'"')]),n("br"),n("strong",{staticClass:"text-xl uppercase"},[t._v(t._s(t.formattedDate))]),n("br")]),n("p",{staticClass:"text-gray-600 text-sm"},[t._v("❤️ Thanks to "),n("a",{attrs:{href:t.hostURL,target:"_blank"}},[t._v(t._s(t.host))]),t._v(" for hosting this event.")])]),n("div",{staticClass:"lg:w-1/2"},[n("span",{domProps:{innerHTML:t._s(t.marked(t.description))}}),n("br"),t.isActive?n("a",{staticClass:"relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer",attrs:{target:"_blank",href:t.registerURL}},[t._v("Book your seat")]):t._e()])]),t.pictures?n("div",{staticClass:"grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-10 pt-12"},[n("gallery",{attrs:{images:t.pictures.full,index:t.pictIndex},on:{close:function(e){t.pictIndex=null}}}),t._l(t.pictures.thumbs,(function(e,r){return n("img",{key:r,staticClass:"cursor-pointer thumbnail",attrs:{src:e},on:{click:function(e){t.pictIndex=r}}})}))],2):t._e()])},C=[],k=(n("0d03"),n("2cf3")),G=n("b166"),O=n("e0c1"),P=n.n(O),M=n("067c"),S=n.n(M),H={components:{gallery:S.a},props:{registerURL:String,date:String,title:String,subtitle:String,description:String,host:String,hostURL:String,pictures:Object},data:function(){var t=Object(k["a"])(this.date,"yyyy-MM-dd",new Date),e=t>new Date,n=Object(G["a"])(t,"PPPP"),r=e?"We are hosting an event:":"We hosted an event",i=null;return{isActive:e,formattedDate:n,hostingText:r,pictIndex:i}},methods:{marked:P.a}},D=H,L=(n("e596"),Object(a["a"])(D,y,C,!1,null,"3279b500",null)),I=L.exports,R={components:{event:I},data:function(){return{events:w}}},T=R,U=(n("9343"),Object(a["a"])(T,b,x,!1,null,null,null)),A=U.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},$=[],W={},F=Object(a["a"])(W,E,$,!1,null,null,null),B=F.exports,J={name:"home",components:{HomeHero:f,HomeIntro:A,HomeGallery:B}},q=J,Q=Object(a["a"])(q,c,m,!1,null,null,null),K=Q.exports;r["a"].use(l["a"]);var N=[{path:"/",name:"home",component:K}],z=new l["a"]({routes:N}),V=z,X=n("2f62");r["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:V,store:Y,render:function(t){return t(p)}}).$mount("#app")},"7bfc":function(t,e,n){},"85ec":function(t,e,n){},9343:function(t,e,n){"use strict";var r=n("0da0"),i=n.n(r);i.a},ba8c:function(t,e,n){},e596:function(t,e,n){"use strict";var r=n("2b8c"),i=n.n(r);i.a},eeab:function(t,e,n){"use strict";var r=n("7bfc"),i=n.n(r);i.a}});
//# sourceMappingURL=app.8eb9cd4d.js.map