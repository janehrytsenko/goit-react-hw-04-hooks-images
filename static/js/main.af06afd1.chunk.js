(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2ey0n",image:"ImageGalleryItem_image__2xsbt"}},14:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3FAPo",modal:"Modal_modal__P3_V5"}},15:function(e,t,a){e.exports={wrapper:"ErrorView_wrapper__21hvW",text:"ErrorView_text__2DYol"}},26:function(e,t,a){e.exports={container:"Container_container__3RIox"}},27:function(e,t,a){e.exports={list:"ImageGallery_list__3mqUc"}},28:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},30:function(e,t,a){e.exports={overlay:"LoaderComponent_overlay__3-Jp5"}},7:function(e,t,a){e.exports={header:"Searchbar_header__34uEY",form:"Searchbar_form__XuKjc",btn:"Searchbar_btn__37Gab",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=a(6),i=a.n(s),u=a(16),l=a(10),b=a(4),j=a(11),d=a(25),m=a.n(d),p=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=a(26),h=a.n(f),O=a(1);var x=function(e){var t=e.children;return Object(O.jsx)("div",{className:h.a.container,children:t})},g=(a(55),a(7)),v=a.n(g);var _=function(e){var t=e.onHandleSubmit,a=Object(n.useState)(""),r=Object(b.a)(a,2),c=r[0],o=r[1];return Object(O.jsx)("header",{className:v.a.header,children:Object(O.jsxs)("form",{className:v.a.form,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return j.b.info("\ud83d\ude31 Please enter a value for search images!");t(c),o("")},children:[Object(O.jsx)("button",{type:"submit",className:v.a.btn,children:Object(O.jsx)("span",{className:v.a.label,children:"Search"})}),Object(O.jsx)("input",{className:v.a.input,type:"text",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return o(t.value)}})]})})},w=a(13),y=a.n(w);var S=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onOpenModal;return Object(O.jsx)("li",{className:y.a.item,children:Object(O.jsx)("img",{src:t,alt:n,"data-source":a,className:y.a.image,onClick:r})})},k=a(27),N=a.n(k);var L=function(e){var t=e.images,a=e.onOpenModal;return Object(O.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(O.jsx)(S,{webformatURL:n,largeImageURL:r,tags:c,onOpenModal:a},t)}))})},I=a(28),M=a.n(I);var E=function(e){var t=e.onLoadMore;return Object(O.jsx)("button",{type:"button",className:M.a.btn,onClick:t,children:"Load more"})},C=a(29),R=a.n(C),U=(a(76),a(30)),T=a.n(U);var B=function(){return Object(O.jsx)("div",{className:T.a.overlay,children:Object(O.jsx)(R.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})},F=a(14),G=a.n(F),J=document.querySelector("#modal-root");var P=function(e){var t=e.largeImageURL,a=e.onToggleModal;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(c.createPortal)(Object(O.jsx)("div",{className:G.a.backdrop,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(O.jsx)("div",{className:G.a.modal,children:Object(O.jsx)("img",{src:t,alt:""})})}),J)},V=a.p+"static/media/oops.72ac764a.jpg",q=a(15),D=a.n(q);var H=function(e){var t=e.texterror;return Object(O.jsxs)("div",{role:"alert",className:D.a.wrapper,children:[Object(O.jsx)("img",{src:V,width:"550",alt:"sadcat"}),Object(O.jsx)("p",{text:t,className:D.a.text,children:t})]})};var Y=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(b.a)(c,2),s=o[0],d=o[1],m=Object(n.useState)(""),f=Object(b.a)(m,2),h=f[0],g=f[1],v=Object(n.useState)(1),w=Object(b.a)(v,2),y=w[0],S=w[1],k=Object(n.useState)(null),N=Object(b.a)(k,2),I=N[0],M=N[1],C=Object(n.useState)(!1),R=Object(b.a)(C,2),U=R[0],T=R[1],F=Object(n.useState)(!1),G=Object(b.a)(F,2),J=G[0],V=G[1];Object(n.useEffect)((function(){a&&function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(a,y);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",M("No results were found for ".concat(a,"!")));case 6:d((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),M("Something went wrong. Try again.");case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[y,a]);var q=function(){V(!J)},D=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),800)};return Object(O.jsxs)(x,{children:[Object(O.jsx)(_,{onHandleSubmit:function(e){r(e),d([]),S(1),M(null),T(!0)}}),I&&Object(O.jsx)(H,{texterror:I}),s.length>0&&!I&&Object(O.jsx)(L,{images:s,onOpenModal:function(e){g(e.target.dataset.source),q()}}),U&&Object(O.jsx)(B,{}),!U&&s.length>=12&&!I&&Object(O.jsx)(E,{onLoadMore:function(){T(!0),S((function(e){return e+1})),D()}}),J&&Object(O.jsx)(P,{onToggleModal:q,largeImageURL:h}),Object(O.jsx)(j.a,{autoClose:3700})]})};a(77);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.af06afd1.chunk.js.map