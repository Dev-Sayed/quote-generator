(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),o=n(4),r=n.n(o),u=n(6),l=n(7),h=n(8),d=n(2),b=n(10),j=n(9),f=(n(16),n(0)),m=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).state={quote:"",author:""},c.handleClick=c.handleClick.bind(Object(d.a)(c)),c.handleClick2=c.handleClick2.bind(Object(d.a)(c)),c}return Object(h.a)(n,[{key:"handleClick",value:function(){var t=this,e=document.getElementById("quote");(function(){var n=Object(u.a)(r.a.mark((function n(){var c,a,i,s,o,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 2:return c=n.sent,n.next=5,c.json();case 5:a=n.sent,i=a.quotes,s=Math.ceil(100*Math.random()),o=i[s].quote,u=i[s].author,t.setState({quote:o,author:u}),o.length>120?e.classList.add("long-quote"):e.classList.remove("long-quote");case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}},{key:"componentDidMount",value:function(){this.handleClick()}},{key:"handleClick2",value:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.state.quote," - ").concat(this.state.author);window.open(t,"_blank")}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"quote-container",id:"quote-container",children:[Object(f.jsxs)("div",{className:"quote-text",children:[Object(f.jsx)("i",{className:"fas fa-quote-left"}),Object(f.jsx)("span",{id:"quote",children:this.state.quote})]}),Object(f.jsx)("div",{className:"quote-author",children:Object(f.jsx)("span",{id:"author",children:this.state.author})}),Object(f.jsxs)("div",{className:"button-container",children:[Object(f.jsx)("button",{onClick:this.handleClick2,className:"twitter-button",id:"twitter",title:"Tweet This!",children:Object(f.jsx)("i",{className:"fab fa-twitter"})}),Object(f.jsx)("button",{onClick:this.handleClick,id:"new-quote",children:"New Quote"})]})]})})}}]),n}(a.a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(f.jsx)(m,{}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.481947ee.chunk.js.map