(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{168:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(25),r=t.n(c),n=t(13),i=t.n(n),j=t(17),o=t(8),l=t(15),b=t(4),u=t(12),d=t(20),p=t.n(d);t(68),t(72);p.a.initializeApp({apiKey:"AIzaSyDrQ5c3L2w3DJEKvjcMPGvntFzsR7jgZzo",authDomain:"journalapp-f5649.firebaseapp.com",projectId:"journalapp-f5649",storageBucket:"journalapp-f5649.appspot.com",messagingSenderId:"75258793449",appId:"1:75258793449:web:dc0e629d15bf9085d5cf78"});var m=p.a.firestore(),O=(new p.a.auth.GoogleAuthProvider,t(14)),x=t.n(O),h="[Auth] Login",v="[Auth] Logout",g=function(e,a){return{type:h,payload:{uid:e,displayName:a}}},f=function(){return{type:v}},y=t(11),N=t(28),w=t(0),C=["isAuthenticated","component"],A=function(e){var a=e.isAuthenticated,t=e.component,s=Object(N.a)(e,C);return Object(w.jsx)(b.b,Object(y.a)(Object(y.a)({},s),{},{component:function(e){return a?Object(w.jsx)(t,Object(y.a)({},e)):Object(w.jsx)(b.a,{to:"/auth/login"})}}))},_=["isAuthenticated","component"],E=function(e){var a=e.isAuthenticated,t=e.component,s=Object(N.a)(e,_);return Object(w.jsx)(b.b,Object(y.a)(Object(y.a)({},s),{},{component:function(e){return a?Object(w.jsx)(b.a,{to:"/"}):Object(w.jsx)(t,Object(y.a)({},e))}}))},S=t(27),I=t.n(S),P=t(26),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),t=Object(o.a)(a,2),c=t[0],r=t[1],n=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(a)},i=function(e){var a=e.target;r(Object(y.a)(Object(y.a)({},c),{},Object(P.a)({},a.name,a.value)))};return[c,i,n]},D=function(){var e=Object(u.b)(),a=Object(s.useState)(""),t=Object(o.a)(a,2),c=t[0],r=t[1],n=k({email:"",password:""}),l=Object(o.a)(n,2),b=l[0],d=l[1],O=b.email,h=b.password,v=function(){return I.a.isEmail(O)?h.length<5?(r("Password should be at least 6 characters"),!1):(r(""),!0):(r("Email is not valid"),!1)};return Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{style:{width:"100%",padding:"10px"},src:"https://www.politecnicojic.edu.co/images/img/portal-academico.jpg",alt:"google button"})}),Object(w.jsx)("br",{}),Object(w.jsx)("h5",{children:"Inicia sesi\xf3n para realizar la encuesta"}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-xs-14 col-sm-6 col-md-4 mx-auto",children:Object(w.jsx)("div",{className:"card_login",children:Object(w.jsx)("div",{className:"card",children:Object(w.jsx)("div",{className:"card-body text-center",children:Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r("Usuario o contrase\xf1a incorrectos")},className:"animate__animated animate__fadeIn animate__faster",children:[c&&Object(w.jsx)("div",{className:"alert alert-danger",role:"alert",children:c}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("h5",{htmlFor:"exampleInputText",className:"form-label mb-3",children:"Inicia sesi\xf3n con tu cuenta estudiantil"}),Object(w.jsx)("label",{style:{fontSize:"12px"},htmlFor:"exampleInputText",className:"form-label mb-3",children:"(En caso de no pertenecer al Politecnico Colombiano JIC puedes iniciar con tu cuenta de facebook en la parte inferior)"}),Object(w.jsx)("input",{type:"email",placeholder:"Correo electr\xf3nico",className:"form-control",name:"email",autoComplete:"off",required:!0})]}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",className:"form-control",name:"password",autoComplete:"off",required:!0})}),Object(w.jsx)("div",{className:"d-grid gap-2",children:Object(w.jsx)("button",{className:"btn btn-success",type:"submit",children:"Iniciar sesion"})})]})})})})})}),Object(w.jsx)("br",{}),Object(w.jsx)("hr",{}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-xs-14 col-sm-6 col-md-4 mx-auto",children:Object(w.jsx)("div",{className:"card_login",children:Object(w.jsx)("div",{className:"card",children:Object(w.jsx)("div",{className:"card-body text-center",children:Object(w.jsxs)("form",{onSubmit:function(a){a.preventDefault(),v()&&e(function(e,a){return function(){var t=Object(j.a)(i.a.mark((function t(s){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={email:e,password:a},x.a.fire({title:"Cargando...",text:"Por favor espere...",allowOutsideClick:!1,onBeforeOpen:function(){x.a.showLoading()}});try{p.a.auth().signInWithEmailAndPassword("cristi@gmail.com","123456").then((function(e){var a=e.user;s(g(a.uid,a.displayName)),m.collection("".concat("TstalbZgOfd9cQUHH6X1rDQjMqq2","/accounts/account")).add(r).then((function(e){x.a.close(),console.log("AAAAAAA",e)}))})).catch((function(e){x.a.fire("Error",e.message,"error")}))}catch(c){console.log(c)}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(O,h))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"exampleInputText",className:"form-label mb-3",children:"Registrate con facebook"}),Object(w.jsx)("input",{type:"email",placeholder:"Correo electr\xf3nico",className:"form-control",name:"email",autoComplete:"off",value:O,onChange:d,required:!0})]}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",className:"form-control",name:"password",autoComplete:"off",value:h,onChange:d,required:!0})}),Object(w.jsx)("div",{className:"d-grid gap-2",children:Object(w.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Iniciar sesion"})})]})})})})})})]})},T=function(){var e=Object(u.b)(),a=Object(s.useState)(""),t=Object(o.a)(a,2),c=t[0],r=t[1],n=k({name:"",email:"",password:"",password2:""}),b=Object(o.a)(n,2),d=b[0],m=b[1],O=d.name,h=d.email,v=d.password,f=d.password2,y=function(){return 0===O.trim().length?(r("Name is required"),!1):I.a.isEmail(h)?v!==f||v.length<5?(r("Password should be at least 6 characters and match each other"),!1):(r(""),!0):(r("Email is not valid"),!1)};return Object(w.jsxs)("form",{onSubmit:function(a){a.preventDefault(),y()&&e(function(e,a,t){return function(s){p.a.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(j.a)(i.a.mark((function e(a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.user,e.next=3,c.updateProfile({displayName:t});case 3:s(g(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){x.a.fire("Error",e.message,"error")}))}}(h,v,O))},className:"animate__animated animate__fadeIn animate__faster",children:[c&&Object(w.jsx)("div",{className:"alert alert-danger",role:"alert",children:c}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"exampleInputText",className:"form-label mb-3",children:"Register"}),Object(w.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",name:"name",autoComplete:"off",value:O,onChange:m})]}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",name:"email",autoComplete:"off",value:h,onChange:m})}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",autoComplete:"off",value:v,onChange:m})}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("input",{type:"password",placeholder:"Confirm password",className:"form-control",name:"password2",autoComplete:"off",value:f,onChange:m})}),Object(w.jsx)("div",{className:"d-grid gap-2 mb-2",children:Object(w.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Register"})}),Object(w.jsx)(l.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})},q=function(){return Object(w.jsxs)(b.d,{children:[Object(w.jsx)(b.b,{exact:!0,path:"/auth/login",component:D}),Object(w.jsx)(b.b,{exact:!0,path:"/auth/register",component:T}),Object(w.jsx)(b.a,{to:"/auth/login"})]})},z=function(){var e=Object(s.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(u.b)();return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"H\xe1bitos alimenticios: Encuesta"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"1. \xbfQu\xe9 bebe durante el d\xeda?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg1",value:"1"})," Agua",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg1",value:"2"})," Gaseosa",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg1",value:"3"})," Jugos naturales",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg1",value:"4"})," Leche/Yogurt",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg1",value:"5"})," Otro",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"2. \xbfQu\xe9 tipo de carne suele consumir con mayor frecuencia?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg2",value:"6"})," Carne de res",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg2",value:"7"})," Bistec",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg2",value:"8"})," Chuletas de cerdo",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg2",value:"9"})," Pollo",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg2",value:"10"})," Pavo",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg2",value:"11"})," Pescado",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"3. \xbfQu\xe9 tipo de comida o comidas prepara con m\xe1s frecuencia?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg3",value:"12"})," Frituras",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg3",value:"13"})," Alimentos cocidos al horno",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg3",value:"14"})," Alimentos asados",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg3",value:"15"})," Guisados/cocina a fuego lento",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg3",value:"16"})," Alimentos a la parrilla",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"4. \xbfCu\xe1ntas veces al d\xeda come?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg4",value:"17"})," 1",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg4",value:"18"})," 2",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg4",value:"19"})," 3",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg4",value:"20"})," 4",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg4",value:"21"})," 5",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg4",value:"22"})," m\xe1s",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"5. \xbfCu\xe1ntas veces sale a comer afuera durante la semana?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg5",value:"23"})," 1",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg5",value:"24"})," 2",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg5",value:"25"})," 3",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg5",value:"26"})," 4",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg5",value:"27"})," 5",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg5",value:"28"})," m\xe1s",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"6. \xbfA\xf1ade sal a los alimentos cuando cocina?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg6",value:"29"})," S\xed",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg6",value:"30"})," No",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"7. \xbfA\xf1ade sal a la comida en la mesa?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg7",value:"31"})," S\xed",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg7",value:"32"})," No",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"8. \xbfC\xf3mo evaluar\xedas tus h\xe1bitos alimenticios?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg8",value:"31"})," Excelentes",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg8",value:"32"})," Buenos",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg8",value:"32"})," Malos",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg8",value:"32"})," Regulares",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg8",value:"32"})," Pesimos",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"9. \xbfSueles comer comida chatarra?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg9",value:"31"})," S\xed, casi diario como comida chatarra",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg9",value:"32"})," S\xed, como algunas veces por semana comida chatarra",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg9",value:"32"})," Como comida chatarra s\xf3lo en ocasiones",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg9",value:"32"})," No, pr\xe1cticamente no como comida chatarra",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"pregresp",children:[Object(w.jsx)("div",{className:"pregunta",children:"10. \xbfQu\xe9 sueles incluir en tu dieta diaria con mayor frecuencia?"}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"respuestas",children:[Object(w.jsx)("input",{type:"radio",name:"preg10",value:"31"})," Prote\xedna animal",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Prote\xedna vegetal",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Frutas",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Verduras",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Carbohidratos salados",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Grasa vegetal",Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"radio",name:"preg10",value:"32"})," Grasa no vegetal",Object(w.jsx)("br",{})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"d-grid gap-2",children:Object(w.jsx)("button",{disabled:t,onClick:function(){x.a.fire({title:"Exito",text:"\xa1Encuesta finalizada satisfactoriamente!",allowOutsideClick:!1}),c(!0),setTimeout((function(){r(function(){var e=Object(j.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:a(f());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),3e3)},className:"btn btn-success",type:"submit",children:"Terminar encuesta"})})]})},F=function(){var e=Object(u.b)(),a=Object(s.useState)(!0),t=Object(o.a)(a,2),c=t[0],r=t[1],n=Object(s.useState)(!1),d=Object(o.a)(n,2),m=d[0],O=d[1];return Object(s.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var a=Object(j.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:(null===t||void 0===t?void 0:t.uid)?(e(g(t.uid,t.displayName)),O(!0)):O(!1),r(!1);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}),[e,r,O]),c?Object(w.jsx)("h1",{children:"Cargando..."}):Object(w.jsx)(l.a,{children:Object(w.jsxs)(b.d,{children:[Object(w.jsx)(E,{path:"/auth",component:q,isAuthenticated:m}),Object(w.jsx)(A,{exact:!0,isAuthenticated:m,path:"/",component:z}),Object(w.jsx)(b.a,{to:"/auth/login"})]})})},Q=t(21),G=t(57),L="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,R=Object(Q.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return{uid:a.payload.uid,name:a.payload.displayName};case v:return{};default:return e}}}),B=Object(Q.d)(R,L(Object(Q.a)(G.a))),J=(t(168),function(){return Object(w.jsx)("div",{className:"container mt-5",children:Object(w.jsx)(u.a,{store:B,children:Object(w.jsx)(F,{})})})});r.a.render(Object(w.jsx)(J,{}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.01775a29.chunk.js.map