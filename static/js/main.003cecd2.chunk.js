(window.webpackJsonpmacaron=window.webpackJsonpmacaron||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.7b07a203.svg"},25:function(e,t,a){e.exports=a.p+"static/media/cart_icon.0a05a26d.svg"},28:function(e,t,a){e.exports=a.p+"static/media/facebook_icon.7f287522.svg"},29:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.9eaddc56.svg"},30:function(e,t,a){e.exports=a.p+"static/media/instagram_icon.58187fb3.svg"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/custom_gift_box.21449971.png"},44:function(e,t,a){e.exports=a.p+"static/media/vanilla.5d0b985f.png"},45:function(e,t,a){e.exports=a.p+"static/media/rose.88a88bb7.png"},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),o=(a(36),a(2)),l=Object(o.a)(),s=a(11),m=a(17),u=a.n(m),d=a(23),h=a(14),p=a(5),f=a(6),b=a(9),v=a(7),E=a(12),g=a(8),C=function(e){var t=e.product,a=e.addToCart,n=e.buttonText,c="+ Add to Cart"!==n[t.id-1]?"added_to_cart":"add_to_cart";return r.a.createElement("div",{className:"menu_product_main"},r.a.createElement("div",{className:"menu_product_img"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:"menu_product_description"},r.a.createElement("h3",null,t.title),r.a.createElement("h4",null,t.quantity),r.a.createElement("div",null,t.description.split("\n").map(function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement("div",{className:"menu_product_shop"},r.a.createElement("p",null,"$",t.price," /ea."),r.a.createElement("button",{className:c,type:"submit",onClick:function(){return a(t)}},n[t.id-1])))},w=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.menuItems,a=e.addToCart,n=e.buttonText;return r.a.createElement("div",{className:"menu_main"},r.a.createElement("h3",null,"Menu"),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(C,{product:e,key:e.id,addToCart:a,buttonText:n})})))}}]),t}(n.Component),_=function(e){var t=e.cart,a=e.showCart,n=e.showingCart;return r.a.createElement("div",{className:a},r.a.createElement("button",{onClick:n,className:"cart_close_button"},"Close"),r.a.createElement("div",null,"My Cart"),r.a.createElement("div",null," ",t.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("img",{src:t.image,alt:"item"}),r.a.createElement("div",null,t.title),r.a.createElement("div",null,t.quantity),r.a.createElement("div",null,"$",t.price),r.a.createElement("button",{onClick:function(){return e.removeFromCart(t.id)}},"Remove"))})),r.a.createElement("div",null,"Total: $",t.reduce(function(e,t){return e+t.cartTotal},0)))},O=a(10),y=a(24),j=a.n(y),x=a(25),T=a.n(x),k=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar_main"},r.a.createElement(O.a,{to:"/",className:"navbar_logo"}," ",r.a.createElement("img",{src:j.a,alt:"Cart",height:"22px"})),r.a.createElement(O.a,{to:"/menu",className:"navbar_menu"},"Menu"),r.a.createElement(O.a,{to:"/beverages",className:"navbar_menu"},"Beverages"),r.a.createElement(O.a,{to:"/gifts",className:"navbar_menu"},"Gifts"),r.a.createElement("span",{className:"navbar_menu"},"|"),r.a.createElement("button",{className:"cart_nav navbar_menu",onClick:this.props.showingCart},r.a.createElement("img",{src:T.a,alt:"Cart",className:"cart_svg"}),r.a.createElement("span",{className:"cart_circle"},"1"),"Cart")))}}]),t}(n.Component),N=a(28),q=a.n(N),A=a(29),F=a.n(A),I=a(30),M=a.n(I),S=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer_main"},r.a.createElement("div",{className:"footer_left"},r.a.createElement("h3",null,"We are committed to serving the freshest, most delightful treats."),r.a.createElement("div",{className:"footer_media"},r.a.createElement("img",{src:q.a,alt:"facebook"}),r.a.createElement("img",{src:F.a,alt:"twitter"}),r.a.createElement("img",{src:M.a,alt:"instagram"})),r.a.createElement("p",null,"\xa9 2019 MACARONS")),r.a.createElement("div",{className:"footer_right"},r.a.createElement("div",null,r.a.createElement("h4",null,"Company"),r.a.createElement("ul",null,r.a.createElement("li",null,"About"),r.a.createElement("li",null,"Locations"),r.a.createElement("li",null,"Contact us"))),r.a.createElement("div",null,r.a.createElement("h4",null,"Orders"),r.a.createElement("ul",null,r.a.createElement("li",null,"Order Tracker"),r.a.createElement("li",null,"Delivery FAQ")))))}}]),t}(n.Component),W={menuItems:[{id:1,title:"Custom Gift Box",quantity:"Assorted Flavors",description:"This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes! \n\n    We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!",price:55,cartquant:0,cartTotal:0,image:a(43)},{id:2,title:"Vanilla Earl Grey Macaron",quantity:"1 Piece",description:"Our most popular flavor! Each macaron is filled with earl grey ganache.",price:3.75,cartquant:0,cartTotal:0,image:a(44)},{id:3,title:"Rose Macarons",quantity:"1 Piece",description:"Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.",price:3.75,cartquant:0,cartTotal:0,image:a(45)}],cart:[],showCart:"cart_hidden",homepageClass:"homepage",buttonText:["+ Add to Cart","+ Add to Cart","+ Add to Cart"]},B=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state=W,e.addToCart=e.addToCart.bind(Object(E.a)(e)),e.removeFromCart=e.removeFromCart.bind(Object(E.a)(e)),e.showingCart=e.showingCart.bind(Object(E.a)(e)),e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"addToCart",value:function(e){var t=e.id-1;this.state.cart.filter(function(t){return t.id===e.id}).length?this.setState({cart:Object(h.a)(this.state.cart.map(function(t){return t.id===e.id&&(t.cartquant++,t.cartTotal=t.price*t.cartquant),t})),showCart:"cart_showing",homepageClass:"homepage homepage_cart",buttontext:Object(h.a)(this.state.buttonText[t]="\u2713 Added to Cart")}):(e.cartquant++,e.cartTotal=e.price*e.cartquant,this.setState({cart:[].concat(Object(h.a)(this.state.cart),[e]),showCart:"cart_showing",homepageClass:"homepage homepage_cart",buttontext:Object(h.a)(this.state.buttonText[t]="\u2713 Added to Cart")}))}},{key:"removeFromCart",value:function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({menuItems:W.menuItems,cart:this.state.cart.map(function(e){return e.id===t&&(e.cartquant=0,e.cartTotal=e.price),e}).filter(function(e){return e.id!==t}),buttontext:[].concat(Object(h.a)(this.state.buttonText),[this.state.buttonText[t-1]="+ Add to Cart"])});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"showingCart",value:function(){"cart_hidden"===this.state.showCart?this.setState({showCart:"cart_showing",homepageClass:"homepage homepage_cart"}):this.setState({showCart:"cart_hidden",homepageClass:"homepage"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:this.state.homepageClass},r.a.createElement(k,{showingCart:this.showingCart}),r.a.createElement(s.a,{path:"/menu",render:function(){return r.a.createElement(w,{menuItems:e.state.menuItems,addToCart:e.addToCart,buttonText:e.state.buttonText})}}),r.a.createElement(S,null)),r.a.createElement(_,{cart:this.state.cart,removeFromCart:this.removeFromCart,showCart:this.state.showCart,showingCart:this.showingCart}))}}]),t}(n.Component),$=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component);a(46);i.a.render(r.a.createElement(s.b,{history:l},r.a.createElement(G,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.003cecd2.chunk.js.map