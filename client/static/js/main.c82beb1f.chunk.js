(this["webpackJsonpmy-app-name"]=this["webpackJsonpmy-app-name"]||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(24),c=a.n(r),s=(a(33),a(34),a(35),a(38),a(39),a(12)),o=a.n(s),i=a(25),m=a(6),u=a(7),p=a(10),d=a(8),h=a(11),E=a(9),f=a.n(E),N=a(64),v=a(65),b=(n.a.Component,[]),g=[],w=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getNetas",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("//hellonetaji.therespect.org/api/politicians");case 3:200===(t=e.sent).status&&(g=b=t.data,this.setState({netas:b})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.setState({error:"An error occured"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getNetas()}},{key:"filterNetas",value:function(e){e=e.toUpperCase();var t=g.filter((function(t){return t.ACName.toUpperCase().includes(e)||t.Party.toUpperCase().includes(e)||t.Mobile.toString().toUpperCase().includes(e)||t.Email.toUpperCase().includes(e)||t.Twitter.toUpperCase().includes(e)||t.Address.toUpperCase().includes(e)}));b=t,this.setState({netas:t})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-sm-1"}),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",null,n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",onInput:function(t){e.filterNetas(t.target.value)},className:"form-control",placeholder:"search for your MLA from Maharashtra here (contact us on social media for data addition for other states)",name:"search"}),n.a.createElement("div",{className:"input-group-btn"},n.a.createElement("button",{className:"btn btn-default",type:"submit"},n.a.createElement("i",{className:"fas fa-search"})))),b&&b.map((function(e,t){return n.a.createElement("div",{key:"".concat(e._id,"-").concat(e.ACName),className:"mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",null,n.a.createElement("small",null," ",n.a.createElement("sup",{className:"text-muted"},e.No)),n.a.createElement("label",{className:"ml-3"}," ",e["Sitting MLAs"]," ",n.a.createElement("small",null,"(",e.Party,") from ",e.ACName)," "))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("ul",null,e.Mobile&&n.a.createElement("li",null,n.a.createElement("small",null,"phone:")," ",n.a.createElement("a",{href:"tel:".concat(e.Mobile)},e.Mobile)),e.Email&&n.a.createElement("li",null,n.a.createElement("small",null,"email:"),n.a.createElement("a",{href:"mailto:".concat(e.Email)},e.Email)),e.Twitter&&n.a.createElement("li",null,n.a.createElement("small",null,"social:")," ",e.Twitter),e.Address&&n.a.createElement("li",null,n.a.createElement("small",null,"address:")," ",e.Address)))))})))),n.a.createElement("div",{className:"col-sm-1"}))}}]),t}(n.a.Component);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.instagram.com/hellonetaji/"},n.a.createElement("i",{className:"fab fa-instagram"})," HelloNetaji "),n.a.createElement("a",{href:"https://facebook.com/HelloNetaji-102682481335358/"},n.a.createElement("i",{className:"fab fa-facebook"})," HelloNetaji "),n.a.createElement("a",{href:"https://twitter.com/netajihello"},n.a.createElement("i",{className:"fab fa-twitter"})," NetajiHello "),n.a.createElement("label",{className:"float-right"},"v1.0.2")),n.a.createElement("div",{className:"jumbotron text-center"},n.a.createElement("img",{style:{width:"10%"},src:"logos/logo.jpeg"}),n.a.createElement("p",null,n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/National_Register_of_Citizens"}," NPR")," 2020 se NRC banega ",n.a.createElement("a",{href:"https://twitter.com/intent/tweet?url=http%3A%2F%2Fhellonetaji.therespect.org%2F&text=Dear%20Netaji!%20Please%20stop%20NPR%20in%20Maharashtra%20Assembly.%20NPR%20is%20the%20first%20step%20of%20NRC%20which%20will%20mark%20people%20as%20doubtful%20citizens!%20%23HelloNetaji%20%23noNPR%20%23noNRC%20Find%20your%20Neta%20at%20"},"#NoNPR"))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-1"}),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement(w,null),n.a.createElement("hr",{style:{margin:"3em"}})),n.a.createElement("div",{className:"col-sm-1"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c82beb1f.chunk.js.map