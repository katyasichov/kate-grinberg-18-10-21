(this["webpackJsonpkate-grinberg-18-10-21"]=this["webpackJsonpkate-grinberg-18-10-21"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},142:function(e){e.exports=JSON.parse("{}")},146:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),i=n.n(o),c=n(11),s=n.n(c),l=n(14),u=n(35),d=(n(120),n(121),n(13)),p=n(106),b=n(194),j=n(66),h=n(34),f=n(181),m=n(195),x=n(186),O=n(187),g=n(147),v=n(188),y=n(5),F=n(196),k=n(92),C=n.n(k),A=n(39),w=n.n(A),B=n(67),S=n(68),I=n(69),L=n.n(I),N=n(45),W="http://dataservice.accuweather.com/",M="KhoZ0U2NnE57nkjeogZoA72E82vgsW44",z="locations/v1/cities/autocomplete",E="currentconditions/v1",T="forecasts/v1/daily/5day",R={background:{main:"#1A1A1A",appbar:"#292929",container:"#292929",paper:"#333333",input:"#232323"},primary:{main:"#292929",light:"#656565"},secondary:{main:"#292929"},success:{main:"#1B9B48"},error:{main:"#EF2F10"},button:{main:"#0396E6",hover:"#1CAFFF",text:"#F9F9F9",link:"#179AE1"},text:{main:"#F9F9F9",light:"#c4c4c4",input:"#AAAAAA",secondary:"#B7B7B7"},input:{bottomLine:"#3A3A3A",underline:"#0396E6",placeholder:"#6C7678"},toggle:{hover:"#3A3A3A"}},K={background:{main:"#f6f6f6",appbar:"#d9d9d9",container:"#ffffff",paper:"#F6F6F6",input:"#ffffff"},primary:{main:"#ffffff",light:"#e4e4e4"},secondary:{main:"#e4e4e4"},success:{main:"#1B9B48"},error:{main:"#F30B0B"},button:{main:"#0396E6",hover:"#1CAFFF",text:"#F9F9F9",link:"#179AE1"},text:{main:"#1A1A1A",light:"#CBD6D9",input:"#F9F9F9",secondary:"#6C7678"},input:{bottomLine:"#E7E7E7",underline:"#0396E6",placeholder:"#BABABA"},toggle:{hover:"#E7E7E7"}},U=Object(N.a)({name:"snackBar",initialState:{visible:!1,timeout:3e3,message:"",type:"success"},reducers:{setSnackbar:function(e,t){e.visible=!0,e.timeout=t.payload.timeout,e.message=t.payload.message,e.type=t.payload.type},disableSnackbar:function(e,t){e.visible=!1}}}),P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;return function(r){r(H({type:e,message:t,timeout:n})),setTimeout((function(){r(Z())}),n)}},D=U.actions,H=D.setSnackbar,Z=D.disableSnackbar,J=U.reducer,V=(n(142),Object(N.a)({name:"weather",initialState:{currentLocation:{locationName:"Tel Aviv",locationKey:"215854",currentWeather:null,forecast:null,loadingWeather:!1,loadingForecast:!1},favorites:[],locations:[],theme:"dark"},reducers:{setLocations:function(e,t){e.locations=t.payload},setCurrentLocation:function(e,t){e.currentLocation.locationName=t.payload.LocalizedName,e.currentLocation.locationKey=t.payload.Key},setCurrentLocationWeather:function(e,t){e.currentLocation.currentWeather=t.payload,e.currentLocation.loadingWeather=!1},setWeatherForecast:function(e,t){e.currentLocation.forecast=t.payload,e.currentLocation.loadingForecast=!1},addToFavorite:function(e,t){var n=e.favorites,r={id:t.payload.locationKey,name:t.payload.locationName,currentWeather:t.payload.currentWeather};n.push(r),e.favorites=n},removeFromFavorite:function(e,t){var n=e.favorites.filter((function(e){return e.id!==t.payload.locationKey}));e.favorites=n},setTheme:function(e,t){e.theme=t.payload},setLoadingWeather:function(e,t){e.currentLocation.loadingWeather=t.payload},setLoadingForecast:function(e,t){e.currentLocation.loadingForecast=t.payload}}})),Q=V.actions,q=Q.setLocations,G=Q.setCurrentLocation,X=Q.setCurrentLocationWeather,Y=Q.setWeatherForecast,$=Q.addToFavorite,_=Q.removeFromFavorite,ee=Q.setTheme,te=Q.setLoadingWeather,ne=Q.setLoadingForecast,re=V.reducer,ae=n(99),oe=n.n(ae),ie=n(98),ce=n.n(ie),se=n(100),le=n.n(se),ue=n(97),de=n.n(ue),pe=["title","titleId"];function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function je(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function he(e,t){var n=e.title,i=e.titleId,c=je(e,pe);return o.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",width:10,height:10,viewBox:"0 0 13.295 13.295",ref:t,"aria-labelledby":i},c),n?o.createElement("title",{id:i},n):null,r||(r=o.createElement("defs",null,o.createElement("style",null,"\r\n      .test {\r\n        fill: #0396E6;\r\n      }\r\n    "))),a||(a=o.createElement("path",{className:"test",d:"M15.181,14.5l-3.116-3.116a5.708,5.708,0,1,0-.671.671l3.116,3.116a.476.476,0,0,0,.671-.671ZM2.951,7.7a4.757,4.757,0,1,1,4.758,4.76A4.757,4.757,0,0,1,2.951,7.7Z",transform:"scale(0.8)"})))}var fe=o.forwardRef(he),me=(n.p,n(3));var xe=function(){var e=Oe(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.weather.locations})),r=Object(l.c)((function(e){return e.weather.currentLocation})),a=Object(l.c)((function(e){return e.weather.currentLocation.loadingWeather})),i=Object(l.c)((function(e){return e.weather.favorites})),c=Object(l.c)((function(e){return e.weather.currentLocation.forecast})),s=Object(l.c)((function(e){return e.weather.currentLocation.loadingForecast})),u=Object(o.useState)(null),d=Object(h.a)(u,2),p=d[0],b=d[1],v=Object(o.useState)(null),y=Object(h.a)(v,2),F=y[0],k=y[1],A=Object(o.useState)(!1),I=Object(h.a)(A,2),N=I[0],R=I[1];Object(o.useEffect)((function(){var e;R(!1),r&&(t((e=r.locationKey,function(){var t=Object(S.a)(w.a.mark((function t(n){var r,a,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return te(!0),(r=new URLSearchParams).append("apikey",M),a={params:r,paramsSerializer:function(e){var t,n="",r=Object(B.a)(e);try{for(r.s();!(t=r.n()).done;){var a=Object(h.a)(t.value,2),o=a[0],i=a[1];n+="".concat(o,"=").concat(encodeURIComponent(i),"&")}}catch(c){r.e(c)}finally{r.f()}return n.substr(0,n.length-1)}},t.prev=4,t.next=7,L.a.get(W+E+"/"+e,a);case 7:200===(o=t.sent).status&&n(X(o.data)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),n(P("error","Server error",2e3));case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}())),t(function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){var r,a,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ne(!0),(r=new URLSearchParams).append("apikey",M),r.append("metric","true"),a={params:r,paramsSerializer:function(e){var t,n="",r=Object(B.a)(e);try{for(r.s();!(t=r.n()).done;){var a=Object(h.a)(t.value,2),o=a[0],i=a[1];n+="".concat(o,"=").concat(encodeURIComponent(i),"&")}}catch(c){r.e(c)}finally{r.f()}return n.substr(0,n.length-1)}},t.prev=5,t.next=8,L.a.get(W+T+"/"+e,a);case 8:200===(o=t.sent).status&&n(Y(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),n(P("error","Server error",2e3));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()}(r.locationKey)),void 0!==i.find((function(e){return e.id===r.locationKey}))&&R(!0))}),[r.locationName]),Object(o.useEffect)((function(){if(p&&""!==p){var e=setTimeout((function(){t(function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){var r,a,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams,void 0!==e&&null!==e&&""!==e&&(r.append("apikey",M),r.append("q",e)),a={params:r,paramsSerializer:function(e){var t,n="",r=Object(B.a)(e);try{for(r.s();!(t=r.n()).done;){var a=Object(h.a)(t.value,2),o=a[0],i=a[1];n+="".concat(o,"=").concat(encodeURIComponent(i),"&")}}catch(c){r.e(c)}finally{r.f()}return n.substr(0,n.length-1)}},t.prev=3,t.next=6,L.a.get(W+z,a);case 6:200===(o=t.sent).status&&n(q(o.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),n(P("error","Server error",2e3));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()}(p))}),1e3);return function(){return clearTimeout(e)}}t(q([]))}),[p]),Object(o.useEffect)((function(){null!==F&&void 0!==F&&t(G(F))}),[F]);var K=function(){var e;R(!0),t((e=r,function(t){try{t($(e)),t(P("success","".concat(e.locationName," is added to your favorites"),3e3))}catch(n){t(P("error","Something went wrong",2e3))}}))},U=function(){var e;R(!1),t((e=r,function(t){try{t(_(e)),t(P("success","".concat(e.locationName," is removed from your favorites"),3e3))}catch(n){t(P("error","Something went wrong",2e3))}}))};return Object(me.jsxs)(f.a,{container:!0,style:{paddingTop:60},justifyContent:"center",children:[Object(me.jsx)(f.a,{item:!0,xs:8,style:{paddingTop:40},children:Object(me.jsx)(ge,{id:"city",options:n&&n,autoHighlight:!0,popupIcon:Object(me.jsx)(fe,{className:e.magnifier}),filterOptions:function(e,t){return e},getOptionLabel:function(e){return e.LocalizedName||""},onChange:function(e,t){return k(n.find((function(e){return e.Key===(null===t||void 0===t?void 0:t.Key)})))},onInputChange:function(e,t){b(t)},renderInput:function(e){return Object(me.jsx)(m.a,Object(j.a)(Object(j.a)({placeholder:"City"},e),{},{inputProps:Object(j.a)({},e.inputProps)}))}})}),!a&&r&&r.currentWeather&&Object(me.jsx)(f.a,{item:!0,xs:10,className:e.currentWeatherContainer,children:Object(me.jsxs)(f.a,{container:!0,children:[Object(me.jsx)(f.a,{item:!0,xs:12,style:{paddingRight:20,paddingLeft:20},children:Object(me.jsxs)(f.a,{container:!0,children:[Object(me.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(me.jsxs)(f.a,{container:!0,children:[Object(me.jsx)(f.a,{item:!0,children:Object(me.jsx)(de.a,{style:{fontSize:40,fill:"#1CAFFF"}})}),Object(me.jsx)(f.a,{item:!0,children:Object(me.jsxs)(f.a,{container:!0,children:[Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(x.a,{variant:"h1",className:e.center,children:r.locationName})}),Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsxs)(x.a,{variant:"subtitle2",className:e.center,children:[r.currentWeather[0].Temperature.Metric.Value," ",r.currentWeather[0].Temperature.Metric.Unit]})})]})})]})}),Object(me.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(me.jsx)(f.a,{container:!0,justifyContent:"flex-end",children:N?Object(me.jsx)(O.a,{variant:"contained",color:"primary",size:"large",className:e.favoriteButton,startIcon:Object(me.jsx)(ce.a,{}),onClick:function(e){return U()},children:"Remove from Favorite"}):Object(me.jsx)(O.a,{variant:"contained",color:"primary",size:"large",className:e.favoriteButton,startIcon:Object(me.jsx)(oe.a,{}),onClick:function(e){return K()},children:"Add to Favorite"})})})]})}),Object(me.jsx)(f.a,{item:!0,xs:12}),Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(f.a,{container:!0,justifyContent:"space-around",className:e.forecastContainer,children:!s&&c&&c.DailyForecasts.map((function(t,n){return Object(me.jsx)(f.a,{item:!0,xs:12,sm:8,md:2,style:{margin:5},children:Object(me.jsx)(g.a,{elevation:3,className:e.itemWeather,children:Object(me.jsxs)(f.a,{container:!0,justifyContent:"center",children:[Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(x.a,{className:e.center,variant:"subtitle1",children:C()(t.Date).format("dddd")})}),Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsxs)(x.a,{className:e.center,variant:"subtitle2",children:[t.Temperature.Maximum.Value," ",t.Temperature.Maximum.Unit]})}),Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(f.a,{container:!0,justifyContent:"center",children:Object(me.jsx)(le.a,{style:{fill:"#1CAFFF"}})})})]})})},n)}))})})]})})]})},Oe=Object(v.a)((function(e){return{currentWeatherContainer:{border:"1px solid ".concat(e.palette.primary.main),marginTop:40,padding:20,borderRadius:4,backgroundColor:e.palette.background.container},magnifier:{width:20,height:20,marginRight:10},center:{textAlign:"center"},forecastContainer:{marginTop:30},capitalize:{textTransform:"capitalize"},border:{border:"1px solif #E1EBEE"},favoriteButton:{textTransform:"capitalize",width:250,backgroundColor:e.palette.button.main,"&:hover":{backgroundColor:e.palette.button.hover},color:e.palette.button.text},itemWeather:{backgroundColor:e.palette.background.paper,padding:5}}})),ge=Object(y.a)((function(e){return{popupIndicatorOpen:{transform:"rotate(0deg)"},root:{"& .MuiFormControl-root ":{"& .MuiInputBase-input":{color:e.palette.text.main},"& .MuiInput-underline:before":{borderBottomColor:e.palette.input.placeholder},"& .MuiInput-underline:hover:before":{borderBottomColor:e.palette.input.placeholder},"& .MuiInput-underline:after":{borderBottomColor:e.palette.input.underline}}},inputRoot:{"&.MuiOutlinedInput-root ":{borderRadius:5,height:"45px"},"&.MuiIconButton-root":{color:"#212529"},color:e.palette.input.placeholder,fontWeight:300,fontSize:16,backgroundColor:"inherit","& input::placeholder":{color:e.palette.input.placeholder,fontSize:16,opacity:1},'&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child':{padding:"3.3px 0"},'&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]':{padding:"2px 8px 4px 8px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},paper:{"&.MuiAutocomplete-paper":{backgroundColor:e.palette.input.main,margin:0,borderRadius:5,padding:0,width:"100%"},"& .MuiAutocomplete-noOptions":{color:"#B6B6B6",fontSize:14}},listbox:{"&.MuiAutocomplete-listbox":{"&::-webkit-scrollbar":{width:"3px",height:"3px"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 5px grey",borderRadius:"10px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#FFFFFF",borderRadius:"10px"}}},popupIndicator:{"&.MuiAutocomplete-popupIndicator":{color:"#B6B6B6","& .MuiSvgIcon-root":{width:"0.8em"}}},option:{"&.MuiAutocomplete-option":{color:"#B6B6B6",fontSize:14,"&:hover":{backgroundColor:e.palette.background.paper}}},clearIndicator:{"&.MuiAutocomplete-clearIndicator":{color:"#B6B6B6","& .MuiSvgIcon-fontSizeSmall":{width:"0.6em"}}}}}))(F.a);var ve=function(){var e=ye(),t=Object(l.b)(),n=Object(d.f)(),r=Object(l.c)((function(e){return e.weather.favorites}));return Object(me.jsx)(f.a,{container:!0,style:{padding:60},justifyContent:"flex-start",space:2,children:r&&r.map((function(r){return Object(me.jsx)(f.a,{item:!0,xs:12,sm:2,md:2,style:{margin:5,cursor:"pointer"},onClick:function(e){return t(G({LocalizedName:(a=r).name,Key:a.id})),void n.push("/");var a},children:Object(me.jsx)(g.a,{elevation:3,className:e.itemWeather,children:Object(me.jsxs)(f.a,{container:!0,justifyContent:"center",children:[Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(x.a,{variant:"subtitle1",className:e.center,children:r.name})}),Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsxs)(x.a,{className:e.center,variant:"subtitle2",children:[r.currentWeather[0].Temperature.Metric.Value," ",r.currentWeather[0].Temperature.Metric.Unit]})}),Object(me.jsx)(f.a,{item:!0,container:!0,xs:12,justifyContent:"center",children:Object(me.jsx)(x.a,{className:e.center,variant:"subtitle2",children:r.currentWeather[0].WeatherText})})]})})})}))})},ye=Object(v.a)((function(e){return{currentWeatherContainer:{border:"1px solid black",marginTop:40,padding:20},center:{textAlign:"center"},forecastContainer:{marginTop:30},capitalize:{textTransform:"capitalize"},itemWeather:{backgroundColor:e.palette.background.paper,padding:5}}})),Fe=n(190),ke=n(191),Ce=n(192),Ae=n(198),we=n(103),Be=n.n(we),Se=n(104),Ie=n.n(Se);var Le=function(){var e=Ne(),t=Object(l.c)((function(e){return e.weather.theme})),n=Object(l.b)();return Object(me.jsx)(Fe.a,{position:"fixed",elevation:0,className:e.appBar,children:Object(me.jsx)(ke.a,{style:{paddingLeft:20,minHeight:50},children:Object(me.jsxs)(f.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(me.jsx)(f.a,{item:!0,xs:4,children:Object(me.jsx)(f.a,{container:!0,alignItems:"center",children:Object(me.jsx)(f.a,{item:!0,xs:12,children:Object(me.jsx)(x.a,{variant:"h1",children:"Weather App"})})})}),Object(me.jsx)(f.a,{item:!0,xs:4,children:Object(me.jsx)(f.a,{container:!0,justifyContent:"center",children:Object(me.jsxs)(We,{size:"small",value:t,exclusive:!0,onChange:function(e,t){n(ee(t))},children:[Object(me.jsx)(Me,{value:"light",className:e.toggle,children:Object(me.jsx)(Be.a,{className:e.toggleIcon})}),Object(me.jsx)(Me,{value:"dark",className:e.toggle,children:Object(me.jsx)(Ie.a,{className:e.toggleIcon})})]})})}),Object(me.jsx)(f.a,{item:!0,xs:4,children:Object(me.jsxs)(f.a,{container:!0,justifyContent:"flex-end",children:[Object(me.jsx)(f.a,{item:!0,style:{margin:5},children:Object(me.jsx)(u.b,{to:"/",className:e.navButton,children:"Home"})}),Object(me.jsx)(f.a,{item:!0,style:{margin:5},children:Object(me.jsx)(u.b,{to:"/favorite",className:e.navButton,children:"Favorite"})})]})})]})})})},Ne=Object(v.a)((function(e){return{appBar:{backgroundColor:e.palette.background.appbar},navButton:{color:e.palette.button.main,textDecoration:"none",fontWeight:400,fontSize:16,"&:hover":{transition:".2s",backgroundColor:"transparent",color:e.palette.button.main,textDecoration:"underline"}},toggle:{textTransform:"capitalize"},toggleIcon:{fill:e.palette.button.text}}})),We=Object(y.a)((function(e){return{grouped:{margin:e.spacing(.5),border:"none","&:not(:first-child)":{borderRadius:e.shape.borderRadius},"&:first-child":{borderRadius:e.shape.borderRadius}}}}))(Ae.a),Me=Object(y.a)((function(e){return{root:{"&.Mui-selected":{backgroundColor:e.palette.button.main,"&:hover":{backgroundColor:e.palette.button.hover}},"&:hover":{backgroundColor:e.palette.toggle.hover}}}}))(Ce.a),ze=n(58),Ee=n(197),Te=n(193);function Re(){var e=Ke(),t=(Object(l.b)(),Object(l.c)((function(e){return e.snackBar})));return Object(me.jsx)("div",{className:e.root,children:Object(me.jsx)(Te.a,{in:t.visible,timeout:400,children:Object(me.jsx)(Ee.a,{elevation:4,variant:"filled",severity:t.type,children:Object(me.jsx)(x.a,{"data-cy":"snackbar-msg",style:{color:"#FFFFFF"},children:t.message})})})})}var Ke=Object(v.a)((function(e){return{root:Object(ze.a)({position:"absolute",top:"69px",right:"30px",width:"auto",zIndex:1400,opacity:.8,"& > * + *":{marginTop:e.spacing(3)}},e.breakpoints.down("xs"),{position:"absolute",zIndex:1400,width:"90%",right:"5%"})}}));var Ue=function(){var e=Object(l.c)((function(e){return e.weather.theme})),t=Object(p.a)({palette:R,typography:{fontFamily:["Urbanist","Quicksand","sans-serif"].join(","),h1:{fontSize:20,color:"#6C7678"},subtitle1:{fontSize:16,fontWeight:500,color:"#6C7678"},subtitle2:{fontSize:16,color:"#FFFFFF"}},overrides:{}}),n=Object(p.a)({palette:K,typography:{fontFamily:["Urbanist","Quicksand","sans-serif"].join(","),h1:{fontSize:20,color:"#BABABA"},subtitle1:{fontSize:16,fontWeight:500,color:"#BABABA"},subtitle2:{fontSize:16,color:"#1A1A1A"}},overrides:{}});return Object(me.jsxs)(b.a,{theme:"dark"===e?t:n,children:[Object(me.jsx)(Le,{}),Object(me.jsxs)("div",{style:{minHeight:"100vh",backgroundColor:"dark"===e?"#1A1A1A":"#F6F6F6"},children:[Object(me.jsx)(Re,{}),Object(me.jsxs)(d.c,{children:[Object(me.jsx)(d.a,{exact:!0,path:"/",component:xe}),Object(me.jsx)(d.a,{exact:!0,path:"/favorite",component:ve})]})]})]})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))},De=n(25),He=n(51),Ze=n(105),Je=Object(De.combineReducers)({weather:re,snackBar:J});var Ve=function(e){var t=[He.a],n=[De.applyMiddleware.apply(void 0,t)],r=Ze.composeWithDevTools.apply(void 0,n);return Object(De.createStore)(Je,e,r)}();s.a.render(Object(me.jsx)(i.a.StrictMode,{children:Object(me.jsx)(l.a,{store:Ve,children:Object(me.jsx)(u.a,{children:Object(me.jsx)(Ue,{})})})}),document.getElementById("root")),Pe()}},[[146,1,2]]]);
//# sourceMappingURL=main.980b2b01.chunk.js.map