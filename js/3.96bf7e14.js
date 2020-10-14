(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{ec95:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-page",{},[l("q-toolbar",{class:{"bg-black text-white":e.selected.length>0}},[l("q-toolbar-title",[e._v("\n      TriggerWear Control\n    ")]),0===e.selected.length?l("q-btn",{attrs:{flat:"",icon:"settings"}}):e._e(),e.selected.length>0?l("q-select",{staticStyle:{width:"200px"},attrs:{outlined:"",dense:"",options:e.events,label:"Effect","stack-label":"",color:"primary","bg-color":"white","display-value":e.effect?e.effect.name:"no effect selected"},scopedSlots:e._u([{key:"option",fn:function(t){return[l("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[l("q-item-section",[l("q-item-label",{domProps:{innerHTML:e._s(t.opt.name)}}),l("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.opt.description))])],1)],1)]}}],null,!1,1780557108),model:{value:e.effect,callback:function(t){e.effect=t},expression:"effect"}}):e._e(),e.selected.length>0?l("q-btn",{staticClass:"q-ml-lg",attrs:{color:"primary"},on:{click:function(t){return e.send()}}},[e._v("\n      Send\n    ")]):e._e(),e.selected.length>0?l("q-btn",{staticClass:"q-ml-sm",attrs:{color:"grey"},on:{click:function(t){e.selected=[]}}},[e._v("\n      Clear\n    ")]):e._e()],1),l("div",{staticClass:"row"},e._l(e.people,(function(t,a){return l("div",{key:a,staticClass:"col-3 q-pa-sm"},[l("person-card",{attrs:{pid:a,person:t,selected:e.selected.includes(a)},on:{toggle:e.personToggled}})],1)})),0)],1)},n=[],s=(l("c975"),l("a434"),l("ded3")),c=l.n(s),o=l("2f62"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-card",{class:{"bg-primary":this.selected,"text-white":this.selected},attrs:{flat:"",bordered:""},on:{click:function(t){return e.$emit("toggle",e.pid)}}},[l("q-item",[l("q-item-section",{attrs:{avatar:""}},[l("q-avatar",[l("q-icon",{attrs:{name:"person",size:"lg"}})],1)],1),l("q-item-section",[l("q-item-label",{staticClass:"text-subtitle2"},[e._v(e._s(e.person.name))])],1)],1),l("q-separator"),l("q-list",{attrs:{dense:""}},e._l(e.deviceMap,(function(e,t){return l("device-item",{key:t,attrs:{device:e,did:t}})})),1)],1)},r=[],d=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-item",[l("q-item-section",{attrs:{top:"",avatar:""}},[l("q-avatar",{attrs:{"text-color":e.color,icon:e.icon}})],1),l("q-item-section",[l("q-item-label",[e._v(e._s(e.device.name))]),l("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v("00392ab32cd")])],1),l("q-item-section",{attrs:{side:""}},[e.alert&&"CHARGING"===e.alert.name?l("q-icon",{attrs:{name:"battery_charging_full",color:"orange"}}):e.alert&&"BATTERY_LOW"===e.alert.name?l("q-icon",{attrs:{name:"battery_alert",color:"red"}}):l("q-icon",{attrs:{name:"battery_full",size:"sm",color:"black"}})],1)],1)},p=[],m={name:"DeviceItem",props:["did","device"],computed:{alert(){let e=null;if(this.device.alerts&&0!==this.device.alerts.length)return this.device.alerts.forEach((t=>{if(e){if(e.level===t.level)return;switch(t.level){case"warn":"critical"!==e.level&&(e=t);break;case"info":"critical"!==e.level&&"warn"!==e.level&&(e=t);break}}else e=t})),e},icon(){return"watch"},color(){return this.device.state.color}}},u=m,h=l("2877"),f=l("66e5"),v=l("4074"),b=l("cb32"),g=l("0170"),q=l("0016"),_=l("eebe"),C=l.n(_),Q=Object(h["a"])(u,d,p,!1,null,null,null),k=Q.exports;C()(Q,"components",{QItem:f["a"],QItemSection:v["a"],QAvatar:b["a"],QItemLabel:g["a"],QIcon:q["a"]});var w={name:"PersonCard",components:{DeviceItem:k},props:["pid","person","selected"],computed:c()(c()({},Object(o["b"])("devices",["devices"])),{},{deviceMap(){const e={};return this.person&&this.person.devices.forEach((t=>{e[t]=this.devices[t]})),e},look(){return this.alert?{"bg-red":!0,"text-white":!0}:{"bg-primary":this.selected,"text-white":this.selected}}})},y=w,I=l("f09f"),x=l("eb85"),O=l("1c1c"),E=Object(h["a"])(y,i,r,!1,null,null,null),S=E.exports;C()(E,"components",{QCard:I["a"],QItem:f["a"],QItemSection:v["a"],QAvatar:b["a"],QIcon:q["a"],QItemLabel:g["a"],QSeparator:x["a"],QList:O["a"]});var $=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[l("q-card",{staticClass:"q-dialog-plugin"},[l("q-card-section",[l("p",[e._v("Are you sure you want to")]),l("p",[e._v(e._s(e.effect.description))]),l("p",[e._v("of the devices of")]),l("ul",e._l(e.people,(function(t){return l("li",{key:t.name},[e._v(e._s(t.name))])})),0)]),l("q-card-actions",{attrs:{align:"right"}},[l("q-btn",{attrs:{color:"primary",label:"yes"},on:{click:e.onOKClick}}),l("q-btn",{attrs:{color:"grey",label:"Cancel"},on:{click:e.onCancelClick}})],1)],1)],1)},T=[],P={props:["effect","people"],methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()}}},j=P,A=l("24e8"),D=l("a370"),L=l("4b7e"),H=l("9c40"),K=Object(h["a"])(j,$,T,!1,null,null,null),B=K.exports;C()(K,"components",{QDialog:A["a"],QCard:I["a"],QCardSection:D["a"],QCardActions:L["a"],QBtn:H["a"]});var M={name:"PageIndex",components:{PersonCard:S},data(){return{selected:[],effect:null}},computed:c()(c()(c()({},Object(o["b"])("people",["people"])),Object(o["b"])("devices",["events"])),{},{hasSelectedItems(){return this.selected.length>0},selectedPeople(){const e=[];return this.selected.forEach((t=>{e.push(this.people[t])})),e}}),methods:{personToggled(e){const t=this.selected.indexOf(e);-1===t?this.selected.push(e):this.selected.splice(t,1)},send(){this.$q.dialog({component:B,parent:this,effect:this.effect,people:this.selectedPeople}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))}}},z=M,G=l("9989"),J=l("65c6"),R=l("6ac5"),W=l("ddd8"),N=Object(h["a"])(z,a,n,!1,null,null,null);t["default"]=N.exports;C()(N,"components",{QPage:G["a"],QToolbar:J["a"],QToolbarTitle:R["a"],QBtn:H["a"],QSelect:W["a"],QItem:f["a"],QItemSection:v["a"],QItemLabel:g["a"]})}}]);