(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{149:function(e,t,n){e.exports=n(290)},154:function(e,t,n){},155:function(e,t,n){},255:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),s=n.n(r),c=(n(154),n(155),n(18)),l=n.n(c),i=n(93),u=n.n(i),m=n(24),h=n(32),E=n(50),g=n(48),p=n(132),d=n.n(p),v=n(137),O=n.n(v),f=n(136),_=n.n(f),S=n(138),T=n.n(S),b=n(139),R=n.n(b),y=n(141),I=n.n(y),M=n(140),j=n.n(M),A=n(142),L=n.n(A),w=(n(255),n(317)),N=n(133),k=n.n(N),x=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.author,n=this.props.message.author.name,o=t!==n,r=this.props.message.author.avatar,s=this.props.startSequence?this.props.startSequence:"start",c=this.props.endSequence?this.props.endSequence:"end",i=""+new Date;return a.createElement("div",null,a.createElement("div",{className:["message","".concat(o?"mine":""),"".concat(s?"start":""),"".concat(c?"end":"")].join(" ")},!1,a.createElement("div",{className:"bubble-container"},a.createElement(l.a,{container:!0,direction:"row",alignItems:"center"},a.createElement(l.a,null,a.createElement(k.a,{title:n,"aria-label":"add"},a.createElement(w.a,{alt:"Remy Sharp",src:r},"B"))),a.createElement(l.a,null,a.createElement("div",{className:"bubble",title:i},e))))))}}]),n}(a.Component),C=n(135),P=n.n(C),D=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.messages;if(console.log(e),e.length>0){var t=e.map((function(e,t){return a.createElement(x,{message:e,author:"lukas.mazl"})}));return a.createElement(P.a,{style:{height:"500px"},cols:2,spacing:1},t)}return a.createElement("div",null)}}]),n}(a.Component),F=function e(){Object(m.a)(this,e)};F.FULL_WEB_SOCKET_URL=(F.HTTP_PROTOCOL="http://")+(F.DOMAIN_NAME="pwa-2021.herokuapp.com")+(F.WEB_SOCKET_URL_SUFFIX="/ws");var G=F,B=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"getCall",value:function(e,t,n,a,o){var r=Object.keys(t);console.log(t),console.log(r);var s=e+"?";for(var c in r)s+=r[c]+"="+t[r[c]]+"&";console.log(s),this.call(s,"GET",null,n,a,o)}},{key:"call",value:function(e,t,n,a,o,r){var s=null!==n?JSON.stringify(n):null,c={method:t,headers:{Origin:G.HTTP_PROTOCOL+G.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors"};null!==s&&(console.log(s),c.body=s,console.log(c)),console.log(c),fetch(e,c).then((function(e){return void 0!==r?r(e):e.json()})).then((function(e){a(e)})).catch((function(e){void 0!==o?o(e):console.log(e)}))}}]),e}();B.ORIGIN_URL=G.HTTP_PROTOCOL+G.DOMAIN_NAME,B.REST_API_PREFIX="/api/v1",B.REST_API_ENDPOINT=B.ORIGIN_URL+B.REST_API_PREFIX,B.GET_LAST_MESSAGES_FROM_ROOM=B.REST_API_ENDPOINT+"/room/messages",B.SEND_MESSAGE_TO_ROOM=B.REST_API_ENDPOINT+"/send";var U=B,W=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,messages:[]},a.clientRef=null,a.messageList=null,a.messageBox=null,a}return Object(h.a)(n,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),o.a.createElement("div",null)}},{key:"getLastDataForRoom",value:function(e){var t=this;U.getCall(U.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t.onGetMessage(e)}),(function(e){console.error(e)}))}},{key:"renderTextForm",value:function(e){var t=this;return o.a.createElement(l.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},o.a.createElement(l.a,{xs:8},o.a.createElement(_.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),o.a.createElement(l.a,{xs:3},o.a.createElement(O.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(n){var a=t.messageBox.value;U.call(U.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:a},(function(e){t.messageBox.value=""}))}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?o.a.createElement(T.a,{style:{marginTop:"20px"}},o.a.createElement(R.a,{title:o.a.createElement(j.a,{variant:"body2",color:"textSecondary",component:"p"},t)}),o.a.createElement(I.a,null,o.a.createElement(D,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),o.a.createElement(L.a,{disableSpacing:!0},o.a.createElement(d.a,{url:G.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t))):this.renderChat(t)}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0})}}]),n}(o.a.Component);var q=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},o.a.createElement(l.a,{xs:3},o.a.createElement(u.a,null,"Menu")),o.a.createElement(l.a,{xs:5},o.a.createElement(W,{roomId:"testRoom"})),o.a.createElement(l.a,{xs:3},o.a.createElement(u.a,null,"Uzivatel"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.27d322d8.chunk.js.map