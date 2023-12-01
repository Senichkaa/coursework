"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[773],{5229:function(n,e,r){r.d(e,{Z:function(){return yn}});var t=r(2791),i=r(9439),o=r(9434),c=r(812),a=r(4164);var s,d,l,p,x,u,g,h,f,m,Z,b,j,v,y,w,P,k,z,C,F,L,S,I,N,B,E,R,T=r.p+"static/media/modal-icons.c489487c5bc75dc60a6a77179720aff4.svg",W=r(1578),Y=r(1686),_=r(168),q=r(5867),$=r(5586),M=q.ZP.div(s||(s=(0,_.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U=q.ZP.div(d||(d=(0,_.Z)(["\n  position: fixed;\n  top: 50%;\n  max-width: 541px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ",";\n  border-radius: 6px;\n  width: 480px;\n  z-index: 100;\n  height: 560px;\n  overflow-y: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 8px;\n    border: 3px solid transparent;\n    background-clip: content-box;\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ",";\n  }\n"])),$.Z.headerBgc,$.Z.headerBorderColor,$.Z.background),X=q.ZP.button(l||(l=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  margin: 10px 10px 10px auto;\n  fill: ",";\n  transition: fill 250ms ease-in-out;\n\n  &:hover {\n    fill: ",";\n  }\n"])),$.Z.headerBorderColor,$.Z.serviceTitle),A=q.ZP.img(p||(p=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 450px;\n  height: 290px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n"]))),Q=q.ZP.div(x||(x=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),D=q.ZP.div(u||(u=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: auto;\n  margin-bottom: 8px;\n  letter-spacing: 0.55px;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",";\n"])),$.Z.logoPrimary),G=q.ZP.div(g||(g=(0,_.Z)(["\n  width: 430px;\n  display: flex;\n  flex-direction: column;\n"]))),H=q.ZP.div(h||(h=(0,_.Z)(["\n  margin-bottom: 8px;\n  font-size: 17px;\n  letter-spacing: 0.7px;\n  margin-right: auto;\n"]))),J=q.ZP.div(f||(f=(0,_.Z)(["\n  font-size: 16px;\n  letter-spacing: 0.6px;\n  margin-bottom: 10px;\n"]))),K=q.ZP.span(m||(m=(0,_.Z)(["\n  color: ",";\n\n  letter-spacing: 0.6px;\n  font-weight: 600;\n"])),$.Z.logoPrimary),O=q.ZP.div(Z||(Z=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),V=q.ZP.div(b||(b=(0,_.Z)(["\n  font-size: 16px;\n  letter-spacing: 0.6px;\n  margin-top: 3px;\n"]))),nn=q.ZP.div(j||(j=(0,_.Z)(["\n  font-size: 16px;\n  letter-spacing: 0.6px;\n  margin-bottom: 10px;\n"]))),en=q.ZP.div(v||(v=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),rn=q.ZP.p(y||(y=(0,_.Z)(["\n  font-size: 13px;\n  letter-spacing: 0.6px;\n"]))),tn=q.ZP.button(w||(w=(0,_.Z)(["\n  padding: 15px 20px;\n  border-radius: 8px;\n  /* background-color: #575c0e; */\n  background-color: ",";\n  color: #d3d3d3;\n  transition: background-color 250ms ease-out;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  margin: 0 0 0 auto;\n  font-size: 15px;\n\n  &:hover {\n    /* background-color: #45490b; */\n    background-color: ",";\n  }\n"])),(function(n){return n.cartIncluded?"#761515":"#575c0e"}),(function(n){return n.cartIncluded?"#961a1a":"#45490b"})),on=r(184),cn=document.querySelector("#modal"),an=function(n){document.body.style.overflow=n?"hidden":"auto"},sn=function(n){var e=n.car,r=n.onClose,i=e.id,s=e.img,d=e.brand,l=e.model,p=e.year,x=e.type,u=e.engine,g=e.transmission,h=e.description,f=e.features,m=e.price;(0,t.useEffect)((function(){an(!0);var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){an(!1),window.removeEventListener("keydown",n)}}));var Z=(0,o.v9)((function(n){return n.cart.cart})).includes(i),b=(0,o.I0)(),j=(0,o.v9)((function(n){return n.auth.isLoggedIn}));return(0,a.createPortal)((0,on.jsx)(M,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,on.jsx)(U,{children:(0,on.jsxs)(Q,{children:[(0,on.jsx)(X,{type:"button",onClick:r,children:(0,on.jsx)("svg",{width:24,height:24,children:(0,on.jsx)("use",{href:"".concat(T,"#icon-cancel")})})}),(0,on.jsx)(A,{src:s,alt:"".concat(d," ").concat(l," ").concat(p)}),(0,on.jsxs)(G,{children:[(0,on.jsxs)(D,{children:[d," ",l,"\xa0",(0,on.jsx)("span",{children:","}),"\xa0",p]}),(0,on.jsx)(H,{children:h}),(0,on.jsxs)(J,{children:[(0,on.jsx)(K,{children:"Configuration: "})," ",x,", ",u,", ",g,"."]}),(0,on.jsxs)(O,{children:[(0,on.jsx)(K,{children:"Features: "}),f.map((function(n,e){return(0,on.jsxs)(V,{children:[n," "]},e)}))]}),(0,on.jsxs)(nn,{children:[(0,on.jsx)(K,{children:"Price: "}),"$ ",m]}),(0,on.jsx)(tn,{cartIncluded:Z,onClick:function(){j?Z?(b((0,c.N6)(i)),Y.Notify.failure("Car removed from the cart.")):(b((0,c.Xq)(i)),Y.Notify.success("Car added to the cart.")):Y.Notify.warning("You need to be logged in to make a purchase.")},children:Z?(0,on.jsxs)(on.Fragment,{children:["Remove ",(0,on.jsx)(W.RcX,{width:20,height:20})]}):(0,on.jsxs)(on.Fragment,{children:["Purchase",(0,on.jsx)(W.PFh,{width:20,height:20})]})}),(0,on.jsxs)(en,{children:[(0,on.jsx)("svg",{width:18,height:18,fill:"#d3d3d3",children:(0,on.jsx)("use",{href:"".concat(T,"#icon-warning")})}),(0,on.jsx)(rn,{children:"To learn more, contact us for further communication."})]})]})]})})}),cn)},dn=q.ZP.li(P||(P=(0,_.Z)(["\n  display: flex;\n  /* gap: 10px; */\n  align-items: center;\n  flex-direction: column;\n  padding: 15px;\n  width: 360px;\n  height: 430px;\n  background-color: ",";\n  border-radius: 15px;\n  border: 1px solid ",";\n"])),$.Z.advantageRectBg,$.Z.logoPrimary),ln=q.ZP.div(k||(k=(0,_.Z)(["\n  width: 330px;\n  height: 200px;\n  margin-bottom: 10px;\n"]))),pn=q.ZP.img(z||(z=(0,_.Z)(["\n  width: 330px;\n  height: 200px;\n  border-radius: 15px;\n  object-fit: cover;\n"]))),xn=q.ZP.div(C||(C=(0,_.Z)(["\n  display: flex;\n  height: 220px;\n  justify-content: center;\n  flex-direction: column;\n"]))),un=q.ZP.div(F||(F=(0,_.Z)(["\n  margin-bottom: 8px;\n  letter-spacing: 0.55px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),gn=q.ZP.span(L||(L=(0,_.Z)(["\n  font-weight: 500;\n"]))),hn=q.ZP.div(S||(S=(0,_.Z)(["\n  margin-bottom: 12px;\n  font-size: 15px;\n  letter-spacing: 0.7px;\n"]))),fn=(q.ZP.div(I||(I=(0,_.Z)(["\n  margin-bottom: 8px;\n  /* display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; */\n"]))),q.ZP.span(N||(N=(0,_.Z)(["\n  color: ",";\n\n  letter-spacing: 0.6px;\n  font-weight: 600;\n"])),$.Z.logoPrimary)),mn=(q.ZP.div(B||(B=(0,_.Z)(["\n  font-size: 13px;\n  letter-spacing: 0.6px;\n  margin-top: 3px;\n"]))),q.ZP.div(E||(E=(0,_.Z)(["\n  letter-spacing: 0.6px;\n"])))),Zn=q.ZP.button(R||(R=(0,_.Z)(["\n  margin-left: auto;\n  padding: 14px 30px;\n  border-radius: 8px;\n  background-color: #575c0e;\n  color: #d3d3d3;\n  transition: background-color 250ms ease-out;\n  &:hover {\n    background-color: #45490b;\n  }\n"])));var bn,jn=function(n){var e=n.car,r=e.id,o=e.img,c=e.brand,a=e.model,s=e.year,d=e.description,l=e.price,p=(0,t.useState)(!1),x=(0,i.Z)(p,2),u=x[0],g=x[1];return(0,on.jsxs)(dn,{children:[(0,on.jsx)(ln,{children:(0,on.jsx)(pn,{src:o,alt:"".concat(c," ").concat(a," ").concat(s)})}),(0,on.jsxs)(xn,{children:[(0,on.jsxs)(un,{children:[c,"\xa0",a," ",(0,on.jsx)(gn,{children:","})," ",s]}),(0,on.jsx)(hn,{children:d}),(0,on.jsxs)(mn,{children:[(0,on.jsx)(fn,{children:"Price: "}),"$ ",l]})]}),(0,on.jsx)(Zn,{type:"button",onClick:function(){g(!0)},children:"Learn More"}),u&&(0,on.jsx)(sn,{onClose:function(){g(!1)},car:e})]},r)},vn=q.ZP.ul(bn||(bn=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  row-gap: 50px;\n  column-gap: 50px;\n  flex-wrap: wrap;\n"])));var yn=function(n){var e=n.cars;return(0,on.jsx)(vn,{children:e.map((function(n){return n.id?(0,on.jsx)(jn,{car:n},n.id):null}))})}},7753:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,i,o,c,a,s,d,l=r(2791),p=r(9439),x=r(6959),u=r(9434),g=r(1907),h=r(5229),f=r(3410),m=r(812),Z=r(1686),b=r(168),j=r(5867),v=r(5586),y=j.ZP.p(t||(t=(0,b.Z)(["\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.95px;\n"]))),w=j.ZP.section(i||(i=(0,b.Z)(["\n  margin-top: 50px;\n"]))),P=j.ZP.p(o||(o=(0,b.Z)(["\n  font-size: 22px;\n  text-align: center;\n  letter-spacing: 1.1px;\n  line-height: 1.4;\n  margin-bottom: 20px;\n"]))),k=j.ZP.span(c||(c=(0,b.Z)(["\n  color: ",";\n"])),v.Z.logoPrimary),z=j.ZP.h2(a||(a=(0,b.Z)(["\n  letter-spacing: 1.1px;\n  padding-left: 25px;\n  margin-bottom: 25px;\n"]))),C=j.ZP.p(s||(s=(0,b.Z)(["\n  font-size: 18px;\n  letter-spacing: 0.9px;\n  margin: 35px 0 0 auto;\n  width: 300px;\n  text-align: center;\n"]))),F=j.ZP.button(d||(d=(0,b.Z)(["\n  display: flex;\n  margin: 10px 40px 0 auto;\n  padding: 14px 30px;\n  border-radius: 8px;\n  background-color: #575c0e;\n  color: #d3d3d3;\n  transition: background-color 250ms ease-out;\n  &:hover {\n    background-color: #45490b;\n  }\n"]))),L=r.p+"static/media/audirs.2a9f1d8df07688d79837.png",S=r.p+"static/media/rsq8.3359a9742188e7032732.png",I=r(184);var N=function(){var n=(0,u.I0)();(0,l.useEffect)((function(){n((0,f.o)())}),[n]);var e=(0,l.useState)(!1),r=(0,p.Z)(e,2),t=r[0],i=r[1],o=(0,u.v9)((function(n){return n.cart.cart})),c=(0,u.v9)(g.Wz),a=(0,u.v9)(g.xU),s=c.filter((function(n){return o.includes(n.id)})),d=s.reduce((function(n,e){return n+e.price}),0);return(0,I.jsx)(w,{children:(0,I.jsxs)(x.W,{children:[a&&(0,I.jsx)(y,{children:"Loading..."}),!a&&t&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(P,{children:[(0,I.jsx)(k,{children:"Thank you"})," for your choice! We will contact you as soon as possible. ",(0,I.jsx)("br",{})," Meanwhile, make your next\xa0",(0,I.jsx)(k,{children:"decisions"})," and visit this page again."]}),(0,I.jsx)("div",{children:(0,I.jsx)("img",{src:S,alt:"RSQ8"})})]}),!a&&!t&&0===s.length&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(P,{children:["Your shopping cart is empty. ",(0,I.jsx)("br",{})," Please, make your\xa0",(0,I.jsx)(k,{children:"decisions"})," and visit this page again."]}),(0,I.jsx)("div",{children:(0,I.jsx)("img",{src:L,alt:"RS6"})})]}),!a&&!t&&s.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(z,{children:[(0,I.jsx)(k,{children:"Your"})," shopping list"]}),(0,I.jsx)(h.Z,{cars:s}),(0,I.jsxs)(C,{children:["Summary price: $ ",d]}),(0,I.jsx)(F,{type:"button",onClick:function(){s.length>0?(Z.Notify.success("Purchase successful! Thank you for shopping with us. Wait for our response via email."),i(!0),n((0,m.LL)())):Z.Notify.warning("Your shopping cart is empty. Please add items before purchasing.")},children:"Purchase"})]})]})})};var B=function(){return(0,I.jsx)(N,{})}},1907:function(n,e,r){r.d(e,{AS:function(){return a},Wz:function(){return t},dB:function(){return i},mj:function(){return o},xU:function(){return c}});var t=function(n){return n.cars.cars},i=function(n){return n.cars.filteredCars},o=function(n){return n.cars.filter},c=function(n){return n.cars.isLoading},a=function(n){return n.cars.isFiltered}}}]);
//# sourceMappingURL=773.77d292ec.chunk.js.map