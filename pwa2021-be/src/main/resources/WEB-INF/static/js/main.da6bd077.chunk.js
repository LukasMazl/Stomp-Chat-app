(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{154:function(e,t,n){e.exports=n(290)},159:function(e,t,n){},160:function(e,t,n){},260:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),l=(n(159),n(15)),i=n(17),c=n(25),u=n(24),m=(n(160),n(37)),d=n.n(m),h=n(148),E=n.n(h),p=n(71),f=n.n(p),v=n(57),g=n.n(v),O=n(141),b=n.n(O),y=n(142),S=n.n(y),_=n(143),T=n.n(_),R=n(144),k=n.n(R),I=n(31),C=n.n(I),j=n(145),M=n.n(j),U=(n(260),n(312)),N=function e(){Object(l.a)(this,e)};N.WEB_SOCKET_URL_SUFFIX="/ws",N.FULL_WEB_SOCKET_URL=(N.HTTP_PROTOCOL="http://")+(N.DOMAIN_NAME="localhost:8080")+N.WEB_SOCKET_URL_SUFFIX;var x=N,L=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getCall",value:function(e,t,n,a,r){var s=e;if(null!==t){var o=Object.keys(t);for(var l in s+="?",o)s+=o[l]+"="+t[o[l]]+"&"}this.call(s,"GET",null,n,a,r)}},{key:"call",value:function(e,t,n,a,r,s){var o=null!==n?JSON.stringify(n):null,l={method:t,headers:{Origin:x.HTTP_PROTOCOL+x.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors"};null!==o&&(l.body=o),fetch(e,l).then((function(e){return void 0!==s?s(e):e.json()})).then((function(e){a(e)})).catch((function(e){void 0!==r?r(e):console.log(e)}))}}]),e}();L.ORIGIN_URL=x.HTTP_PROTOCOL+x.DOMAIN_NAME,L.REST_API_PREFIX="/api/v1",L.REST_API_ENDPOINT=L.ORIGIN_URL+L.REST_API_PREFIX,L.GET_USER_CONTEXT="/user/context",L.GET_LAST_MESSAGES_FROM_ROOM=L.REST_API_ENDPOINT+"/room/messages",L.SEND_MESSAGE_TO_ROOM=L.REST_API_ENDPOINT+"/send";var A=L,F=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"setUserContext",value:function(t){e.userHolder=t}},{key:"getUserContext",value:function(){return e.userHolder}},{key:"setOnlineUsers",value:function(t){e.onlineUsersHolder=t}},{key:"getOnlineUsers",value:function(){return e.userHolder}}]),e}();F.userHolder=null,F.onlineUsersHolder=null;var w=F,B=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.message.author.authorFullName,n=this.props.message.author.userId===w.userHolder.userId,r=this.props.message.author.userAvatar,s=this.props.startSequence?this.props.startSequence:"start",o=this.props.endSequence?this.props.endSequence:"end",l=""+new Date,i=this.getMessageRowForTooltip(t,r,e,n,l);return a.createElement("div",{className:["message","".concat(n?"mine":""),"".concat(s?"start":""),"".concat(o?"end":"")].join(" ")},!1,i)}},{key:"getMessageRowForTooltip",value:function(e,t,n,r,s){return r?a.createElement("div",{className:"bubble-container"},a.createElement("div",{className:"bubble"},n),a.createElement(U.a,{src:t,style:{margin:"auto 0 auto 0"}},"B")):a.createElement("div",{className:"bubble-container"},a.createElement(U.a,{src:t,style:{margin:"auto 0 auto 0"}},"B"),a.createElement("div",{className:"bubble",title:s},n))}}]),n}(a.Component),H=n(140),P=n.n(H),D=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).scrollArea=null,a}return Object(i.a)(n,[{key:"onNewMessage",value:function(){null!==this.scrollArea&&this.scrollArea.scrollBottom()}},{key:"render",value:function(){var e=this,t=this.props.messages;if(t.length>0){var n=t.map((function(e,t){return a.createElement(B,{message:e})}));return a.createElement(P.a,{ref:function(t){e.scrollArea=t},speed:.8,minScrollSize:400,style:{height:"500px"}},a.createElement("div",null,n))}return a.createElement("div",null)}}]),n}(a.Component),G=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getLastDataForRoom",value:function(e,t){A.getCall(A.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t(e)}),(function(e){console.error(e)}))}},{key:"sendMessage",value:function(e,t,n){A.call(A.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:t},(function(e){n()}))}},{key:"getUserContext",value:function(e){A.getCall(A.GET_USER_CONTEXT,null,(function(t){e(t)}))}}]),e}(),W=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,messages:[]},a.clientRef=null,a.messageList=null,a.messageBox=null,a}return Object(i.a)(n,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),r.a.createElement("div",null)}},{key:"getLastDataForRoom",value:function(e){G.getLastDataForRoom(e,this.onGetMessage.bind(this))}},{key:"sendMessage",value:function(e,t,n){G.sendMessage(e,t,n)}},{key:"renderTextForm",value:function(e){var t=this;return r.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(d.a,{xs:8},r.a.createElement(b.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),r.a.createElement(d.a,{xs:3},r.a.createElement(g.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(n){var a=t.messageBox.value;t.sendMessage(e,a,(function(){t.messageBox.value=""}))}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.push(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?r.a.createElement(S.a,{style:{marginTop:"20px"}},r.a.createElement(T.a,{title:r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.title)}),r.a.createElement(k.a,null,r.a.createElement(D,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),r.a.createElement(M.a,{disableSpacing:!0},r.a.createElement(f.a,{url:x.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t))):this.renderChat(t)}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0})}}]),n}(r.a.Component),X=n(146),q=n.n(X),K=n(147),J=n.n(K),z=n(103),V=n.n(z),$=n(60),Q=n.n($),Y=n(100),Z=n.n(Y),ee=n(101),te=n.n(ee),ne=n(102),ae=n.n(ne),re=n(99),se=n.n(re),oe=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(se.a,{alignItems:"flex-start"},r.a.createElement(Z.a,null,r.a.createElement(te.a,{alt:this.props.user.userName,src:this.props.user.avatar})),r.a.createElement(ae.a,{primary:this.props.user.userName,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{component:"span",variant:"body2",color:"textPrimary"},r.a.createElement(g.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(t){e.props.onClick(e.props.user.userId)}},"Send Message")))}))}}]),n}(a.Component),le=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={users:null},a}return Object(i.a)(n,[{key:"onMessage",value:function(e){w.onlineUsersHolder=e,this.setState({users:e})}},{key:"render",value:function(){var e=this,t=this.getOnlineUserItems();return r.a.createElement("div",null,r.a.createElement(f.a,{url:x.FULL_WEB_SOCKET_URL,topics:["/topics/user/online"],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),r.a.createElement(C.a,{variant:"h4",component:"h4"},"Online users"),r.a.createElement(Q.a,null),r.a.createElement(V.a,null,t),r.a.createElement(Q.a,null),r.a.createElement(Q.a,null),r.a.createElement(C.a,{variant:"h4",component:"h4"},"My rooms"),r.a.createElement(Q.a,null),r.a.createElement(V.a,null))}},{key:"onSendButtonClicked",value:function(e){this.props.onSendButtomClicked(e)}},{key:"getOnlineUserItems",value:function(){var e=this;return null===this.state.users||void 0===this.state.users?(null!==w.onlineUsersHolder&&this.setState({users:w.onlineUsersHolder}),r.a.createElement("div",null)):this.state.users.map((function(t,n){return console.log(t.userId),t.userId!==w.onlineUsersHolder?r.a.createElement(oe,{user:t,onClick:e.onSendButtonClicked.bind(e)}):r.a.createElement("div",null)}))}}]),n}(a.Component),ie=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isReady:!1,roomId:null,roomTitle:null},a}return Object(i.a)(n,[{key:"render",value:function(){return this.state.isReady?r.a.createElement("div",null,r.a.createElement(q.a,{position:"static",color:"secondary"},r.a.createElement(J.a,null,r.a.createElement(C.a,{variant:"h6"},"Chatting room"))),r.a.createElement(d.a,{alignItems:"center",container:!0,direction:"row",justify:"space-between",style:{padding:"20px"}},r.a.createElement(d.a,{alignItems:"center",xs:3},r.a.createElement(E.a,null,r.a.createElement(le,{onSendButtomClicked:this.prepareRoomForUser.bind(this)}))),r.a.createElement(d.a,{alignItems:"center",xs:6},r.a.createElement(W,{roomId:this.state.roomId,title:this.state.roomTitle})))):(this.getUserContext(),r.a.createElement("div",null))}},{key:"prepareRoomForUser",value:function(e){console.log(e)}},{key:"getSetUserHolder",value:function(e){w.userHolder=e,this.setState({isReady:!0,roomId:e.lastRoomId,roomTitle:e.title})}},{key:"getUserContext",value:function(){G.getUserContext(this.getSetUserHolder.bind(this))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.da6bd077.chunk.js.map