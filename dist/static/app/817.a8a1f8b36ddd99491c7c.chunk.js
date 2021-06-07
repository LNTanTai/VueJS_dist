(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[817],{8817:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-8"},[t.user?n("div",[n("h2",{staticClass:"jh-entity-heading"},[n("span",{domProps:{textContent:t._s(t.$t("userManagement.detail.title"))}},[t._v("User")]),t._v(" ["),n("strong",[t._v(t._s(t.user.login))]),t._v("]\n      ")]),t._v(" "),n("dl",{staticClass:"row jh-entity-details"},[n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.login"))}},[t._v("Login")])]),t._v(" "),n("dd",[n("span",[t._v(t._s(t.user.login))]),t._v(" "),t.user.activated?n("b-badge",{attrs:{variant:"success"},domProps:{textContent:t._s(t.$t("userManagement.activated"))}},[t._v("Activated")]):t._e(),t._v(" "),t.user.activated?t._e():n("b-badge",{attrs:{variant:"danger"},domProps:{textContent:t._s(t.$t("userManagement.deactivated"))}},[t._v("Deactivated")])],1),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.firstName"))}},[t._v("First Name")])]),t._v(" "),n("dd",[t._v(t._s(t.user.firstName))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.lastName"))}},[t._v("Last Name")])]),t._v(" "),n("dd",[t._v(t._s(t.user.lastName))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.email"))}},[t._v("Email")])]),t._v(" "),n("dd",[t._v(t._s(t.user.email))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.langKey"))}},[t._v("Lang Key")])]),t._v(" "),n("dd",[t._v(t._s(t.user.langKey))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.createdBy"))}},[t._v("Created By")])]),t._v(" "),n("dd",[t._v(t._s(t.user.createdBy))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.createdDate"))}},[t._v("Created Date")])]),t._v(" "),n("dd",[t.user.createdDate?n("span",[t._v("\n            "+t._s(t.$d(Date.parse(t.user.createdDate),"long"))+"\n          ")]):t._e()]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.lastModifiedBy"))}},[t._v("Last Modified By")])]),t._v(" "),n("dd",[t._v(t._s(t.user.lastModifiedBy))]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.lastModifiedDate"))}},[t._v("Last Modified Date")])]),t._v(" "),n("dd",[t.user.lastModifiedDate?n("span",[t._v("\n            "+t._s(t.$d(Date.parse(t.user.lastModifiedDate),"long"))+"\n          ")]):t._e()]),t._v(" "),n("dt",[n("span",{domProps:{textContent:t._s(t.$t("userManagement.profiles"))}},[t._v("Profiles")])]),t._v(" "),n("dd",[n("ul",{staticClass:"list-unstyled"},t._l(t.user.authorities,(function(e){return n("li",{key:e},[n("b-badge",{attrs:{variant:"info"}},[t._v(t._s(e))])],1)})),0)])]),t._v(" "),n("router-link",{attrs:{custom:"",to:{name:"JhiUser"}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.navigate;return[n("button",{staticClass:"btn btn-info",on:{click:a}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.$t("entity.action.back"))}},[t._v(" Back")])],1)]}}],null,!1,4272559376)})],1):t._e()])])},s=[];a._withStripped=!0;var r=n(538),o=n(1157),i=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(t,e,n,a){var s,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(s=t[i])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},u=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.user=null,e}return i(e,t),e.prototype.beforeRouteEnter=function(t,e,n){n((function(e){t.params.userId&&e.init(t.params.userId)}))},e.prototype.init=function(t){var e=this;this.userManagementService().get(t).then((function(t){e.user=t.data}))},d([(0,o.tB)("userService"),u("design:type",Function)],e.prototype,"userManagementService",void 0),e=d([o.wA],e),e}(r.default),c=_,v=c,l=n(1900),p=(0,l.Z)(v,a,s,!1,null,null,null);p.options.__file="src/main/webapp/app/admin/user-management/user-management-view.vue";var f=p.exports}}]);
//# sourceMappingURL=817.a8a1f8b36ddd99491c7c.chunk.js.map