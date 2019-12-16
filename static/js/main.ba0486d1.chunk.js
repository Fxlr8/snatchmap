(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),l=t.n(c),o=t(50),i=(t(81),t(6)),u=t(53),f=t(3),m=t(2),d=t(10),s=t(15),p=t(55),b=t.n(p),E=t(56),g=t.n(E),h=t(57),v=t.n(h),x="375px",j="425px",O="768px",y="1024px",w="1440px",k="2560px",F={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(x,")"),mobileL:"(min-width: ".concat(j,")"),tablet:"(min-width: ".concat(O,")"),laptop:"(min-width: ".concat(y,")"),laptopL:"(min-width: ".concat(w,")"),desktop:"(min-width: ".concat(k,")"),desktopL:"(min-width: ".concat(k,")")},I=t(20),z=t.n(I);function C(){var e=Object(f.a)(["\n    height: 100vh;\n    width: 100vw;\n"]);return C=function(){return e},e}function T(){var e=Object(f.a)(["\n    height: 100%;\n    width: 100%;\n    transform: translateY(-30%);\n    transition: transform 300ms ease;\n\n    @media "," {\n        transform: translateY(0);\n    }\n"]);return T=function(){return e},e}function P(e){var n=new Image(75,75);return n.src=e,n}var _=P(b.a),R=P(g.a),S=P(v.a),N=Object(d.d)({accessToken:"pk.eyJ1IjoiZnhscjgiLCJhIjoiY2s0NGpieWpkMGJ6eDNvbWdvcml1aG1pZSJ9.pAeNPdFX91L9Z33XLXrnbA"}),L=Object(m.default)(N)(T(),F.laptop);function Y(e){return[e[1],e[0]]}var A=function(e){var n=e.imageName,t=e.objects,c=Object(r.useContext)(Mn).dispatch;return a.a.createElement(d.c,{type:"symbol",id:"marker-".concat(n),layout:{"icon-image":n,"icon-size":.5}},t.map((function(e){return a.a.createElement(d.a,{onClick:function(){return c({type:"SELECT_PROPERTY",propertyId:e._id,ownerId:e.personId})},key:e._id,coordinates:Y(e.location.geometry.coordinates)})})))},J=[37.627771,55.7537485],X=Object(r.memo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.b,{id:"plane-icon",data:_}),a.a.createElement(d.b,{id:"ship-icon",data:R}),a.a.createElement(d.b,{id:"pin-icon",data:S}))})),B=[3],U=Object(r.memo)(Object(m.default)((function(e){var n=e.className,t=Object(r.useContext)(Mn).state.propertyId,c=Object(s.a)("https://branched-glue.glitch.me/object/objects"),l=Object(i.a)(c,1)[0],o=l.data,u=(l.loading,l.error,o&&o.items.filter((function(e){return"building"===e.type&&!!e.location}))),f=o&&o.items.filter((function(e){return"yacht"===e.type&&!!e.location})),m=o&&o.items.filter((function(e){return"plane"===e.type&&!!e.location})),d=Object(r.useMemo)((function(){if(o){var e=o.items.find((function(e){return e._id===t}));if(e&&e.location)return Y(e.location.geometry.coordinates)}return J}),[t,o]);return a.a.createElement(z.a,null,a.a.createElement(L,{style:"mapbox://styles/mapbox/light-v10",center:d,className:n,zoom:B,movingMethod:"easeTo"},u&&a.a.createElement(A,{objects:u,imageName:"pin-icon"}),f&&a.a.createElement(A,{objects:f,imageName:"ship-icon"}),m&&a.a.createElement(A,{objects:m,imageName:"plane-icon"}),a.a.createElement(X,null)))}))(C())),M=t(58),W=t.n(M),G=function(e){return a.a.createElement(W.a,e)},Z=t(31),D=t.n(Z),H=t(59),$=t.n(H),q=t(60),K=t.n(q),Q=t(61),V=t.n(Q),ee=t(62),ne=t.n(ee),te=t(63),re=t.n(te),ae=t(14),ce=t(64),le=t.n(ce);function oe(){var e=Object(f.a)(["\n    font-weight: bold;\n    margin-top: 10px;\n    text-align: right;\n    font-family: PTSerif;\n"]);return oe=function(){return e},e}function ie(){var e=Object(f.a)(["\n    padding-top: 24px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n"]);return ie=function(){return e},e}function ue(){var e=Object(f.a)(["\n    font-family: Roboto;\n    font-size: 15px;\n    color: #646464;\n    line-height: 22px;\n"]);return ue=function(){return e},e}function fe(){var e=Object(f.a)(["\n    font-family: PTSerif;\n    font-size: 20px;\n    font-weight: bold;\n    color: #000000;\n"]);return fe=function(){return e},e}function me(){var e=Object(f.a)(["\n    font-size: 15px;\n    color: #646464;\n"]);return me=function(){return e},e}function de(){var e=Object(f.a)(["\n    border-radius: 5px;\n    width: 100%;\n    height: auto;\n    margin-bottom: 16px;\n"]);return de=function(){return e},e}function se(){var e=Object(f.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin-bottom: -10px;\n"]);return se=function(){return e},e}function pe(){var e=Object(f.a)(["\n    margin-left: 14px;\n    color: #4A4A4A;\n"]);return pe=function(){return e},e}function be(){var e=Object(f.a)(["\n    width: 1px;\n    height: 20px;\n    background-color: #E5E5E5;\n"]);return be=function(){return e},e}function Ee(){var e=Object(f.a)(["\n    font-size: 14px;\n    color: #4A4A4A;\n    margin-left: 10px;\n    margin-right: 14px;\n"]);return Ee=function(){return e},e}function ge(){var e=Object(f.a)(["\n    background: #FFFFFF;\n    border: 1px solid #E5E5E5;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.07);\n    border-radius: 18px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 16px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n"]);return ge=function(){return e},e}function he(){var e=Object(f.a)(["\n"]);return he=function(){return e},e}function ve(){var e=Object(f.a)(["\n    height: 1px;\n    background-color: #E5E5E5;\n"]);return ve=function(){return e},e}function xe(){var e=Object(f.a)(["\n    font-size: 15px;\n    color: #646464;\n    letter-spacing: 0;\n    max-width: 65%;\n"]);return xe=function(){return e},e}function je(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 14px;\n"]);return je=function(){return e},e}function Oe(){var e=Object(f.a)(["\n    padding: 16px 24px;\n    background-color: #F7F7F7;\n    font-size: 15px;\n    color: #000000;\n    line-height: 22px;\n    margin-bottom: 20px;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(f.a)(["\n    align-items: center;\n    justify-content: flex-start;\n"]);return ye=function(){return e},e}function we(){var e=Object(f.a)(["\n    font-family: PTSerif;\n    font-size: 18px;\n    color: #000000;\n"]);return we=function(){return e},e}function ke(){var e=Object(f.a)(["\n    font-family: PTSerif;\n    font-weight: bold;\n    font-size: 20px;\n    color: #000000;\n"]);return ke=function(){return e},e}function Fe(){var e=Object(f.a)(["\n    width: 72px;\n    height: 72px;\n    border-radius: 50%;\n    background-size: cover;\n    margin-right: 20px;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(f.a)(["\n    font-size: 15px;\n    color: #000000;\n    margin-left: 12px;\n    margin-right: auto;\n"]);return Ie=function(){return e},e}function ze(){var e=Object(f.a)(["\n    fill: #B7B7B7;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(f.a)(["\n    width: 16px;\n    height: 16px;\n    background-color: #CC0001;\n    border-radius: 8px;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(f.a)(["\n    padding: 20px 0;\n    border-top: 1px solid #E5E5E5;\n    border-bottom: 1px solid #E5E5E5;\n    display: flex;\n    text-decoration: none;\n"]);return Te=function(){return e},e}function Pe(){var e=Object(f.a)(["\n    padding: 9px 15px;\n    border-radius: 5px;\n    background-color: #E32525;\n    color: #FFF;\n    font-weight: bold;\n    font-size: 20px;\n"]);return Pe=function(){return e},e}function _e(){var e=Object(f.a)(["\n    font-size: 15px;\n    line-height: 22px;\n    color: #646464;\n"]);return _e=function(){return e},e}function Re(){var e=Object(f.a)(["\n    color: #646464;\n    font-size: 16px;\n    margin-left: 24px;\n"]);return Re=function(){return e},e}function Se(){var e=Object(f.a)(["\n    font-family: PTSerif;\n    font-weight: bold;\n    font-size: 20px;\n    color: #000000;\n    letter-spacing: 0;\n"]);return Se=function(){return e},e}function Ne(){var e=Object(f.a)(["\n    width: 100%;\n    height: auto;\n    margin-bottom: 24px;\n"]);return Ne=function(){return e},e}function Le(){var e=Object(f.a)(["\n    margin: 24px;\n    border-radius: 5px;\n    background: #FFFFFF;\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);\n    height: 48px;\n"]);return Le=function(){return e},e}function Ye(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n"]);return Ye=function(){return e},e}function Ae(){var e=Object(f.a)(["\n    cursor: pointer;\n"]);return Ae=function(){return e},e}function Je(){var e=Object(f.a)(["\n    padding: 0 24px;\n    margin-bottom: 24px;\n"]);return Je=function(){return e},e}function Xe(){var e=Object(f.a)(["\n    font-family: Roboto;\n    font-size: 13px;\n    color: #646464;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    font-weight: medium;\n"]);return Xe=function(){return e},e}function Be(){var e=Object(f.a)(["\n    width: 100vw;\n    height: 60%;\n    top: 40%;\n    background-color: #FFF;\n    left: 0;\n    z-index: 10;\n    overflow-y: scroll;\n    position: relative;\n\n    transform: translateX(","%);\n    transition: transform 200ms ease;\n\n    @media "," {\n        width: 420px;\n        height: 100%;\n        top: 0;\n        transform: translateX(","%);\n        transform: translateY(","%);\n    }\n"]);return Be=function(){return e},e}function Ue(){var e=Object(f.a)(["\n    position: absolute;\n    background: #FFFFFF;\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: -12px;\n    right: 24px;\n    width: 36px;\n    height: 36px;\n    cursor: pointer;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(f.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n"]);return Me=function(){return e},e}var We=Object(m.default)(z.a)(Me()),Ge=m.default.div(Ue()),Ze=m.default.div(Be(),(function(e){return e.show?0:-100}),F.laptop,(function(e){return e.show?0:-100}),(function(e){return e.show?0:100})),De=m.default.div(Xe()),He=m.default.div(Je()),$e=Object(m.default)(He)(Ae()),qe=m.default.div(Ye()),Ke=(m.default.div(Le()),m.default.img(Ne())),Qe=m.default.div(Se()),Ve=(m.default.div(Re()),m.default.div(_e())),en=m.default.div(Pe()),nn=m.default.a(Te()),tn=m.default.div(Ce()),rn=Object(m.default)(G)(ze()),an=m.default.div(Ie()),cn=m.default.div(Fe()),ln=m.default.div(ke()),on=m.default.div(we()),un=Object(m.default)(qe)(ye()),fn=m.default.div(Oe()),mn=m.default.div(je()),dn=m.default.div(xe()),sn=m.default.div(ve()),pn=m.default.div(he()),bn=m.default.div(ge()),En=m.default.div(Ee()),gn=m.default.div(be()),hn=m.default.div(pe()),vn=m.default.div(se()),xn=m.default.img(de()),jn=m.default.div(me()),On=function(e){var n=e.property;return a.a.createElement(a.a.Fragment,null,a.a.createElement(He,null,a.a.createElement(De,null,"\u041e\u0431\u044a\u0435\u043a\u0442")),a.a.createElement(Ke,{src:n.photoUrl}),a.a.createElement(He,null,a.a.createElement(qe,null,a.a.createElement(Qe,null,n.name)),a.a.createElement(Ve,null,n.text)),!!n.price&&a.a.createElement(He,null,a.a.createElement(qe,null,a.a.createElement(en,null,a.a.createElement(ae.a,{value:n.price})," \u0440\u0443\u0431."))),a.a.createElement(He,null,a.a.createElement(nn,{target:"_blank",href:n.proofUrl},a.a.createElement(tn,null),a.a.createElement(an,null,"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0424\u0411\u041a"),a.a.createElement(rn,{src:D.a}))))},yn=function(e){var n=e.person;return a.a.createElement(a.a.Fragment,null,a.a.createElement(He,null,a.a.createElement(De,null,"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446")),a.a.createElement(He,null,a.a.createElement(un,null,a.a.createElement(cn,{style:{backgroundImage:"url(".concat(n.photoUrl,")")}}),a.a.createElement("div",null,a.a.createElement(ln,null,n.surname),a.a.createElement(on,null,n.name)))),a.a.createElement(fn,null,n.description),a.a.createElement(He,null,!!n.party&&a.a.createElement(mn,null,a.a.createElement(dn,null,"\u041f\u0430\u0440\u0442\u0438\u044f"),a.a.createElement(pn,null,n.party)),!!n.salary&&a.a.createElement(mn,null,a.a.createElement(dn,null,"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u043b\u0430\u0434"),a.a.createElement(pn,null,a.a.createElement(ae.a,{value:n.salary})," \u0440\u0443\u0431."))))},wn=function(e){var n=e.property,t=Object(r.useContext)(Mn).dispatch;return a.a.createElement($e,{onClick:function(){return t({type:"SELECT_PROPERTY",propertyId:n._id,ownerId:n.personId})}},a.a.createElement(xn,{src:n.photoUrl}),a.a.createElement(qe,null,a.a.createElement(Qe,null,n.name)),a.a.createElement(jn,null,a.a.createElement(ae.a,{value:n.price})," \u0440\u0443\u0431"))},kn=function(e){var n=e.properties,t=e.propertyId,r=0;console.log(n);var c=n.reduce((function(e,n){var t=Object(i.a)(e,3),a=t[0],c=t[1],l=t[2],o=n.type,u=n.price;switch(r+=u,o){case"yacht":c+=1;break;case"building":a+=1;break;case"plane":l+=1}return[a,c,l]}),[0,0,0]),l=Object(i.a)(c,3),o=l[0],u=l[1],f=l[2];return console.log({houses:o,ships:u,planes:f}),a.a.createElement(a.a.Fragment,null,a.a.createElement(He,null,a.a.createElement(De,null,"\u0418\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e")),a.a.createElement(He,null,a.a.createElement(mn,null,a.a.createElement(dn,null,"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"),a.a.createElement(pn,null,a.a.createElement(ae.a,{value:r})," \u0440\u0443\u0431"))),a.a.createElement(He,null,a.a.createElement(vn,null,u>0&&a.a.createElement(bn,null,a.a.createElement(rn,{src:$.a}),a.a.createElement(En,null,"\u042f\u0445\u0442\u044b"),a.a.createElement(gn,null),a.a.createElement(hn,null,u)),f>0&&a.a.createElement(bn,null,a.a.createElement(rn,{src:K.a}),a.a.createElement(En,null,"\u0421\u0430\u043c\u043e\u043b\u0451\u0442\u044b"),a.a.createElement(gn,null),a.a.createElement(hn,null,f)),o>0&&a.a.createElement(bn,null,a.a.createElement(rn,{src:re.a}),a.a.createElement(En,null,"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"),a.a.createElement(gn,null),a.a.createElement(hn,null,o)))),n.filter((function(e){return e._id!==t})).map((function(e){return a.a.createElement(wn,{key:e._id,property:e})})))},Fn=m.default.div(fe()),In=m.default.div(ue()),zn=m.default.div(ie()),Cn=function(){var e=Object(r.useContext)(Mn).dispatch,n=Object(s.a)("https://branched-glue.glitch.me/object/persons/"),t=Object(i.a)(n,1)[0].data,c=t&&t.items||[];return a.a.createElement(a.a.Fragment,null,c.map((function(n){return a.a.createElement(He,null,a.a.createElement(un,{style:{cursor:"pointer"},onClick:function(){e({type:"SELECT_PROPERTY",ownerId:n._id})}},a.a.createElement(cn,{style:{backgroundImage:"url(".concat(n.photoUrl,")")}}),a.a.createElement("div",null,a.a.createElement(ln,null,n.surname),a.a.createElement(on,null,n.name))))})))},Tn=m.default.div(oe()),Pn=function(e){var n=e.show,t=e.propertyId,c=e.ownerId,l=Object(r.useRef)(null),o=Object(r.useContext)(Mn).dispatch,u=Object(r.useState)(0),f=Object(i.a)(u,2),m=f[0],d=f[1],p=Object(s.a)("https://branched-glue.glitch.me/object/persons/".concat(c)),b=Object(i.a)(p,1)[0].data,E=Object(s.a)("https://branched-glue.glitch.me/object/objects?personId=".concat(c)),g=Object(i.a)(E,1)[0].data;Object(r.useEffect)((function(){l.current&&l.current.scrollTo({top:0,left:0,behavior:"smooth"})}),[t,c]),Object(r.useEffect)((function(){d(t||c?1:0)}),[t,c]),console.log(g);var h=g&&g.count>0&&g.items.find((function(e){return e._id===t}));return a.a.createElement(We,null,a.a.createElement(Ze,{ref:l,show:n},a.a.createElement(le.a,{index:m,onChangeIndex:function(e){return d(e)}},a.a.createElement(zn,null,a.a.createElement(He,null,a.a.createElement(Fn,null,"\u041a\u0430\u0440\u0442\u0430 \u0430\u043d\u0442\u0438\u043a\u043e\u0440\u0440\u0443\u043f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439"),a.a.createElement(In,null,"\u0416\u0443\u043b\u0438\u043a\u0438 \u0438 \u0432\u043e\u0440\u044b \u043e\u0447\u0435\u043d\u044c \u043d\u0435 \u043b\u044e\u0431\u044f\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c \u0438 \u043b\u0438\u0448\u043d\u0435\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435. \u0426\u0435\u043b\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 - \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u0435 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0444\u0430\u043a\u0442\u043e\u0432 \u043a\u043e\u0440\u0440\u0443\u043f\u0446\u0438\u0438 \u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438.")),a.a.createElement(fn,null,"\xab\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \xab\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0434\u0435\u043d\u0435\u0433\xbb, \u0435\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043d\u044c\u0433\u0438 \u043d\u0430\u043b\u043e\u0433\u043e\u043f\u043b\u0430\u0442\u0435\u043b\u044c\u0449\u0438\u043a\u043e\u0432.\xbb",a.a.createElement(Tn,null,"\u041c. \u0422\u044d\u0442\u0447\u0435\u0440")),a.a.createElement(He,null,a.a.createElement(In,null,"\u0412\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0437\u044f\u0442\u044b \u0438\u0437 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432.",a.a.createElement("br",null),"\u0414\u0430\u043d\u043d\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438:")),a.a.createElement(He,null,a.a.createElement(nn,{target:"_blank",href:"https://github.com/awesome-corruption/main"},a.a.createElement(G,{src:ne.a}),a.a.createElement(an,null,"\u041f\u043e\u043c\u043e\u0447\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0431\u0430\u0437\u0443"),a.a.createElement(rn,{src:D.a}))),a.a.createElement(He,null,a.a.createElement(De,null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043b\u0438\u0446\u0430")),a.a.createElement(Cn,null)),a.a.createElement(zn,null,a.a.createElement("div",{style:{position:"relative"}},a.a.createElement(Ge,{onClick:function(){return o({type:"SELECT_PROPERTY"})}},a.a.createElement(G,{src:V.a}))),h&&a.a.createElement(On,{property:h}),b&&a.a.createElement(yn,{person:b}),a.a.createElement(He,null,a.a.createElement(sn,null)),g&&g.items&&a.a.createElement(kn,{properties:g.items,propertyId:t})))))},_n=t(65),Rn=t.n(_n);function Sn(){var e=Object(f.a)(["\n    position: absolute;\n    background: #fff;\n    left: 50%;\n    top: 10px;\n    padding: 0 26px;\n    border-radius: 38px;\n    transform: translateX(-50%);\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);\n    border-radius: 27px;\n    height: 54px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Sn=function(){return e},e}function Nn(){var e=Object(f.a)(["\n    fill: #E32525;\n"]);return Nn=function(){return e},e}function Ln(){var e=Object(f.a)(["\n    font-family: Helvetica;\n    font-size: 25px;\n    color: #000000;\n    margin-left: 10px;\n    font-weight: bold;\n"]);return Ln=function(){return e},e}var Yn=m.default.div(Ln()),An=Object(m.default)(G)(Nn()),Jn=Object(m.default)((function(e){var n=e.className;return a.a.createElement("div",{className:n},a.a.createElement(An,{src:Rn.a}),a.a.createElement(Yn,null,"snatchmap"))}))(Sn()),Xn="SELECT_PROPERTY";function Bn(e,n){switch(n.type){case Xn:return Object(u.a)({},e,{propertyId:n.propertyId,ownerId:n.ownerId})}return e}var Un={sidebar:!0},Mn=Object(r.createContext)({state:Un,dispatch:function(){return Un}}),Wn=function(){var e=Object(r.useReducer)(Bn,Un),n=Object(i.a)(e,2),t=n[0],c=n[1];return a.a.createElement(Mn.Provider,{value:{state:t,dispatch:c}},a.a.createElement(U,null),a.a.createElement(Pn,{show:t.sidebar,propertyId:t.propertyId,ownerId:t.ownerId}),a.a.createElement(Jn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Gn=t(26);l.a.render(a.a.createElement(Gn.a,{locale:"ru"},a.a.createElement(o.Normalize,null),a.a.createElement(Wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,n,t){e.exports=t.p+"static/media/link.15cce0de.svg"},55:function(e,n,t){e.exports=t.p+"static/media/plane.6770c7ae.svg"},56:function(e,n,t){e.exports=t.p+"static/media/ship.194cf988.svg"},57:function(e,n,t){e.exports=t.p+"static/media/pin.ce25c562.svg"},59:function(e,n,t){e.exports=t.p+"static/media/ship.e3907d7e.svg"},60:function(e,n,t){e.exports=t.p+"static/media/plane.6a9cdf8d.svg"},61:function(e,n,t){e.exports=t.p+"static/media/cross.29bf1d8d.svg"},62:function(e,n,t){e.exports=t.p+"static/media/github.308c2f82.svg"},63:function(e,n,t){e.exports=t.p+"static/media/building.97dede31.svg"},65:function(e,n,t){e.exports=t.p+"static/media/logo.2809b199.svg"},73:function(e,n,t){e.exports=t(136)},81:function(e,n,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.ba0486d1.chunk.js.map