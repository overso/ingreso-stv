(window.webpackJsonppruebaclarovideoaaf=window.webpackJsonppruebaclarovideoaaf||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),o=a.n(i),c=a(16),s=a(13),l=a(17),u=a(14),d=a(30),m=a(31);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={data:[],filteredMovies:[],selectedMovie:null,error:null,fetchingMovies:!1},h=Object(u.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_movies_started":return v({},e,{fetchingMovies:!0});case"add_movies_fetched":return v({},e,{data:t.payload,filteredMovies:t.payload,fetchingMovies:!1});case"add_movies_error":return v({},e,{data:[],filteredMovies:[],selectedMovie:null,fetchingMovies:!1,error:t.payload});case"filtered_movies":return v({},e,{filteredMovies:t.payload});case"detail_movie_started":return v({},e,{fetchingMovies:!0});case"detail_movie":return v({},e,{selectedMovie:t.payload});case"detail_movie_error":return v({},e,{error:t.payload});default:return e}}}),b=(a(42),a(8)),g=a(9),y=a(11),O=a(10),_=a(12),j=function(e){function t(){return Object(b.a)(this,t),Object(y.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(c.b,{to:"/movies/".concat(this.props.id)},r.a.createElement("img",{alt:this.props.title,src:this.props.image}))}}]),t}(n.PureComponent),E=function(e){return r.a.createElement("div",{className:"movies-grid"},e.movies.map(function(e){return r.a.createElement(j,{key:e.id,image:e.image_small,title:e.title,id:e.id})}))},w=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(y.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.textChange(e)},a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchInput"},r.a.createElement("span",{className:"inputTitle"},"Buscar")," ",r.a.createElement("input",{onChange:this.handleChange,className:"inputText"}))}}]),t}(n.PureComponent),x=function(e){return r.a.createElement("img",{src:e.src,className:"logo",alt:e.alt})},C=a(15),k=a.n(C),M=a(22),N=(a(45),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(O.a)(t).call(this,e))).handleSearchChange=function(e){var t=a.props.movies?a.props.movies.data:[];a.props.filterMovie(t,e.target.value,40)},a.props.fetchMovies(),a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movies-container"},r.a.createElement(x,{src:"https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg",alt:"ClaroVideo"}),r.a.createElement(w,{textChange:this.handleSearchChange}),r.a.createElement(E,{movies:this.props.movies?this.props.movies.filteredMovies:[]}))}}]),t}(n.PureComponent)),P={fetchMovies:function(){return function(){var e=Object(M.a)(k.a.mark(function e(t){var a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"add_movies_started"}),e.prev=1,e.next=4,fetch("https://mfwkweb-api.clarovideo.net/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico&api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52",{method:"GET"});case 4:return a=e.sent,e.next=7,a.json();case 7:"OK"===(n=e.sent).msg&&t({type:"add_movies_fetched",payload:n.response.groups}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:"add_movies_error",payload:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()},filterMovie:function(e,t,a){return function(){var n=Object(M.a)(k.a.mark(function n(r){var i;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:i=e.filter(function(e){return!!e.title.toLowerCase().includes(t.toLowerCase())}).slice(0,a),r({type:"filtered_movies",payload:i});case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}},S=Object(l.b)(function(e){return{movies:e.movies}},P)(N),q=function(e){return r.a.createElement("div",{className:"genresContainer"},"G\xe9nero: ",e.genres.map(function(e){return r.a.createElement("span",{key:e.id},e.desc)}))},D=function(e){return r.a.createElement("div",{className:"talentContainer"},e.name,": ",e.talents.map(function(e){return r.a.createElement("span",{key:e.id,className:"talent"},e.fullname)}))},T=function(e){return r.a.createElement("div",{className:"rolesContainer"},e.roles.map(function(e){return r.a.createElement(D,{key:e.id,name:e.desc,talents:e.talents.talent})}))},G=function(e){return r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h2",null,e.title),r.a.createElement("span",null,"(",e.publishyear,")"),r.a.createElement("span",null,e.duration),r.a.createElement("span",null,e.ratingCode))},I=function(e){function t(e){var a;Object(b.a)(this,t);var n=(a=Object(y.a)(this,Object(O.a)(t).call(this,e))).props.match.params.movieId;return a.props.detailMovie(n),a}return Object(_.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){if(!this.props.movies.selectedMovie)return r.a.createElement("div",null,r.a.createElement("h1",null,"Cargando ..."));var e=this.props.movies.selectedMovie;return r.a.createElement("div",{className:"detailContainer"},r.a.createElement(c.b,{to:"/movies/"},r.a.createElement("h2",null,"\u2b05 regresar")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("img",{src:e.image_large,alt:e.image_small_alt}),r.a.createElement(G,{title:e.title,publishyear:e.extendedcommon.media.publishyear,ratingCode:e.extendedcommon.media.rating.code,duration:e.extendedcommon.media.duration}),r.a.createElement(q,{genres:e.extendedcommon.genres.genre}),r.a.createElement(T,{roles:e.extendedcommon.roles.role}),"T\xedtulo Original: ",e.extendedcommon.media.originaltitle))}}]),t}(n.PureComponent),K={detailMovie:function(e){return function(){var t=Object(M.a)(k.a.mark(function t(a){var n,r,i;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"detail_movie_started"}),n="https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=".concat(e),t.prev=2,t.next=5,fetch(n,{method:"GET"});case 5:return r=t.sent,t.next=8,r.json();case 8:"OK"===(i=t.sent).msg&&a({type:"detail_movie",payload:i.response.group.common}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:"detail_movie_error",payload:t.t0});case 15:case"end":return t.stop()}},t,null,[[2,12]])}));return function(e){return t.apply(this,arguments)}}()}},B=Object(l.b)(function(e){return{movies:e.movies}},K)(I),H=Object(u.d)(h,{},Object(u.a)(d.a));o.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/movies",component:S,exact:!0}),r.a.createElement(s.a,{path:"/movies/:movieId",component:B,exact:!0})))},null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.142267c6.chunk.js.map