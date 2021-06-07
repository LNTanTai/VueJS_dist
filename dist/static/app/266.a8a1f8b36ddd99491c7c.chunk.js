(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[266],{5773:function(e,t,n){"use strict";var a=n(1157),o=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),s=function(e,t,n,a){var o,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.abbreviate=function(e,t){return void 0===t&&(t="..."),e.length<30?e:e?e.substring(0,15)+t+e.slice(-10):""},t.prototype.byteSize=function(e){return this.formatAsBytes(this.size(e))},t.prototype.openFile=function(e,t){if(window.navigator&&window.navigator.msSaveOrOpenBlob){for(var n=atob(t),a=new Array(n.length),o=0;o<n.length;o++)a[o]=n.charCodeAt(o);var s=new Uint8Array(a),i=new Blob([s],{type:e});window.navigator.msSaveOrOpenBlob(i)}else{var r="data:"+e+";base64,"+t,p=window.open();p.document.write('<iframe src="'+r+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')}},t.prototype.toBase64=function(e,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){var n=e.target.result.substr(e.target.result.indexOf("base64,")+"base64,".length);t(n)}},t.prototype.clearInputImage=function(e,t,n,a,o){e&&n&&a&&(Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=null),Object.prototype.hasOwnProperty.call(e,a)&&(e[a]=null),t&&o&&t.nativeElement.querySelector("#"+o)&&(t.nativeElement.querySelector("#"+o).value=null))},t.prototype.endsWith=function(e,t){return-1!==t.indexOf(e,t.length-e.length)},t.prototype.paddingSize=function(e){return this.endsWith("==",e)?2:this.endsWith("=",e)?1:0},t.prototype.size=function(e){return e.length/4*3-this.paddingSize(e)},t.prototype.formatAsBytes=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" bytes"},t.prototype.setFileData=function(e,t,n,a){if(e&&e.target.files&&e.target.files[0]){var o=e.target.files[0];if(a&&!/^image\//.test(o.type))return;this.toBase64(o,(function(e){t[n]=e,t[n+"ContentType"]=o.type}))}},t.prototype.downloadFile=function(e,t,n){for(var a=atob(t),o=new Array(a.length),s=0;s<a.length;s++)o[s]=a.charCodeAt(s);var i=new Uint8Array(o),r=new Blob([i],{type:e}),p=document.createElement("a");p.href=window.URL.createObjectURL(r),p.download=n,p.target="_blank",p.click()},t.prototype.parseLinks=function(e){var t={};if(null===e||-1===e.indexOf(","))return t;var n=e.split(",");return n.forEach((function(e){if(-1!==e.indexOf(">;")){var n=e.split(">;"),a=n[0].replace(/<(.*)/,"$1").trim(),o={page:null};a.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),(function(e,t,n,a){o[t]=a}));var s=o.page;"string"===typeof s&&(s=parseInt(s,10));var i=n[1].replace(/rel="(.*)"/,"$1").trim();t[i]=s}})),t},t=s([a.wA],t),t}(a.w3);t["Z"]=i},8266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-8"},[n("form",{attrs:{name:"editForm",role:"form",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.save()}}},[n("h2",{attrs:{id:"space1App.spaceEvent.home.createOrEditLabel","data-cy":"SpaceEventCreateUpdateHeading"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.home.createOrEditLabel"))}},[e._v("\n        Create or edit a SpaceEvent\n      ")]),e._v(" "),n("div",[e.spaceEvent.id?n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"id"},domProps:{textContent:e._s(e.$t("global.field.id"))}},[e._v("ID")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.spaceEvent.id,expression:"spaceEvent.id"}],staticClass:"form-control",attrs:{type:"text",id:"id",name:"id",readonly:""},domProps:{value:e.spaceEvent.id},on:{input:function(t){t.target.composing||e.$set(e.spaceEvent,"id",t.target.value)}}})]):e._e(),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-name"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.name"))}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.spaceEvent.name.$model,expression:"$v.spaceEvent.name.$model"}],staticClass:"form-control",class:{valid:!e.$v.spaceEvent.name.$invalid,invalid:e.$v.spaceEvent.name.$invalid},attrs:{type:"text",name:"name",id:"space-event-name","data-cy":"name",required:""},domProps:{value:e.$v.spaceEvent.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spaceEvent.name,"$model",t.target.value)}}}),e._v(" "),e.$v.spaceEvent.name.$anyDirty&&e.$v.spaceEvent.name.$invalid?n("div",[e.$v.spaceEvent.name.required?e._e():n("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("entity.validation.required"))}},[e._v("\n              This field is required.\n            ")])]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-date"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.date"))}},[e._v("Date")]),e._v(" "),n("b-input-group",{staticClass:"mb-3"},[n("b-input-group-prepend",[n("b-form-datepicker",{staticClass:"form-control",attrs:{"aria-controls":"space-event-date",name:"date",locale:e.currentLanguage,"button-only":"","today-button":"","reset-button":"","close-button":""},model:{value:e.$v.spaceEvent.date.$model,callback:function(t){e.$set(e.$v.spaceEvent.date,"$model",t)},expression:"$v.spaceEvent.date.$model"}})],1),e._v(" "),n("b-form-input",{staticClass:"form-control",class:{valid:!e.$v.spaceEvent.date.$invalid,invalid:e.$v.spaceEvent.date.$invalid},attrs:{id:"space-event-date","data-cy":"date",type:"text",name:"date",required:""},model:{value:e.$v.spaceEvent.date.$model,callback:function(t){e.$set(e.$v.spaceEvent.date,"$model",t)},expression:"$v.spaceEvent.date.$model"}})],1),e._v(" "),e.$v.spaceEvent.date.$anyDirty&&e.$v.spaceEvent.date.$invalid?n("div",[e.$v.spaceEvent.date.required?e._e():n("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("entity.validation.required"))}},[e._v("\n              This field is required.\n            ")])]):e._e()],1),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-description"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.description"))}},[e._v("Description")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.spaceEvent.description.$model,expression:"$v.spaceEvent.description.$model"}],staticClass:"form-control",class:{valid:!e.$v.spaceEvent.description.$invalid,invalid:e.$v.spaceEvent.description.$invalid},attrs:{name:"description",id:"space-event-description","data-cy":"description",required:""},domProps:{value:e.$v.spaceEvent.description.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spaceEvent.description,"$model",t.target.value)}}}),e._v(" "),e.$v.spaceEvent.description.$anyDirty&&e.$v.spaceEvent.description.$invalid?n("div",[e.$v.spaceEvent.description.required?e._e():n("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("entity.validation.required"))}},[e._v("\n              This field is required.\n            ")])]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-photo"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.photo"))}},[e._v("Photo")]),e._v(" "),n("div",[e.spaceEvent.photo?n("img",{staticStyle:{"max-height":"100px"},attrs:{src:"data:"+e.spaceEvent.photoContentType+";base64,"+e.spaceEvent.photo,alt:"spaceEvent image"}}):e._e(),e._v(" "),e.spaceEvent.photo?n("div",{staticClass:"form-text text-danger clearfix"},[n("span",{staticClass:"pull-left"},[e._v(e._s(e.spaceEvent.photoContentType)+", "+e._s(e.byteSize(e.spaceEvent.photo)))]),e._v(" "),n("button",{staticClass:"btn btn-secondary btn-xs pull-right",attrs:{type:"button"},on:{click:function(t){return e.clearInputImage("photo","photoContentType","file_photo")}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)]):e._e(),e._v(" "),n("input",{ref:"file_photo",attrs:{type:"file",id:"file_photo","data-cy":"photo",accept:"image/*"},domProps:{textContent:e._s(e.$t("entity.action.addimage"))},on:{change:function(t){return e.setFileData(t,e.spaceEvent,"photo",!0)}}})]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.spaceEvent.photo.$model,expression:"$v.spaceEvent.photo.$model"}],staticClass:"form-control",class:{valid:!e.$v.spaceEvent.photo.$invalid,invalid:e.$v.spaceEvent.photo.$invalid},attrs:{type:"hidden",name:"photo",id:"space-event-photo","data-cy":"photo",required:""},domProps:{value:e.$v.spaceEvent.photo.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.spaceEvent.photo,"$model",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.spaceEvent.photoContentType,expression:"spaceEvent.photoContentType"}],staticClass:"form-control",attrs:{type:"hidden",name:"photoContentType",id:"space-event-photoContentType"},domProps:{value:e.spaceEvent.photoContentType},on:{input:function(t){t.target.composing||e.$set(e.spaceEvent,"photoContentType",t.target.value)}}}),e._v(" "),e.$v.spaceEvent.photo.$anyDirty&&e.$v.spaceEvent.photo.$invalid?n("div",[e.$v.spaceEvent.photo.required?e._e():n("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("entity.validation.required"))}},[e._v("\n              This field is required.\n            ")])]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-type"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.type"))}},[e._v("Type")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.spaceEvent.type.$model,expression:"$v.spaceEvent.type.$model"}],staticClass:"form-control",class:{valid:!e.$v.spaceEvent.type.$invalid,invalid:e.$v.spaceEvent.type.$invalid},attrs:{name:"type",id:"space-event-type","data-cy":"type",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.spaceEvent.type,"$model",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"LAUNCH",label:e.$t("space1App.SpaceEventType.LAUNCH")}},[e._v("LAUNCH")]),e._v(" "),n("option",{attrs:{value:"LANDING",label:e.$t("space1App.SpaceEventType.LANDING")}},[e._v("LANDING")])]),e._v(" "),e.$v.spaceEvent.type.$anyDirty&&e.$v.spaceEvent.type.$invalid?n("div",[e.$v.spaceEvent.type.required?e._e():n("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("entity.validation.required"))}},[e._v("\n              This field is required.\n            ")])]):e._e()]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-control-label",attrs:{for:"space-event-mission"},domProps:{textContent:e._s(e.$t("space1App.spaceEvent.mission"))}},[e._v("Mission")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.spaceEvent.mission,expression:"spaceEvent.mission"}],staticClass:"form-control",attrs:{id:"space-event-mission","data-cy":"mission",name:"mission"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.spaceEvent,"mission",t.target.multiple?n:n[0])}}},[n("option",{domProps:{value:null}}),e._v(" "),e._l(e.missions,(function(t){return n("option",{key:t.id,domProps:{value:e.spaceEvent.mission&&t.id===e.spaceEvent.mission.id?e.spaceEvent.mission:t}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],2)])]),e._v(" "),n("div",[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"cancel-save"},on:{click:function(t){return e.previousState()}}},[n("font-awesome-icon",{attrs:{icon:"ban"}}),e._v(" "),n("span",{domProps:{textContent:e._s(e.$t("entity.action.cancel"))}},[e._v("Cancel")])],1),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"save-entity","data-cy":"entityCreateSaveButton",disabled:e.$v.spaceEvent.$invalid||e.isSaving}},[n("font-awesome-icon",{attrs:{icon:"save"}}),e._v(" "),n("span",{domProps:{textContent:e._s(e.$t("entity.action.save"))}},[e._v("Save")])],1)])])])])},o=[];a._withStripped=!0;var s=n(1157),i=n(5904),r=n(5773),p=n(379),c=function(){function e(e,t,n,a,o,s,i,r){this.id=e,this.name=t,this.date=n,this.description=a,this.photoContentType=o,this.photo=s,this.type=i,this.mission=r}return e}(),v=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=function(e,t,n,a){var o,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},d=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},u={spaceEvent:{name:{required:p.C1},date:{required:p.C1},description:{required:p.C1},photo:{required:p.C1},type:{required:p.C1}}},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.spaceEvent=new c,t.missions=[],t.isSaving=!1,t.currentLanguage="",t}return v(t,e),t.prototype.beforeRouteEnter=function(e,t,n){n((function(t){e.params.spaceEventId&&t.retrieveSpaceEvent(e.params.spaceEventId),t.initRelationships()}))},t.prototype.created=function(){var e=this;this.currentLanguage=this.$store.getters.currentLanguage,this.$store.watch((function(){return e.$store.getters.currentLanguage}),(function(){e.currentLanguage=e.$store.getters.currentLanguage}))},t.prototype.save=function(){var e=this;this.isSaving=!0,this.spaceEvent.id?this.spaceEventService().update(this.spaceEvent).then((function(t){e.isSaving=!1,e.$router.go(-1);var n=e.$t("space1App.spaceEvent.updated",{param:t.id});return e.$root.$bvToast.toast(n.toString(),{toaster:"b-toaster-top-center",title:"Info",variant:"info",solid:!0,autoHideDelay:5e3})})):this.spaceEventService().create(this.spaceEvent).then((function(t){e.isSaving=!1,e.$router.go(-1);var n=e.$t("space1App.spaceEvent.created",{param:t.id});e.$root.$bvToast.toast(n.toString(),{toaster:"b-toaster-top-center",title:"Success",variant:"success",solid:!0,autoHideDelay:5e3})}))},t.prototype.retrieveSpaceEvent=function(e){var t=this;this.spaceEventService().find(e).then((function(e){t.spaceEvent=e}))},t.prototype.previousState=function(){this.$router.go(-1)},t.prototype.clearInputImage=function(e,t,n){this.spaceEvent&&e&&t&&(Object.prototype.hasOwnProperty.call(this.spaceEvent,e)&&(this.spaceEvent[e]=null),Object.prototype.hasOwnProperty.call(this.spaceEvent,t)&&(this.spaceEvent[t]=null),n&&(this.$refs[n]=null))},t.prototype.initRelationships=function(){var e=this;this.missionService().retrieve().then((function(t){e.missions=t.data}))},l([(0,s.tB)("spaceEventService"),d("design:type",Function)],t.prototype,"spaceEventService",void 0),l([(0,s.tB)("missionService"),d("design:type",Function)],t.prototype,"missionService",void 0),t=l([(0,s.wA)({validations:u})],t),t}((0,i.tA)(r.Z)),f=m,y=f,h=n(1900),$=(0,h.Z)(y,a,o,!1,null,null,null);$.options.__file="src/main/webapp/app/entities/space-event/space-event-update.vue";var g=$.exports}}]);
//# sourceMappingURL=266.a8a1f8b36ddd99491c7c.chunk.js.map