(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(a,e,t){"use strict";t.r(e);var p,n=t(0),m=t(16),i=t.n(m),r=t(17),o=t(2),s=Object(o.a)(p||(p=Object(r.a)(["\n  *,\n  ::before,\n  ::after {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    border: none;\n    outline: none;\n  }\n\n  html, body {\n    min-height: 100%;\n    line-height: 1.5;\n    font-family: 'Roboto', sans-serif;\n    color: rgba(0, 0, 0, 0.87);\n  }\n  \n  a, ul, li {\n    text-decoration: none;\n    padding: 0;\n    list-style: none;\n  }\n  \n  button:focus, input:focus {\n    outline: none;\n    cursor: pointer;\n  }\n  \n  button, a {\n    cursor: pointer;\n  }\n"]))),l=o.b.div.withConfig({displayName:"material__Container",componentId:"sc-1uuhzlv-0"})(["width:100%;max-width:1200px;padding:0 15px;margin:0 auto;"]),c=o.b.div.withConfig({displayName:"material__Paper",componentId:"sc-1uuhzlv-1"})(["box-shadow:0px 1px 5px rgb(121 121 121 / 30%);padding:32px 43px;width:",";"],(function(a){return a.width||"100%"})),q=o.b.button.withConfig({displayName:"material__Button",componentId:"sc-1uuhzlv-2"})(["background-color:#EF4123;width:100%;max-width:319px;padding:15px 20px;font-size:15px;min-width:64px;box-sizing:border-box;transition:background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;font-family:'Bliss Pro',sans-serif;font-weight:600;line-height:18px;border-radius:3px;text-transform:none;color:#fff;&:disabled{cursor:default;background-color:#BDBDBD;}"]),d=t(4),u=t(23),b=t(12),h=t(8),x="stage",Z="reset",j="accepted",f="age",g="username",W="surname",N="nickname",T="phone",y="email",w="country",O="city",V="film",M="weather",C="group",v="color",z=t(1),U=Object(n.createContext)(null),A=function(a){var e=a.children,t={stage:0,accepted:!1,age:"",username:"",surname:"",nickname:"",phone:"",email:"",country:"",city:"",film:"",weather:"",group:"",color:""},p=Object(n.useReducer)((function(a,e){var p=function(t){return Object(h.a)(Object(h.a)({},a),{},Object(b.a)({},t,e.payload))};switch(e.type){case Z:return t;case j:return Object(h.a)(Object(h.a)({},a),{},{accepted:!a.accepted});case x:return p(x);case f:return p(f);case g:return p(g);case W:return p(W);case N:return p(N);case T:return p(T);case y:return p(y);case w:return p(w);case O:return p(O);case V:return p(V);case M:return p(M);case C:return p(C);case v:return p(v);default:return a}}),t),m=Object(u.a)(p,2),i=m[0],r=m[1];return Object(z.jsx)(U.Provider,{value:{state:i,dispatch:r},children:e})},G=function(a){return""===a?"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435":""};var F="#EF4123",Y=o.b.div.withConfig({displayName:"styles__InputContainer",componentId:"yuo17v-0"})(["margin-bottom:15px;"]),E=o.b.p.withConfig({displayName:"styles__InputLabel",componentId:"yuo17v-1"})(["color:grey;font-size:12px;"]),L=Object(o.b)(d.a).withConfig({displayName:"styles__InputInner",componentId:"yuo17v-2"})(["padding:15px 10px;transition:.2s;background:transparent;border:",";margin-bottom:2px;border-radius:2px;width:100%;"],(function(a){return"true"===a.haserror?"1px solid ".concat(F):"1px solid #CCCCCC"})),k=o.b.div.withConfig({displayName:"styles__InputError",componentId:"yuo17v-3"})(["color:",";"],F),B=function(a){var e=a.errors,t=a.touched,p=a.name,m=a.validate,i=a.label,r=e[p]&&t[p],o=Object(n.useContext)(U),s=o.state,l=o.dispatch,c=s[p];return"phone"===p&&(c=function(a){var e=function(a){for(var e="",t=["1","2","3","4","5","6","7","8","9","0"],p=0;p<a.length;p++)t.includes(a[p])&&(e+=a[p]);return e}(a.replace("+7","")),t=a[0],p=function(a,p,n){t+=a+e.slice(p,Math.min(n,e.length))};return e.length>=2&&p("(",1,4),e.length>=5&&p(")",4,7),e.length>=8&&p("-",7,9),e.length>=10&&p("-",9,11),t}(s[p])||""),Object(z.jsxs)(Y,{children:[Object(z.jsx)(E,{children:i}),Object(z.jsx)(L,{value:c,onChange:function(a){l({type:p,payload:a.target.value})},haserror:String(r),name:p,validate:m}),r&&Object(z.jsx)(k,{children:e[p]})]})},_=function(a){return{type:x,payload:a}},K="#EF4123",S="#BDBDBD",I=o.b.div.withConfig({displayName:"styles__FormWrapper",componentId:"sc-17iy1i5-0"})(["display:flex;justify-content:space-between;"]),H=o.b.div.withConfig({displayName:"styles__FormBar",componentId:"sc-17iy1i5-1"})(["width:30%;"]),D=o.b.div.withConfig({displayName:"styles__FormBarItem",componentId:"sc-17iy1i5-2"})(["margin-bottom:20px;color:#BDBDBD;"]),R=o.b.div.withConfig({displayName:"styles__Stages",componentId:"sc-17iy1i5-3"})(["display:flex;margin-bottom:50px;"]),X=o.b.span.withConfig({displayName:"styles__StagesItem",componentId:"sc-17iy1i5-4"})(["position:relative;margin-right:10px;width:32%;transition:.2s;color:",";border-bottom:1px solid ",";padding-bottom:10px;&:before{position:absolute;content:'';width:15px;height:15px;background:",";bottom:-7.5px;border-radius:50%;border:4px solid #fff;}"],(function(a){return a.state?K:S}),(function(a){return a.state?K:S}),(function(a){return a.state?K:S})),J=o.b.div.withConfig({displayName:"styles__ButtonWrapper",componentId:"sc-17iy1i5-5"})(["display:flex;justify-content:flex-end;"]),Q=o.b.button.withConfig({displayName:"styles__ButtonBack",componentId:"sc-17iy1i5-6"})(["color:#828282;font-weight:500;padding:15px 20px;margin-right:40px;background-color:#fff;border-radius:3px;transition:.2s;&:hover{background-color:rgba(123,123,123,.1);}"]),P=o.b.div.withConfig({displayName:"styles__Footer",componentId:"sc-17iy1i5-7"})(["margin-top:20px;"]),$=o.b.div.withConfig({displayName:"styles__FooterTop",componentId:"sc-17iy1i5-8"})(["display:flex;"]),aa=o.b.div.withConfig({displayName:"styles__FooterContent",componentId:"sc-17iy1i5-9"})(["display:flex;margin-bottom:25px;position:relative;margin-top:40px;&:before{top:-20px;position:absolute;content:'';width:100%;height:1px;background:#CCCCCC;}"]),ea=o.b.svg.withConfig({displayName:"styles__CheckboxSVG",componentId:"sc-17iy1i5-10"})(["display:none;"]),ta=o.b.input.withConfig({displayName:"styles__FooterCheckbox",componentId:"sc-17iy1i5-11"})(["width:25px;height:25px;position:relative;&:before,&:after{display:none;position:absolute;content:'';background:#EF4123;width:100%;height:100%;border-radius:3px;}&:after{background:url('","') 50% 50%;background-size:contain;background-repeat:no-repeat;filter:invert(1);transform:scale(.6);}&:checked:after,&:checked:before{display:block;}"],"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAALyCAMAAAAMiGwpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUdwTA0NDX9/f/v7+8PDw4iIiAwMDAAAAAUFBa6urv39/RcXFxYWFhUVFR0dHdLS0tzc3NXV1fr6+tTU1NPT0xwcHNbW1tvb2xgYGFRUVFZWVlhYWGJiYt3d3VdXV1NTU1VVVWFhYR4eHmNjY1JSUvz8/MzMzBEREWBgYNHR0QsLC8HBwWRkZK2trfj4+P7+/oKCgnFxcYqKiktLS8DAwPyaTpEAAAABdFJOUwBA5thmAAAACXBIWXMAAABIAAAASABGyWs+AAAM4klEQVR42uzZ12qWURBAUfuxG1usib0lFizv/2z+lyoIQSTw7Vn7EebMYi7OmTOS/qnjr18MQQp14ez6eNUYpJLpRbUUM73WK6qllGmqpZppqqWaaaqlmmmqpZppqqWaaaqlmmmqpZppqqWaaaqlmmmqpZppqqWa6bWeUi2lTFMt1UxTLdVMUy3VTFMt1UxTLdVMUy3VTFMt1UxTLdVMUy3VTFMt1UxTLdVMUy3VTFMt1UxTLdVMUy3VTFMt1Uyv9YJqKWWaaqlmmmqpZppqqWaaaqlmmmqpZppqqWaaaqlmmmqpZppqqWaaaqlmmmqpZnqt91RLKdNUSzXTVEs101RLNdNUSzXTVEs102s9eWPQUsk01VLNNNVSzTTVUs001VLNNNVSzTTVUs001VLNNNVSzTTVUs30TvV5w5dKpqmWaqaplmqmqZZqpqmWaqaplmqmqZZqptc6pFpKmaZaqpmmWqqZplqqmaZaqpmmWqqZplqqmaZaqpmmWqqZplqqmaZaqpmmWqqZXusx1VLKNNVSzTTVUs001VLNNNVSzTTVUs001VLNNNVSzTTVUs001VLNNNVSzTTVUs001VLNNNVSzTTVUs001VLNNNVSzfRaz6mWUqaplmqmqZZqpqmWaqaplmqmqZZqpqmWaqaplmqmqRbTNdNUi+lFtcQ01RLTp9ojqsU01RLTVEtMUy0xTbXENNVimmqJaaolpqmWmKZaYvpP1Xc8uJimWmKaaolpqiWmqZaYplpMUy0xvYWeUS2mqZaYplpimmqJaaolpqkW01RLTFMtMU21xDTVEtNUi2mqJaY31WuqxTTVEtNUS0xTLTFNtZgW1WKaaolpqiWmqZaYplpMi2oxTbXE9Kb6/tm6aAMdH8F64g7ti9zpVJevWBgxzbTENNMS00xLTDMtppmWmGZaYpppiWmmJaaZFtNMS0wzLTHNtMQ00xLTTItppiWmmZaYZlpimmkxzTTTYpppiWmmJaaZlphmWkyLaTHNtMQ00xLTTEtMMy2mxbSYZlpimmmJaaYlppkW02JaTDMtMc20xDTTEtNMi2kxLaaZlphmWmKaaYlppsW0mBbTTEtMMy0xzbTENNNiWkyLaaYlppmWmGZaYpppMS2mxTTTEtNMS0wzLTHNtJgW02KaaYlppiWmmZaYZlpMi2kxzbTENNMS00xLTDMtpsW0mGZaYpppiWmmJaaZFtMaavrbBya23o8jVE9u+lN+H86td2+p2PidvoSqO/2r6UU100zHTFPNNNM101QzzXTNNNVMM10zTTXTTNdMU8000zXTa93wX8000ynTVDPNdM001UwzXTNNNdNM10xTzTTTNdM71bdoYZrpkmmqmWa6ZppqppmumaaaaaZrpqlmmumaaaqZZrpmmmqmma6ZpppppmumqWaa6ZppqplmumaaaqaZrpmmmmmma6apZprpmmmqmWa6ZppqppmumaaaaaZrpqlmmumaaaqZZrpmmmqmma6ZpppppmumqWaa6ZppqplmumaaaqaZrpmmmmmma6apZprpmmmqmWa6ZppqppmumaaaaaZrpqlmmumaaaqZZrpmmmqmma6ZpppppmumqWaa6ZppqplmumaaaqaZrpneqb7HHNNMl0yvdZ1qpplOmaaaaaZrpqlmmumaaaqZZrpmmmqmma6ZpppppmumqWaa6ZppqplmumaaaqaZrpmmmmmma6apZprpmmmqmWa6ZppqppmumaaaaaZrpqlmmumaaaqZZrpmmmqmma6ZpppppmumqWaa6ZppqplmumaaaqaZrpmmmmmma6apZprpmmmqmWa6Zppqppmumd6pvssp00yXTFPNNNM101QzzXTNNNVMM10zTTXTTNdMU8000zXTVDPNdM001UwzXTNNNdNM10xTzTTTNdNUM810zTTVTDNdM00100zXTFPNNNM101QzzXTNNNVMM10zTTXTTNdMU8000zXTa12jmmmmU6apZprpmmmqmWa6ZppqppmumaaaaaZrpqlmmumaaaqZZrpmerpqppnumd6pvs20mC6ZnqyaaaabpueqZprpqumpqplmumt6pmqmmS6bnqiaaabbpuepZprpuulpqplmum96lmqmmZ5gepJqppmeYXqOaqaZnmJ6imqmmZ5jeoZqppmeZHqCaqaZnmW6r5pppqeZrqtmmul5ptuqmWZ6oumyaqaZnmm6q5pppqearqpmmum5ppuqmWZ6sumiaqaZnm26p5pppqebrqlmmmmmW6qZZprplmqmmWa6pZppppluqWaaaaZbqplmmumWaqaZZrqlmmmmmW6pZppppluqmWaa6ZZqpplmuqWaaaaZ/qvqfaaZZrrVw32mmWaaaqaZZppqpplmmmqmmWZ6gmqmmWa6pZppppluqWaaaaZbqplmmumWaqaZZrqlmmmmmW6pZppppluqmWaa6ZZqpplmuqWaaaaZbqlmmunfuuiZt66aaaapbqlmmmmqW6qZZprqlmqmmaa6pZpppqluqWaaaar/R/cfMM001VQzzTTVVDPNNNWzVDPNNNUt1UwzTXVLNdNMU91SzTTTVLdUM8001S3VTDNNdUs100xT3VLNNNNUt1QzzTTVLdVMM011SzXTTFPdUs0001S3VDPNNNUt1UwzTXVLNdNMU91SzTTTVLdUM8001S3VTDNN9Smr3mOaaapb3dxjmmmqqWaaaapnqmaaaapbqplmmuqWaqaZprqlmmmmqW6pZpppqluqmWaa6pZqppmmuqWaaaapbqlmmmmqW6qZZprqlmqmmaa6pZpppqluqWaaaapbqplmmuqWaqaZprqlmmmmqW6pZpppqluqmWaa6pZqppmmuqWaaaapbqlmmmmqW6qZZprqlmqmmaa6pZpppqluqWaaaapbqplmmuqWaqaZprqlmmmmqW6pZpppqluqmWaa6pZqppmmuqWaaaap3qTqA6aZprrVywOmmaZ6gmqmmaa6pZpppqluqWaaaapbqplmmuqWaqaZprqlmmmmqW6pZpppqluqmWaa6pZqppmmuqWaaaapbqlmmukNdM7ynbybR2bAtFstpkW1mBbVYlpUi2mqJaapFtOiWkyLajEtqsU01RLTVItpUS2mRbWYFtVimmqJaarFtKgW06JaTItqMU21xDTVYlpUi2lRLaZFtZimWmKaajEtqsW0qBbTolpMi2oxTbWYFtViWlSLaVEtpkW1mKZaTItqMS2qxbSoFtOiWkxTLaZFtX62T8cEAAAgAIMq2T+dKXwmdMBprMZprMZprMZpq3Eaq3Eaq3Eaq3Eaq3HaapzGapzGapzGapzGapy2GqexGqexGqexGqexGqex2mmsxmmsxmmsxmmsxmmsdhqrcRqrcRqrcRqrcRqrncZqnMZqnMZqnMZqnMZqp7Eap7Eap7Eap7Eap7HaaazGaazGaazGaazGaax2GqtxGqtxGqtxGqtxGqudxmppnMZqnMZqnMZqnMZqp8Fqp7Eap7Eap7Eap7HaabDaaazGaazGaax22mmsdhqsdhqrcRqrcRqrnQarnQarncZqnMZqnMZqp8Fqp8Fqp7Eap7Eap7HaabDaabDaaazGaazGaax2Gqx2Gqx2Gqx2GqtxGqudBqudBqudBqudxmqcxmqnwWqnwWqnwWqnsRqnsdppsNppsNppsNpprMZprHYarHYarHYarHYaq3Eaq50Gq50Gq50Gq53GapzGaqfBaqfBaqfBaqfBaqex2mmw2mmw2mmw2mmw2mmsdhqsdhqsdhqsdhqsdhqrnQarnQarnQarnQarncZqp8Fqp8Fqp8Fqp8Fqp7HaabDaabDaabDaabDaaax2Gqx2Gqx2Gqx2Gqx2GuKrncZqp8Fqp8Fqp8Fqp+H7aqex2mmw2mmw2mmw2mn4vtppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaK12GlqrnYbWaqehtdppaBmnObIWIfmAcsQbNQAAAABJRU5ErkJggg=="),pa=o.b.p.withConfig({displayName:"styles__FooterText",componentId:"sc-17iy1i5-12"})(["margin-left:10px;font-size:12px;"]),na=function(a){var e,t=a.isValid,p=a.fields,m=a.back,i=void 0===m||m,r=a.stage,o=Object(n.useContext)(U),s=o.state.accepted,l=o.dispatch,c=!(t&&(e=p,e.every((function(a){return""!==a}))))||!s;return Object(z.jsxs)(P,{children:[Object(z.jsxs)($,{children:[Object(z.jsx)("svg",{fill:"grey",width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z"})}),Object(z.jsx)(pa,{children:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."})]}),Object(z.jsxs)(aa,{children:[Object(z.jsxs)(ea,{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("rect",{width:"22",height:"22",rx:"3",fill:"#EF4123"}),Object(z.jsx)("path",{d:"M5.13846 11.021C5.04615 10.9297 5 10.7928 5 10.7015C5 10.6102 5.04615 10.4732 5.13846 10.3819L5.78462 9.74291C5.96923 9.56033 6.24615 9.56033 6.43077 9.74291L9.01538 12.4816C9.10769 12.5729 9.24615 12.5729 9.33846 12.4816L15.5692 6.13694C15.7538 5.95435 16.0308 5.95435 16.2154 6.13694L16.8615 6.77597C17.0462 6.95855 17.0462 7.23242 16.8615 7.415L9.47692 14.9921C9.38462 15.0834 9.29231 15.1291 9.15385 15.1291C9.01538 15.1291 8.92308 15.0834 8.83077 14.9921L5.13846 11.021Z",fill:"white"})]}),Object(z.jsx)(ta,{checked:s,type:"checkbox",onChange:function(){return l({type:j})}}),Object(z.jsx)(pa,{children:"\u042f \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0435\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0430 \u0432 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u043d\u043e\u0433\u043e\u043d\u043e\u0436\u043a\u0435."})]}),Object(z.jsxs)(J,{children:[i&&Object(z.jsx)(Q,{onClick:function(){return l(_(r))},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"}),Object(z.jsx)(q,{disabled:c,type:"submit",children:1===r?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]})},ma=function(){var a=Object(n.useContext)(U),e=a.state,t=a.dispatch,p=e.age,m=e.username,i=e.surname,r=e.nickname;return Object(z.jsx)(d.c,{initialValues:{age:"",username:"",surname:"",nickname:""},onSubmit:function(){return t(_(1))},children:function(a){var e=a.errors,t=a.touched,n=a.isValid;return Object(z.jsxs)(d.b,{children:[Object(z.jsx)(B,{errors:e,touched:t,name:f,validate:function(){return(a=p)?isNaN(a)?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e":a<0?"\u0422\u044b \u0435\u0449\u0435 \u043d\u0435 \u0440\u043e\u0434\u0438\u043b\u0441\u044f":a>120?"So funny...":"":"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";var a},label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(z.jsx)(B,{errors:e,touched:t,name:g,validate:function(){return G(m)},label:"\u0418\u043c\u044f"}),Object(z.jsx)(B,{errors:e,touched:t,name:W,validate:function(){return G(i)},label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(z.jsx)(B,{errors:e,touched:t,name:N,validate:function(){return G(r)},label:"Nickname"}),Object(z.jsx)(na,{fields:[p,m,i,r],isValid:n,back:!1})]})}})},ia=function(){var a=Object(n.useContext)(U),e=a.state,t=a.dispatch,p=e.phone,m=e.email,i=e.country,r=e.city;return Object(z.jsx)(d.c,{initialValues:{phone:"",email:"",country:"",city:""},onSubmit:function(){return t(_(2))},children:function(a){var e=a.errors,t=a.touched,n=a.isValid;return Object(z.jsxs)(d.b,{children:[Object(z.jsx)(B,{errors:e,touched:t,name:T,validate:function(){return G(p)},label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(z.jsx)(B,{errors:e,touched:t,name:y,validate:function(){return(a=m)?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a)?"":"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail":"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";var a},label:"E-mail"}),Object(z.jsx)(B,{errors:e,touched:t,name:w,validate:function(){return G(i)},label:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(z.jsx)(B,{errors:e,touched:t,name:O,validate:function(){return G(r)},label:"\u0413\u043e\u0440\u043e\u0434"}),Object(z.jsx)(na,{fields:[p,m,i,r],isValid:n,stage:0})]})}})},ra=function(){var a=Object(n.useContext)(U),e=a.state,t=a.dispatch,p=e.film,m=e.weather,i=e.group,r=e.color;return Object(z.jsx)(d.c,{initialValues:{film:"",weather:"",group:"",color:""},onSubmit:function(){return t({type:Z})},children:function(a){var e=a.errors,t=a.touched,n=a.isValid;return Object(z.jsxs)(d.b,{children:[Object(z.jsx)(B,{errors:e,touched:t,name:V,validate:function(){return G(p)},label:"\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u0444\u0438\u043b\u044c\u043c"}),Object(z.jsx)(B,{errors:e,touched:t,name:M,validate:function(){return G(m)},label:"\u041b\u044e\u0431\u0438\u043c\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"}),Object(z.jsx)(B,{errors:e,touched:t,name:C,validate:function(){return G(i)},label:"\u041b\u044e\u0431\u0438\u043c\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430"}),Object(z.jsx)(B,{errors:e,touched:t,name:v,validate:function(){return G(r)},label:"\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u0446\u0432\u0435\u0442"}),Object(z.jsx)(na,{fields:[p,m,i,r],isValid:n,stage:1})]})}})},oa=function(){var a=Object(n.useContext)(U).state.stage;return Object(z.jsx)(l,{children:Object(z.jsxs)(I,{children:[Object(z.jsxs)(c,{width:"67%",children:[Object(z.jsxs)(R,{children:[Object(z.jsx)(X,{state:a>=0,children:"\u0428\u0430\u0433 1."}),Object(z.jsx)(X,{state:a>=1,children:"\u0428\u0430\u0433 2."}),Object(z.jsx)(X,{state:a>=2,children:"\u0428\u0430\u0433 3."})]}),0===a&&Object(z.jsx)(ma,{}),1===a&&Object(z.jsx)(ia,{}),2===a&&Object(z.jsx)(ra,{})]}),Object(z.jsxs)(H,{children:[Object(z.jsx)(D,{children:Object(z.jsx)(c,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi deleniti dignissimos eveniet quis veritatis!"})}),Object(z.jsx)(D,{children:Object(z.jsx)(c,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid atque dolore et eveniet molestiae nulla obcaecati odit quaerat ratione, rerum similique sunt velit, veritatis."})})]})]})})},sa=o.b.header.withConfig({displayName:"styles__HeaderContainer",componentId:"uwjpbh-0"})(["margin-bottom:50px;border-bottom:1px solid #F4F4F4;height:75px;display:flex;align-items:center;"]),la=o.b.h3.withConfig({displayName:"styles__HeaderTitle",componentId:"uwjpbh-1"})(["font-size:20px;font-weight:600;line-height:1.2;flex-grow:1;padding-left:50px;"]),ca=o.b.div.withConfig({displayName:"styles__HeaderItem",componentId:"uwjpbh-2"})(["height:100%;display:flex;justify-content:center;align-items:center;width:220px;border-left:"," solid #F4F4F4;"],(function(a){return a.border?"1px":"0"})),qa=o.b.svg.withConfig({displayName:"styles__Icon",componentId:"uwjpbh-3"})(["margin-right:10px;"]),da=o.b.div.withConfig({displayName:"styles__HeaderLogo",componentId:"uwjpbh-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background:#EF4123;width:100%;height:100%;font-size:25px;color:#fff;font-weight:600;span{font-size:10px;letter-spacing:5px;font-weight:300;margin-bottom:-8px;}"]),ua=function(){return Object(z.jsxs)(sa,{children:[Object(z.jsx)(ca,{children:Object(z.jsxs)(da,{children:[Object(z.jsx)("span",{children:"\u043e\u0442\u043c\u043e\u0435\u043c \u0432\u0441\u0435 \u0434\u0435\u043d\u044c\u0433\u0438"}),"\u0413\u041e\u0421\u041c\u041e\u0421\u0413\u0410\u0420\u0410\u041d\u0422"]})}),Object(z.jsx)(la,{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \xab\u0414\u0436\u0430\u043a\u043e\u043c\u0431\u043e \u0417\u0430\u0431\u043e\u0442\u0430\xbb"}),Object(z.jsxs)(ca,{border:!0,children:[Object(z.jsx)(qa,{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(z.jsx)("path",{d:"M0 21.5C0 19.3783 0.842855 17.3434 2.34315 15.8431C3.84344 14.3429 5.87827 13.5 8 13.5C10.1217 13.5 12.1566 14.3429 13.6569 15.8431C15.1571 17.3434 16 19.3783 16 21.5H14C14 19.9087 13.3679 18.3826 12.2426 17.2574C11.1174 16.1321 9.5913 15.5 8 15.5C6.4087 15.5 4.88258 16.1321 3.75736 17.2574C2.63214 18.3826 2 19.9087 2 21.5H0ZM8 12.5C4.685 12.5 2 9.815 2 6.5C2 3.185 4.685 0.5 8 0.5C11.315 0.5 14 3.185 14 6.5C14 9.815 11.315 12.5 8 12.5ZM8 10.5C10.21 10.5 12 8.71 12 6.5C12 4.29 10.21 2.5 8 2.5C5.79 2.5 4 4.29 4 6.5C4 8.71 5.79 10.5 8 10.5Z",fill:"#696969"})}),"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"]}),Object(z.jsxs)(ca,{border:!0,children:[Object(z.jsxs)(qa,{width:"25",height:"17",viewBox:"0 0 25 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("path",{d:"M25 0H0V8.5H25V0Z",fill:"white"}),Object(z.jsx)("path",{d:"M25 8.5H0V17H25V8.5Z",fill:"#D52B1E"}),Object(z.jsx)("path",{d:"M25 5.66669H0V11.3334H25V5.66669Z",fill:"#0039A6"}),Object(z.jsx)("rect",{x:"0.25",y:"0.25",width:"24.5",height:"16.5",stroke:"#E9E9E9",strokeWidth:"0.5"})]}),"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]})]})},ba=function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(s,{}),Object(z.jsx)(ua,{}),Object(z.jsx)(A,{children:Object(z.jsx)(oa,{})})]})};i.a.render(Object(z.jsx)(ba,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2ec1acaa.chunk.js.map