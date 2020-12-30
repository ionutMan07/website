(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{59:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(10),s=n.n(i),o=(n(59),n(34)),l=n(38),u=n.n(l),d=n(40),j=n(12),b=n(41),m=n.n(b),p=function(e){var t=e.movies.filter((function(e){return null!==e.poster_path}));return Object(a.jsx)(a.Fragment,{children:t.map((function(t){return Object(a.jsxs)("div",{className:"image-container d-flex justify-content-center m-3",children:[Object(a.jsx)("img",{className:"rounded mx-auto d-block item",src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.title}),Object(a.jsxs)("div",{className:"overlay align-items-center justify-content-center",onClick:function(){return e.handleFavoritesClick(t)},color:"secondary",children:[Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"Release: "}),t.release_date]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:" Rated:"})," ",t.vote_average]})]}),"Add to Favorites",Object(a.jsx)(m.a,{className:"ml-4",onClick:function(){return e.handleFavoritesClick(t)},color:"secondary"}),"          "]})]})}))})},f=n(108),h=n(100),O=n(105),v=n(70),g=n(106),x=n(43),k=n.n(x),y=n(44),S=n.n(y),N=n(102),w=n(101),C=n(107),F=n(35),I=n(99),L=n(11),R=Object(I.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:Object(F.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(F.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(F.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),E=function(e){var t=R(),n=Object(c.useState)(!1),r=Object(j.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("site-dark-mode"),t=JSON.parse(e);s(!!t)}),[]),Object(c.useEffect)((function(){i?document.body.classList.add("dark"):document.body.classList.remove("dark");var e=JSON.stringify(i);localStorage.setItem("site-dark-mode",e)}),[i]),Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(f.a,{position:"static",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(O.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(v.a,{className:t.title,variant:"h6",noWrap:!0,children:"Movie \ud83d\udcfd\ufe0f List"}),Object(a.jsx)(w.a,{children:Object(a.jsx)(N.a,{control:Object(a.jsx)(C.a,{checked:i,onChange:function(){return s(!i)},"aria-label":"color switch"})})}),Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(S.a,{})}),Object(a.jsx)(g.a,{placeholder:"Search movies",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:e.value,onChange:function(t){e.setSearchValue(t.target.value)}})]})]})})})},J=n(46),B=n.n(J),M=n(45),_=n.n(M),T=function(e){var t=function(e){var t=Object(c.useState)(localStorage.getItem(e)||null),n=Object(j.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem(e,a)}),[a,e]),[a,r]}(e.movie.id),n=Object(j.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(null),l=Object(j.a)(s,2),u=l[0],d=l[1],b=function(e){return i(e.target.value)};return Object(a.jsx)(a.Fragment,{children:Object(o.a)(Array(5)).map((function(e,t){var n=t+1;return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",name:"rating",value:n,onClick:b}),Object(a.jsx)(_.a,{value:r,className:n<=(u||r)?"star":"regularStar",onMouseEnter:function(){return d(n)},onMouseLeave:function(){return d(null)}})]})}))})},P=function(e){return Object(a.jsx)(a.Fragment,{children:e.movies.map((function(t){return Object(a.jsxs)("div",{className:"image-container d-flex justify-content-center m-2",children:[Object(a.jsx)("img",{className:"rounded mx-auto d-block item",src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.title}),Object(a.jsxs)("div",{className:"overlay align-items-center justify-content-center",children:["Remove from favorites",Object(a.jsx)(B.a,{className:"ml-4",onClick:function(){return e.handleFavoritesClick(t)}}),Object(a.jsx)("div",{className:"align-items-center justify-content-center",children:Object(a.jsx)(T,{movie:t})})]})]},t.id)}))})},A=n(104),V=n(103),q=n(72),D=(n(66),n(67),Object(I.a)((function(e){return{modal:{color:"white",display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"10px",border:"2px solid #000",boxShadow:e.shadows[1],padding:e.spacing(2,4,3)}}}))),G=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),s=Object(j.a)(i,2),l=s[0],b=s[1],m=Object(c.useState)([]),f=Object(j.a)(m,2),h=f[0],O=f[1],v=Object(c.useState)(!1),g=Object(j.a)(v,2),x=g[0],k=g[1],y=D(),S=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"5e0a4847fe467495f4f15ff5979d09e1",n="https://api.themoviedb.org/3/search/multi?api_key=".concat("5e0a4847fe467495f4f15ff5979d09e1","&language=en-US&query=").concat(t),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:(c=e.sent).results&&r(c.results);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){S(l)}),[l]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favorites"));e&&O(e)}),[]);var N=function(e){localStorage.setItem("react-movie-app-favorites",JSON.stringify(e))},w=JSON.parse(localStorage.getItem("react-movie-app-favorites")),C=function(){k(!0)},F=function(){k(!1)},I=function(e){var t=[].concat(Object(o.a)(h),[e]);O(t),N(t),C(),setTimeout((function(){return F()}),1e3)};return Object(a.jsxs)("div",{className:"container-fluid movie-app",children:[Object(a.jsx)(E,{searchValue:l,setSearchValue:b}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(p,{movies:n,handleFavoritesClick:function(e){w&&w.some((function(t){return t.id===e.id}))?(C(),setTimeout((function(){return F()}),1700)):I(e)}})}),Object(a.jsx)("h3",{className:"ml-4",children:" Favorites \ud83d\udc96"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(P,{movies:h,handleFavoritesClick:function(e){var t=h.filter((function(t){return t.id!==e.id}));O(t),N(t)}})}),Object(a.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:y.modal,open:x,onClose:F,closeAfterTransition:!0,BackdropComponent:V.a,BackdropProps:{timeout:500},children:Object(a.jsx)(q.a,{in:x,children:Object(a.jsx)("div",{className:y.paper,children:Object(a.jsx)("h5",{id:"transition-modal-title",children:"Movie has been added / Movie already in Favorites"})})})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),U()}},[[68,1,2]]]);
//# sourceMappingURL=main.2828d2a5.chunk.js.map