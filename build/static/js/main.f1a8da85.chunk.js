(this.webpackJsonpcollage=this.webpackJsonpcollage||[]).push([[0],{33:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},41:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=a(3),u=a.n(l),i=a(5),s=a(2),m=a(9);function d(e){return e.split(" ").join("+")}function b(e,t){for(;e.length<t&&e.length>0;){var a=t-e.length;a>20?e.push.apply(e,Object(m.a)(e)):e.push.apply(e,Object(m.a)(e.slice(0,a)))}return e}var p=function(){var e="abcdefghijklmnopqrstuvwxyz".split("");return e[Math.floor(Math.random()*e.length)]},f=function(){var e=["pop","rap","rock","disco","electronic","80s","90s","2000s","2010s","2010","2011","2012","2013","2014","2015","2016","2017","2019","2020","2021","2022"];return e[Math.floor(Math.random()*e.length)]},g=function(){var e=Object(i.a)(u.a.mark((function e(t,a,n,r){var c,o,l,i,s,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://ws.audioscrobbler.com/2.0/?method=album.search"+"&album=".concat(t,"&api_key=").concat(a,"&format=json&limit=").concat(n),o="http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums"+"&tag=".concat(t,"&api_key=").concat(a,"&format=json&limit=").concat(n),e.next=4,fetch(r?c:o);case 4:return l=e.sent,e.next=7,l.json();case 7:return i=e.sent,s=r?i.results.albummatches.album:i.albums.album,m=s.map((function(e){return{image:e.image[2]["#text"],data:"".concat(r?e.artist:e.artist.name," - ").concat(e.name)}})),e.abrupt("return",m);case 11:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),h=function(){var e=["movie","tv"];return e[Math.floor(Math.random()*e.length)]},v=function(){var e=[1,2,3,4,6,7,10,11,14,16,17,18,19,20,21,23,27,29,30,31,32,36,37,38,39,40,41,42];return e[Math.floor(Math.random()*e.length)]},E=r.a.createContext(),j=function(e){var t=Object(n.useState)(3),a=Object(s.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(3),m=Object(s.a)(l,2),d=m[0],j=m[1],C=Object(n.useState)(!1),k=Object(s.a)(C,2),y=k[0],O=k[1],x=Object(n.useState)("#000"),w=Object(s.a)(x,2),S=w[0],M=w[1],R=Object(n.useState)("#fff"),_=Object(s.a)(R,2),N=_[0],T=_[1],B=Object(n.useState)("#20BF55"),F=Object(s.a)(B,2),G=F[0],A=F[1],q=Object(n.useState)("#01BAEF"),I=Object(s.a)(q,2),V=I[0],D=I[1],z=Object(n.useState)(1),U=Object(s.a)(z,2),H=U[0],L=U[1],J=Object(n.useState)("Courier"),$=Object(s.a)(J,2),K=$[0],P=$[1],X=Object(n.useState)(!1),Y=Object(s.a)(X,2),Q=Y[0],W=Y[1],Z=Object(n.useState)([]),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(0),re=Object(s.a)(ne,2),ce=re[0],oe=re[1],le=Object(n.useState)(!1),ue=Object(s.a)(le,2),ie=ue[0],se=ue[1],me=Object(n.useState)("music"),de=Object(s.a)(me,2),be=de[0],pe=de[1],fe=Object(n.useState)("square"),ge=Object(s.a)(fe,2),he=ge[0],ve=ge[1],Ee=Object(n.useState)("regular"),je=Object(s.a)(Ee,2),Ce=je[0],ke=je[1],ye=Object(n.useState)(0),Oe=Object(s.a)(ye,2),xe=Oe[0],we=Oe[1],Se=Object(n.useState)(20),Me=Object(s.a)(Se,2),Re=Me[0],_e=Me[1],Ne=Object(n.useState)(""),Te=Object(s.a)(Ne,2),Be=Te[0],Fe=Te[1],Ge=Object(n.useState)(!1),Ae=Object(s.a)(Ge,2),qe=Ae[0],Ie=Ae[1],Ve=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r,c,o,l,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="353ecf3029791095736d771e73d00c33",r=p(),c=f(),o=t*a,l=Math.random(),e.prev=5,!(l<.5)){e.next=12;break}return e.next=9,g(r,n,o,!0);case 9:return i=e.sent,ae(i),e.abrupt("return");case 12:return e.next=14,g(c,n,o,!1);case 14:return s=e.sent,ae(s),e.abrupt("return");case 19:e.prev=19,e.t0=e.catch(5),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t,a){return e.apply(this,arguments)}}(),De=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n,r,c,o,l,i,s,m,d,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(t=[1,2,3,4,5])[Math.floor(Math.random()*t.length)],n=h(),r=v(),c="https://api.jikan.moe/v3/top/anime/".concat(a,"/").concat(n),o="https://api.jikan.moe/v3/genre/anime/".concat(r),l=Math.random(),i=c,l<.5&&(i=o),e.next=12,fetch(i);case 12:return s=e.sent,e.next=15,s.json();case 15:m=e.sent,d=l>=.5?m.top:m.anime,b=d.map((function(e){return{image:e.image_url,data:e.title}})),ae(b),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r,c,o,l,i,s,m,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t*a,"3847be52ece5ae19e0649d8e7cd42eda",r=[1,2,3],c=Array.from(new Array(31),(function(e,t){return t+1990})),o=r[Math.floor(Math.random()*r.length)],l=c[Math.floor(Math.random()*c.length)],i="https://api.themoviedb.org/3/discover/movie?"+"api_key=".concat("3847be52ece5ae19e0649d8e7cd42eda","&language=en-US&sort_by=popularity.desc")+"&include_adult=false&include_video=false&page=".concat(o)+"&primary_release_year=".concat(l),e.next=10,fetch(i);case 10:return s=e.sent,e.next=13,s.json();case 13:m=e.sent,d=m.results.map((function(e){return{image:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),data:e.title}})),n>d.length&&(d=b(d,n)),ae(d),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,a){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r,c,o,l,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t*a,"3847be52ece5ae19e0649d8e7cd42eda",c=(r=[16,35,80,18,9648,53])[Math.floor(Math.random()*r.length)],o="https://api.themoviedb.org/3/discover/tv?api_key=".concat("3847be52ece5ae19e0649d8e7cd42eda")+"&language=en-US&sort_by=popularity.desc&page=1"+"&timezone=America%2FNew_York&with_genres=".concat(c)+"&include_null_first_air_dates=false",e.next=8,fetch(o);case 8:return l=e.sent,e.next=11,l.json();case 11:i=e.sent,s=i.results.map((function(e){return{image:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),data:e.name}})),n>s.length&&(s=b(s,n)),ae(s),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,a){return e.apply(this,arguments)}}(),He=function(){var e=Object(i.a)(u.a.mark((function e(t,a){var n,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=t*a,c=(r=[1,2,3,4])[Math.floor(Math.random()*r.length)],"fa7090501a594b9580667da6ddb07452",o="https://api.rawg.io/api/games?page=".concat(c,"&key=").concat("fa7090501a594b9580667da6ddb07452"),fetch(o).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{image:e.background_image,data:e.name}}));n>t.length&&(t=b(t,n)),ae(t)}))}catch(l){console.log(l)}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(E.Provider,{value:{getId:function(e){Fe(e),Ie(!0)},selectedId:Be,displaySearch:qe,numRows:c,numCols:d,setNumCols:j,setNumRows:o,color:S,firstGradientColor:G,secondGradientColor:V,fontColor:N,setColor:M,setFontColor:T,setFirstGradientColor:A,setSecondGradientColor:D,boxMargin:H,setBoxMargin:L,displayTitles:y,setDisplayTitles:O,fontFamily:K,setFontFamily:P,sort:Q,setSort:W,randomList:te,generateRandomCollage:Ve,generateRandomAnimeCollage:De,generateRandomMovieCollage:ze,generateRandomTvCollage:Ue,generateRandomGameCollage:He,shuffled:ce,setShuffled:oe,clear:ie,setClear:se,closeSearch:function(){Ie(!1)},searchMode:be,setSearchMode:pe,boxType:he,setBoxType:ve,backgroundMode:Ce,setBackgroundMode:ke,borderRadius:xe,setBorderRadius:we,gradientAngle:Re,setGradientAngle:_e}},e.children)},C=(a(39),function(){var e,t=Object(n.useContext)(E),a=t.numRows,c=t.numCols,o=t.setNumRows,l=t.setNumCols,u=t.color,i=t.firstGradientColor,s=t.secondGradientColor,m=t.setFirstGradientColor,d=t.setSecondGradientColor,b=t.fontColor,p=t.setColor,f=t.setFontColor,g=t.boxMargin,h=t.setBoxMargin,v=t.setDisplayTitles,j=t.displayTitle,C=t.fontFamily,k=t.setFontFamily,y=t.sort,O=t.setSort,x=t.generateRandomCollage,w=t.generateRandomAnimeCollage,S=t.generateRandomMovieCollage,M=t.generateRandomTvCollage,R=t.generateRandomGameCollage,_=t.setShuffled,N=t.setClear,T=t.searchMode,B=t.setSearchMode,F=t.boxType,G=t.setBoxType,A=t.backgroundMode,q=t.setBackgroundMode,I=t.borderRadius,V=t.setBorderRadius,D=t.gradientAngle,z=t.setGradientAngle;switch(T){case"music":e=x;break;case"movies":e=S;break;case"anime":e=w;break;case"tv":e=M;break;case"videogames":e=R}return r.a.createElement("div",{className:"options-container"},r.a.createElement("div",{className:"options"},r.a.createElement("label",null,"Rows:",r.a.createElement("input",{type:"range",min:"1",max:"10",step:"1",name:"numRows",value:a,onChange:function(e){return o(1*e.target.value)}})," ",a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Columns:",r.a.createElement("input",{type:"range",min:"1",max:"10",step:"1",value:c,onChange:function(e){return l(1*e.target.value)}}),c),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Margin (pixels):",r.a.createElement("input",{type:"range",name:"boxMargin",min:"0",max:"15",step:"1",value:g,onChange:function(e){return h(Number(e.target.value))}}),g),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Border Radius:",r.a.createElement("input",{type:"range",name:"borderRadius",min:"0",max:"50",step:"1",value:I,onChange:function(e){return V(1*e.target.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"boxType",value:"square",checked:"square"===F,onChange:function(e){return G(e.target.value)}}),"Square"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"boxType",value:"rectangle",checked:"rectangle"===F,onChange:function(e){return G(e.target.value)}}),"Rectangle"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{name:"searchMode",onChange:function(e){return B(e.target.value)}},r.a.createElement("option",{value:"music"},"Music"),r.a.createElement("option",{value:"movies"},"Movies"),r.a.createElement("option",{value:"tv"},"TV Shows"),r.a.createElement("option",{value:"anime"},"Anime"),r.a.createElement("option",{value:"videogames"},"Video Games")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"backgroundMode",value:"regular",checked:"regular"===A,onChange:function(e){return q(e.target.value)}}),"Regular"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"backgroundMode",value:"gradient",checked:"gradient"===A,onChange:function(e){return q(e.target.value)}}),"Gradient"),r.a.createElement("br",null),r.a.createElement("br",null),"regular"===A?r.a.createElement("label",null,r.a.createElement("span",null,"Background Color: "),r.a.createElement("input",{type:"text",name:"color",value:u,onChange:function(e){return p(e.target.value)}})):r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Linear Gradient: "),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"colorOne",value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{type:"text",name:"colorTwo",value:s,onChange:function(e){return d(e.target.value)}}))),r.a.createElement("label",null,"Angle:",r.a.createElement("input",{type:"range",min:"0",max:"100",value:D,onChange:function(e){return z(1*e.target.value)}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("span",null,"Font: "),r.a.createElement("select",{value:C,onChange:function(e){return k(e.target.value)}},r.a.createElement("option",{value:"Courier"},"Courier"),r.a.createElement("option",{value:"Helvetica"},"Helvetica"),r.a.createElement("option",{value:"Verdana"},"Verdana"),r.a.createElement("option",{value:"Roboto"},"Roboto"))),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("span",null,"Font Color: "),r.a.createElement("input",{type:"text",name:"fontColor",value:b,onChange:function(e){return f(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",value:y,checked:y,onChange:function(){return O(!0)}}),"Drag and Sort"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"sort",value:y,checked:!y,onChange:function(){return O(!1)}}),"Drag and Swap"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"displayTitle",value:j,checked:j,onChange:function(){return v((function(e){return!e}))}}),"Show Titles"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e(a,c)},className:"menu-button"},"Generate Random"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return _((function(e){return e+1}))},className:"menu-button"},"Shuffle Images"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return N((function(e){return!e}))},className:"menu-button"},"Clear Collage")))}),k=a(7),y=a(20),O=a.n(y),x=a(62),w=a(63),S="box",M=(a(41),function(e){var t,a=e.id,c=e.index,o=e.moveBox,l=e.image,u=e.boxMargin,i=e.handleClick,m=e.numCols,d=e.boxType,b=e.borderRadius,p=Object(n.useRef)(null),f=Object(x.a)({accept:S,drop:function(e){if(p.current){var t=e.index,a=c;t!==a&&(o(t,a),e.index=a)}}}),g=Object(s.a)(f,2)[1],h=Object(w.a)({item:{type:S,id:a,index:c}});(0,Object(s.a)(h,2)[1])(g(p)),m<=5?t=160:6===m?t=140:7===m?t=130:8===m?t=110:9===m?t=100:10===m&&(t=90);var v={height:"square"===d?t+"px":t/.7+"px",width:t+"px",backgroundColor:"lightgrey",margin:u,border:"none"};return r.a.createElement("div",{className:"box",style:Object(k.a)({},v,{backgroundImage:"url(".concat(l,")"),backgroundSize:"".concat(t,"px ").concat("square"===d?t:t/.7,"px"),borderRadius:"".concat(b,"%")}),ref:p,onClick:function(){return i(a)}})}),R=a(29),_=a.n(R),N=(a(54),function(e){var t=e.image,a=e.artist,c=e.name,o=e.setBoxes,l=Object(n.useContext)(E),u=l.selectedId,i=l.closeSearch,s=l.searchMode;return r.a.createElement("div",null,r.a.createElement("img",{className:"search-cover",src:t,alt:"".concat(a," - ").concat(c),onClick:function(){console.log(a,c),o((function(e){return e.map((function(e){var n="music"===s?"".concat(a," - ").concat(c):c;return e.id===u?Object(k.a)({},e,{image:t,data:n}):e}))})),i()}}))}),T=(a(55),function(e){var t,a,c=e.setBoxes,o=Object(n.useState)(""),l=Object(s.a)(o,2),m=l[0],b=l[1],p=Object(n.useState)([]),f=Object(s.a)(p,2),g=f[0],h=f[1],v=Object(n.useContext)(E),j=v.displaySearch,C=v.closeSearch,k=v.searchMode;switch(Object(n.useEffect)((function(){j||(h([]),b(""))}),[j]),k){case"music":t="353ecf3029791095736d771e73d00c33",a="http://ws.audioscrobbler.com/2.0/?method=album.search&"+"album=".concat(d(m))+"&api_key=".concat(t,"&format=json&limit=20");break;case"movies":a="https://api.themoviedb.org/3/search/movie?"+"api_key=".concat(t="3847be52ece5ae19e0649d8e7cd42eda","&language=en-US&query=").concat(d(m))+"&page=1&include_adult=false";break;case"tv":a="https://api.themoviedb.org/3/search/tv?api_key=".concat(t="3847be52ece5ae19e0649d8e7cd42eda")+"&language=en-US&page=1&query=".concat(d(m))+"&include_adult=false";break;case"anime":a="https://api.jikan.moe/v3/search/anime?"+"q=".concat(d(m),"&limit=20");break;case"videogames":t="fa7090501a594b9580667da6ddb07452",a="https://api.rawg.io/api/games?search=".concat(d(m),"&key=").concat(t)}var y=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("404: Media not found");case 6:return e.next=8,t.json();case 8:n=e.sent,h("music"===k?n.results.albummatches.album:n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();console.log(g);var O,x,w=g.map((function(e,t){var a,n,o;switch(k){case"music":a=e.image[2]["#text"],n=e.artist,o=e.name;break;case"movies":a="https://image.tmdb.org/t/p/w300".concat(e.poster_path),o=e.title;break;case"tv":a="https://image.tmdb.org/t/p/w300".concat(e.poster_path),o=e.name;break;case"anime":a=e.image_url,o=e.title;break;case"videogames":a=e.background_image,o=e.name}return r.a.createElement(N,{image:a,name:o,artist:n,key:t+o,setBoxes:c})}));switch(k){case"music":O="an album",x="Artist/album name";break;case"movies":O="a movie",x="Movie title";break;case"videogames":O="a video game",x="Video game title";break;case"tv":O="a TV show",x="TV show title";break;case"anime":O="an anime",x="Anime title"}return r.a.createElement(_.a,{isOpen:j,className:"modal",onRequestClose:C,ariaHideApp:!1},r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"search-header"},r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"search icon"},"\ud83d\udd0d")," ","Search for ",O),r.a.createElement("button",{className:"close",onClick:C},"X")),r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{type:"search",name:"search",value:m,placeholder:x,onKeyDown:function(e){13===e.keyCode&&y()},onChange:function(e){return b(e.target.value)}}),r.a.createElement("div",{className:"search-results"},w)),r.a.createElement("div",{className:"search-button"},r.a.createElement("button",{onClick:y},"Search"))))}),B=function(e){for(var t=e.titles,a=e.numRows,n=e.numCols,c=e.fontFamily,o=e.fontColor,l=e.width,u=[],i=0,s=n,d=0;d<a;d++)u.push([].concat(Object(m.a)(t.slice(i,s)),[r.a.createElement("br",null)])),i+=n,s+=n;var b=u.flat().map((function(e,t){return e!==r.a.createElement("br",null)&&(e=r.a.createElement("li",{key:t},e)),e}));return r.a.createElement("ul",{style:{listStyle:"none",fontFamily:c,color:o,width:"100%",overflow:"auto",fontSize:"".concat(800/l,"rem"),whiteSpace:"nowrap",padding:"0 4%"}},b)},F=(a(56),function(){var e=Object(n.useContext)(E),t=e.getId,a=e.numRows,c=e.numCols,o=e.color,l=e.firstGradientColor,u=e.secondGradientColor,i=e.fontColor,d=e.boxMargin,b=e.displayTitles,p=e.fontFamily,f=e.sort,g=e.randomList,h=e.shuffled,v=e.clear,j=e.searchMode,C=e.backgroundMode,y=e.boxType,x=e.borderRadius,w=e.gradientAngle,S=Object(n.useState)(function(e,t){for(var a=e*t,n=[],r=0;r<a;r++)n.push({id:r,text:r+1,image:"",data:""});return n}(a,c)),R=Object(s.a)(S,2),_=R[0],N=R[1],F=Object(n.useState)([]),G=Object(s.a)(F,2),A=G[0],q=G[1],I=Object(n.useState)(null),V=Object(s.a)(I,2),D=V[0],z=V[1],U=Object(n.useRef)(null),H=Object(n.useCallback)((function(e,t){var a=_[e],n=_[t];N(f?function(n){return O()(n,{$splice:[[e,1],[t,0,a]]})}:function(r){return O()(r,{$splice:[[e,1,n],[t,1,a]]})})}),[_,f]),L=Object(n.useRef)(!0);Object(n.useEffect)((function(){L.current?L.current=!1:N((function(e){return function(e,t,a){var n=a.length-1,r=e*t;if(r>a.length){for(var c=[],o=n+1;o<r;o++)c.push({id:o,text:o+1,image:"",data:""});return[].concat(Object(m.a)(a),c)}if(r<a.length)return a.slice(0,r)}(a,c,e)}))}),[a,c]),Object(n.useEffect)((function(){N((function(e){var t=g.map((function(e){return e.image})),a=g.map((function(e){return e.data}));return e.map((function(e,n){return Object(k.a)({},e,{image:t[n],data:a[n]})}))}))}),[g]),Object(n.useEffect)((function(){var e=_.map((function(e){return e.data}));q(e)}),[_]);var J=Object(n.useRef)(!0);Object(n.useEffect)((function(){J.current?J.current=!1:N((function(e){return function(e){for(var t=[].concat(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t}(e)}))}),[h]),Object(n.useEffect)((function(){N((function(e){return e.map((function(e){return Object(k.a)({},e,{image:"",data:""})}))}))}),[v]),Object(n.useEffect)((function(){b&&z(U.current.getBoundingClientRect().width)}),[c,b]);var $=function(e,t,a){return function(e,t,a){for(var n=[],r=0,c=a,o=0;o<t;o++)n.push(e.slice(r,c)),r+=a,c+=a;return n}(e,t,a).map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}))}(_.map((function(e,a){return r.a.createElement(M,{index:a,key:e.id,id:e.id,text:e.text,image:e.image,moveBox:H,handleClick:t,boxMargin:d,numCols:c,boxType:y,borderRadius:x})})),a,c),K="regular"===C?{backgroundColor:o}:{background:"linear-gradient(".concat(w,"deg, ").concat(l,", ").concat(u,")")};return r.a.createElement("div",{className:"container-wrapper"},r.a.createElement(T,{setBoxes:N}),r.a.createElement("div",{className:"collage"},r.a.createElement("table",{ref:U,style:K},r.a.createElement("tbody",null,$),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null,b?r.a.createElement(B,{titles:A,numCols:c,numRows:a,fontFamily:p,fontColor:i,width:D,searchMode:j}):null))))))}),G=a(61),A=a(30);a(57);var q=function(){return r.a.createElement(G.a,{backend:A.a},r.a.createElement("div",{className:"app-container"},r.a.createElement(C,null),r.a.createElement(F,null)))};a(58);o.a.render(r.a.createElement(j,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f1a8da85.chunk.js.map