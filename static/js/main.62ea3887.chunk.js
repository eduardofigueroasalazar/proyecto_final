(this.webpackJsonpproyecto_final=this.webpackJsonpproyecto_final||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=(n(80),n(33)),s=(n.p,n(81),n(17)),u=n(18),l=n(20),m=n(19),p=n.p+"static/media/pokemonlogo.6e223bd2.png",d=(n(22),n(2)),h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"header",style:{backgroundColor:"#92a8d1"},children:[Object(d.jsx)("img",{alt:"header",className:"logo",src:p}),Object(d.jsx)("p",{children:"Pokemon Go API"})]})}}]),n}(a.a.Component),j=n(50),f=n(151),b=n(149),v=n(147),g=n(148),k=n(7),O=n.n(k),x=n(10);function P(e){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return T.apply(this,arguments)}function T(){return(T=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={bug:"#729f3f",dragon:"#6A7BAF",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#CC9F4F",normal:"#a4acaf",pyschic:"#E5709B",steel:"#89A1B0",dark:"#707070",electric:"#eed535",fighting:"#CB5F48",flying:"#7DA6DE",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#B2A061",water:"#4592c4"},w={bug:"bicho",dragon:"drag\xf3n",fairy:"hada",fire:"fuego",ghost:"fantasma",ground:"tierra",normal:"normal",psychic:"ps\xedquico",steel:"acero",dark:"siniestro",electric:"el\xe9ctrico",fighting:"lucha",flying:"volador",grass:"planta",ice:"hielo",poison:"veneno",rock:"roca",water:"agua",shadow:"oscuro",unknown:"desconocido"},C=n(62);Object(C.a)({stench:"Hedor",drizzle:"Llovizna","speed-boost":"Impulso","battle-armor":"Armadura batalla",sturdy:"Robustez",damp:"Humedad",limber:"Flexibilidad","sand-veil":"Velo arena",static:"Electricidad est\xe1tica","volt-absorb":"Absorbe electricidad","water-absorb":"Absorbe agua",oblivious:"Despiste","cloud-nine":"Aclimataci\xf3n","compound-eyes":"Ojo compuesto",insomnia:"Insomnio","color-change":"Cambio color",immunity:"Inmunidad","flash-fire":"Absorbe fuego","shield-dust":"Polvo escudo","own-tempo":"","suction-cups":"",intimidate:"","shadow-tag":"","rough-skin":"","wonder-guard":"",levitate:"","effect-spore":"",synchronize:"","clear-body":"","natural-cure":"","lightning-rod":"","serene-grace":"","swift-swim":"",chlorophyll:"",illuminate:"",trace:"","huge-power":"","poison-point":"","inner-focus":"","magma-armor":"","water-veil":"","magnet-pull":"",soundproof:"","rain-dish":"","sand-stream":"Chorro arena",pressure:"Presi\xf3n"},"insomnia","Insomnio");var N=function(e){var t=e.pokemon;return Object(d.jsxs)("div",{className:"Ficha",children:[Object(d.jsx)("div",{className:"Ficha__name",children:Object(d.jsxs)("p",{className:"title",children:["#",t.id," ",t.name]})}),Object(d.jsxs)("div",{className:"Ficha__img",children:[Object(d.jsx)("img",{src:t.sprites.front_default}),Object(d.jsx)("img",{src:t.sprites.front_shiny})]}),Object(d.jsx)("div",{className:"Ficha__types",children:t.types.map((function(e){return Object(d.jsx)("div",{className:"Ficha__type",style:{backgroundColor:I[e.type.name]},children:w[e.type.name]})}))}),Object(d.jsxs)("div",{className:"Ficha__info",children:[Object(d.jsxs)("div",{className:"Ficha__data Ficha__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Peso"}),Object(d.jsx)("p",{children:t.weight})]}),Object(d.jsxs)("div",{className:"Ficha__data Ficha__data--weight",children:[Object(d.jsx)("p",{className:"title",children:"Altura"}),Object(d.jsx)("p",{children:t.height})]}),Object(d.jsxs)("div",{className:"contenedorBotones",children:[Object(d.jsx)("div",{className:"btn",children:Object(d.jsx)("button",{onClick:function(){return function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);null==localStorage.getItem("miEquipo")&&localStorage.setItem("miEquipo","[]");var n=JSON.parse(localStorage.getItem("miEquipo")),o=n.indexOf(e);n.push(e);var a=n.filter((function(e,t){return n.indexOf(e)===t}));-1!=o?alert("Pok\xe9mon "+t+" ya se encuentra agregado a tu equipo."):alert("Pok\xe9mon "+t+" agregado a tu equipo."),localStorage.setItem("miEquipo",JSON.stringify(a))}(t.name)},children:"Agregar a mi equipo."})}),Object(d.jsx)("div",{className:"btn",children:Object(d.jsx)("button",{onClick:function(){return function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);null==localStorage.getItem("miEquipo")&&localStorage.setItem("miEquipo","[]");var n=JSON.parse(localStorage.getItem("miEquipo")),o=n.indexOf(e);-1!=o?(n.splice(o,1),alert("Pok\xe9mon "+t+" ha sido quitado de tu equipo.")):alert("Pok\xe9mon "+t+" no esta en tu equipo."),localStorage.setItem("miEquipo",JSON.stringify(n))}(t.name)},children:"Quitar de mi equipo."})})]})]})]})},_=n.p+"static/media/cargando.176efa05.gif";var E=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),i=Object(c.a)(r,2),s=i[0],u=i[1],l=Object(o.useState)(""),m=Object(c.a)(l,2),p=m[0],h=m[1],j=Object(o.useState)(!0),f=Object(c.a)(j,2),b=f[0],v=f[1],g="https://pokeapi.co/api/v2/pokemon/";Object(o.useEffect)((function(){function e(){return(e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(g);case 2:return t=e.sent,u(t.next),h(t.previous),e.next=7,T(t.results);case 7:e.sent,v(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,P(s);case 3:return t=e.sent,e.next=6,T(t.results);case 6:u(t.next),h(t.previous),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return");case 2:return v(!0),e.next=5,P(p);case 5:return t=e.sent,e.next=8,T(t.results);case 8:u(t.next),h(t.previous),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:b?Object(d.jsxs)("h1",{children:[" ",Object(d.jsx)("img",{src:_,className:"cargandoPokemon"})," Cargando registros"]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("button",{onClick:S,children:"Anterior"}),Object(d.jsx)("button",{onClick:k,children:"Siguiente"})]}),Object(d.jsx)("div",{className:"grid-container",children:n.map((function(e,t){return Object(d.jsx)(N,{pokemon:e},t)}))})]})})},q=n(69),F=n(63),G=n.n(F).a.create({baseURL:"https://pokeapi.co/api/v2"}),A=function(){return G({method:"GET",url:"/generation/"})},L=function(e){return G({method:"GET",url:e})},D=function(e){return G({method:"GET",url:"/pokemon/".concat(e)})},B=function(){return G({method:"GET",url:"/pokemon/?offset1=&limit=1118"})},J=function(){return G({method:"GET",url:"/type/"})},M=n(6),U=n.n(M),z=n(152),H=n(153),R=n(150),W=function(e){var t=e.generaciones,n=void 0===t?{}:t,o=e.onChange,a=void 0===o?function(){}:o,r=e.selectedGeneracion;return Object.entries(n).length?Object(d.jsx)("div",{className:"combobox",children:Object(d.jsxs)(z.a,{variant:"filled",children:[Object(d.jsx)(H.a,{htmlFor:"filled-age-native-simple",children:"Listado"}),Object(d.jsxs)(R.a,{native:!0,value:r,onChange:a,children:[Object(d.jsx)("option",{"aria-label":"None",value:"",children:"Seleccione generaci\xf3n"}),n.map((function(e,t){var n=e.name,o=e.url;return Object(d.jsx)("option",{value:o,children:n},"".concat(n,"_").concat(t))}))]})]})}):null},Q=function(e){var t=e.pokemonesGeneracion,n=void 0===t?[]:t;return n.length?Object(d.jsx)("div",{className:"grid-container",children:n.map((function(e,t){return Object(d.jsx)(N,{pokemon:e},"".concat(t,"_").concat(e.id))}))}):Object(d.jsx)("h1",{children:"No hay informaci\xf3n."})},V=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).callback=function(){(0,o.props.onCall)(o.state.generaciones)},o.fetchGeneraciones=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,n=t.data,a=n.results||[],o.setState({generaciones:a},o.callback);case 6:case"end":return e.stop()}}),e)}))),o.fetchInformacionGeneracion=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,r,i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:a=e.sent,r=a.data,i=r.pokemon_species||[],n=i,Object(q.a)(n),c=n,o.setState({pokemonesGeneracion:[]}),c.forEach((function(e){return o.fetchInformacionPokemon(e.name)})),o.setState({generacionInformacion:i});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.fetchInformacionPokemon=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,n.data,(a=o.state.pokemonesGeneracion).push(n.data),o.ordenamientoListaPokemon(a),o.setState({pokemonesGeneracion:a});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.ordenamientoListaPokemon=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0}));return t},o.onChangeGeneraciones=function(e){var t=e.target.value;o.setState({generacionSelected:t}),o.fetchInformacionGeneracion(t)},o.state={generaciones:[],generacionSelected:"",generacionInformacion:void 0,pokemonesGeneracion:[]},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchGeneraciones()}},{key:"render",value:function(){var e=this,t=this.state,n=t.generaciones,o=t.generacionSelected,a=(t.generacionInformacion,t.pokemonesGeneracion);n.length.isFound;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"btn",children:Object(d.jsx)("button",{onClick:function(){e.fetchGeneraciones()},children:"Cargar generaci\xf3nes"})}),Object(d.jsx)(W,{generaciones:n,onChange:this.onChangeGeneraciones,selected:o}),Object(d.jsx)(Q,{pokemonesGeneracion:a})]})}}]),n}(o.Component);V.props={onCall:U.a.func},V.defaultProps={onCall:function(){}};var K=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).obtenerEquipoPokemon=function(){(o.setState({pokemonesEquipo:[]}),null!=localStorage.getItem("miEquipo"))&&JSON.parse(localStorage.getItem("miEquipo")).forEach((function(e){return o.fetchInformacionPokemon(e)}))},o.fetchInformacionPokemon=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,n.data,(a=o.state.pokemonesEquipo).push(n.data),o.ordenamientoListaPokemon(a),o.setState({pokemonesEquipo:a});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.ordenamientoListaPokemon=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0}));return t},o.listarEquipo=function(){var e=JSON.parse(localStorage.getItem("miEquipo")).reduce((function(e,t){return e+" "+t.charAt(0).toUpperCase()+t.slice(1)}),"");alert("Tu equipo esta conformado por: "+e)},o.state={pokemonesEquipo:[]},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.obtenerEquipoPokemon()}},{key:"render",value:function(){var e=this,t=this.state.pokemonesEquipo;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("button",{onClick:function(){e.obtenerEquipoPokemon()},children:"Cargar equipo"}),Object(d.jsx)("button",{onClick:function(){e.listarEquipo()},children:"Listar equipo"})]}),Object(d.jsx)(Q,{pokemonesGeneracion:t})]})}}]),n}(o.Component),X=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).fetchInformacionPokemon=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,n.data,console.log(n.data.id),localStorage.setItem("idPokemonTiempo",n.data.id),localStorage.setItem("namePokemonTiempo",n.data.name),localStorage.setItem("spritePokemonTiempo",n.data.sprites.front_default),localStorage.setItem("spriteShinyPokemonTiempo",n.data.sprites.front_shiny);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),localStorage.setItem("idPokemonTiempo",""),localStorage.setItem("namePokemonTiempo",""),localStorage.setItem("spritePokemonTiempo",""),localStorage.setItem("spriteShinyPokemonTiempo",""),o.state={contador:1,idPokemonTiempo:"",namePokemonTiempo:"",spritePokemonTiempo:"",spriteShinyPokemonTiempo:""},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalo=setInterval((function(){e.fetchInformacionPokemon(e.state.contador),e.setState({contador:e.state.contador+1,idPokemonTiempo:localStorage.getItem("idPokemonTiempo"),namePokemonTiempo:localStorage.getItem("namePokemonTiempo"),spritePokemonTiempo:localStorage.getItem("spritePokemonTiempo"),spriteShinyPokemonTiempo:localStorage.getItem("spriteShinyPokemonTiempo")})}),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalo)}},{key:"render",value:function(){var e=this.state,t=(e.contador,e.idPokemonTiempo,e.namePokemonTiempo),n=e.spritePokemonTiempo;e.spriteShinyPokemonTiempo;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"Ficha__img",children:Object(d.jsx)("img",{src:n})}),Object(d.jsx)("div",{className:"Ficha__name",children:Object(d.jsxs)("p",{className:"title",children:[" ",t," "]})}),Object(d.jsx)("div",{children:Object(d.jsx)("audio",{controls:!0,autoplay:!0,src:"https://vgmsite.com/soundtracks/super-mario-world-original-soundtrack/icmlynpk/28%20-%20Ending.mp3"})})]})}}]),n}(o.Component),Y=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).fetchInformacionPokemon=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,n.data,console.log(n.data.id),localStorage.setItem("idPokemonTiempo",n.data.id),localStorage.setItem("namePokemonTiempo",n.data.name),localStorage.setItem("spritePokemonTiempo",n.data.sprites.front_default),localStorage.setItem("spriteShinyPokemonTiempo",n.data.sprites.front_shiny);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.idPokemonAleatorio=function(){return Math.round(1117*Math.random()+1)},localStorage.setItem("idPokemonTiempo",""),localStorage.setItem("namePokemonTiempo",""),localStorage.setItem("spritePokemonTiempo",""),localStorage.setItem("spriteShinyPokemonTiempo",""),o.state={contador:151,idPokemonTiempo:"",namePokemonTiempo:"",spritePokemonTiempo:"",spriteShinyPokemonTiempo:""},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalo=setInterval((function(){e.fetchInformacionPokemon(e.state.contador),e.setState({contador:e.idPokemonAleatorio(),idPokemonTiempo:localStorage.getItem("idPokemonTiempo"),namePokemonTiempo:localStorage.getItem("namePokemonTiempo"),spritePokemonTiempo:localStorage.getItem("spritePokemonTiempo"),spriteShinyPokemonTiempo:localStorage.getItem("spriteShinyPokemonTiempo")})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalo)}},{key:"render",value:function(){var e=this.state,t=(e.contador,e.idPokemonTiempo,e.namePokemonTiempo,e.spritePokemonTiempo,e.spriteShinyPokemonTiempo);return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"Ficha__img",children:Object(d.jsx)("img",{src:t})}),Object(d.jsx)("div",{children:Object(d.jsx)("audio",{controls:!0,autoplay:!0,src:"https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3"})})]})}}]),n}(o.Component),Z=function(e){var t=e.tipos,n=void 0===t?{}:t,o=e.onChange,a=void 0===o?function(){}:o,r=e.tipoSeleccionado;return Object.entries(n).length?Object(d.jsx)("div",{className:"combobox",children:Object(d.jsxs)(z.a,{variant:"filled",children:[Object(d.jsx)(H.a,{htmlFor:"filled-age-native-simple",children:"Listado"}),Object(d.jsxs)(R.a,{native:!0,value:r,onChange:a,children:[Object(d.jsx)("option",{"aria-label":"None",value:"",children:"Seleccione tipo"}),n.map((function(e,t){var n=e.name;return Object(d.jsx)("option",{value:n,children:w[n]},"".concat(n,"_").concat(t))}))]}),Object(d.jsx)(d.Fragment,{})]})}):null},$=n(144),ee=n(145),te=n(146),ne=function(e){var t=e.informacionPokemon,n=void 0===t?{}:t;return Object.entries(n).length?Object(d.jsx)($.a,{children:Object(d.jsx)(ee.a,{children:Object(d.jsxs)(te.a,{variant:"h5",component:"h2",children:[Object(d.jsx)("h",{children:"Cantidad de Pok\xe9mones por tipo:"})," ",n.length]})})}):Object(d.jsx)("h3",{children:"Sin informaci\xf3n."})},oe=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).callback=function(){(0,o.props.onCall)(o.state.tipos)},o.obtenerTodosLosPokemones=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.setState({tipoPokemon:[]}),e.next=3,B();case 3:t=e.sent,n=t.data,a=n.results||[],o.setState({informacionPokemones:[]}),a.map((function(e,t){var n=e.name;return o.obtenerInformacionDePokemones(n)}));case 8:case"end":return e.stop()}}),e)}))),o.cuentaLosTipos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=o.state.tipoSeleccionado;e.filter((function(e){return t}))},o.agregarTipos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=o.state,n=(t.tipoSeleccionado,t.tipoPokemon);n.push(e),o.setState({tipoPokemon:n})},o.filtrarPokemonTipo=function(){var e=o.state,t=e.tipoPokemon,n=e.tipoSeleccionado,a=0,r=0;for(a=0;a<t.length;a++)t===n?(console.log("if: "+t),r++):console.log("else: "+t);console.log(r)},o.obtenerInformacionDePokemones=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,a=n.data,a.types.map((function(e,t){var n=e.type;return o.agregarTipos(n.name),n.name}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.obtenerTipos=Object(x.a)(O.a.mark((function e(){var t,n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,n=t.data,a=n.results||[],o.setState({tipos:a},o.callback);case 6:case"end":return e.stop()}}),e)}))),o.onChangeTipo=function(e){var t=e.target.value;o.setState({tipoSeleccionado:t}),o.filtrarPokemonTipo()},o.state={informacionPokemones:[],tipos:[],tipoSeleccionado:"",cantidad:[],tipoPokemon:[]},o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.obtenerTipos()}},{key:"render",value:function(){var e=this,t=this.state,n=t.tipos,o=(t.informacionPokemones,t.tipoSeleccionado),a=t.tipoPokemon;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("button",{onClick:function(){e.obtenerTodosLosPokemones()},children:"Cargar Pok\xe9mones"}),Object(d.jsx)("div",{children:o})]}),Object(d.jsx)(Z,{tipos:n,onChange:this.onChangeTipo,selected:o}),Object(d.jsx)(ne,{informacionPokemon:a})]})}}]),n}(o.Component);oe.props={onCall:U.a.func},oe.defaultProps={onCall:function(){}};var ae=function(){var e=Object(o.useState)("1"),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.a,{value:n,children:[Object(d.jsx)(v.a,{position:"static",children:Object(d.jsxs)(f.a,{onChange:function(e,t){return a(t)},children:[Object(d.jsx)(g.a,{label:"Inicio",value:"1"}),Object(d.jsx)(g.a,{label:"Listado de Pok\xe9mon",value:"2"}),Object(d.jsx)(g.a,{label:"Pok\xe9mon por generaci\xf3n",value:"3"}),Object(d.jsx)(g.a,{label:"Tu equipo Pok\xe9mon",value:"4"}),Object(d.jsx)(g.a,{label:"Pok\xe9mon por tiempo",value:"5"}),Object(d.jsx)(g.a,{label:"Pok\xe9mon aleatorio",value:"6"})]})}),Object(d.jsx)(b.a,{value:"1",children:Object(d.jsx)("p",{children:"Bienvenido a los uso de API de Pokemon GO."})}),Object(d.jsx)(b.a,{value:"2",children:Object(d.jsx)(E,{})}),Object(d.jsx)(b.a,{value:"3",children:Object(d.jsx)(V,{})}),Object(d.jsx)(b.a,{value:"4",children:Object(d.jsx)(K,{})}),Object(d.jsx)(b.a,{value:"5",children:Object(d.jsx)(X,{})}),Object(d.jsx)(b.a,{value:"6",children:Object(d.jsx)(Y,{})})]})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root")),re()},22:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.62ea3887.chunk.js.map