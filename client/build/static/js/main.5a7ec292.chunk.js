(this.webpackJsonpcollage=this.webpackJsonpcollage||[]).push([[0],{33:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},41:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(3),u=a.n(o),s=a(5),i=a(2),m=r.a.createContext(),b=function(e){var t=Object(n.useState)(3),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(3),b=Object(i.a)(o,2),d=b[0],p=b[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),v=g[0],h=g[1],E=Object(n.useState)("#000"),j=Object(i.a)(E,2),C=j[0],O=j[1],x=Object(n.useState)("#fff"),k=Object(i.a)(x,2),y=k[0],S=k[1],w=Object(n.useState)("#20BF55"),R=Object(i.a)(w,2),M=R[0],N=R[1],T=Object(n.useState)("#01BAEF"),B=Object(i.a)(T,2),F=B[0],G=B[1],q=Object(n.useState)(1),A=Object(i.a)(q,2),I=A[0],V=A[1],D=Object(n.useState)("Courier"),_=Object(i.a)(D,2),H=_[0],L=_[1],z=Object(n.useState)(!1),J=Object(i.a)(z,2),$=J[0],K=J[1],P=Object(n.useState)([]),X=Object(i.a)(P,2),Q=X[0],U=X[1],W=Object(n.useState)(0),Y=Object(i.a)(W,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(!1),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)("music"),le=Object(i.a)(ce,2),oe=le[0],ue=le[1],se=Object(n.useState)("square"),ie=Object(i.a)(se,2),me=ie[0],be=ie[1],de=Object(n.useState)("regular"),pe=Object(i.a)(de,2),fe=pe[0],ge=pe[1],ve=Object(n.useState)(0),he=Object(i.a)(ve,2),Ee=he[0],je=he[1],Ce=Object(n.useState)(20),Oe=Object(i.a)(Ce,2),xe=Oe[0],ke=Oe[1],ye=Object(n.useState)(""),Se=Object(i.a)(ye,2),we=Se[0],Re=Se[1],Me=Object(n.useState)(!1),Ne=Object(i.a)(Me,2),Te=Ne[0],Be=Ne[1],Fe=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t*a,e.next=3,fetch("http://localhost:5000/api/random/music?items=".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,U(c);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/api/random/anime");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,U(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t*a,console.log(n),e.next=5,fetch("http://localhost:5000/api/random/movies?items=".concat(n));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c),U(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t*a,e.next=4,fetch("http://localhost:5000/api/random/tv?q=".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,U(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t*a,e.next=4,fetch("http://localhost:5000/api/random/games?items=".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,U(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(m.Provider,{value:{getId:function(e){Re(e),Be(!0)},selectedId:we,displaySearch:Te,numRows:c,numCols:d,setNumCols:p,setNumRows:l,color:C,firstGradientColor:M,secondGradientColor:F,fontColor:y,setColor:O,setFontColor:S,setFirstGradientColor:N,setSecondGradientColor:G,boxMargin:I,setBoxMargin:V,displayTitles:v,setDisplayTitles:h,fontFamily:H,setFontFamily:L,sort:$,setSort:K,randomList:Q,generateRandomCollage:Fe,generateRandomAnimeCollage:Ge,generateRandomMovieCollage:qe,generateRandomTvCollage:Ae,generateRandomGameCollage:Ie,shuffled:Z,setShuffled:ee,clear:ne,setClear:re,closeSearch:function(){Be(!1)},searchMode:oe,setSearchMode:ue,boxType:me,setBoxType:be,backgroundMode:fe,setBackgroundMode:ge,borderRadius:Ee,setBorderRadius:je,gradientAngle:xe,setGradientAngle:ke}},e.children)},d=(a(39),function(){var e,t=Object(n.useContext)(m),a=t.numRows,c=t.numCols,l=t.setNumRows,o=t.setNumCols,u=t.color,s=t.firstGradientColor,i=t.secondGradientColor,b=t.setFirstGradientColor,d=t.setSecondGradientColor,p=t.fontColor,f=t.setColor,g=t.setFontColor,v=t.boxMargin,h=t.setBoxMargin,E=t.setDisplayTitles,j=t.displayTitle,C=t.fontFamily,O=t.setFontFamily,x=t.sort,k=t.setSort,y=t.generateRandomCollage,S=t.generateRandomAnimeCollage,w=t.generateRandomMovieCollage,R=t.generateRandomTvCollage,M=t.generateRandomGameCollage,N=t.setShuffled,T=t.setClear,B=t.searchMode,F=t.setSearchMode,G=t.boxType,q=t.setBoxType,A=t.backgroundMode,I=t.setBackgroundMode,V=t.borderRadius,D=t.setBorderRadius,_=t.gradientAngle,H=t.setGradientAngle;switch(B){case"music":e=y;break;case"movies":e=w;break;case"anime":e=S;break;case"tv":e=R;break;case"videogames":e=M}return r.a.createElement("div",{className:"options-container"},r.a.createElement("div",{className:"options"},r.a.createElement("label",null,"Rows:",r.a.createElement("input",{type:"range",min:"1",max:"10",step:"1",name:"numRows",value:a,onChange:function(e){return l(1*e.target.value)}})," ",a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Columns:",r.a.createElement("input",{type:"range",min:"1",max:"10",step:"1",value:c,onChange:function(e){return o(1*e.target.value)}}),c),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Margin (pixels):",r.a.createElement("input",{type:"range",name:"boxMargin",min:"0",max:"15",step:"1",value:v,onChange:function(e){return h(Number(e.target.value))}}),v),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Border Radius:",r.a.createElement("input",{type:"range",name:"borderRadius",min:"0",max:"50",step:"1",value:V,onChange:function(e){return D(1*e.target.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"boxType",value:"square",checked:"square"===G,onChange:function(e){return q(e.target.value)}}),"Square"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"boxType",value:"rectangle",checked:"rectangle"===G,onChange:function(e){return q(e.target.value)}}),"Rectangle"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{name:"searchMode",onChange:function(e){return F(e.target.value)}},r.a.createElement("option",{value:"music"},"Music"),r.a.createElement("option",{value:"movies"},"Movies"),r.a.createElement("option",{value:"tv"},"TV Shows"),r.a.createElement("option",{value:"anime"},"Anime"),r.a.createElement("option",{value:"videogames"},"Video Games")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"backgroundMode",value:"regular",checked:"regular"===A,onChange:function(e){return I(e.target.value)}}),"Regular"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"backgroundMode",value:"gradient",checked:"gradient"===A,onChange:function(e){return I(e.target.value)}}),"Gradient"),r.a.createElement("br",null),r.a.createElement("br",null),"regular"===A?r.a.createElement("label",null,r.a.createElement("span",null,"Background Color: "),r.a.createElement("input",{type:"text",name:"color",value:u,onChange:function(e){return f(e.target.value)}})):r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Linear Gradient: "),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"colorOne",value:s,onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"text",name:"colorTwo",value:i,onChange:function(e){return d(e.target.value)}}))),r.a.createElement("label",null,"Angle:",r.a.createElement("input",{type:"range",min:"0",max:"100",value:_,onChange:function(e){return H(1*e.target.value)}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("span",null,"Font: "),r.a.createElement("select",{value:C,onChange:function(e){return O(e.target.value)}},r.a.createElement("option",{value:"Courier"},"Courier"),r.a.createElement("option",{value:"Helvetica"},"Helvetica"),r.a.createElement("option",{value:"Verdana"},"Verdana"),r.a.createElement("option",{value:"Roboto"},"Roboto"))),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("span",null,"Font Color: "),r.a.createElement("input",{type:"text",name:"fontColor",value:p,onChange:function(e){return g(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",value:x,checked:x,onChange:function(){return k(!0)}}),"Drag and Sort"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",value:x,checked:!x,onChange:function(){return k(!1)}}),"Drag and Swap"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"displayTitle",value:j,checked:j,onChange:function(){return E((function(e){return!e}))}}),"Show Titles"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e(a,c)},className:"menu-button"},"Generate Random"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return N((function(e){return e+1}))},className:"menu-button"},"Shuffle Images"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return T((function(e){return!e}))},className:"menu-button"},"Clear Collage")))}),p=a(7),f=a(20),g=a.n(f),v=a(62),h=a(63),E="box",j=(a(41),function(e){var t,a=e.id,c=e.index,l=e.moveBox,o=e.image,u=e.boxMargin,s=e.handleClick,m=e.numCols,b=e.boxType,d=e.borderRadius,f=Object(n.useRef)(null),g=Object(v.a)({accept:E,drop:function(e){if(f.current){var t=e.index,a=c;t!==a&&(l(t,a),e.index=a)}}}),j=Object(i.a)(g,2)[1],C=Object(h.a)({item:{type:E,id:a,index:c}});(0,Object(i.a)(C,2)[1])(j(f)),m<=5?t=160:6===m?t=140:7===m?t=130:8===m?t=110:9===m?t=100:10===m&&(t=90);var O={height:"square"===b?t+"px":t/.7+"px",width:t+"px",backgroundColor:"lightgrey",margin:u,border:"none"};return r.a.createElement("div",{className:"box",style:Object(p.a)({},O,{backgroundImage:"url(".concat(o,")"),backgroundSize:"".concat(t,"px ").concat("square"===b?t:t/.7,"px"),borderRadius:"".concat(d,"%")}),ref:f,onClick:function(){return s(a)}})}),C=a(29),O=a.n(C),x=(a(54),function(e){var t=e.image,a=e.artist,c=e.name,l=e.setBoxes,o=Object(n.useContext)(m),u=o.selectedId,s=o.closeSearch,i=o.searchMode;return r.a.createElement("div",null,r.a.createElement("img",{className:"search-cover",src:t,alt:"".concat(a," - ").concat(c),onClick:function(){l((function(e){return e.map((function(e){var n="music"===i?"".concat(a," - ").concat(c):c;return e.id===u?Object(p.a)({},e,{image:t,data:n}):e}))})),s()}}))}),k=a(9);function y(e){return e.split(" ").join("+")}a(55);var S=function(e){var t,a=e.setBoxes,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],b=l[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),f=p[0],g=p[1],v=Object(n.useContext)(m),h=v.displaySearch,E=v.closeSearch,j=v.searchMode;switch(Object(n.useEffect)((function(){h||(g([]),b(""))}),[h]),j){case"music":t="http://localhost:5000/api/music?query=".concat(y(o));break;case"movies":t="http://localhost:5000/api/movies?query=".concat(y(o));break;case"tv":t="http://localhost:5000/api/tv?query=".concat(y(o));break;case"anime":t="http://localhost:5000/api/anime?query=".concat(y(o));break;case"videogames":t="http://localhost:5000/api/games?query=".concat(y(o))}var C,k,S=function(){var e=Object(s.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("404: Media not found");case 6:return e.next=8,a.json();case 8:n=e.sent,g(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),w=f.map((function(e,t){var n,c,l;switch(j){case"music":n=e.image[2]["#text"],c=e.artist,l=e.name;break;case"movies":n="https://image.tmdb.org/t/p/w300".concat(e.poster_path),l=e.title;break;case"tv":n="https://image.tmdb.org/t/p/w300".concat(e.poster_path),l=e.name;break;case"anime":n=e.image_url,l=e.title;break;case"videogames":n=e.background_image,l=e.name}return r.a.createElement(x,{image:n,name:l,artist:c,key:t+l,setBoxes:a})}));switch(j){case"music":C="an album",k="Artist/album name";break;case"movies":C="a movie",k="Movie title";break;case"videogames":C="a video game",k="Video game title";break;case"tv":C="a TV show",k="TV show title";break;case"anime":C="an anime",k="Anime title"}return r.a.createElement(O.a,{isOpen:h,className:"modal",onRequestClose:E,ariaHideApp:!1},r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"search-header"},r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"search icon"},"\ud83d\udd0d")," ","Search for ",C),r.a.createElement("button",{className:"close",onClick:E},"X")),r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{type:"search",name:"search",value:o,placeholder:k,onKeyDown:function(e){13===e.keyCode&&S()},onChange:function(e){return b(e.target.value)}}),r.a.createElement("div",{className:"search-results"},w)),r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{onClick:S},"Search"))))},w=function(e){for(var t=e.titles,a=e.numRows,n=e.numCols,c=e.fontFamily,l=e.fontColor,o=e.width,u=[],s=0,i=n,m=0;m<a;m++)u.push([].concat(Object(k.a)(t.slice(s,i)),[r.a.createElement("br",null)])),s+=n,i+=n;var b=u.flat().map((function(e,t){return e!==r.a.createElement("br",null)&&(e=r.a.createElement("li",{key:t},e)),e}));return r.a.createElement("ul",{style:{listStyle:"none",fontFamily:c,color:l,width:"100%",overflow:"auto",fontSize:"".concat(800/o,"rem"),whiteSpace:"nowrap",padding:"0 4%"}},b)},R=(a(56),function(){var e=Object(n.useContext)(m),t=e.getId,a=e.numRows,c=e.numCols,l=e.color,o=e.firstGradientColor,u=e.secondGradientColor,s=e.fontColor,b=e.boxMargin,d=e.displayTitles,f=e.fontFamily,v=e.sort,h=e.randomList,E=e.shuffled,C=e.clear,O=e.searchMode,x=e.backgroundMode,y=e.boxType,R=e.borderRadius,M=e.gradientAngle,N=Object(n.useState)(function(e,t){for(var a=e*t,n=[],r=0;r<a;r++)n.push({id:r,text:r+1,image:"",data:""});return n}(a,c)),T=Object(i.a)(N,2),B=T[0],F=T[1],G=Object(n.useState)([]),q=Object(i.a)(G,2),A=q[0],I=q[1],V=Object(n.useState)(null),D=Object(i.a)(V,2),_=D[0],H=D[1],L=Object(n.useRef)(null),z=Object(n.useCallback)((function(e,t){var a=B[e],n=B[t];F(v?function(n){return g()(n,{$splice:[[e,1],[t,0,a]]})}:function(r){return g()(r,{$splice:[[e,1,n],[t,1,a]]})})}),[B,v]),J=Object(n.useRef)(!0);Object(n.useEffect)((function(){J.current?J.current=!1:F((function(e){return function(e,t,a){var n=a.length-1,r=e*t;if(r>a.length){for(var c=[],l=n+1;l<r;l++)c.push({id:l,text:l+1,image:"",data:""});return[].concat(Object(k.a)(a),c)}if(r<a.length)return a.slice(0,r)}(a,c,e)}))}),[a,c]),Object(n.useEffect)((function(){F((function(e){var t=h.map((function(e){return e.image})),a=h.map((function(e){return e.data}));return e.map((function(e,n){return Object(p.a)({},e,{image:t[n],data:a[n]})}))}))}),[h]),Object(n.useEffect)((function(){var e=B.map((function(e){return e.data}));I(e)}),[B]);var $=Object(n.useRef)(!0);Object(n.useEffect)((function(){$.current?$.current=!1:F((function(e){return function(e){for(var t=[].concat(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t}(e)}))}),[E]),Object(n.useEffect)((function(){F((function(e){return e.map((function(e){return Object(p.a)({},e,{image:"",data:""})}))}))}),[C]),Object(n.useEffect)((function(){d&&H(L.current.getBoundingClientRect().width)}),[c,d]);var K=function(e,t,a){return function(e,t,a){for(var n=[],r=0,c=a,l=0;l<t;l++)n.push(e.slice(r,c)),r+=a,c+=a;return n}(e,t,a).map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))}(B.map((function(e,a){return r.a.createElement(j,{index:a,key:e.id,id:e.id,text:e.text,image:e.image,moveBox:z,handleClick:t,boxMargin:b,numCols:c,boxType:y,borderRadius:R})})),a,c),P="regular"===x?{backgroundColor:l}:{background:"linear-gradient(".concat(M,"deg, ").concat(o,", ").concat(u,")")};return r.a.createElement("div",{className:"container-wrapper"},r.a.createElement(S,{setBoxes:F}),r.a.createElement("div",{className:"collage"},r.a.createElement("table",{ref:L,style:P},r.a.createElement("tbody",null,K),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null,d?r.a.createElement(w,{titles:A,numCols:c,numRows:a,fontFamily:f,fontColor:s,width:_,searchMode:O}):null))))))}),M=a(61),N=a(30);a(57);var T=function(){return r.a.createElement(M.a,{backend:N.a},r.a.createElement("div",{className:"app-container"},r.a.createElement(d,null),r.a.createElement(R,null)))};a(58);l.a.render(r.a.createElement(b,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5a7ec292.chunk.js.map