(this.webpackJsonprebofriends=this.webpackJsonprebofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(12),a(3)),s=a(4),i=a(6),h=a(5),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200 ")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots,a=t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})}));return r.a.createElement("div",null,a)},d=function(e){e.searchfield;var t=e.SearchChange;return r.a.createElement("div",{className:"pa3"},r.a.createElement("input",{type:"search",className:"pa3 ma3 b--green bg-lightest-blue",placeholder:"search robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=(a(13),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriend"),r.a.createElement(d,{SearchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.11c5fa39.chunk.js.map