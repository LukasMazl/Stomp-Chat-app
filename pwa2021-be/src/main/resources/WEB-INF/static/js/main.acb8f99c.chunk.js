(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{149:function(e,t,a){e.exports=a(290)},154:function(e,t,a){},155:function(e,t,a){},255:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),i=(a(154),a(155),a(18)),c=a.n(i),l=a(93),u=a.n(l),m=a(24),h=a(32),E=a(50),d=a(48),p=a(132),g=a.n(p),v=a(137),O=a.n(v),f=a(136),_=a.n(f),S=a(138),T=a.n(S),R=a(139),b=a.n(R),y=a(141),I=a.n(y),M=a(140),j=a.n(M),A=a(142),L=a.n(A),w=(a(255),a(317)),N=a(133),k=a.n(N),x=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.author,a=this.props.message.author.name,r=t!==a,s=this.props.message.author.avatar,o=this.props.startSequence?this.props.startSequence:"start",i=this.props.endSequence?this.props.endSequence:"end",l=""+new Date;return n.createElement("div",null,n.createElement("div",{className:["message","".concat(r?"mine":""),"".concat(o?"start":""),"".concat(i?"end":"")].join(" ")},!1,n.createElement("div",{className:"bubble-container"},n.createElement(c.a,{container:!0,direction:"row",alignItems:"center"},n.createElement(c.a,null,n.createElement(k.a,{title:a,"aria-label":"add"},n.createElement(w.a,{alt:"Remy Sharp",src:s},"B"))),n.createElement(c.a,null,n.createElement("div",{className:"bubble",title:l},e))))))}}]),a}(n.Component),C=a(135),P=a.n(C),D=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.messages;if(console.log(e),e.length>0){var t=e.map((function(e,t){return n.createElement(x,{message:e,author:"lukas.mazl"})}));return n.createElement(P.a,{style:{height:"500px"},cols:2,spacing:1},t)}return n.createElement("div",null)}}]),a}(n.Component),F=function e(){Object(m.a)(this,e)};F.FULL_WEB_SOCKET_URL=(F.HTTP_PROTOCOL="http://")+(F.DOMAIN_NAME="pwa-2021.herokuapp.com")+(F.WEB_SOCKET_URL_SUFFIX="/ws");var B=F,G=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"getCall",value:function(e,t,a,n,r){var s=Object.keys(t);console.log(t),console.log(s);var o=e+"?";for(var i in s)o+=s[i]+"="+t[s[i]]+"&";console.log(o),this.call(o,"GET",null,a,n,r)}},{key:"call",value:function(e,t,a,n,r,s){var o=null!==a?JSON.stringify(a):null;fetch(e,{method:t,headers:{Origin:B.HTTP_PROTOCOL+B.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors",data:o}).then((function(e){return void 0!==s?s(e):e.json()})).then((function(e){n(e)})).catch((function(e){void 0!==r?r(e):console.log(e)}))}}]),e}();G.ORIGIN_URL=B.HTTP_PROTOCOL+B.DOMAIN_NAME,G.REST_API_PREFIX="/api/v1",G.REST_API_ENDPOINT=G.ORIGIN_URL+G.REST_API_PREFIX,G.GET_LAST_MESSAGES_FROM_ROOM=G.REST_API_ENDPOINT+"/room/messages",G.SEND_MESSAGE_TO_ROOM=G.REST_API_ENDPOINT+"/send";var U=G,W=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1,messages:[]},n.clientRef=null,n.messageList=null,n.messageBox=null,n}return Object(h.a)(a,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),r.a.createElement("div",null)}},{key:"getLastDataForRoom",value:function(e){var t=this;U.getCall(U.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t.onGetMessage(e)}),(function(e){console.error(e)}))}},{key:"renderTextForm",value:function(e){var t=this;return r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(c.a,{xs:8},r.a.createElement(_.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),r.a.createElement(c.a,{xs:3},r.a.createElement(O.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(a){console.log(t.messageBox.id);var n=t.messageBox.value;t.messageBox.value="",U.call(U.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:n})}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?r.a.createElement(T.a,{style:{marginTop:"20px"}},r.a.createElement(b.a,{title:r.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},t)}),r.a.createElement(I.a,null,r.a.createElement(D,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),r.a.createElement(L.a,{disableSpacing:!0},r.a.createElement(g.a,{url:B.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t))):this.renderChat(t)}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0})}}]),a}(r.a.Component);var q=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(c.a,{xs:3},r.a.createElement(u.a,null,"Menu")),r.a.createElement(c.a,{xs:5},r.a.createElement(W,{roomId:"testRoom"})),r.a.createElement(c.a,{xs:3},r.a.createElement(u.a,null,"Uzivatel"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.acb8f99c.chunk.js.map