(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{2:function(e,t,a){e.exports={App:"styles_App__1pcbY",Searchbar:"styles_Searchbar__1fJhm",SearchForm:"styles_SearchForm__MRmRc",SearchForm_button:"styles_SearchForm_button__2YJEX",SearchForm_button_label:"styles_SearchForm_button_label__NUEwk",SearchForm_input:"styles_SearchForm_input__4omoW",ImageGallery:"styles_ImageGallery__1w_Tt",ImageGalleryItem:"styles_ImageGalleryItem__3b6XK",ImageGalleryItem_image:"styles_ImageGalleryItem_image__2zjVg",Overlay:"styles_Overlay__ghnOf",Modal:"styles_Modal__iPA99",Button:"styles_Button__3tQZY"}},28:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),o=a.n(c),s=(a(28),a(7)),l=a.n(s),u=a(12),i=a(10),m=a(5),b=a(2),j=a.n(b),h=a(23),d=(a(30),a(1));var g=function(e){var t=e.onHandleSubmit,a=Object(r.useState)(""),n=Object(m.a)(a,2),c=n[0],o=n[1];return Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return h.a.info("\ud83d\ude31 Please enter a value for search images!");t(c),o("")},children:[Object(d.jsx)("button",{type:"submit",className:j.a.SearchForm_button,children:Object(d.jsx)("span",{className:j.a.SearchForm_button_label,children:"Search"})}),Object(d.jsx)("input",{className:j.a.SearchForm_input,type:"text",value:c,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return o(t.value)}})]})})},p=a(21),f=a.n(p);function O(){return Object(d.jsx)("div",{className:j.a.Button,children:Object(d.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}var _=document.querySelector("#rootModal");var v=function(e){var t=e.largeImageURL,a=e.onToggleModal;return Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(c.createPortal)(Object(d.jsx)("div",{className:j.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(d.jsx)("div",{className:j.a.Modal,children:Object(d.jsx)("img",{src:t,alt:""})})}),_)};var y=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,n=e.onOpenModal;return Object(d.jsx)("li",{className:j.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:r,"data-source":a,className:j.a.ImageGalleryItem_image,onClick:n})})};var x=function(e){var t=e.images,a=e.onOpenModal;return Object(d.jsx)("ul",{className:j.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(d.jsx)(y,{className:j.a.img,webformatURL:r,largeImageURL:n,tags:c,onOpenModal:a},t)}))})};function S(e){var t=e.onLoadMore;return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("button",{className:j.a.Button,type:"button",onClick:t,children:"Load More"})})}var w=a(22),I=a.n(w),N=function(){var e=Object(i.a)(l.a.mark((function e(t,a){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var F=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(m.a)(c,2),s=o[0],b=o[1],h=Object(r.useState)(""),p=Object(m.a)(h,2),f=p[0],_=p[1],y=Object(r.useState)(1),w=Object(m.a)(y,2),I=w[0],F=w[1],k=Object(r.useState)(null),M=Object(m.a)(k,2),L=M[0],R=M[1],E=Object(r.useState)(!1),G=Object(m.a)(E,2),U=G[0],B=G[1],T=Object(r.useState)(!1),C=Object(m.a)(T,2),A=C[0],J=C[1];Object(r.useEffect)((function(){a&&function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(a,I);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",R("No results were found for ".concat(a,"!")));case 6:b((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R("Something went wrong. Try again.");case 12:return e.prev=12,B(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[I,a]);var H=function(){J(!A)},P=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),800)};return Object(d.jsxs)("div",{className:j.a.App,children:[Object(d.jsx)(g,{onHandleSubmit:function(e){n(e),b([]),F(1),R(null),B(!0)}}),L&&Object(d.jsx)("p",{children:L.message}),s.length>0&&Object(d.jsx)(x,{images:s,onOpenModal:function(e){_(e.target.dataset.source),H()}}),U&&Object(d.jsx)(O,{}),!U&&s.length>=12&&!L&&Object(d.jsx)(S,{onLoadMore:function(){B(!0),F((function(e){return e+1})),P()}}),A&&Object(d.jsx)(v,{onToggleModal:H,largeImageURL:f})]})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.44f792f2.chunk.js.map