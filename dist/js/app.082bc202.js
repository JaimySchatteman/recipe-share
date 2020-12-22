(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,c=1;c<i.length;c++){var l=i[c];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var p=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"0d4b":function(t,e,i){"use strict";i("c514")},"127c":function(t,e,i){t.exports=i.p+"img/clock.c53f7395.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("transition",{attrs:{name:"router-anim"}},[i("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"navbar",staticClass:"header w-full flex items-center justify-center pb-2"},[a("router-link",{staticClass:"mt-2",attrs:{to:{name:"recipes"}}},[a("img",{staticClass:"w-16 mr-8",attrs:{src:i("e347"),alt:"logo"}})])],1)},c=[],l={name:"Header",methods:{sendHeightOfNavbar:function(){V.$emit("heightNavbarAnswer",this.$refs.navbar.clientHeight)}},mounted:function(){var t=this;V.$on("getHeightOfNavbar",(function(){t.sendHeightOfNavbar()}))}},o=l,p=(i("dd9a"),i("2877")),u=Object(p["a"])(o,r,c,!1,null,"4e4d85d6",null),d=u.exports,f={name:"App",components:{Header:d}},m=f,g=(i("034f"),Object(p["a"])(m,n,s,!1,null,null,null)),v=g.exports,h=(i("def6"),i("8c4f")),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-full px-8 lg:px-12 xl:px-16 mt-16 mb-16"},[t._m(0),i("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 mt-8"},t._l(t.recipes,(function(t){return i("recipes-card",{key:t.id,attrs:{recipe:t}})})),1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex ml-4 text-3xl"},[a("img",{staticClass:"w-10 lg:w14",attrs:{src:i("9a55"),alt:"favorite-recipes"}}),a("h1",{staticClass:"ml-4"},[t._v("My Favorite Recipes")])])}],_=(i("4160"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"recipe-card",attrs:{to:{name:"detail",params:{uid:t.recipe.uid,recipe:t.recipe}},tag:"div"}},[i("img",{staticClass:"w-full",attrs:{src:t.recipe.data.image.url,alt:t.recipe.data.image.alt}}),i("div",{staticClass:"px-6 pb-8"},[i("h1",{staticClass:"mt-4"},[t._v(t._s(t.recipe.data.name[0].text))])])])}),y=[],C={name:"RecipesCard",props:["recipe"]},w=C,O=(i("0d4b"),Object(p["a"])(w,_,y,!1,null,"8239a8d8",null)),j=O.exports,$={name:"Recipes",components:{RecipesCard:j},data:function(){return{recipes:[]}},methods:{getRecipes:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","recipe")).then((function(e){console.log(e),e.results.forEach((function(e){console.log(e),t.recipes.push(e)}))}))}},created:function(){this.getRecipes()}},k=$,H=(i("e238"),Object(p["a"])(k,x,b,!1,null,"d94b2e50",null)),P=H.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!=t.recipe?a("div",{staticClass:"recipe flex flex-col mb-12",style:t.cssVars},[a("img",{staticClass:"background-image h-full",attrs:{src:t.recipe.data.image.url,alt:t.recipe.data.image.alt}}),a("div",{staticClass:"recipe-information -mt-8 md:-mt-16 lg:-mt-20 xl:-mt-32 mx-8 md:mx-16 lg:mx-24 xl:mx-42 2xl:mx-60 px-8 sm:px-12 py-10"},[a("h1",{staticClass:"text-4xl"},[t._v(t._s(t.recipe.data.name[0].text))]),a("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 mt-2 md:mt-8"},[a("div",{staticClass:"col-start-1 col-end-2 md:col-start-1 md:col-end-2 flex flex-col sm:flex-row-reverse justify-between pr-8 md:flex-col"},[a("div",{staticClass:"recipe-properties flex flex-col mx-0 md:mx-4 mt-0 sm:mt-8 md:mt-0"},[a("div",{staticClass:"flex mt-4 py-3"},[a("img",{staticClass:"w-8 mr-6",attrs:{src:i("127c"),alt:"estimated-time-icon"}}),a("h3",[t._v(t._s(t.recipe.data["estimated-time-minutes"])+" minutes")])]),a("div",{staticClass:"flex mt-4 py-3"},[a("img",{staticClass:"w-8 mr-6",attrs:{src:i("c51f"),alt:"difficulty)icon"}}),a("h3",[t._v(t._s(t.recipe.data["difficulty-level"][0].text))])]),a("div",{staticClass:"flex mt-4 py-3"},[a("img",{staticClass:"w-8 mr-6",attrs:{src:i("f30a"),alt:"vegan-icon"}}),t.recipe.data.vegetarian?a("div",{staticClass:"is-vegetarian"},[a("h3",[t._v("vegetarian")])]):a("div",{staticClass:"not-vegetarian"},[a("h3",[t._v("non-vegetarian")])])])]),a("div",{staticClass:"recipe-ingredients mt-6 md:mx-4 mt-0"},[a("h2",[t._v("Ingredients")]),a("ul",t._l(t.recipe.data["recipe-ingredients"],(function(e,i){return a("li",{key:i,staticClass:"py-2"},[a("span",[t._v(t._s(e.ingredients.data.quantity))]),null!=e.ingredients.data.unit?a("span",{staticClass:"ml-2"},[t._v(t._s(e.ingredients.data.unit[0].text))]):t._e(),a("span",{staticClass:"ingredient ml-2"},[t._v(t._s(e.ingredients.data.name[0].text))])])})),0)])]),a("div",{staticClass:"steps col-start-1 col-end-2 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 flex flex-col px-0 md:px-4 mt-12 md:mt-0"},t._l(t.recipe.data.steps,(function(e,i){return a("div",{key:i,staticClass:"py-3"},[a("h2",[t._v("step "+t._s(i+1))]),a("p",[t._v(t._s(e.step[0].text))])])})),0)])])]):t._e()},E=[],N={name:"Recipe",props:["uid","recipe"],data:function(){return{navHeightCssProperty:""}},computed:{cssVars:function(){return{"--height":this.navHeightCssProperty+"px"}}},methods:{getRecipe:function(t){var e=this;this.$prismic.client.getByUID("recipe",t,{fetchLinks:["ingredient.name","ingredient.quantity","ingredient.unit"]}).then((function(t){e.recipe=t,console.log(t)}))}},mounted:function(){var t=this;V.$on("heightNavbarAnswer",(function(e){t.navHeightCssProperty=e})),V.$emit("getHeightOfNavbar",!0)},created:function(){this.getRecipe(this.uid)}},M=N,S=(i("8abf"),Object(p["a"])(M,R,E,!1,null,"12b63d19",null)),q=S.exports,A=[{path:"",name:"recipes",component:P},{path:"/detail/:uid",name:"detail",component:q,props:!0},{path:"*",redirect:{path:""}}],T=i("0701"),I=new h["a"]({routes:A,mode:"history"});a["a"].use(h["a"]),a["a"].use(T["a"],{endpoint:"https://recipe-share.cdn.prismic.io/api/v2"});var J=new a["a"],V=e["default"]=J;a["a"].config.productionTip=!1,new a["a"]({router:I,render:function(t){return t(v)}}).$mount("#app")},"81e4":function(t,e,i){},"85ec":function(t,e,i){},"8abf":function(t,e,i){"use strict";i("81e4")},"9a55":function(t,e,i){t.exports=i.p+"img/recipe-book.f2afafab.svg"},bba7:function(t,e,i){},c514:function(t,e,i){},c51f:function(t,e,i){t.exports=i.p+"img/chef.ea9d3252.svg"},dd9a:function(t,e,i){"use strict";i("bba7")},def6:function(t,e,i){},e238:function(t,e,i){"use strict";i("eeaa")},e347:function(t,e,i){t.exports=i.p+"img/logo.cde49e88.svg"},eeaa:function(t,e,i){},f30a:function(t,e,i){t.exports=i.p+"img/vegan.ee9cf7a4.svg"}});
//# sourceMappingURL=app.082bc202.js.map