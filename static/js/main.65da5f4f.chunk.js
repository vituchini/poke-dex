(this["webpackJsonppoke-dex"]=this["webpackJsonppoke-dex"]||[]).push([[0],{15:function(e,n,t){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__Z_9kp",preloader:"Preloader_preloader__1Ej7J",preloaderSpin:"Preloader_preloaderSpin__3wgTJ"}},16:function(e,n,t){},2:function(e,n,t){e.exports={grass:"Pokemons_grass__3yltk",poison:"Pokemons_poison__2Y4M3",fire:"Pokemons_fire__2YKDl",normal:"Pokemons_normal__2zy8q",ground:"Pokemons_ground__3HvL3",flying:"Pokemons_flying__28J9h",bug:"Pokemons_bug__3WgL-",electric:"Pokemons_electric__Xz83F",water:"Pokemons_water__21Xmy",fairy:"Pokemons_fairy__21X9F",fighting:"Pokemons_fighting__1zJeS",psychic:"Pokemons_psychic__153tu",rock:"Pokemons_rock__1dXc1",steel:"Pokemons_steel__2tDsw",ice:"Pokemons_ice__2j1JA",ghost:"Pokemons_ghost__2kozB",dragon:"Pokemons_dragon__1KdBg",dark:"Pokemons_dark__2PikI",PokemonsContainerWrapper:"Pokemons_PokemonsContainerWrapper__3L-Gu",PokemonsContainer:"Pokemons_PokemonsContainer__2lHqn",pokemonCard:"Pokemons_pokemonCard__3HFAd",pokemonsBlock:"Pokemons_pokemonsBlock__3aClE",pokemonsListBlock:"Pokemons_pokemonsListBlock__3X6gl",pokemonInfoBlock:"Pokemons_pokemonInfoBlock__3qz3f",pokemonInfoCard:"Pokemons_pokemonInfoCard__2tndS",pokemonsContainer:"Pokemons_pokemonsContainer__WjENt",types:"Pokemons_types__2-Vrt",type:"Pokemons_type__L8kI6",pokemonNameInfo:"Pokemons_pokemonNameInfo__1zSrG",pokemonNameCard:"Pokemons_pokemonNameCard__CuCKh"}},32:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),s=t(7),c=t.n(s),a=(t(32),t(16),t(3)),i=t(8),m=t(6),d=t.n(m),p=t(9),k=t(27),j=t(14),l=j.create({baseURL:"https://pokeapi.co/api/v2/"}),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return l.get("pokemon/?limit=".concat(e)).then((function(e){return e.data}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bulbasaur";return l.get("pokemon/".concat(e)).then((function(e){return e.data}))},b=function(e){return j.get(e).then((function(e){return e.data}))},h="TOGGLE_IS_FETCHING",P="SET_POKEMONS",O="SET_NEW_POKEMONS",g="IS_NEW_POKEMONS_LOADING",x="SET_CURRENT_POKEMON",f={isFetching:!0,isNewPokemonsLoading:!1,pokemons:[],nextPokemonsPage:"",currentPokemon:1},v=function(e){return{type:h,isFetching:e}},N=function(e){return{type:g,isNewPokemonsLoading:e}},y=function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(e.map((function(e){return _(e.name)})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P:return Object(a.a)(Object(a.a)({},e),{},{pokemons:Object(k.a)(n.pokemons),nextPokemonsPage:n.nextPage});case O:return Object(a.a)(Object(a.a)({},e),{},{pokemons:e.pokemons.concat(n.newPokemons),nextPokemonsPage:n.nextPage});case h:return Object(a.a)(Object(a.a)({},e),{},{isFetching:n.isFetching});case g:return Object(a.a)(Object(a.a)({},e),{},{isNewPokemonsLoading:n.isNewPokemonsLoading,next:n.nextPage});case x:return Object(a.a)(Object(a.a)({},e),{},{currentPokemon:Number(n.currentPokemon)});default:return e}},w=t(2),L=t.n(w),E=t(0),S=function(e,n){var t=e.toString();return t.length===n?t:t.length<n?"0".repeat(n-t.length)+t:"0".repeat(n)},I=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};var B=function(e){var n=e.pokemon,t=e.setCurrentPokemon,o=n;return Object(E.jsxs)("div",{className:L.a.pokemonCard,onClick:function(){return t(o.id)},children:[Object(E.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(o.id,".png"),alt:"pokemon img"}),Object(E.jsx)("div",{className:L.a.pokemonNameCard,children:I(o.name)}),Object(E.jsx)("div",{className:L.a.types,children:o.types.map((function(e){return Object(E.jsx)("div",{className:L.a.type+" "+L.a[e.type.name],children:I(e.type.name)},e.type.name)}))})]})};var F=function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:L.a.pokemonsContainer,children:e.pokemons.map((function(n){return Object(E.jsx)(B,{pokemon:n,setCurrentPokemon:e.setCurrentPokemon},n.id)}))}),e.isNewPokemonsLoading?Object(E.jsx)("div",{children:"Loading..."}):Object(E.jsx)("button",{onClick:function(){e.loadMore(e.next)},children:"Load More"})]})},T=t.p+"static/media/logo.6ce24c58.svg",M=t(15),W=t.n(M),D=function(e){return Object(E.jsx)("div",{className:W.a.preloaderWrapper,children:Object(E.jsx)("img",{className:W.a.preloader,src:T,alt:"loader"})})};var A=function(e){var n=e.pokemon,t=new Map;return null===n||void 0===n||n.stats.forEach((function(e){t.set(e.stat.name,e.base_stat)})),Object(E.jsxs)("div",{className:L.a.pokemonInfoCard,children:[Object(E.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.id,".png"),alt:n.name}),Object(E.jsx)("div",{className:L.a.pokemonNameInfo,children:I(n.name)+" #"+S(n.id,3)}),Object(E.jsx)("table",{children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Type"}),Object(E.jsx)("td",{children:n.types.map((function(e){return Object(E.jsx)("div",{className:e.type.name,children:I(e.type.name)},e.type.name)}))})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Attack"}),Object(E.jsx)("td",{children:t.get("attack")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Defense"}),Object(E.jsx)("td",{children:t.get("defense")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"HP"}),Object(E.jsx)("td",{children:t.get("hp")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"SP Attack"}),Object(E.jsx)("td",{children:t.get("special-attack")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"SP Defense"}),Object(E.jsx)("td",{children:t.get("special-defense")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Speed"}),Object(E.jsx)("td",{children:t.get("speed")})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Weight"}),Object(E.jsx)("td",{children:n.weight})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Total moves"}),Object(E.jsx)("td",{children:n.moves.length})]})]})})]})};var J=Object(i.b)((function(e){return{pokemons:e.pokemonsPage.pokemons,isPokemonsLoading:e.pokemonsPage.isFetching,isNewPokemonsLoading:e.pokemonsPage.isNewPokemonsLoading,next:e.pokemonsPage.nextPokemonsPage,currentPokemon:e.pokemonsPage.currentPokemon}}),{getPokemons:function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){var o,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(v(!0)),n.next=3,u(e);case 3:return o=n.sent,n.next=6,t(y(o.results));case 6:r=n.sent,t((s=r,c=o.next,{type:P,pokemons:s,nextPage:c})),t(v(!1));case 9:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},loadMore:function(e){return function(){var n=Object(p.a)(d.a.mark((function n(t){var o,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(N(!0)),n.next=3,b(e);case 3:return o=n.sent,n.next=6,t(y(o.results));case 6:r=n.sent,t((s=r,c=o.next,{type:O,newPokemons:s,nextPage:c})),t(N(!1));case 9:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPokemon:function(e){return{type:x,currentPokemon:e}}})((function(e){return Object(o.useEffect)((function(){e.getPokemons(12)}),[]),Object(E.jsx)("div",{className:L.a.PokemonsContainerWrapper,children:Object(E.jsx)("div",{className:L.a.PokemonsContainer,children:e.isPokemonsLoading?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:L.a.pokemonsBlock,children:[Object(E.jsx)("div",{className:L.a.pokemonsListBlock,children:Object(E.jsx)(F,Object(a.a)({},e))}),Object(E.jsx)("div",{className:L.a.pokemonInfoBlock,children:Object(E.jsx)(A,{pokemon:e.pokemons.find((function(n){return n.id===e.currentPokemon}))})})]})})})})),K=t(5),X=t(26),z=Object(K.c)({pokemonsPage:C}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,H=Object(K.e)(z,G(Object(K.a)(X.a))),R=H;window.store=H;var U=function(){return Object(E.jsx)(i.a,{store:R,children:Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("header",{className:"App-header",children:"PokeDex"}),Object(E.jsx)(J,{})]})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),s(e),c(e)}))};c.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(U,{})}),document.getElementById("root")),q()}},[[59,1,2]]]);
//# sourceMappingURL=main.65da5f4f.chunk.js.map