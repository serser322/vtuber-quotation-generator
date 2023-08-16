import{c as S}from"./_commonjsHelpers-28e086c5.js";import{_ as q,y as z,X as H,r as X,Y as V,o as j,a as P,d as E,j as w,b as m,u as b,K as W,k as F,p as G,m as Y}from"./index-58b5d8c4.js";import{u as $}from"./quotationData-1b424f8e.js";import{B as J,b as Q,a as O}from"./BaseButton-fddb7bcb.js";var T={},K={get exports(){return T},set exports(e){T=e}};(function(e,a){(function(t,i){i()})(S,function(){function t(o,n){return typeof n>"u"?n={autoBom:!1}:typeof n!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function i(o,n,d){var r=new XMLHttpRequest;r.open("GET",o),r.responseType="blob",r.onload=function(){u(r.response,n,d)},r.onerror=function(){console.error("could not download file")},r.send()}function c(o){var n=new XMLHttpRequest;n.open("HEAD",o,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function l(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(n)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof S=="object"&&S.global===S?S:void 0,f=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(o,n,d){var r=s.URL||s.webkitURL,h=document.createElement("a");n=n||o.name||"download",h.download=n,h.rel="noopener",typeof o=="string"?(h.href=o,h.origin===location.origin?l(h):c(h.href)?i(o,n,d):l(h,h.target="_blank")):(h.href=r.createObjectURL(o),setTimeout(function(){r.revokeObjectURL(h.href)},4e4),setTimeout(function(){l(h)},0))}:"msSaveOrOpenBlob"in navigator?function(o,n,d){if(n=n||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(t(o,d),n);else if(c(o))i(o,n,d);else{var r=document.createElement("a");r.href=o,r.target="_blank",setTimeout(function(){l(r)})}}:function(o,n,d,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof o=="string")return i(o,n,d);var h=o.type==="application/octet-stream",A=/constructor/i.test(s.HTMLElement)||s.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||h&&A||f)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var I=g.result;I=_?I:I.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=I:location=I,r=null},g.readAsDataURL(o)}else{var C=s.URL||s.webkitURL,y=C.createObjectURL(o);r?r.location=y:location.href=y,r=null,setTimeout(function(){C.revokeObjectURL(y)},4e4)}});s.saveAs=u.saveAs=u,e.exports=u})})(K);function N(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function M(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function R(e,a,t){return a&&M(e.prototype,a),t&&M(e,t),e}function x(e){return+e.replace(/px/,"")}function Z(e){var a=window.devicePixelRatio,t=getComputedStyle(e),i=x(t.getPropertyValue("width")),c=x(t.getPropertyValue("height"));e.setAttribute("width",(i*a).toString()),e.setAttribute("height",(c*a).toString())}function p(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=Math.random()*(a-e)+e;return Math.floor(i*Math.pow(10,t))/Math.pow(10,t)}function L(e){return e[p(0,e.length)]}var ee=.00125,te=5e-4,ie=9e-4,ne=1e-5,oe=6,ae=80,se=.9,re=1.7,ce=.2,le=.6,ue=.03,de=.07,B=15,D=82,fe=150,he=100,me=250,pe=40,ve=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function k(e){var a=1920;return Math.log(e)/Math.log(a)}var U=function(){function e(a){N(this,e);var t=a.initialPosition,i=a.direction,c=a.confettiRadius,l=a.confettiColors,s=a.emojis,f=a.emojiSize,u=a.canvasWidth,o=p(se,re,3),n=o*k(u);this.confettiSpeed={x:n,y:n},this.finalConfettiSpeedX=p(ce,le,3),this.rotationSpeed=s.length?.01:p(ue,de,3)*k(u),this.dragForceCoefficient=p(te,ie,6),this.radius={x:c,y:c},this.initialRadius=c,this.rotationAngle=i==="left"?p(0,.2,3):p(-.2,0,3),this.emojiSize=f,this.emojiRotationAngle=p(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=i==="left"?p(D,B)*Math.PI/180:p(-B,-D)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var r=p(-fe,0),h={x:t.x+(i==="left"?-r:r)*this.absCos,y:t.y-r*this.absSin};this.currentPosition=Object.assign({},h),this.initialPosition=Object.assign({},h),this.color=s.length?null:L(l),this.emoji=s.length?L(s):null,this.createdAt=new Date().getTime(),this.direction=i}return R(e,[{key:"draw",value:function(t){var i=this.currentPosition,c=this.radius,l=this.color,s=this.emoji,f=this.rotationAngle,u=this.emojiRotationAngle,o=this.emojiSize,n=window.devicePixelRatio;l?(t.fillStyle=l,t.beginPath(),t.ellipse(i.x*n,i.y*n,c.x*n,c.y*n,f,0,2*Math.PI),t.fill()):s&&(t.font="".concat(o,"px serif"),t.save(),t.translate(n*i.x,n*i.y),t.rotate(u),t.textAlign="center",t.fillText(s,0,0),t.restore())}},{key:"updatePosition",value:function(t,i){var c=this.confettiSpeed,l=this.dragForceCoefficient,s=this.finalConfettiSpeedX,f=this.radiusYUpdateDirection,u=this.rotationSpeed,o=this.createdAt,n=this.direction,d=i-o;if(c.x>s&&(this.confettiSpeed.x-=l*t),this.currentPosition.x+=c.x*(n==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-c.y*this.absSin*d+ee*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:ne*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}f==="down"?(this.radius.y-=t*u,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*u,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+he}}]),e}();function _e(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function ge(e){var a=e.confettiRadius,t=a===void 0?oe:a,i=e.confettiNumber,c=i===void 0?e.confettiesNumber||(e.emojis?pe:me):i,l=e.confettiColors,s=l===void 0?ve:l,f=e.emojis,u=f===void 0?e.emojies||[]:f,o=e.emojiSize,n=o===void 0?ae:o;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:c,confettiColors:s,emojis:u,emojiSize:n}}var ye=function(){function e(a){var t=this;N(this,e),this.canvasContext=a,this.shapes=[],this.promise=new Promise(function(i){return t.resolvePromise=i})}return R(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,i,c){var l=this,s=t.timeDelta,f=t.currentTime;this.shapes=this.shapes.filter(function(u){return u.updatePosition(s,f),u.draw(l.canvasContext),c?u.getIsVisibleOnCanvas(i):!0})}}]),e}(),Ie=function(){function e(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};N(this,e),this.activeConfettiBatches=[],this.canvas=a.canvas||_e(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return R(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,Z(this.canvas);var t=new Date().getTime(),i=t-this.lastUpdated,c=this.canvas.offsetHeight,l=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(s){return s.processShapes({timeDelta:i,currentTime:t},c,l),l?!s.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=ge(t),c=i.confettiRadius,l=i.confettiNumber,s=i.confettiColors,f=i.emojis,u=i.emojiSize,o=this.canvas.getBoundingClientRect(),n=o.width,d=o.height,r=d*5/7,h={x:0,y:r},A={x:n,y:r},_=new ye(this.canvasContext),g=0;g<l/2;g++){var C=new U({initialPosition:h,direction:"right",confettiRadius:c,confettiColors:s,confettiNumber:l,emojis:f,emojiSize:u,canvasWidth:n}),y=new U({initialPosition:A,direction:"left",confettiRadius:c,confettiColors:s,confettiNumber:l,emojis:f,emojiSize:u,canvasWidth:n});_.addShapes(C,y)}return this.activeConfettiBatches.push(_),this.queueAnimationFrameIfNeeded(),_.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}}]),e}();const v=e=>(G("data-v-24a40fa1"),e=e(),Y(),e),Se={class:"final"},Ce=v(()=>m("div",null,[m("h1",null," 🎉 製作完成！ ")],-1)),Ee=v(()=>m("h2",{for:""}," 名言圖完成&下載： ",-1)),Ae={class:"final__image"},we=["src"],be={key:0,class:"final__short__url"},Te=v(()=>m("label",{for:"shortUrl"}," 名言出處短網址： ",-1)),Ne=["value"],Re=v(()=>m("span",{class:"material-symbols-outlined"}," content_copy ",-1)),je=v(()=>m("span",null,"複製",-1)),Pe=[Re,je],Fe={class:"btn__group"},Oe=v(()=>m("span",{class:"material-symbols-outlined"}," download ",-1)),Me=v(()=>m("span",{class:"material-symbols-outlined"}," replay ",-1)),xe={__name:"FinalPage",setup(e){const a=new Ie;z(()=>{a.addConfetti()});const t=$(),{shortUrl:i,finalImageB64:c}=H(t),l=X(null),s=()=>{navigator.clipboard.writeText(l.value.value)},f=V(),u=()=>{f.push({name:"QuotationInput"})},o=()=>{T.saveAs(c.value,"灰妲名言圖.png")};return(n,d)=>(j(),P("main",null,[E(Q,{page:"finalPage"}),E(J,null,{default:w(()=>[m("div",Se,[Ce,m("div",null,[Ee,m("div",Ae,[m("img",{ref:"finalImage",src:b(c),alt:""},null,8,we)]),b(i)?(j(),P("div",be,[Te,m("input",{ref_key:"shortUrlInput",ref:l,type:"text",value:b(i),name:"shortUrl",readonly:""},null,8,Ne),m("button",{type:"button",onClick:s},Pe)])):W("",!0)])]),m("div",Fe,[E(O,{onClick:o},{default:w(()=>[Oe,F(" 下載 ")]),_:1}),E(O,{onClick:u},{default:w(()=>[Me,F(" 重新製作 ")]),_:1})])]),_:1})]))}},Ue=q(xe,[["__scopeId","data-v-24a40fa1"]]);export{Ue as default};
