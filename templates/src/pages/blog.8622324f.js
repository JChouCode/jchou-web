(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n(28),c=n.n(a),o=n(29),r=n.n(o),u=n(30),i=n.n(u),l=n(31),s=n.n(l),d=n(32),h=n.n(d),m=n(0),p=n.n(m),f=n(56),b=n.n(f),w=function(e){function t(){return c()(this,t),i()(this,s()(t).apply(this,arguments))}return h()(t,e),r()(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"container-footer"},p.a.createElement("div",null,"Copyright © Jeffrey Chou"),p.a.createElement(b.a,{href:"https://github.com/jchoucode/jchou-web","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star jchoucode/jchou-web on GitHub"},"Star"))}}]),t}(p.a.Component)},60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n(11),u=(n(143),n(149));t.default=function(){var e=Object(r.useRouteData)().posts;return c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,"Blogs"),e.map(function(e){return c.a.createElement(o.a,{key:e.id,to:"/blog/".concat(e.id),className:"post"},c.a.createElement("div",null,c.a.createElement("h3",null,e.title),c.a.createElement(u,{source:e.content,escapeHtml:!1})))}))}}}]);