(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{154:function(e,t,n){e.exports=n(290)},159:function(e,t,n){},160:function(e,t,n){},260:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),l=(n(159),n(15)),i=n(17),c=n(25),u=n(24),m=(n(160),n(37)),h=n.n(m),E=n(148),d=n.n(E),f=n(71),p=n.n(f),g=n(57),v=n.n(g),O=n(141),b=n.n(O),y=n(142),_=n.n(y),T=n(143),S=n.n(T),R=n(144),I=n.n(R),j=n(31),M=n.n(j),k=n(145),C=n.n(k),N=(n(260),n(312)),L=function e(){Object(l.a)(this,e)};L.HTTP_PROTOCOL="https://",L.DOMAIN_NAME="pwa-2021.herokuapp.com",L.WEB_SOCKET_URL_SUFFIX="/ws",L.FULL_WEB_SOCKET_URL=(L.HTTP_PROTOCOL="http://")+(L.DOMAIN_NAME="localhost:8080")+L.WEB_SOCKET_URL_SUFFIX;var A=L,x=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getCall",value:function(e,t,n,a,r){var s=e;if(null!==t){var o=Object.keys(t);for(var l in s+="?",o)s+=o[l]+"="+t[o[l]]+"&"}this.call(s,"GET",null,n,a,r)}},{key:"call",value:function(e,t,n,a,r,s){var o=null!==n?JSON.stringify(n):null,l={method:t,headers:{Origin:A.HTTP_PROTOCOL+A.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors"};null!==o&&(l.body=o),fetch(e,l).then((function(e){return void 0!==s?s(e):e.json()})).then((function(e){a(e)})).catch((function(e){void 0!==r?r(e):console.log(e)}))}}]),e}();x.ORIGIN_URL=A.HTTP_PROTOCOL+A.DOMAIN_NAME,x.REST_API_PREFIX="/api/v1",x.REST_API_ENDPOINT=x.ORIGIN_URL+x.REST_API_PREFIX,x.GET_USER_CONTEXT="/user/context",x.GET_LAST_MESSAGES_FROM_ROOM=x.REST_API_ENDPOINT+"/room/messages",x.SEND_MESSAGE_TO_ROOM=x.REST_API_ENDPOINT+"/send";var U=x,w=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"setUserContext",value:function(t){e.userHolder=t}},{key:"getUserContext",value:function(){return e.userHolder}}]),e}();w.userHolder=null;var F=w,P=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.message.author.authorFullName,n=this.props.message.author.userId===F.userHolder.userId,r=this.props.message.author.userAvatar,s=this.props.startSequence?this.props.startSequence:"start",o=this.props.endSequence?this.props.endSequence:"end",l=""+new Date,i=this.getMessageRowForTooltip(t,r,e,n,l);return a.createElement("div",{className:["message","".concat(n?"mine":""),"".concat(s?"start":""),"".concat(o?"end":"")].join(" ")},!1,i)}},{key:"getMessageRowForTooltip",value:function(e,t,n,r,s){return r?a.createElement("div",{className:"bubble-container"},a.createElement("div",{className:"bubble"},n),a.createElement(N.a,{src:t,style:{margin:"auto 0 auto 0"}},"B")):a.createElement("div",{className:"bubble-container"},a.createElement(N.a,{src:t,style:{margin:"auto 0 auto 0"}},"B"),a.createElement("div",{className:"bubble",title:s},n))}}]),n}(a.Component),D=n(140),B=n.n(D),G=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).scrollArea=null,a}return Object(i.a)(n,[{key:"onNewMessage",value:function(){null!==this.scrollArea&&this.scrollArea.scrollBottom()}},{key:"render",value:function(){var e=this,t=this.props.messages;if(t.length>0){var n=t.map((function(e,t){return a.createElement(P,{message:e})}));return a.createElement(B.a,{ref:function(t){e.scrollArea=t},speed:.8,minScrollSize:400,style:{height:"500px"}},a.createElement("div",null,n))}return a.createElement("div",null)}}]),n}(a.Component),H=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getLastDataForRoom",value:function(e,t){U.getCall(U.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t(e)}),(function(e){console.error(e)}))}},{key:"sendMessage",value:function(e,t,n){U.call(U.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:t},(function(e){n()}))}},{key:"getUserContext",value:function(e){U.getCall(U.GET_USER_CONTEXT,null,(function(t){e(t)}))}}]),e}(),W=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,messages:[]},a.clientRef=null,a.messageList=null,a.messageBox=null,a}return Object(i.a)(n,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),r.a.createElement("div",null)}},{key:"getLastDataForRoom",value:function(e){H.getLastDataForRoom(e,this.onGetMessage.bind(this))}},{key:"sendMessage",value:function(e,t,n){H.sendMessage(e,t,n)}},{key:"renderTextForm",value:function(e){var t=this;return r.a.createElement(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(h.a,{xs:8},r.a.createElement(b.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),r.a.createElement(h.a,{xs:3},r.a.createElement(v.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(n){var a=t.messageBox.value;t.sendMessage(e,a,(function(){t.messageBox.value=""}))}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?r.a.createElement(_.a,{style:{marginTop:"20px"}},r.a.createElement(S.a,{title:r.a.createElement(M.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.title)}),r.a.createElement(I.a,null,r.a.createElement(G,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),r.a.createElement(C.a,{disableSpacing:!0},r.a.createElement(p.a,{url:A.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t))):this.renderChat(t)}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0})}}]),n}(r.a.Component),X=n(146),q=n.n(X),K=n(147),z=n.n(K),J=n(103),V=n.n(J),$=n(60),Q=n.n($),Y=n(100),Z=n.n(Y),ee=n(101),te=n.n(ee),ne=n(102),ae=n.n(ne),re=n(99),se=n.n(re),oe=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(se.a,{alignItems:"flex-start"},r.a.createElement(Z.a,null,r.a.createElement(te.a,{alt:this.props.user.userName,src:this.props.user.avatar})),r.a.createElement(ae.a,{primary:this.props.user.userName,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{component:"span",variant:"body2",color:"textPrimary"},r.a.createElement(v.a,{variant:"contained",color:"primary",href:"#contained-buttons"},"Link")))}))}}]),n}(a.Component),le=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={users:null},a}return Object(i.a)(n,[{key:"onMessage",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.getOnlineUserItems();return r.a.createElement("div",null,r.a.createElement(p.a,{url:A.FULL_WEB_SOCKET_URL,topics:["/topics/user/online"],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),r.a.createElement(M.a,{variant:"h4",component:"h4"},"Online users"),r.a.createElement(Q.a,null),r.a.createElement(V.a,null,t),r.a.createElement(Q.a,null),r.a.createElement(Q.a,null),r.a.createElement(M.a,{variant:"h4",component:"h4"},"My rooms"),r.a.createElement(Q.a,null),r.a.createElement(V.a,null,t))}},{key:"getOnlineUserItems",value:function(){return[{userName:"Lukas Mazl",avatar:"avatar"}].map((function(e,t){return r.a.createElement(oe,{user:e})}))}}]),n}(a.Component),ie=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isReady:!1,roomId:null,roomTitle:null},a}return Object(i.a)(n,[{key:"render",value:function(){return this.state.isReady?r.a.createElement("div",null,r.a.createElement(q.a,{position:"static",color:"secondary"},r.a.createElement(z.a,null,r.a.createElement(M.a,{variant:"h6"},"Chatting room"))),r.a.createElement(h.a,{alignItems:"center",container:!0,direction:"row",justify:"space-between"},r.a.createElement(h.a,{alignItems:"center",xs:3},r.a.createElement(d.a,null,r.a.createElement(le,null))),r.a.createElement(h.a,{alignItems:"center",xs:6},r.a.createElement(W,{roomId:this.state.roomId,title:this.state.roomTitle})))):(this.getUserContext(),r.a.createElement("div",null))}},{key:"getSetUserHolder",value:function(e){F.userHolder=e,this.setState({isReady:!0,roomId:e.lastRoomId,roomTitle:e.title})}},{key:"getUserContext",value:function(){H.getUserContext(this.getSetUserHolder.bind(this))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.a30a2b76.chunk.js.map