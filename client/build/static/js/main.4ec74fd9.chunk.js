(window.webpackJsonpmern=window.webpackJsonpmern||[]).push([[0],{109:function(e,t,a){},120:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(11),o=a(31),s=a(28),m=a(18),u=a(19),h=a(21),p=a(20),E=a(22);var d=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},f=a(26),g=a.n(f),v={getBooks:function(){return g.a.get("/api/books")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)},getPatients:function(){return console.log("hello"),g.a.get("/api/patients/all")},getPatient:function(e){return g.a.get("/api/patients/"+e)},getPatientByEmail:function(e){return console.log("login email",e),g.a.get("/api/patients",{params:{email:e}})},savePatient:function(e){return console.log("here",e),g.a.post("/api/patients",e)},savePatientChat:function(e){return console.log("chat here ",e),g.a.post("/api/lifechathistory",e)}};function y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function b(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function w(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(109);function O(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function C(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function P(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=a(84),S=a(3),D=a(80),k=a(185),N=a(194),B=a(186),z=a(187),F=a(192),R=a(41),L=a(191),A=a(188),W=a(189),M=a(190),H=a(81),_=a.n(H),T=a(82),q=a.n(T),G=a(181),U=a(183),J=a(184),K=a(71),Q=a.n(K),X=a(79),Y=a.n(X),Z=a(75),$=a.n(Z),V=a(74),ee=a.n(V),te=a(77),ae=a.n(te),ne=a(76),re=a.n(ne),le=a(78),ie=a.n(le),ce=(a(61),r.a.createElement("div",null,r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(Q.a,null)),r.a.createElement(c.c,{to:"/home",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Dashboard"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(ee.a,null)),r.a.createElement(c.c,{to:"/emergency",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Emergency"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement($.a,null)),r.a.createElement(c.c,{to:"/patients",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"User Profile"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(re.a,null)),r.a.createElement(c.c,{to:"/liveChat",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Live Chat"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(ae.a,null)),r.a.createElement(c.c,{to:"/location",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Location"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(ie.a,null)),r.a.createElement(c.c,{to:"/reports",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Reports"}))),r.a.createElement(G.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(Y.a,null)),r.a.createElement(c.c,{to:"/notifications",style:{textDecoration:"none",color:"white"},activeStyle:{color:"cyan"}},r.a.createElement(J.a,{primary:"Notifications"})))));function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me=Object(D.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:se({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 2px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(s.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ue(){var e=me(),t=r.a.useState(!0),a=Object(x.a)(t,2),n=a[0],l=a[1];Object(S.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{id:"topBar",className:"topBar"},r.a.createElement("div",{className:e.root},r.a.createElement(k.a,null),r.a.createElement(B.a,{position:"absolute",className:Object(S.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(z.a,{className:e.toolbar},r.a.createElement(A.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(S.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(_.a,null)),r.a.createElement(R.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard",r.a.createElement(A.a,{color:"inherit"},r.a.createElement(W.a,{badgeContent:0,color:"secondary"},r.a.createElement(q.a,null)))),r.a.createElement(M.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.logOut,onClick:function(){alert("You are now logged out."),window.open("/")}},"Log Out"))),r.a.createElement(N.a,{variant:"permanent",classes:{paper:Object(S.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{id:"sidebar",className:"sidebar"},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement("div",{className:"logo logo-normal"},r.a.createElement("span",null,"APIC"))),r.a.createElement(L.a,null),r.a.createElement(F.a,{className:"navItem"},ce),r.a.createElement(L.a,null)))))}a(120);var he=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={patients:[],name:"",email:"",password:"",phone:"",address:"",ssn:"",primaryDrInfo:"",insuranceInfo:""},a.loadPatients=function(){v.getPatients().then((function(e){return a.setState({patients:e.data,name:"",email:"",password:""})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.name&&v.savePatient({name:a.state.name,email:a.state.email,password:a.state.password,phone:a.state.phone,address:a.state.address,ssn:a.state.ssn,primaryDrInfo:a.state.primaryDrInfo,insuranceInfo:a.state.insuranceInfo}).then((function(e){return a.loadPatients()})).catch((function(e){return console.log(e)}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadPatients()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(he,null,r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-6"},r.a.createElement(d,null,r.a.createElement("h1",null,"Register?")),r.a.createElement("form",null,r.a.createElement(C,{value:this.state.name,onChange:this.handleInputChange,name:"name",placeholder:"Name (required)"}),r.a.createElement(C,{value:this.state.email,onChange:this.handleInputChange,name:"email",placeholder:"Email (required)"}),r.a.createElement(C,{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"Password (required)"}),r.a.createElement(C,{value:this.state.phone,onChange:this.handleInputChange,name:"phone",placeholder:"phone"}),r.a.createElement(C,{value:this.state.address,onChange:this.handleInputChange,name:"address",placeholder:"address"}),r.a.createElement(C,{value:this.state.ssn,onChange:this.handleInputChange,name:"ssn",placeholder:"SSN"}),r.a.createElement(C,{value:this.state.primaryDrInfo,onChange:this.handleInputChange,name:"primaryDrInfo",placeholder:"primaryDrInfo"}),r.a.createElement(C,{value:this.state.insuranceInfo,onChange:this.handleInputChange,name:"insuranceInfo",placeholder:"insuranceInfo"}),r.a.createElement(P,{onClick:this.handleFormSubmit},"Register"))),r.a.createElement(w,{size:"md-6 sm-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Patients On My List")),this.state.patients.length?r.a.createElement(O,null,this.state.patients.map((function(e){return r.a.createElement(j,{key:e._id},r.a.createElement(c.b,{to:"/patients/"+e._id},r.a.createElement("strong",null,e._id," | ",e.name," | ",e.password," |",e.email," |",e.ssn," |"," ",e.primaryDrInfo," |",e.insuranceInfo," |")))}))):r.a.createElement("h3",null,"No Patients to Display"))))))}}]),t}(n.Component),Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={patient:{},email:"",password:""},a.loadPatientByEmail=function(){v.getPatientByEmail(a.state.email).then((function(e){console.log(e.data),a.setState({patient:e.data}),console.log("now",a.state.patient)})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.loadPatientByEmail()},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-6"},r.a.createElement(d,null,r.a.createElement("h1",null,"Login?")),r.a.createElement("form",null,r.a.createElement(C,{value:this.state.email,onChange:this.handleInputChange,name:"email",placeholder:"Email (required)"}),r.a.createElement(C,{value:this.state.password,onChange:this.handleInputChange,name:"password",placeholder:"Password (required)"}),r.a.createElement(P,{onClick:this.handleFormSubmit},"LOGIN"))),r.a.createElement(w,{size:"md-6 sm-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Patient Information ",this.state.patient.name)),this.state.patient?r.a.createElement("strong",null,this.state.patient._id,this.state.patient.name,this.state.patient.password,this.state.patient.email,this.state.patient.ssn,this.state.patient.primaryDrInfo,this.state.patient.insuranceInfo,this.state.patient.lifechathistory&&this.state.patient.lifechathistory.length?this.state.patient.lifechathistory.map((function(e){return e.chathistory+" "})):""):r.a.createElement("h3",null,"No Patients to Display"))))}}]),t}(n.Component),de=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={patients:[]},a.loadPatients=function(){v.getPatients().then((function(e){return a.setState({patients:e.data})})).catch((function(e){return console.log(e)}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadPatients()}},{key:"render",value:function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12 sm-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Patients On The List")),this.state.patients.length?r.a.createElement(O,null,this.state.patients.map((function(e){return r.a.createElement(j,{key:e._id},r.a.createElement(c.b,{to:"/patients/"+e._id},r.a.createElement("strong",null,e._id," | ",e.name," | ",e.password," | ",e.email," |",e.ssn," | ",e.primaryDrInfo," | ",e.insuranceInfo," |"),e.lifechathistory&&e.lifechathistory.length?e.lifechathistory.map((function(e){return e.chathistory+" "})):""))}))):r.a.createElement("h3",null,"No Patients to Display"))))}}]),t}(n.Component),fe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={patient:{},chat:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.chat&&v.savePatientChat({patientId:a.props.match.params.id,chathistory:a.state.chat}).then((function(e){return a.loadPatients()})).catch((function(e){return console.log(e)}))},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getPatient(this.props.match.params.id).then((function(t){return e.setState({patient:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Hello ",this.state.patient.name)))),r.a.createElement(b,null,r.a.createElement(w,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Detail"),r.a.createElement("p",null,this.state.patient.name," | ",this.state.patient.phone," | ",this.state.patient.primaryDrInfo," | ",this.state.patient.insuranceInfo),r.a.createElement("p",null,this.state.patient.lifechathistory&&this.state.patient.lifechathistory.length?this.state.patient.lifechathistory.map((function(e){return e.chathistory+" "})):"")))),r.a.createElement(b,null,r.a.createElement(w,{size:"md-10 md-offset-1"},r.a.createElement("form",null,r.a.createElement(I,{value:this.state.chat,onChange:this.handleInputChange,name:"chat",placeholder:"Chat"}),r.a.createElement(P,{onClick:this.handleFormSubmit},"Send")))))}}]),t}(n.Component),ge=a(193);var ve=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(Ee,null),r.a.createElement(c.b,{to:"/home"}," ",r.a.createElement(ge.a,{variant:"outlined",color:"primary"},"Go To Home")),r.a.createElement("h1",null,"Welcome"))))};var ye=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Homepage"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude0a")))))))};var be=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"NOTIFICATIONS"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},":)")))))))};var we=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},Oe=a(83),je=a.n(Oe);a(140);function Ce(e){return r.a.createElement("div",{class:"marker"},r.a.createElement("img",{class:"pin",src:"Drawing-Pin.png",alt:"markerPin"}))}var Ie=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(je.a,{bootstrapURLKeys:{key:"AIzaSyALsDGUKJntADnzlBz4-SS4cktc0p-Q1FU&"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(Ce,{lat:34.098185,lng:-118.326833,text:"My Marker"}),r.a.createElement(Ce,{lat:59.935417,lng:30.337854,text:"Apic"}),r.a.createElement(Ce,{lat:59.965413,lng:30.397844,text:"My Marker"})))}}]),t}(n.Component);Ie.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var Pe=Ie;var xe=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(Pe,null))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Live Chat"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},":)")))))))};var De=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Emergency"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(y,{fluid:!0},r.a.createElement(b,null,r.a.createElement(w,{size:"md-12"},r.a.createElement(d,null,r.a.createElement("h1",null,"Reports"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},":)")))))))};var Ne=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/patients",component:pe}),r.a.createElement(o.a,{exact:!0,path:"/patients/all",component:de}),r.a.createElement(o.a,{exact:!0,path:"/patients/:id",component:fe}),r.a.createElement(o.a,{exact:!0,path:"/",component:ve}),r.a.createElement(o.a,{exact:!0,path:"/home",component:ye}),r.a.createElement(o.a,{exact:!0,path:"/patientLogin",component:Ee}),r.a.createElement(o.a,{exact:!0,path:"/emergency",component:De}),r.a.createElement(o.a,{exact:!0,path:"/location",component:xe}),r.a.createElement(o.a,{exact:!0,path:"/reports",component:ke}),r.a.createElement(o.a,{exact:!0,path:"/liveChat",component:Se}),r.a.createElement(o.a,{exact:!0,path:"/notifications",component:be}),r.a.createElement(o.a,{component:we}))))};i.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,a){},87:function(e,t,a){e.exports=a(141)}},[[87,1,2]]]);
//# sourceMappingURL=main.4ec74fd9.chunk.js.map