(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"18a0211a98cf7efafb29":function(e,t,a){"use strict";var r=a("bb63faa1fdb116e40ae6");a.d(t,"a",function(){return n}),r.initializeApp({apiKey:"AIzaSyDu-1IBZX6CYNv6kClSdgp8sc_znE4u19g",authDomain:"scoreboard-da8d4.firebaseapp.com",databaseURL:"https://scoreboard-da8d4.firebaseio.com",projectId:"scoreboard-da8d4",storageBucket:"scoreboard-da8d4.appspot.com",messagingSenderId:"162721031124"});var n=r.database().ref().child("data")},"327dde83ac5a6033e65c":function(e,t,a){"use strict";var r=a("deb1edf8e03fc2092ec7").a.section.withConfig({displayName:"Section"})(["margin:1em auto;&:first-child{margin-top:0;}"]);t.a=r},"6a8680b2bfbb72aa7862":function(e,t,a){"use strict";var r=a("327dde83ac5a6033e65c"),n=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  text-align: center;\n"],["\n  text-align: center;\n"]);var o=r.a.extend(n);t.a=o},"6d2fa4aff6d6e820cdec":function(e,t,a){e.exports=a.p+"92c6643198358ec6c185ba563a518579.gif"},a543d81d6023d4b5d01c:function(e,t,a){"use strict";a.r(t);var r=a("8af190b70a6bc55c6f1b"),n=a.n(r),o=(a("8a2d1b95e05b6a321e74"),a("d7dd51e1bf6bfc2c9c3d")),c=a("0d7f0986bcd2f33d8a2a"),i=a("a28fc3c963a1d4d1a2e5"),d=a("ab4cb61bcb2dc161defb"),u=a("adc20f99e57c573c589c"),s=a("d95b0cf107403b178365"),f=a("6a8680b2bfbb72aa7862"),l=a("327dde83ac5a6033e65c"),p=a("deb1edf8e03fc2092ec7").a.span.withConfig({displayName:"MyTableCell"})(["display:inline-block;padding:1rem;height:3rem;width:5rem;margin:2px;background:white;alignSelf:center;"]),b=a("54f683fcda7806277002"),g=a("b0b8e11ed395b3428845"),v=Object(b.fromJS)({});var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch(arguments[1].type){case g.a:default:return e}},_=function(e){return e.get("editPage",v)},y=function(){return Object(i.a)(_,function(e){return e.toJS()})};var h=a("f9deafbc6e25ff279618"),S=a("18a0211a98cf7efafb29");a.d(t,"EditPage",function(){return x});var j=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,r,n){var o=t&&t.defaultProps,c=arguments.length-3;if(a||0===c||(a={}),a&&o)for(var i in o)void 0===a[i]&&(a[i]=o[i]);else a||(a=o||{});if(1===c)a.children=n;else if(c>1){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+3];a.children=d}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:a,_owner:null}}}(),w=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){function t(){var e,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return a=r=O(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={data:{},addScoreRemark:"",addScoreGroup:null,addScoreValue:0},r.addNewEntry=function(e){return r.state.addScoreValue&&r.state.addScoreGroup&&r.state.addScoreRemark?(r.props.dispatch(function(e){return{type:g.a,data:e}}({groups:r.state.data.groups,addScoreRemark:r.state.addScoreRemark,addScoreGroup:r.state.addScoreGroup,addScoreValue:r.state.addScoreValue,index:r.state.data&&r.state.data.logs&&r.state.data.logs.length||0})),r.setState({addScoreRemark:""}),r.setState({addScoreGroup:null}),r.setState({addScoreValue:0}),addScoreGroup.selectedIndex=0,!0):null},O(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.PureComponent),w(t,[{key:"componentWillMount",value:function(){var e=this;S.a.on("value",function(t){t.exists()&&function(t){e.setState({data:t.val()})}(t)})}},{key:"render",value:function(){var e=this,t=this.state.data;return j("div",{},void 0,j(c.Helmet,{}),j("div",{},void 0,j(f.a,{},void 0,t&&t.groups?j(l.a,{},void 0,j("div",{className:"myTable",style:{background:"lightgray",padding:"1rem 0"}},void 0,j("div",{className:"tableRow groupName"},void 0,t.groups.map(function(e,t){return j(p,{className:"groupNameItem"},t,e.label)})),j("div",{className:"tableRow groupScore",style:{background:"lightgray"}},void 0,t.groups.map(function(e,t){return j(p,{className:"groupScoreItem"},t,e.data[0])}))),j("hr",{style:{margin:"2rem 0"}}),j("div",{style:{margin:"auto",width:"70%"}},void 0,j("div",{style:{display:"flex",flexDirection:"row",padding:"3px 10px"}},void 0,j("div",{style:{flex:3}},void 0,"Remark:"),j("input",{id:"addScoreRemark",onChange:function(t){e.setState({addScoreRemark:t.target.value})},value:this.state.addScoreRemark,style:{flex:7,marginLeft:10,border:"1px solid lightgray"},type:"text"})),j("div",{style:{display:"flex",flexDirection:"row",padding:"3px 10px"}},void 0,j("div",{style:{flex:3}},void 0,"Group:"),j("div",{style:{flex:7,marginLeft:10,border:"1px solid lightgray"}},void 0,j("select",{id:"addScoreGroup",onChange:function(t){e.setState({addScoreGroup:t.target.value})},value:this.state.addScoreGroup,style:{width:"100%"}},void 0,j("option",{value:""},void 0,"Select"),t.groups.map(function(e,t){return j("option",{value:t},t,e.label)})))),j("div",{style:{display:"flex",flexDirection:"row",padding:"3px 10px"}},void 0,j("div",{style:{flex:3}},void 0,"Value:"),j("input",{id:"addScoreValue",onChange:function(t){e.setState({addScoreValue:t.target.value})},value:this.state.addScoreValue,style:{flex:7,marginLeft:10,border:"1px solid lightgray"},type:"number"})),j("button",{style:{marginTop:"1rem",backgroundColor:"lightgreen",padding:"0.5rem 1rem",borderRadius:15,border:"3px solid salmon"},onClick:this.addNewEntry},void 0,"Submit")),j("hr",{style:{margin:"2rem 0"}}),j("div",{className:"logTable"},void 0,j("h3",{},void 0,"Records"),t&&t.logs?t.logs.map(function(e,t){return j("div",{className:"logItem"},t,j("span",{},void 0,t+1),j("span",{className:"message"},void 0,e.message),j("span",{className:"group"},void 0,e.group),j("span",{className:"value"},void 0,e.value))}):j("div",{},void 0,"No Item Found"))):j("div",{},void 0,j("img",{height:"350",src:a("6d2fa4aff6d6e820cdec")})))))}}]),t}(),k=Object(i.b)({editpage:y()});var R=Object(o.connect)(k,function(e){return{dispatch:e}}),E=Object(s.a)({key:"editPage",reducer:m}),P=Object(u.a)({key:"editPage",saga:h.a});t.default=Object(d.compose)(E,P,R)(x)},adc20f99e57c573c589c:function(e,t,a){"use strict";var r=a("8af190b70a6bc55c6f1b"),n=a.n(r),o=a("8a2d1b95e05b6a321e74"),c=a.n(o),i=a("5ef9de3df8d92ea0e41c"),d=a.n(i),u=a("a1cf5d6fa4ed65a6ddd5"),s=a.n(u),f=a("f3b0ff1628e56352bcbf"),l=a.n(f),p=a("5fa3f8487e09c6182715"),b=a.n(p),g=a("6a4f9c383785f9168266"),v=a.n(g),m=a("f2873ecf7390fe7d7c89"),_=a.n(m),y=a("cc13decd9f9c09598c2f"),h="@@saga-injector/restart-on-remount",S="@@saga-injector/daemon",j="@@saga-injector/once-till-unmount",w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},O=[h,S,j],x=function(e){return v()(b()(e)&&!s()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},k=function(e){var t={saga:l.a,mode:function(e){return b()(e)&&O.includes(e)}};v()(_()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function R(e){return Object(y.a)(e),{injectSaga:function(e,t){return function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];t||Object(y.a)(e);var o=w({},r,{mode:r.mode||h}),c=o.saga,i=o.mode;x(a),k(o);var d=Reflect.has(e.injectedSagas,a);(!d||d&&i!==S&&i!==j)&&(e.injectedSagas[a]=w({},o,{task:e.runSaga(c,n)}))}}(e,!0),ejectSaga:function(e,t){return function(a){if(t||Object(y.a)(e),x(a),Reflect.has(e.injectedSagas,a)){var r=e.injectedSagas[a];r.mode&&r.mode!==S&&(r.task.cancel(),e.injectedSagas[a]="done")}}}(e,!0)}}var E=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,a=e.saga,r=e.mode;return function(e){var o=function(o){function c(){var e,t,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=a=P(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(n))),a.injectors=R(a.context.store),P(a,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,n.a.Component),E(c,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:a,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return n.a.createElement(e,this.props)}}]),c}();return o.WrappedComponent=e,o.contextTypes={store:c.a.object.isRequired},o.displayName="withSaga("+(e.displayName||e.name||"Component")+")",d()(o,e)}}},b0b8e11ed395b3428845:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r="app/EditPage/ADD_ENTRY"},cc13decd9f9c09598c2f:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var r=a("f2873ecf7390fe7d7c89"),n=a.n(r),o=a("f3b0ff1628e56352bcbf"),c=a.n(o),i=a("d3a850c4000d77bccc89"),d=a.n(i),u=a("6a4f9c383785f9168266"),s=a.n(u);function f(e){var t={dispatch:c.a,subscribe:c.a,getState:c.a,replaceReducer:c.a,runSaga:c.a,injectedReducers:d.a,injectedSagas:d.a};s()(n()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,a){"use strict";var r=a("8af190b70a6bc55c6f1b"),n=a.n(r),o=a("8a2d1b95e05b6a321e74"),c=a.n(o),i=a("5ef9de3df8d92ea0e41c"),d=a.n(i),u=a("6a4f9c383785f9168266"),s=a.n(u),f=a("a1cf5d6fa4ed65a6ddd5"),l=a.n(f),p=a("f3b0ff1628e56352bcbf"),b=a.n(p),g=a("5fa3f8487e09c6182715"),v=a.n(g),m=a("cc13decd9f9c09598c2f"),_=a("491cc2e27aa2b4221847");function y(e){return Object(m.a)(e),{injectReducer:function(e,t){return function(a,r){t||Object(m.a)(e),s()(v()(a)&&!l()(a)&&b()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,a)&&e.injectedReducers[a]===r||(e.injectedReducers[a]=r,e.replaceReducer(Object(_.a)(e.injectedReducers)))}}(e,!0)}}var h=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.a=function(e){var t=e.key,a=e.reducer;return function(e){var r=function(r){function o(){var e,t,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,n=Array(r),c=0;c<r;c++)n[c]=arguments[c];return t=a=S(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(n))),a.injectors=y(a.context.store),S(a,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,n.a.Component),h(o,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,a)}},{key:"render",value:function(){return n.a.createElement(e,this.props)}}]),o}();return r.WrappedComponent=e,r.contextTypes={store:c.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",d()(r,e)}}},f9deafbc6e25ff279618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return editPageProcess});var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("6c68d13fe9e3e77d8fc4"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("b0b8e11ed395b3428845"),_utils_firebase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("18a0211a98cf7efafb29"),_marked=regeneratorRuntime.mark(editPageProcess);function addingEntry(params){var _params$data=params.data,groups=_params$data.groups,addScoreGroup=_params$data.addScoreGroup,addScoreRemark=_params$data.addScoreRemark,addScoreValue=_params$data.addScoreValue,index=_params$data.index,value={group:eval(addScoreGroup),message:addScoreRemark,value:eval(addScoreValue)};_utils_firebase__WEBPACK_IMPORTED_MODULE_2__.a.child("logs").child(index).set(value);var newValue=groups[value.group].data[0]+value.value;_utils_firebase__WEBPACK_IMPORTED_MODULE_2__.a.child("groups").child(value.group).child("data").child(0).set(newValue)}function editPageProcess(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.a)(_constants__WEBPACK_IMPORTED_MODULE_1__.a,addingEntry);case 2:case"end":return e.stop()}},_marked,this)}}}]);