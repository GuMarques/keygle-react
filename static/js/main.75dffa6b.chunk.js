(this.webpackJsonpprojeto=this.webpackJsonpprojeto||[]).push([[0],{45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(25),o=a.n(s),r=a(12),i=a(10),l=a(14),d=a(37),b=a(19),u={usuarioEmail:"",usuarioLogado:0};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(b.a)(Object(b.a)({},e),{},{usuarioLogado:1,usuarioEmail:t.usuarioEmail});case"LOGOUT":return Object(b.a)(Object(b.a)({},e),{},{usuarioLogado:0,usuarioEmail:null});default:return e}},m=Object(d.a)(j),A=a(11),p=(a(45),a(36).a.initializeApp({apiKey:"AIzaSyD0kd6E0YQpfXBMB7XhKfRSTwFy2FoFww8",authDomain:"projeto-a015f.firebaseapp.com",projectId:"projeto-a015f",storageBucket:"projeto-a015f.appspot.com",messagingSenderId:"285839709965",appId:"1:285839709965:web:d36eef7bac0d9946b48244",measurementId:"G-VHGJ73N27K"})),h=(a(30),"data:image/png;base64,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QWC7qFXBmKQBd+raltgpLVXj876kKQSeooPsGmDwvgQGtOGmILANK2DTr5duH125S216X4SLNBm5rc+UwfvatFXy3w8C42O1ky2lgW2bdyLxvrifsJckw5JybGkqo9HoFZ3ccRToO1Tg9IE260MABLY+rLfyTdI7dxTAX7zHpygUyErglMbAmraQklsTnMz4rVRih4UCgXVY+dXQFbGm2yKBWZb9E8fxN0VRHHPL5nCTeSvZpB8ZoTwsSl2hwopZllGawROOik1y6f6u5Ulxxh5yGxBYyNprUXZt/SmuCJrsc+p7HZfcyfPK83zoqg7BHSfarRcBENh68d7at9E2MEmSF3EcP29bSFPc8Jk2odLcNTyVFCHkjgExLy5S29kOBLadetmYVObKzjNOnS2fkBSs7/f7VIPr1NeW87u5LUDXaNjVVJv6ra5bpWlKtcu81484sqHNZhAAgW0G961/K3k9dFVlPp8PKROec/eOiKHX61E541lTjbC2Bk3bStrymdpfdH3Le1eUvMBerzfL85yu9cywXWxLG5vtBwS2WfyDershtcYa99o7mG0BYJGN7obCw2oL5C3sBwS2hUqBSEAACPAQAIHxcEIrIAAEthABENgWKgUiAQEgwEMABMbDCa2AABDYQgRAYFuoFIgEBIAADwEQGA8ntAICQGALEQCBbaFSIBIQAAI8BEBgPJzQCggAgS1EAAS2hUqBSEAACPAQAIHxcEIrIAAEthABENgWKgUiAQEgwEMABMbDCa2AABDYQgRAYFuoFIgEBIAAD4H/AVYA3T4W/F1/AAAAAElFTkSuQmCC"),O=a(2);var g=function(){var e=Object(c.useState)(),t=Object(A.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),o=Object(A.a)(s,2),d=o[0],b=o[1],u=Object(l.b)();return Object(O.jsx)("form",{children:Object(O.jsxs)("div",{id:"modalLogin",className:"modal-fade",role:"dialog",children:[Object(l.c)((function(e){return e.usuarioLogado}))>0?Object(O.jsx)(i.a,{to:"/"}):null,Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsx)("div",{className:"modal-header",children:Object(O.jsx)("img",{src:h,alt:"logo",className:"center mb-3"})}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-addon",children:Object(O.jsx)("i",{className:"glyphicon glyphicon-user"})}),Object(O.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",className:"form-control",name:"email",placeholder:"Email"})]}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-addon",children:Object(O.jsx)("i",{className:"glyphicon glyphicon-lock"})}),Object(O.jsx)("input",{onChange:function(e){return b(e.target.value)},type:"password",className:"form-control",name:"password",placeholder:"Password"})]})]}),Object(O.jsx)(r.b,{to:"/lostpassword",className:"",children:"Esqueci minha senha!"})]})}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)(r.b,{to:"/cadastro",className:"",children:Object(O.jsx)("button",{type:"button",id:"iniciaCadastro",className:"btn btn-login pull-left","data-dismiss":"modal",children:"Cadastrar"})}),Object(O.jsx)("button",{onClick:function(){p.auth().signInWithEmailAndPassword(a,d).then((function(e){u({type:"LOGIN",usuarioEmail:a})})).catch((function(e){alert(e)}))},type:"button",id:"entrar",className:"btn btn-login","data-dismiss":"modal",children:"Entrar"})]})]})})]})})};a(50);var f=function(){var e=Object(c.useState)(),t=Object(A.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),o=Object(A.a)(s,2),i=o[0],l=o[1];return Object(O.jsx)("form",{children:Object(O.jsx)("div",{id:"modalCadastro",className:"modal-fade hidden",role:"dialog",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsx)("div",{className:"modal-header",children:Object(O.jsx)("h4",{className:"modal-title center",children:"Cadastro"})}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-addon",children:Object(O.jsx)("i",{className:"glyphicon glyphicon-user"})}),Object(O.jsx)("input",{onChange:function(e){return n(e.target.value)},id:"cEmail",type:"text",className:"form-control",name:"cEmail",placeholder:"Email"})]}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-addon",children:Object(O.jsx)("i",{className:"glyphicon glyphicon-lock"})}),Object(O.jsx)("input",{onChange:function(e){return l(e.target.value)},id:"cPassword",type:"password",className:"form-control",name:"cPassword",placeholder:"Password"})]})]})})}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{onClick:function(){p.auth().createUserWithEmailAndPassword(a,i).then((function(e){alert("Usuario cadastrado com sucesso")})).catch((function(e){alert(e)}))},type:"button",id:"cadastro",className:"btn btn-login pull-center","data-dismiss":"modal",children:"Cadastrar"}),Object(O.jsx)(r.b,{to:"/login",children:Object(O.jsx)("button",{type:"button",id:"cancelarCadastro",className:"btn btn-login pull-left","data-dismiss":"modal",children:"Cancelar"})})]})]})})})})};a(51),a(52);var x=function(){var e=Object(l.b)();return Object(O.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(O.jsx)(r.b,{to:"/",className:"navbar-brand text-white mx-2 bold mx-3",href:"#",children:"Keygle"}),Object(O.jsx)("div",{className:"collapse navbar-collapse",children:Object(O.jsx)("ul",{className:"navbar-nav mr-auto col-12",children:Object(l.c)((function(e){return e.usuarioLogado}))>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/historico/meu",children:"Historico"})}),Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/favoritos/meu",children:"Favoritos"})}),Object(O.jsx)("li",{className:"nav-item active order active",children:Object(O.jsx)(r.b,{to:"/sobre",children:"Sobre"})}),Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/",onClick:function(){return e({type:"LOGOUT"})},children:"Sair"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/cadastro",children:"Cadastro"})}),Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/login",children:"Login"})}),Object(O.jsx)("li",{className:"nav-item active order",children:Object(O.jsx)(r.b,{to:"/sobre",children:"Sobre"})})]})})})]})};var v=function(){var e=Object(c.useState)(""),t=Object(A.a)(e,2),a=t[0],n=t[1],s=Object(l.c)((function(e){return e.usuarioEmail})),o=p.firestore();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("form",{className:"repo",children:[Object(O.jsx)("img",{src:h,alt:"logo",className:"center"}),Object(O.jsxs)("div",{className:"input-group redim recenter",children:[Object(O.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",className:"form-control",placeholder:"Digite o nome do produto"}),Object(O.jsx)("button",{onClick:function(){var e="https://www.g2a.com/search?query="+a;o.collection("historico").add({pesquisa:a,site:e,usuario:s}).then((function(){window.open(e)})).catch((function(){alert("Erro")}))},type:"button",className:"btn btn-lg btn-block btn-g2a",children:"G2a"}),Object(O.jsx)("button",{onClick:function(){var e="https://www.eneba.com/br/store?text="+a;o.collection("historico").add({pesquisa:a,site:e,usuario:s}).then((function(){window.open(e)})).catch((function(){alert("Erro")}))},type:"button",className:"btn btn-lg btn-block btn-eneba",children:"Eneba"}),Object(O.jsx)("button",{onClick:function(){var e="https://www.nuuvem.com/catalog/search/"+a;o.collection("historico").add({pesquisa:a,site:e,usuario:s}).then((function(){window.open(e)})).catch((function(){alert("Erro")}))},type:"button",className:"btn btn-lg btn-block btn-nuuvem",children:"Nuuvem"})]})]})]})},N=(a(53),a.p+"static/media/v1.e6896fe0.mp4"),B=a.p+"static/media/v2.6a19895a.mp4",w=a.p+"static/media/v3.8da4f4dc.mp4";var C=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{id:"sobreCont",className:"",children:[Object(O.jsx)("img",{src:h,alt:"logo",className:"center mb-5"}),Object(O.jsx)("video",{src:N,width:"640",height:"360",controls:"controls",autoplay:"true",loop:"true"}),Object(O.jsx)("video",{src:B,width:"640",height:"360",controls:"controls",autoplay:"true",loop:"true"}),Object(O.jsx)("video",{src:w,width:"640",height:"360",controls:"controls",autoplay:"true",loop:"true"}),Object(O.jsxs)("h6",{className:"footer",children:["Site desenvolvido por ",Object(O.jsx)("a",{href:"https://www.facebook.com/yohan.duarte.10/",children:"Yohan Duarte Pessanha"})," para a disciplina de programa\xe7\xe3o Web!"]})]})]})};a(54);var E=function(){var e=Object(c.useState)(),t=Object(A.a)(e,2),a=t[0],n=t[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("form",{children:Object(O.jsx)("div",{id:"modalCadastro",className:"modal-fade hidden",role:"dialog",children:Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsx)("div",{className:"modal-header",children:Object(O.jsx)("h4",{className:"modal-title center",children:"Recupera\xe7ao de Senha"})}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("form",{children:Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-addon",children:Object(O.jsx)("i",{className:"glyphicon glyphicon-user"})}),Object(O.jsx)("input",{onChange:function(e){return n(e.target.value)},className:"form-control",type:"email",placeholder:"Email"})]})})})}),Object(O.jsxs)("div",{className:"modal-footer",children:[Object(O.jsx)("button",{onClick:function(){p.auth().sendPasswordResetEmail(a).then((function(e){alert("Um email de redefini\xe7ao foi enviado para seu email")})).catch((function(e){alert("Email invalido")}))},type:"button",className:"btn btn-login pull-center",children:"Recuperar"}),Object(O.jsx)(r.b,{to:"/login",children:Object(O.jsx)("button",{type:"button",id:"cancelarCadastro",className:"btn btn-login pull-left","data-dismiss":"modal",children:"Cancelar"})})]})]})})})})})},y=a(22),k=a.n(y),I=a(27);a(56);var q=function(e){var t=e.id,a=e.pesquisa,n=e.site,s=e.usuario,o=Object(c.useState)(),r=Object(A.a)(o,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){n.includes("g2a")?p.storage().ref("imagens/g2a.png").getDownloadURL().then((function(e){l(e)})):n.includes("eneba")?p.storage().ref("imagens/eneba.jpg").getDownloadURL().then((function(e){l(e)})):n.includes("nuuvem")&&p.storage().ref("imagens/nuuvem.jpg").getDownloadURL().then((function(e){l(e)}))})),Object(O.jsx)("div",{className:"col-md-2 col-sm-12 reposit",children:Object(O.jsxs)("div",{className:"card-body modal-content",children:[Object(O.jsx)("img",{src:i,alt:"logo",className:"img-cartao"}),Object(O.jsx)("h5",{className:"my-2",children:a}),Object(O.jsx)("button",{onClick:function(){window.open(n)},type:"button",className:"btn btn-sm btn-block btn-detalhes",children:"Detalhes"}),Object(O.jsx)("button",{onClick:function(){p.firestore().collection("favoritos").add({produto:a,site:n,usuario:s})},type:"button",className:"btn btn-sm btn-block btn-fav",children:"Favoritar"}),Object(O.jsx)("button",{onClick:function(){p.firestore().collection("historico").doc(t).delete()},type:"button",className:"btn btn-sm btn-block btn-del",children:"Excluir"})]})})};var S=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(A.a)(a,2),s=n[0],o=n[1],r=[],i=Object(l.c)((function(e){return e.usuarioEmail}));return Object(c.useEffect)((function(){t.params.parametro&&p.firestore().collection("historico").where("usuario","==",i).get().then(function(){var e=Object(I.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.docs.forEach((function(e){r.push(Object(b.a)({id:e.id},e.data()))}));case 2:o(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"row",children:s.map((function(e){return Object(O.jsx)(q,{id:e.id,pesquisa:e.pesquisa,site:e.site,usuario:e.usuario})}))})]})};a(57);var F=function(e){var t=e.id,a=e.produto,n=e.site,s=(e.usuario,Object(c.useState)()),o=Object(A.a)(s,2),r=o[0],i=o[1];return Object(c.useEffect)((function(){n.includes("g2a")?p.storage().ref("imagens/g2a.png").getDownloadURL().then((function(e){i(e)})):n.includes("eneba")?p.storage().ref("imagens/eneba.jpg").getDownloadURL().then((function(e){i(e)})):n.includes("nuuvem")&&p.storage().ref("imagens/nuuvem.jpg").getDownloadURL().then((function(e){i(e)}))})),Object(O.jsx)("div",{className:"col-md-2 col-sm-12 reposit",children:Object(O.jsxs)("div",{className:"card-body modal-content",children:[Object(O.jsx)("img",{src:r,alt:"logo",className:"img-cartao"}),Object(O.jsx)("h5",{className:"my-2",children:a}),Object(O.jsx)("button",{onClick:function(){window.open(n)},type:"button",className:"btn btn-sm btn-block btn-detalhes",children:"Detalhes"}),Object(O.jsx)("button",{onClick:function(){p.firestore().collection("favoritos").doc(t).delete()},type:"button",className:"btn btn-sm btn-block btn-del",children:"Excluir"})]})})};var L=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(A.a)(a,2),s=n[0],o=n[1],r=[],i=Object(l.c)((function(e){return e.usuarioEmail}));return Object(c.useEffect)((function(){t.params.parametro&&p.firestore().collection("favoritos").where("usuario","==",i).get().then(function(){var e=Object(I.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.docs.forEach((function(e){r.push(Object(b.a)({id:e.id},e.data()))}));case 2:o(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"row",children:s.map((function(e){return Object(O.jsx)(F,{id:e.id,produto:e.produto,site:e.site,usuario:e.usuario})}))})]})};var J=function(){return Object(O.jsx)(l.a,{store:m,children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/cadastro",component:f}),Object(O.jsx)(i.b,{exact:!0,path:"/login",component:g}),Object(O.jsx)(i.b,{exact:!0,path:"/lostpassword",component:E}),Object(O.jsx)(i.b,{exact:!0,path:"/",component:v}),Object(O.jsx)(i.b,{path:"/favoritos/:parametro",component:L}),Object(O.jsx)(i.b,{path:"/historico/:parametro",component:S}),Object(O.jsx)(i.b,{exact:!0,path:"/sobre",component:C})]})})};o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.75dffa6b.chunk.js.map