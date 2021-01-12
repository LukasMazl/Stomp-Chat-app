(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{154:function(e,t,n){e.exports=n(290)},159:function(e,t,n){},160:function(e,t,n){},260:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),o=n.n(r),l=(n(159),n(15)),i=n(17),c=n(25),u=n(24),m=(n(160),n(37)),d=n.n(m),h=n(148),g=n.n(h),v=n(70),f=n.n(v),E=n(57),p=n.n(E),O=n(136),y=n.n(O),b=n(137),R=n.n(b),S=n(138),T=n.n(S),_=n(139),k=n.n(_),I=n(34),C=n.n(I),U=n(140),j=n.n(U),M=(n(260),n(312)),A=function e(){Object(l.a)(this,e)};A.WEB_SOCKET_URL_SUFFIX="/ws",A.FULL_WEB_SOCKET_URL=(A.HTTP_PROTOCOL="http://")+(A.DOMAIN_NAME="localhost:8080")+A.WEB_SOCKET_URL_SUFFIX;var L=A,x=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getCall",value:function(e,t,n,a,s){var r=e;if(null!==t){var o=Object.keys(t);for(var l in r+="?",o)r+=o[l]+"="+t[o[l]]+"&"}this.call(r,"GET",null,n,a,s)}},{key:"call",value:function(e,t,n,a,s,r){var o=null!==n?JSON.stringify(n):null,l={method:t,headers:{Origin:L.HTTP_PROTOCOL+L.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors"};null!==o&&(l.body=o),fetch(e,l).then((function(e){return void 0!==r?r(e):e.json()})).then((function(e){a(e)})).catch((function(e){void 0!==s?s(e):console.log(e)}))}}]),e}();x.ORIGIN_URL=L.HTTP_PROTOCOL+L.DOMAIN_NAME,x.REST_API_PREFIX="/api/v1",x.REST_API_ENDPOINT=x.ORIGIN_URL+x.REST_API_PREFIX,x.GET_USER_CONTEXT="/user/context",x.PREPARE_ROOM=x.REST_API_PREFIX+"/room/prepare",x.GET_LAST_MESSAGES_FROM_ROOM=x.REST_API_ENDPOINT+"/room/messages",x.SEND_MESSAGE_TO_ROOM=x.REST_API_ENDPOINT+"/send";var N=x,F=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"setUserContext",value:function(t){e.userHolder=t}},{key:"getUserContext",value:function(){return e.userHolder}},{key:"setOnlineUsers",value:function(t){e.onlineUsersHolder=t}},{key:"getOnlineUsers",value:function(){return e.userHolder}}]),e}();F.userHolder=null,F.onlineUsersHolder=null;var P=F,w=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.message.author.authorFullName,n=this.props.message.author.userId===P.userHolder.userId,s=this.props.message.author.userAvatar,r=this.props.startSequence?this.props.startSequence:"start",o=this.props.endSequence?this.props.endSequence:"end",l=""+new Date,i=this.getMessageRowForTooltip(t,s,e,n,l);return a.createElement("div",{className:["message","".concat(n?"mine":""),"".concat(r?"start":""),"".concat(o?"end":"")].join(" ")},!1,i)}},{key:"getMessageRowForTooltip",value:function(e,t,n,s,r){return s?a.createElement("div",{className:"bubble-container"},a.createElement("div",{className:"bubble"},n),a.createElement(M.a,{src:t,style:{margin:"auto 0 auto 0"}},"B")):a.createElement("div",{className:"bubble-container"},a.createElement(M.a,{src:t,style:{margin:"auto 0 auto 0"}},"B"),a.createElement("div",{className:"bubble",title:r},n))}}]),n}(a.Component),H=n(135),B=n.n(H),D=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).scrollArea=null,a}return Object(i.a)(n,[{key:"onNewMessage",value:function(){null!==this.scrollArea&&this.scrollArea.scrollBottom()}},{key:"render",value:function(){var e=this,t=this.props.messages;if(t.length>0){var n=t.map((function(e,t){return a.createElement(w,{message:e})}));return a.createElement(B.a,{ref:function(t){e.scrollArea=t},speed:.8,minScrollSize:400,style:{height:"500px"}},a.createElement("div",null,n))}return a.createElement("div",null)}}]),n}(a.Component),G=function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,null,[{key:"getLastDataForRoom",value:function(e,t){N.getCall(N.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t(e)}),(function(e){console.error(e)}))}},{key:"sendMessage",value:function(e,t,n){N.call(N.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:t},(function(e){n()}))}},{key:"getUserContext",value:function(e){N.getCall(N.GET_USER_CONTEXT,null,(function(t){e(t)}))}}]),e}(),W=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),a=t.call(this,e),console.log(e),a.state={roomTittle:e.title,isLoaded:void 0!==e.messages,messages:e.messages},a.clientRef=null,a.messageList=null,a.messageBox=null,a}return Object(i.a)(n,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),s.a.createElement("div",null)}},{key:"changeRoom",value:function(e,t,n){this.getLastDataForRoom(e,t,n)}},{key:"shouldComponentUpdate",value:function(e,t,n){return!0}},{key:"getLastDataForRoom",value:function(e,t,n){null===n||void 0===n?G.getLastDataForRoom(e,this.onGetMessage.bind(this)):this.setState({messages:n,isLoaded:!0})}},{key:"sendMessage",value:function(e,t,n){G.sendMessage(e,t,n)}},{key:"renderTextForm",value:function(e){var t=this;return s.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},s.a.createElement(d.a,{xs:8},s.a.createElement(y.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),s.a.createElement(d.a,{xs:3},s.a.createElement(p.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(n){var a=t.messageBox.value;t.sendMessage(e,a,(function(){t.messageBox.value=""}))}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.unshift(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.props.roomId;return this.state.isLoaded?s.a.createElement(R.a,{style:{marginTop:"20px"}},s.a.createElement(T.a,{title:s.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},this.state.roomTittle)}),s.a.createElement(k.a,null,s.a.createElement(D,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),s.a.createElement(j.a,{disableSpacing:!0},s.a.createElement(f.a,{url:L.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+t],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),this.renderTextForm(t))):this.renderChat(t)}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0,roomTittle:e.roomTitle})}}]),n}(s.a.Component),X=n(146),q=n.n(X),K=n(147),J=n.n(K),z=n(145),V=n.n(z),$=n(98),Q=n.n($),Y=n(142),Z=n.n(Y),ee=n(143),te=n.n(ee),ne=n(144),ae=n.n(ne),se=n(141),re=n.n(se),oe=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(re.a,{alignItems:"flex-start"},s.a.createElement(Z.a,null,s.a.createElement(te.a,{alt:this.props.user.userName,src:this.props.user.avatar})),s.a.createElement(ae.a,{primary:this.props.user.userName,secondary:s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{component:"span",variant:"body2",color:"textPrimary"},s.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(t){e.props.onClick(e.props.user.userId)}},"Send Message")))}))}}]),n}(a.Component),le=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),a=t.call(this,e),console.log(e),a.state={users:e.users},a}return Object(i.a)(n,[{key:"onMessage",value:function(e){P.onlineUsersHolder=e,console.log(e);var t=this.prepareUsers(e);console.log(t),this.setState({users:t})}},{key:"prepareUsers",value:function(e){var t=this.state.users;for(var n in t)t[n].isOnline=!1;if(console.log(e),null!==e&&void 0!==e)for(var a in e){var s=e[a];console.log(s);var r=this.findUser(s.userId,this.state.users);console.log(r),null==r?(s.isOnline=!0,t.push(s)):s.isOnline=!0,console.log(t)}return t}},{key:"findUser",value:function(e,t){if(null===t||void 0===t)return null;for(var n in t)if(t[n].userId===e)return n;return null}},{key:"render",value:function(){var e=this,t=this.getOnlineUserItems();return s.a.createElement("div",null,s.a.createElement(f.a,{url:L.FULL_WEB_SOCKET_URL,topics:["/topics/user/online"],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),s.a.createElement(C.a,{variant:"h4",component:"h4",style:{textAlign:"center"}},"Users"),s.a.createElement(Q.a,null),s.a.createElement(V.a,null,t),s.a.createElement(Q.a,null))}},{key:"onSendButtonClicked",value:function(e){this.props.onSendButtomClicked(e)}},{key:"getOnlineUserItems",value:function(){var e=this;return null===this.state.users||void 0===this.state.users?(null!==P.onlineUsersHolder&&this.setState({users:P.onlineUsersHolder}),s.a.createElement("div",null)):this.state.users.map((function(t,n){return t.userId!==P.userHolder.userId?(console.log(t.isOnline),s.a.createElement(oe,{user:t,onClick:e.onSendButtonClicked.bind(e)})):s.a.createElement("div",null)}))}}]),n}(a.Component),ie=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isReady:!1,roomId:null,roomTitle:void 0,messages:void 0},a.chatRoom=null,a}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!0}},{key:"render",value:function(){var e=this;return this.state.isReady?s.a.createElement("div",null,s.a.createElement(q.a,{position:"static",color:"secondary"},s.a.createElement(J.a,null,s.a.createElement(C.a,{variant:"h6"},"Chatting room"))),s.a.createElement(d.a,{alignItems:"center",container:!0,direction:"row",justify:"space-between",style:{padding:"20px"}},s.a.createElement(d.a,{alignItems:"center",xs:3,style:{height:"auto"}},s.a.createElement(g.a,null,s.a.createElement(le,{onSendButtomClicked:this.prepareRoomForUser.bind(this),users:P.userHolder.userDataDtoSet}))),s.a.createElement(d.a,{alignItems:"center",xs:8},s.a.createElement(W,{roomId:this.state.roomId,title:this.state.roomTitle,ref:function(t){e.chatRoom=t},messages:this.state.messages})))):(this.getUserContext(),s.a.createElement("div",null))}},{key:"prepareRoomForUser",value:function(e){var t=this;N.call(N.PREPARE_ROOM,"POST",{userId:e},(function(e){t.setState({roomId:e.roomId,roomTitle:e.roomTitle,messages:e.historicalMessagesDTO.messages},(function(){t.chatRoom.changeRoom(t.state.roomId,t.state.roomTitle,t.state.messages)}))}))}},{key:"getSetUserHolder",value:function(e){P.userHolder=e,this.setState({isReady:!0,roomId:e.lastRoomId,roomTitle:e.roomTitle})}},{key:"getUserContext",value:function(){G.getUserContext(this.getSetUserHolder.bind(this))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.a33918b4.chunk.js.map