(window.webpackJsonpmacaron=window.webpackJsonpmacaron||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.7b07a203.svg"},25:function(e,t,a){e.exports=a.p+"static/media/cart_icon.0a05a26d.svg"},28:function(e,t,a){e.exports=a.p+"static/media/facebook_icon.7f287522.svg"},29:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.9eaddc56.svg"},30:function(e,t,a){e.exports=a.p+"static/media/instagram_icon.58187fb3.svg"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/custom_gift_box.21449971.png"},44:function(e,t,a){e.exports=a.p+"static/media/vanilla.5d0b985f.png"},45:function(e,t,a){e.exports=a.p+"static/media/rose.88a88bb7.png"},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(36),a(2)),l=Object(i.a)(),s=a(12),m=a(17),u=a.n(m),d=a(23),p=a(15),h=a(6),v=a(7),b=a(10),g=a(8),f=a(11),E=a(9),C=function(e){var t=e.product,a=e.addToCart,n=e.buttonText,c=e.toggle,o=e.open,i="+ Add to Cart"!==n[t.id-1]?"added_to_cart":"add_to_cart";return r.a.createElement("div",{className:"menu_product_main"},r.a.createElement("div",{className:"menu_product_img"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:"menu_product_description"},r.a.createElement("h3",null,t.title),r.a.createElement("h4",null,t.subTitle),r.a.createElement("div",null,t.description.split("\n").map(function(e,t){return 2===t?r.a.createElement("div",{key:t},r.a.createElement("p",{className:"collapse"+(o?" in":"")},e),r.a.createElement("div",{className:"read_div"},r.a.createElement("button",{className:"read_more in",onClick:c},o?"Read Less":"Read More"))):r.a.createElement("p",{key:t},e)}))),r.a.createElement("div",{className:"menu_product_shop"},r.a.createElement("p",null,"$",t.price," /ea."),r.a.createElement("button",{className:i,type:"submit",onClick:function(){return a(t)}},n[t.id-1])))},_=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={open:!1},a.toggle=a.toggle.bind(Object(f.a)(a)),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=this.props,a=t.menuItems,n=t.addToCart,c=t.buttonText;return r.a.createElement("div",{className:"menu_main"},r.a.createElement("h3",null,"Menu"),r.a.createElement("div",null,a.map(function(t){return r.a.createElement(C,{product:t,key:t.id,addToCart:n,buttonText:c,toggle:e.toggle,open:e.state.open})})))}}]),t}(n.Component),w=function(e){var t=e.product,a=e.removeFromCart;return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"cart_product_main"},r.a.createElement("div",{className:"cart_product_img"},r.a.createElement("img",{src:t.image,alt:"product"})),r.a.createElement("div",{className:"cart_product_description"},r.a.createElement("h3",null,t.title),r.a.createElement("h4",null,t.subTitle),r.a.createElement("button",{onClick:function(){return a(t.id)}},"Remove")),r.a.createElement("div",{className:"cart_product_price"},"$",t.price)))},y=function(e){var t=e.cart,a=(e.showCart,e.showingCart),n=e.removeFromCart;return r.a.createElement("div",{className:"wrapper",id:"wrapper"},r.a.createElement("div",null,r.a.createElement("button",{onClick:a,className:"cart_close_button"},"Close")),r.a.createElement("h2",null,"My Cart"),r.a.createElement("div",null," ",t.map(function(e){return r.a.createElement(w,{product:e,removeFromCart:n,key:e.id})})),r.a.createElement("div",{className:"cart_total"},"Total ")," ",r.a.createElement("div",{className:"cart_total_amount"}," $",t.reduce(function(e,t){return e+t.quantity*t.price},0).toFixed(2)),r.a.createElement("button",{className:"checkout_btn"},"Continue to Checkout"))},x=a(5),O=a(24),N=a.n(O),k=a(25),T=a.n(k),j=function(e){var t=e.quantity;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar_main"},r.a.createElement(x.b,{to:"/",className:"navbar_logo"}," ",r.a.createElement("img",{src:N.a,alt:"Cart",height:"22px"})),r.a.createElement(x.b,{to:"/menu",className:"navbar_menu"},"Menu"),r.a.createElement(x.b,{to:"/beverages",className:"navbar_menu"},"Beverages"),r.a.createElement(x.b,{to:"/gifts",className:"navbar_menu"},"Gifts"),r.a.createElement("span",{className:"navbar_menu"},"|"),r.a.createElement("span",null,r.a.createElement("img",{src:T.a,alt:"Cart",className:"cart_svg"})),r.a.createElement("button",{className:"cart_nav navbar_menu",onClick:e.showingCart},r.a.createElement("span",{className:t?"cart_circle":"cart_circle_empty"},t||""),"Cart")))},A=a(28),F=a.n(A),q=a(29),I=a.n(q),B=a(30),M=a.n(B),S=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer_main"},r.a.createElement("div",{className:"footer_left"},r.a.createElement("h3",null,"We are committed to serving the freshest, most delightful treats."),r.a.createElement("div",{className:"footer_media"},r.a.createElement("img",{src:F.a,alt:"facebook"}),r.a.createElement("img",{src:I.a,alt:"twitter"}),r.a.createElement("img",{src:M.a,alt:"instagram"})),r.a.createElement("p",null,"\xa9 2019 MACARONS")),r.a.createElement("div",{className:"footer_right"},r.a.createElement("div",null,r.a.createElement("h4",null,"Company"),r.a.createElement("ul",null,r.a.createElement("li",null,"About"),r.a.createElement("li",null,"Locations"),r.a.createElement("li",null,"Contact us"))),r.a.createElement("div",null,r.a.createElement("h4",null,"Orders"),r.a.createElement("ul",null,r.a.createElement("li",null,"Order Tracker"),r.a.createElement("li",null,"Delivery FAQ")))))}}]),t}(n.Component),L={menuItems:[{id:1,title:"Custom Gift Box",subTitle:"Assorted Flavors",description:"This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes! \n\n  We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!",price:55,quantity:0,image:a(43),buttonText:"+ Add to Cart"},{id:2,title:"Vanilla Earl Grey Macaron",subTitle:"1 Piece",description:"Our most popular flavor! Each macaron is filled with earl grey ganache.",price:3.75,quantity:0,image:a(44),buttonText:"+ Add to Cart"},{id:3,title:"Rose Macarons",subTitle:"1 Piece",description:"Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.",price:3.75,quantity:0,image:a(45),buttonText:"+ Add to Cart"}],cart:[],showCart:!1,homepageClass:"homepage",buttonText:["+ Add to Cart","+ Add to Cart","+ Add to Cart"]},R=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(g.a)(t).call(this))).state=L,e.addToCart=e.addToCart.bind(Object(f.a)(e)),e.removeFromCart=e.removeFromCart.bind(Object(f.a)(e)),e.showingCart=e.showingCart.bind(Object(f.a)(e)),e}return Object(E.a)(t,e),Object(v.a)(t,[{key:"addToCart",value:function(e){var t=e.id-1,a=this.state.buttonText.map(function(e,a){return a===t?"\u2713 Added to Cart":e});this.state.cart.filter(function(t){return t.id===e.id}).length?(document.getElementById("wrapper").classList.toggle("is-nav-open"),this.setState({cart:Object(p.a)(this.state.cart.map(function(t){return t.id===e.id&&t.quantity++,t})),showCart:!0,homepageClass:"homepage homepage_cart",buttonText:a})):(e.quantity++,document.getElementById("wrapper").classList.toggle("is-nav-open"),this.setState({cart:[].concat(Object(p.a)(this.state.cart),[e]),showCart:!0,homepageClass:"homepage homepage_cart",buttonText:a}))}},{key:"removeFromCart",value:function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({menuItems:L.menuItems,cart:this.state.cart.map(function(e){return e.id===t&&(e.quantity=0),e}).filter(function(e){return e.id!==t}),buttontext:[].concat(Object(p.a)(this.state.buttonText),[this.state.buttonText[t-1]="+ Add to Cart"])});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"showingCart",value:function(){document.getElementById("wrapper").classList.toggle("is-nav-open"),this.setState({showCart:!this.state.showCart,homepageClass:this.state.showCart?"homepage":"homepage homepage_cart"})}},{key:"render",value:function(){var e=this,t=this.state.cart.reduce(function(e,t){return e+t.quantity},0);return r.a.createElement("div",null,r.a.createElement("div",{className:this.state.homepageClass},r.a.createElement(j,{showingCart:this.showingCart,quantity:t}),r.a.createElement(s.a,{path:"/menu",render:function(){return r.a.createElement(_,{menuItems:e.state.menuItems,addToCart:e.addToCart,buttonText:e.state.buttonText})}}),r.a.createElement(S,null)),r.a.createElement(y,{cart:this.state.cart,removeFromCart:this.removeFromCart,showCart:this.state.showCart,showingCart:this.showingCart}))}}]),t}(n.Component),W=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component);a(46);o.a.render(r.a.createElement(x.a,{history:l},r.a.createElement($,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.19962278.chunk.js.map