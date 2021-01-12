(this["webpackJsonppwa-2021-ui"]=this["webpackJsonppwa-2021-ui"]||[]).push([[0],{157:function(e,t,n){e.exports=n(290)},162:function(e,t,n){},163:function(e,t,n){},258:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(10),r=n.n(a),i=(n(162),n(15)),c=n(17),l=n(22),u=n(21),m=(n(163),n(37)),p=n.n(m),d=n(151),h=n.n(d),f=n(96),g=n.n(f),v=n(97),b=n.n(v),E=n(70),O=n.n(E),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e))._initStompClient=function(){o.client=b.a.over(new g.a(o.props.url,null,o.props.options)),o.client.heartbeat.outgoing=o.props.heartbeat,o.client.heartbeat.incoming=o.props.heartbeat,Object.keys(o.props).includes("heartbeatIncoming")&&(o.client.heartbeat.incoming=o.props.heartbeatIncoming),Object.keys(o.props).includes("heartbeatOutgoing")&&(o.client.heartbeat.outgoing=o.props.heartbeatOutgoing),o.props.debug||(o.client.debug=function(){})},o._cleanUp=function(){o.setState({connected:!1}),o.retryCount=0,o.subscriptions.clear()},o._log=function(e){o.props.debug&&console.log(e)},o._subscribe=function(e){if(!o.subscriptions.has(e)){var t=o.client.subscribe(e,(function(e){o.props.onMessage(o._processMessage(e.body),e.headers.destination)}),o.props.subscribeHeaders);o.subscriptions.set(e,t)}},o._processMessage=function(e){try{return JSON.parse(e)}catch(t){return e}},o._unsubscribe=function(e){o.subscriptions.get(e).unsubscribe(),o.client.unsubscribe(e),o.subscriptions.delete(e)},o._connect=function(){o._initStompClient(),o.client.connect(o.props.headers,(function(){o.setState({connected:!0}),o.props.topics.forEach((function(e){o._subscribe(e)})),o.props.onConnect()}),(function(e){e&&(Object.keys(o.props).includes("onConnectFailure")?o.props.onConnectFailure(e):o._log(e.stack)),o.state.connected&&(o._cleanUp(),o.props.onDisconnect()),o.props.autoReconnect&&!o.state.explicitDisconnect&&(o._timeoutId=setTimeout(o._connect,o.props.getRetryInterval(o.retryCount++)))}))},o.connect=function(){o.setState({explicitDisconnect:!1}),o.state.connected||o._connect()},o.disconnect=function(){o._timeoutId&&(clearTimeout(o._timeoutId),o._timeoutId=null),o.setState({explicitDisconnect:!0}),o.state.connected&&(o.subscriptions.forEach((function(e,t){o._unsubscribe(t)})),o.client.disconnect((function(){o._cleanUp(),o.props.onDisconnect(),o._log("Stomp client is successfully disconnected!")})))},o.sendMessage=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!o.state.connected)throw new Error("Send error: SockJsClient is disconnected");o.client.send(e,n,t)},o.state={connected:!1,explicitDisconnect:!1},o.subscriptions=new Map,o.retryCount=0,o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this._connect()}},{key:"componentWillUnmount",value:function(){this.disconnect()}},{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.state.connected&&(O()(this.props.topics,e.topics).forEach((function(e){t._log("Unsubscribing from topic: "+e),t._unsubscribe(e)})),O()(e.topics,this.props.topics).forEach((function(e){t._log("Subscribing to topic: "+e),t._subscribe(e)})))}},{key:"render",value:function(){return null}}]),n}(s.a.Component);y.defaultProps={onConnect:function(){},onDisconnect:function(){},getRetryInterval:function(e){return 1e3*e},options:{},headers:{},subscribeHeaders:{},autoReconnect:!0,debug:!1,heartbeat:1e4};var _=y,S=n(57),I=n.n(S),R=n(139),k=n.n(R),T=n(140),C=n.n(T),U=n(141),j=n.n(U),M=n(142),x=n.n(M),N=n(34),A=n.n(N),L=n(143),D=n.n(L),F=(n(258),n(315)),w=function e(){Object(i.a)(this,e)};w.WEB_SOCKET_URL_SUFFIX="/ws",w.FULL_WEB_SOCKET_URL=(w.HTTP_PROTOCOL="http://")+(w.DOMAIN_NAME="localhost:8080")+w.WEB_SOCKET_URL_SUFFIX;var P=w,H=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"getCall",value:function(e,t,n,o,s){var a=e;if(null!==t){var r=Object.keys(t);for(var i in a+="?",r)a+=r[i]+"="+t[r[i]]+"&"}this.call(a,"GET",null,n,o,s)}},{key:"call",value:function(e,t,n,o,s,a){var r=null!==n?JSON.stringify(n):null,i={method:t,headers:{Origin:P.HTTP_PROTOCOL+P.DOMAIN_NAME,"Content-Type":"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Set-cookies, Authorization"},mode:"cors"};null!==r&&(i.body=r),fetch(e,i).then((function(e){return void 0!==a?a(e):e.json()})).then((function(e){o(e)})).catch((function(e){void 0!==s?s(e):console.log(e)}))}}]),e}();H.ORIGIN_URL=P.HTTP_PROTOCOL+P.DOMAIN_NAME,H.REST_API_PREFIX="/api/v1",H.REST_API_ENDPOINT=H.ORIGIN_URL+H.REST_API_PREFIX,H.GET_USER_CONTEXT="/user/context",H.PREPARE_ROOM=H.REST_API_PREFIX+"/room/prepare",H.GET_LAST_MESSAGES_FROM_ROOM=H.REST_API_ENDPOINT+"/room/messages",H.SEND_MESSAGE_TO_ROOM=H.REST_API_ENDPOINT+"/send";var B=H,G=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"setUserContext",value:function(t){e.userHolder=t}},{key:"getUserContext",value:function(){return e.userHolder}},{key:"setOnlineUsers",value:function(t){e.onlineUsersHolder=t}},{key:"getOnlineUsers",value:function(){return e.userHolder}}]),e}();G.userHolder=null,G.onlineUsersHolder=null;var W=G,X=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.message.message,t=this.props.message.author.authorFullName,n=this.props.message.author.userId===W.userHolder.userId,s=this.props.message.author.userAvatar,a=this.props.startSequence?this.props.startSequence:"start",r=this.props.endSequence?this.props.endSequence:"end",i=""+new Date,c=this.getMessageRowForTooltip(t,s,e,n,i);return o.createElement("div",{className:["message","".concat(n?"mine":""),"".concat(a?"start":""),"".concat(r?"end":"")].join(" ")},!1,c)}},{key:"getMessageRowForTooltip",value:function(e,t,n,s,a){return s?o.createElement("div",{className:"bubble-container"},o.createElement("div",{className:"bubble"},n),o.createElement(F.a,{src:t,style:{margin:"auto 0 auto 0"}},"B")):o.createElement("div",{className:"bubble-container"},o.createElement(F.a,{src:t,style:{margin:"auto 0 auto 0"}},"B"),o.createElement("div",{className:"bubble",title:a},n))}}]),n}(o.Component),J=n(138),q=n.n(J),K=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).scrollArea=null,o}return Object(c.a)(n,[{key:"onNewMessage",value:function(){null!==this.scrollArea&&this.scrollArea.scrollBottom()}},{key:"render",value:function(){var e=this,t=this.props.messages;if(t.length>0){var n=t.map((function(e,t){return o.createElement(X,{message:e})}));return o.createElement(q.a,{ref:function(t){e.scrollArea=t},speed:.8,minScrollSize:400,style:{height:"500px"}},o.createElement("div",null,n))}return o.createElement("div",null)}}]),n}(o.Component),z=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"getLastDataForRoom",value:function(e,t){B.getCall(B.GET_LAST_MESSAGES_FROM_ROOM,{roomID:e},(function(e){t(e)}),(function(e){console.error(e)}))}},{key:"sendMessage",value:function(e,t,n){B.call(B.SEND_MESSAGE_TO_ROOM,"POST",{roomId:e,message:t},(function(e){n()}))}},{key:"getUserContext",value:function(e){B.getCall(B.GET_USER_CONTEXT,null,(function(t){e(t)}))}}]),e}(),$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),o=t.call(this,e),console.log(e),o.state={roomId:e.roomId,roomTittle:e.title,isLoaded:void 0!==e.messages,messages:e.messages},o.clientRef=null,o.messageList=null,o.messageBox=null,o}return Object(c.a)(n,[{key:"renderChat",value:function(e){return this.getLastDataForRoom(e),s.a.createElement("div",null)}},{key:"changeRoom",value:function(e,t,n){this.getLastDataForRoom(e,t,n)}},{key:"getLastDataForRoom",value:function(e,t,n){null===n||void 0===n?z.getLastDataForRoom(e,this.onGetMessage.bind(this)):(this.setState({messages:n,isLoaded:!0,roomId:e,roomTittle:t}),this.forceUpdate())}},{key:"sendMessage",value:function(e,t,n){z.sendMessage(e,t,n)}},{key:"renderTextForm",value:function(e){var t=this;return console.log(e),s.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},s.a.createElement(p.a,{xs:8},s.a.createElement(k.a,{id:"message_text",label:"Message",inputRef:function(e){t.messageBox=e},multiline:!0,defaultValue:"",variant:"outlined",fullWidth:!0,style:{margin:"5px"}})),s.a.createElement(p.a,{xs:3},s.a.createElement(I.a,{variant:"contained",style:{width:"100%",height:"100%",marginRight:"10px"},color:"primary",onClick:function(n){var o=t.messageBox.value;t.sendMessage(e,o,(function(){t.messageBox.value=""}))}},"Send")))}},{key:"onMessage",value:function(e){var t=this.state.messages;t.unshift(e),this.setState({messages:t})}},{key:"render",value:function(){var e=this,t=this.state.roomId,n=this.prepareJsSock(t);return console.log(t),this.state.isLoaded?s.a.createElement(C.a,{style:{marginTop:"20px"}},s.a.createElement(j.a,{title:s.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},this.state.roomTittle)}),s.a.createElement(x.a,null,s.a.createElement(K,{messages:this.state.messages,ref:function(t){return e.messageList=t}})),s.a.createElement(D.a,{disableSpacing:!0},n,this.renderTextForm(t))):this.renderChat(t)}},{key:"prepareJsSock",value:function(e){var t=this;return s.a.createElement(_,{url:P.FULL_WEB_SOCKET_URL,topics:["/topics/room/"+e],onMessage:this.onMessage.bind(this),autoReconnect:!0,onConnect:function(e){console.log(e)},onDisconnect:console.log("Disconnected!"),ref:function(e){t.clientRef=e},debug:!0})}},{key:"onGetMessage",value:function(e){var t=e.messages;this.setState({messages:t,isLoaded:!0,roomTittle:e.roomTitle,roomId:e.roomId})}}]),n}(s.a.Component),V=n(149),Q=n.n(V),Y=n(150),Z=n.n(Y),ee=n(144),te=n.n(ee),ne=n(148),oe=n.n(ne),se=n(101),ae=n.n(se),re=n(146),ie=n.n(re),ce=n(100),le=n.n(ce),ue=n(147),me=n.n(ue),pe=n(314),de=n(145),he=n.n(de),fe=n(5),ge=Object(fe.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(pe.a),ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.prepareAvatar(this.props.isOnline);return s.a.createElement(he.a,{alignItems:"flex-start"},s.a.createElement(ie.a,null,t),s.a.createElement(me.a,{primary:this.props.user.userName,secondary:s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{component:"span",variant:"body2",color:"textPrimary"},s.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(t){e.props.onClick(e.props.user.userId)}},"Send Message")))}))}},{key:"prepareAvatar",value:function(e){return e?s.a.createElement(ge,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},s.a.createElement(le.a,{alt:this.props.user.userName,src:this.props.user.avatar})):s.a.createElement(le.a,{alt:this.props.user.userName,src:this.props.user.avatar})}}]),n}(o.Component),be=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),o=t.call(this,e),console.log(e),o.state={users:e.users},o}return Object(c.a)(n,[{key:"onMessage",value:function(e){W.onlineUsersHolder=e;var t=this.prepareUsers(e);this.setState({users:t})}},{key:"prepareUsers",value:function(e){var t=this.state.users,n=[];for(var o in t)n.push({userId:t[o].userId,isOnline:!1,userName:t[o].userName,avatar:t[o].avatar});if(null!==e&&void 0!==e){for(var s in e){var a=e[s],r=this.findUserIndex(a.userId,n);if(-1==r)a.isOnline=!0,n.push({userId:a[s].userId,isOnline:!0,userName:a[s].userName,avatar:a[s].avatar});else n[r].isOnline=!0}return n}return n}},{key:"findUserIndex",value:function(e,t){if(null===t||void 0===t)return-1;for(var n in t)if(t[n].userId===e)return n;return-1}},{key:"render",value:function(){var e=this,t=this.getOnlineUserItems();return s.a.createElement("div",null,s.a.createElement(te.a,{url:P.FULL_WEB_SOCKET_URL,topics:["/topics/user/online"],onMessage:this.onMessage.bind(this),ref:function(t){e.clientRef=t}}),s.a.createElement(A.a,{variant:"h4",component:"h4",style:{textAlign:"center"}},"Users"),s.a.createElement(ae.a,null),s.a.createElement(oe.a,null,t),s.a.createElement(ae.a,null))}},{key:"onSendButtonClicked",value:function(e){this.props.onSendButtomClicked(e)}},{key:"getOnlineUserItems",value:function(){var e=this;return null===this.state.users||void 0===this.state.users?(null!==W.onlineUsersHolder&&this.setState({users:W.onlineUsersHolder}),s.a.createElement("div",null)):this.state.users.map((function(t,n){return t.userId!==W.userHolder.userId?s.a.createElement(ve,{user:t,onClick:e.onSendButtonClicked.bind(e),isOnline:t.isOnline}):s.a.createElement("div",null)}))}}]),n}(o.Component),Ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={isReady:!1,roomId:null,roomTitle:void 0,messages:void 0},o.chatRoom=null,o}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!0}},{key:"render",value:function(){var e=this;return this.state.isReady?s.a.createElement("div",null,s.a.createElement(Q.a,{position:"static",color:"secondary"},s.a.createElement(Z.a,null,s.a.createElement(A.a,{variant:"h6"},"Chatting room"))),s.a.createElement(p.a,{alignItems:"center",container:!0,direction:"row",justify:"space-between",style:{padding:"20px"}},s.a.createElement(p.a,{alignItems:"center",xs:3,style:{height:"auto"}},s.a.createElement(h.a,null,s.a.createElement(be,{onSendButtomClicked:this.prepareRoomForUser.bind(this),users:W.userHolder.userDataDtoSet}))),s.a.createElement(p.a,{alignItems:"center",xs:8},s.a.createElement($,{roomId:this.state.roomId,title:this.state.roomTitle,ref:function(t){e.chatRoom=t},messages:this.state.messages})))):(this.getUserContext(),s.a.createElement("div",null))}},{key:"prepareRoomForUser",value:function(e){var t=this;B.call(B.PREPARE_ROOM,"POST",{userId:e},(function(e){t.setState({roomId:e.roomId,roomTitle:e.roomTitle,messages:e.historicalMessagesDTO.messages},(function(){t.chatRoom.changeRoom(t.state.roomId,t.state.roomTitle,t.state.messages)}))}))}},{key:"getSetUserHolder",value:function(e){W.userHolder=e,this.setState({isReady:!0,roomId:e.lastRoomId,roomTitle:e.roomTitle})}},{key:"getUserContext",value:function(){z.getUserContext(this.getSetUserHolder.bind(this))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.dddf0396.chunk.js.map