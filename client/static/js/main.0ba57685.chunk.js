(this["webpackJsonpmy-app-name"]=this["webpackJsonpmy-app-name"]||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),s=a.n(r),c=(a(33),a(34),a(35),a(38),a(39),a(6)),o=a.n(c),i=a(8),m=a(9),u=a(10),d=a(12),h=a(11),p=a(13),f=a(7),E=a.n(f),v=a(64),N=a(65),w=0,b=(l.a.Component,[]),g=[],y=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getNetas",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("//hellonetaji.therespect.org/api/politicians");case 3:200===(t=e.sent).status&&(g=b=t.data,this.setState({netas:b})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),this.setState({error:"An error occured"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getNetas()}},{key:"filterNetas",value:function(e){e=e.toUpperCase();var t=g.filter((function(t){return t.ACName.toUpperCase().includes(e)||t.Party.toUpperCase().includes(e)||t.Mobile.toString().toUpperCase().includes(e)||t.Email.toUpperCase().includes(e)||t.Twitter.toUpperCase().includes(e)||t.Address.toUpperCase().includes(e)}));b=t,this.setState({netas:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-sm-1"}),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",null,l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",onInput:function(t){e.filterNetas(t.target.value)},className:"form-control",placeholder:"search for your MLA from Maharashtra here (contact us on social media for data addition for other states)",name:"search"}),l.a.createElement("div",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-default",type:"submit"},l.a.createElement("i",{className:"fas fa-search"})))),b&&b.map((function(e,t){return l.a.createElement("div",{key:"".concat(e._id,"-").concat(e.ACName),className:"mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",null,l.a.createElement("small",null," ",l.a.createElement("sup",{className:"text-muted"},e.No)),l.a.createElement("label",{className:"ml-3"}," ",e["Sitting MLAs"]," ",l.a.createElement("small",null,"(",e.Party,") from ",e.ACName)," "))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("ul",null,e.Mobile&&l.a.createElement("li",null,l.a.createElement("small",null,"phone:")," ",l.a.createElement("a",{href:"tel:".concat(e.Mobile)},e.Mobile)),e.Email&&l.a.createElement("li",null,l.a.createElement("small",null,"email:"),l.a.createElement("a",{href:"mailto:".concat(e.Email)},e.Email)),e.Twitter&&l.a.createElement("li",null,l.a.createElement("small",null,"social:")," ",e.Twitter),e.Address&&l.a.createElement("li",null,l.a.createElement("small",null,"address:")," ",e.Address)))))})))),l.a.createElement("div",{className:"col-sm-1"}))}}]),t}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.instagram.com/hellonetaji/"},l.a.createElement("i",{className:"fab fa-instagram"})," HelloNetaji "),l.a.createElement("a",{href:"https://facebook.com/HelloNetaji-102682481335358/"},l.a.createElement("i",{className:"fab fa-facebook"})," HelloNetaji "),l.a.createElement("a",{href:"https://twitter.com/netajihello"},l.a.createElement("i",{className:"fab fa-twitter"})," NetajiHello "),l.a.createElement("label",{className:"float-right"},"v1.0.2")),l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("p",null,"NPR/ Census process has been put on hold on the wake of the Covid-19 pandemic. While that fight is still on, we are now focusing on the current needs and rights of the masses affected badly due to the current lockdown. Many civil society organisations and individuals are working to provide relief to those who need it (without agenda)."),l.a.createElement("p",null,"We can't do this alone. Reach out to your elected representatives and ask them for help in areas where families are in distress. Please note this is not the time to criticise alone, we have to work with them but also hold them accountable"),l.a.createElement("p",null,"Find your Netaji (MLA) here")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-1"}),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(y,null),l.a.createElement("hr",{style:{margin:"3em"}})),l.a.createElement("div",{className:"col-sm-1"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0ba57685.chunk.js.map