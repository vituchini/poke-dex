(this["webpackJsonppoke-dex"]=this["webpackJsonppoke-dex"]||[]).push([[0],{15:function(e,n,t){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__Z_9kp",preloader:"Preloader_preloader__1Ej7J",preloaderSpin:"Preloader_preloaderSpin__3wgTJ"}},16:function(e,n,t){},2:function(e,n,t){e.exports={grass:"Pokemons_grass__3yltk",poison:"Pokemons_poison__2Y4M3",fire:"Pokemons_fire__2YKDl",normal:"Pokemons_normal__2zy8q",ground:"Pokemons_ground__3HvL3",flying:"Pokemons_flying__28J9h",bug:"Pokemons_bug__3WgL-",electric:"Pokemons_electric__Xz83F",water:"Pokemons_water__21Xmy",fairy:"Pokemons_fairy__21X9F",fighting:"Pokemons_fighting__1zJeS",psychic:"Pokemons_psychic__153tu",rock:"Pokemons_rock__1dXc1",steel:"Pokemons_steel__2tDsw",ice:"Pokemons_ice__2j1JA",ghost:"Pokemons_ghost__2kozB",dragon:"Pokemons_dragon__1KdBg",dark:"Pokemons_dark__2PikI",unknown:"Pokemons_unknown__6py8I",shadow:"Pokemons_shadow__3q43M",all:"Pokemons_all__3JDxs",PokemonsContainerWrapper:"Pokemons_PokemonsContainerWrapper__3L-Gu",PokemonsContainer:"Pokemons_PokemonsContainer__2lHqn",pokemonCard:"Pokemons_pokemonCard__3HFAd",pokemonsBlock:"Pokemons_pokemonsBlock__3aClE",pokemonsListBlock:"Pokemons_pokemonsListBlock__3X6gl",pokemonInfoBlock:"Pokemons_pokemonInfoBlock__3qz3f",pokemonInfoCard:"Pokemons_pokemonInfoCard__2tndS",pokemonsContainer:"Pokemons_pokemonsContainer__WjENt",pokemonsListBlockButton:"Pokemons_pokemonsListBlockButton__1jYZY",types:"Pokemons_types__2-Vrt",type:"Pokemons_type__L8kI6",pokemonNameInfo:"Pokemons_pokemonNameInfo__1zSrG",pokemonNameCard:"Pokemons_pokemonNameCard__CuCKh",dropbtn:"Pokemons_dropbtn__1kSEl",dropdownWrapper:"Pokemons_dropdownWrapper__1OlI-",dropdown:"Pokemons_dropdown__1NelP",dropdownContent:"Pokemons_dropdownContent__cLYh0",noPokemons:"Pokemons_noPokemons__3yVPp"}},32:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),s=t(8),c=t.n(s),a=(t(32),t(16),t(3)),i=t(9),m=t(5),d=t.n(m),p=t(7),l=t(27),k=t(14),u=k.create({baseURL:"https://pokeapi.co/api/v2/"}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return u.get("pokemon/?limit=".concat(e)).then((function(e){return e.data}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bulbasaur";return u.get("pokemon/".concat(e)).then((function(e){return e.data}))},b=function(e){return k.get(e).then((function(e){return e.data}))},P=function(){return u.get("type").then((function(e){return e.data}))},h="TOGGLE_IS_FETCHING",O="SET_POKEMONS",x="SET_NEW_POKEMONS",g="IS_NEW_POKEMONS_LOADING",f="SET_CURRENT_POKEMON",y="SET_ALL_TYPES",v="SET_CURRENT_TYPE",N={isFetching:!0,isNewPokemonsLoading:!1,pokemons:[],nextPokemonsPage:"",currentPokemon:1,types:[],currentType:"all"},C=function(e){return{type:h,isFetching:e}},w=function(e){return{type:g,isNewPokemonsLoading:e}},L=function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(e.map((function(e){return _(e.name)})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(a.a)(Object(a.a)({},e),{},{pokemons:Object(l.a)(n.pokemons),nextPokemonsPage:n.nextPage});case x:return Object(a.a)(Object(a.a)({},e),{},{pokemons:e.pokemons.concat(n.newPokemons),nextPokemonsPage:n.nextPage});case h:return Object(a.a)(Object(a.a)({},e),{},{isFetching:n.isFetching});case g:return Object(a.a)(Object(a.a)({},e),{},{isNewPokemonsLoading:n.isNewPokemonsLoading,next:n.nextPage});case f:return Object(a.a)(Object(a.a)({},e),{},{currentPokemon:Number(n.currentPokemon)});case v:return Object(a.a)(Object(a.a)({},e),{},{currentType:n.currentType});case y:return Object(a.a)(Object(a.a)({},e),{},{types:n.types});default:return e}},E=t(2),S=t.n(E),B=t(0),I=function(e,n){var t=e.toString();return t.length===n?t:t.length<n?"0".repeat(n-t.length)+t:"0".repeat(n)},F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};var W=function(e){var n=e.pokemon,t=e.setCurrentPokemon,o=n;return Object(B.jsxs)("div",{className:S.a.pokemonCard,onClick:function(){t(o.id)},children:[Object(B.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(o.id,".png"),alt:o.name+" img"}),Object(B.jsx)("div",{className:S.a.pokemonNameCard,children:F(o.name)}),Object(B.jsx)("div",{className:S.a.types,children:o.types.map((function(e){return Object(B.jsx)("div",{className:S.a.type+" "+S.a[e.type.name],children:F(e.type.name)},e.type.name)}))})]})};var M=function(e){var n=e.pokemons.filter((function(n){return"all"===e.currentType||n.types.map((function(e){return e.type.name})).some((function(n){return n===e.currentType}))})).map((function(n){return Object(B.jsx)("div",{children:Object(B.jsx)(W,{pokemon:n,setCurrentPokemon:e.setCurrentPokemon})},n.id)}));return Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:S.a.pokemonsContainer,children:n.length>0?n:Object(B.jsx)(B.Fragment,{})}),Object(B.jsx)("div",{children:n.length<=0?Object(B.jsx)("div",{className:S.a.noPokemons,children:"No Pokemon"}):Object(B.jsx)(B.Fragment,{})}),e.isNewPokemonsLoading?Object(B.jsx)("div",{className:S.a.pokemonsListBlockButton,children:"Loading..."}):Object(B.jsx)("button",{className:S.a.pokemonsListBlockButton,onClick:function(){e.loadMore(e.next)},children:"Load More"})]})},A=t.p+"static/media/logo.6ce24c58.svg",D=t(15),J=t.n(D),K=function(e){return Object(B.jsx)("div",{className:J.a.preloaderWrapper,children:Object(B.jsx)("img",{className:J.a.preloader,src:A,alt:"loader"})})};var X=function(e){var n=e.pokemon,t=new Map;return null===n||void 0===n||n.stats.forEach((function(e){t.set(e.stat.name,e.base_stat)})),Object(B.jsxs)("div",{className:S.a.pokemonInfoCard,children:[Object(B.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.id,".png"),alt:n.name}),Object(B.jsx)("div",{className:S.a.pokemonNameInfo,children:F(n.name)+" #"+I(n.id,3)}),Object(B.jsx)("table",{children:Object(B.jsxs)("tbody",{children:[Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Type"}),Object(B.jsx)("td",{children:n.types.map((function(e){return Object(B.jsx)("div",{className:e.type.name,children:F(e.type.name)},e.type.name)}))})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Attack"}),Object(B.jsx)("td",{children:t.get("attack")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Defense"}),Object(B.jsx)("td",{children:t.get("defense")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"HP"}),Object(B.jsx)("td",{children:t.get("hp")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"SP Attack"}),Object(B.jsx)("td",{children:t.get("special-attack")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"SP Defense"}),Object(B.jsx)("td",{children:t.get("special-defense")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Speed"}),Object(B.jsx)("td",{children:t.get("speed")})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Weight"}),Object(B.jsx)("td",{children:n.weight})]}),Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:"Total moves"}),Object(B.jsx)("td",{children:n.moves.length})]})]})})]})};var Y=Object(i.b)((function(e){return{pokemons:e.pokemonsPage.pokemons,isPokemonsLoading:e.pokemonsPage.isFetching,isNewPokemonsLoading:e.pokemonsPage.isNewPokemonsLoading,next:e.pokemonsPage.nextPokemonsPage,currentPokemon:e.pokemonsPage.currentPokemon,types:e.pokemonsPage.types,currentType:e.pokemonsPage.currentType}}),{getPokemons:function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){var o,r,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(C(!0)),n.next=3,j(e);case 3:return o=n.sent,n.next=6,t(L(o.results));case 6:return r=n.sent,t((a=r,i=o.next,{type:O,pokemons:a,nextPage:i})),n.next=10,P();case 10:s=n.sent,t((c=s.results,{type:y,types:c})),t(C(!1));case 13:case"end":return n.stop()}var c,a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},loadMore:function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){var o,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(w(!0)),n.next=3,b(e);case 3:return o=n.sent,n.next=6,t(L(o.results));case 6:r=n.sent,t((s=r,c=o.next,{type:x,newPokemons:s,nextPage:c})),t(w(!1));case 9:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPokemon:function(e){return{type:f,currentPokemon:e}},setCurrentType:function(e){return{type:v,currentType:e}}})((function(e){return Object(o.useEffect)((function(){e.getPokemons(12)}),[]),Object(B.jsx)("div",{className:S.a.PokemonsContainerWrapper,children:Object(B.jsx)("div",{className:S.a.PokemonsContainer,children:e.isPokemonsLoading?Object(B.jsx)(K,{}):Object(B.jsxs)("div",{className:S.a.pokemonsBlock,children:[Object(B.jsx)("div",{className:S.a.dropdownWrapper,children:Object(B.jsxs)("div",{className:S.a.dropdown,children:[Object(B.jsx)("button",{className:S.a.dropbtn,children:F(e.currentType)}),Object(B.jsxs)("div",{className:S.a.dropdownContent,children:[Object(B.jsx)("div",{className:S.a.all,onClick:function(){return e.setCurrentType("all")},children:"All"}),e.types.map((function(n){return Object(B.jsx)("div",{onClick:function(){return e.setCurrentType(n.name)},className:S.a[n.name],children:F(n.name)},n.name)}))]})]})}),Object(B.jsx)("div",{className:S.a.pokemonsListBlock,children:Object(B.jsx)(M,Object(a.a)({},e))}),Object(B.jsx)("div",{className:S.a.pokemonInfoBlock,children:Object(B.jsx)(X,{pokemon:e.pokemons.find((function(n){return n.id===e.currentPokemon}))})})]})})})})),z=t(6),G=t(26),R=Object(z.c)({pokemonsPage:T}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,U=Object(z.e)(R,H(Object(z.a)(G.a))),q=U;window.store=U;var V=function(){return Object(B.jsx)(i.a,{store:q,children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)("header",{className:"App-header",children:"PokeDex"}),Object(B.jsx)(Y,{})]})})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),s(e),c(e)}))};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(V,{})}),document.getElementById("root")),Z()}},[[59,1,2]]]);
//# sourceMappingURL=main.e18d89b8.chunk.js.map