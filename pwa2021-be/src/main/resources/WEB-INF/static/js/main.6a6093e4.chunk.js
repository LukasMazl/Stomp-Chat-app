(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{149:function(e,t,a){e.exports=a(291)},154:function(e,t,a){},155:function(e,t,a){},255:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),i=(a(154),a(155),a(18)),o=a.n(i),l=a(93),u=a.n(l),m=a(44),p=a(45),h=a(50),d=a(48),g=a(132),E=a.n(g),f=a(137),v=a.n(f),b=a(136),w=a.n(b),y=a(138),j=a.n(y),x=a(139),k=a.n(x),O=a(141),S=a.n(O),M=a(140),C=a.n(M),I=a(142),R=a.n(I),q=(a(255),a(317)),L=a(133),B=a.n(L),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.author,a=this.props.message.author.name,r=t!==a,s=this.props.message.author.avatar,c=this.props.startSequence?this.props.startSequence:"start",i=this.props.endSequence?this.props.endSequence:"end",l=""+new Date;return n.createElement("div",null,n.createElement("div",{className:["message","".concat(r?"mine":""),"".concat(c?"start":""),"".concat(i?"end":"")].join(" ")},!1,n.createElement("div",{className:"bubble-container"},n.createElement(o.a,{container:!0,direction:"row",alignItems:"center"},n.createElement(o.a,null,n.createElement(B.a,{title:a,"aria-label":"add"},n.createElement(q.a,{alt:"Remy Sharp",src:s},"B"))),n.createElement(o.a,null,n.createElement("div",{className:"bubble",title:l},e))))))}}]),a}(n.Component),T=a(135),W=a.n(T),z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.messages;if(console.log(e),e.length>0){var t=e.map((function(e,t){return n.createElement(N,{message:e,author:"lukas.mazl"})}));return n.createElement(W.a,{style:{height:"500px"},cols:2,spacing:1},t)}return n.createElement("div",null)}}]),a}(n.Component),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,messages:[]},n.clientRef=null,n.messageList=null,n}return Object(p.a)(a,[{key:"renderChat",value:function(e){return r.a.createElement("div",null)}},{key:"renderTextForm",value:function(e){var t=this;return r.a.createElement(o.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(o.a,{xs:8},r.a.createElement(w.a,{id:"message_text",label:"Message",multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),r.a.createElement(o.a,{xs:3},r.a.createElement(v.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(a){t.clientRef.sendMessage("/app/send/"+e,"ahooj")}},"Send")))}},{key:"onMessage",value:function(e){console.log(e);var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?this.renderChat(t):r.a.createElement(j.a,{style:{marginTop:"20px"}},r.a.createElement(k.a,{title:r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},t)}),r.a.createElement(S.a,null,r.a.createElement(z,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),r.a.createElement(R.a,{disableSpacing:!0},r.a.createElement(E.a,{url:"http://pwa-2021.herokuapp.com/ws",topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t)))}}]),a}(r.a.Component);var J=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(o.a,{xs:3},r.a.createElement(u.a,null,"Menu")),r.a.createElement(o.a,{xs:5},r.a.createElement(F,{roomId:"testRoom"})),r.a.createElement(o.a,{xs:3},r.a.createElement(u.a,null,"Uzivatel"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.6a6093e4.chunk.js.map