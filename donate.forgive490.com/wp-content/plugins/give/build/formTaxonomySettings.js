(()=>{var e,t={3658:(e,t,r)=>{"use strict";const i=window.wp.hooks;var o=r(9196),n=r.n(o),a=r(5893),l=function(){return l=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};function s(e,t,r){if(r||2===arguments.length)for(var i,o=0,n=t.length;o<n;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||t)}var c=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},p={k:1e3,m:1e6,b:1e9},d=function(e){var t=e.value,r=e.groupSeparator,i=void 0===r?",":r,o=e.decimalSeparator,n=void 0===o?".":o,a=e.allowDecimals,l=void 0===a||a,d=e.decimalsLimit,u=void 0===d?2:d,g=e.allowNegativeValue,m=void 0===g||g,v=e.disableAbbreviations,f=void 0!==v&&v,w=e.prefix,h=void 0===w?"":w,b=e.transformRawValue,S=(void 0===b?function(e){return e}:b)(t);if("-"===S)return S;var x=f?[]:["k","m","b"],y=new RegExp("((^|\\D)-\\d)|(-"+c(h)+")").test(S),_=RegExp("(\\d+)-?"+c(h)).exec(t)||[],D=_[0],R=_[1],E=function(e,t){void 0===t&&(t=",");var r=new RegExp(c(t),"g");return e.replace(r,"")}(h?D?S.replace(D,"").concat(R):S.replace(h,""):S,i),N=function(e,t){var r=c(t.join("")),i=new RegExp("[^\\d"+r+"]","gi");return e.replace(i,"")}(E,s([i,n],x)),O=N;if(!f){if(x.some((function(e){return e===N.toLowerCase().replace(n,"")})))return"";var P=function(e,t){void 0===t&&(t=".");var r=new RegExp("(\\d+("+c(t)+"\\d*)?)([kmb])$","i"),i=e.match(r);if(i){var o=i[1],n=i[3],a=p[n.toLowerCase()];return Number(o.replace(t,"."))*a}}(N,n);P&&(O=String(P))}var C=y&&m?"-":"";if(n&&O.includes(n)){var T=N.split(n),A=T[0],K=T[1],L=u&&K?K.slice(0,u):K;return""+C+A+(l?""+n+L:"")}return""+C+O},u=function(e,t){var r=t.groupSeparator,i=void 0===r?",":r,o=t.decimalSeparator,n=void 0===o?".":o,a=new RegExp("\\d([^"+c(i)+c(n)+"0-9]+)"),l=e.match(a);return l?l[1]:void 0},g=function(e){var t=e.value,r=e.decimalSeparator,i=e.intlConfig,o=e.decimalScale,n=e.prefix,a=void 0===n?"":n,s=e.suffix,p=void 0===s?"":s;if(""===t||void 0===t)return"";if("-"===t)return"-";var d=new RegExp("^\\d?-"+(a?c(a)+"?":"")+"\\d").test(t),g="."!==r?m(t,r,d):t,f={minimumFractionDigits:o||0,maximumFractionDigits:20},w=(i?new Intl.NumberFormat(i.locale,i.currency?l(l({},f),{style:"currency",currency:i.currency}):f):new Intl.NumberFormat(void 0,f)).formatToParts(Number(g)),h=v(w,e),b=u(h,l({},e)),S=t.slice(-1)===r?r:"",x=(g.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return void 0===o&&x&&r&&(h=h.includes(r)?h.replace(RegExp("(\\d+)("+c(r)+")(\\d+)","g"),"$1$2"+x):b&&!p?h.replace(b,""+r+x+b):""+h+r+x),p&&S?""+h+S+p:b&&S?h.replace(b,""+S+b):b&&p?h.replace(b,""+S+p):[h,S,p].join("")},m=function(e,t,r){var i=e;return t&&"."!==t&&(i=i.replace(RegExp(c(t),"g"),"."),r&&"-"===t&&(i="-"+i.slice(1))),i},v=function(e,t){var r=t.prefix,i=t.groupSeparator,o=t.decimalSeparator,n=t.decimalScale,a=t.disableGroupSeparators,l=void 0!==a&&a;return e.reduce((function(e,t,a){var c=t.type,p=t.value;return 0===a&&r?"minusSign"===c?[p,r]:"currency"===c?s(s([],e),[r]):[r,p]:"currency"===c?r?e:s(s([],e),[p]):"group"===c?l?e:s(s([],e),[void 0!==i?i:p]):"decimal"===c?void 0!==n&&0===n?e:s(s([],e),[void 0!==o?o:p]):s(s([],e),"fraction"===c?[void 0!==n?p.slice(0,n):p]:[p])}),[""]).join("")},f={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},w=function(e){return RegExp(/\d/,"gi").test(e)};(0,o.forwardRef)((function(e,t){var r=e.allowDecimals,i=void 0===r||r,a=e.allowNegativeValue,s=void 0===a||a,c=e.id,p=e.name,m=e.className,v=e.customInput,h=e.decimalsLimit,b=e.defaultValue,S=e.disabled,x=void 0!==S&&S,y=e.maxLength,_=e.value,D=e.onValueChange,R=e.fixedDecimalLength,E=e.placeholder,N=e.decimalScale,O=e.prefix,P=e.suffix,C=e.intlConfig,T=e.step,A=e.min,K=e.max,L=e.disableGroupSeparators,F=void 0!==L&&L,B=e.disableAbbreviations,M=void 0!==B&&B,k=e.decimalSeparator,G=e.groupSeparator,I=e.onChange,U=e.onFocus,j=e.onBlur,V=e.onKeyDown,H=e.onKeyUp,Z=e.transformRawValue,Y=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]])}return r}(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if(k&&w(k))throw new Error("decimalSeparator cannot be a number");if(G&&w(G))throw new Error("groupSeparator cannot be a number");var z=(0,o.useMemo)((function(){return function(e){var t=e||{},r=t.locale,i=t.currency;return(r?new Intl.NumberFormat(r,i?{currency:i,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce((function(e,t,r){return"currency"===t.type?l(l({},e),0===r?{currencySymbol:t.value,prefix:t.value}:{currencySymbol:t.value,suffix:t.value}):"group"===t.type?l(l({},e),{groupSeparator:t.value}):"decimal"===t.type?l(l({},e),{decimalSeparator:t.value}):e}),f)}(C)}),[C]),W=k||z.decimalSeparator||"",J=G||z.groupSeparator||"";if(W&&J&&W===J&&!1===F)throw new Error("decimalSeparator cannot be the same as groupSeparator");var X={decimalSeparator:W,groupSeparator:J,disableGroupSeparators:F,intlConfig:C,prefix:O||z.prefix,suffix:P},$={decimalSeparator:W,groupSeparator:J,allowDecimals:i,decimalsLimit:h||R||2,allowNegativeValue:s,disableAbbreviations:M,prefix:O||z.prefix,transformRawValue:Z},Q=null!=b?g(l(l({},X),{decimalScale:N,value:String(b)})):null!=_?g(l(l({},X),{decimalScale:N,value:String(_)})):"",q=(0,o.useState)(Q),ee=q[0],te=q[1],re=(0,o.useState)(!1),ie=re[0],oe=re[1],ne=(0,o.useState)(0),ae=ne[0],le=ne[1],se=(0,o.useState)(0),ce=se[0],pe=se[1],de=(0,o.useState)(null),ue=de[0],ge=de[1],me=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return me.current}));var ve=function(e,t){oe(!0);var r=function(e){var t=e.selectionStart,r=e.value,i=e.lastKeyStroke,o=e.stateValue,n=e.groupSeparator,a=t,l=r;if(o&&a){var s=r.split("");return"Backspace"===i&&o[a]===n&&(s.splice(a-1,1),a-=1),"Delete"===i&&o[a]===n&&(s.splice(a,1),a+=1),{modifiedValue:l=s.join(""),cursorPosition:a}}return{modifiedValue:l,cursorPosition:t}}({selectionStart:t,value:e,lastKeyStroke:ue,stateValue:ee,groupSeparator:J}),i=r.modifiedValue,o=r.cursorPosition,n=d(l({value:i},$));if(!(y&&n.replace(/-/g,"").length>y)){if(""===n||"-"===n||n===W)return D&&D(void 0,p,{float:null,formatted:"",value:""}),te(n),void le(1);var a=W?n.replace(W,"."):n,s=parseFloat(a),c=g(l({value:n},X));if(null!=o){var u=o+(c.length-e.length);u=u<=0?O?O.length:0:u,le(u),pe(ce+1)}te(c),D&&D(n,p,{float:s,formatted:c,value:n})}};(0,o.useEffect)((function(){ie&&"-"!==ee&&me.current&&document.activeElement===me.current&&me.current.setSelectionRange(ae,ae)}),[ee,ae,me,ie,ce]);var fe=l({type:"text",inputMode:"decimal",id:c,name:p,className:m,onChange:function(e){var t=e.target,r=t.value,i=t.selectionStart;ve(r,i),I&&I(e)},onBlur:function(e){var t=e.target.value,r=d(l({value:t},$));if("-"===r||r===W||!r)return te(""),void(j&&j(e));var i=function(e,t,r){if(r&&e.length>1){if(e.includes(t)){var i=e.split(t),o=i[0];if((n=i[1]).length>r)return""+o+t+n.slice(0,r)}var n,a=e.length>r?new RegExp("(\\d+)(\\d{"+r+"})"):new RegExp("(\\d)(\\d+)"),l=e.match(a);if(l)return""+(o=l[1])+t+l[2]}return e}(r,W,R),o=function(e,t,r){if(void 0===t&&(t="."),void 0===r||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var i=e.split(t),o=i[0],n=i[1];if(0===r)return o;var a=n||"";if(a.length<r)for(;a.length<r;)a+="0";else a=a.slice(0,r);return""+o+t+a}(i,W,void 0!==N?N:R),n=parseFloat(o.replace(W,".")),a=g(l(l({},X),{value:o}));D&&D(o,p,{float:n,formatted:a,value:o}),te(a),j&&j(e)},onFocus:function(e){return U&&U(e),ee?ee.length:0},onKeyDown:function(e){var t=e.key;if(ge(t),T&&("ArrowUp"===t||"ArrowDown"===t)){e.preventDefault(),le(ee.length);var r=parseFloat(null!=_?String(_).replace(W,"."):d(l({value:ee},$)))||0,i="ArrowUp"===t?r+T:r-T;if(void 0!==A&&i<A)return;if(void 0!==K&&i>K)return;var o=String(T).includes(".")?Number(String(T).split(".")[1].length):void 0;ve(String(o?i.toFixed(o):i).replace(".",W))}V&&V(e)},onKeyUp:function(e){var t=e.key,r=e.currentTarget.selectionStart;if("ArrowUp"!==t&&"ArrowDown"!==t&&"-"!==ee){var i=u(ee,{groupSeparator:J,decimalSeparator:W});if(i&&r&&r>ee.length-i.length&&me.current){var o=ee.length-i.length;me.current.setSelectionRange(o,o)}}H&&H(e)},placeholder:E,disabled:x,value:null==_||"-"===ee||W&&ee===W?ee:g(l(l({},X),{decimalScale:ie?void 0:N,value:String(_)})),ref:me},Y);if(v){var we=v;return n().createElement(we,l({},fe))}return n().createElement("input",l({},fe))})).displayName="CurrencyInput";const h=window.wp.compose,b=(window.wp.element,window.wp.components),S=(window.wp.keycodes,window.wp.i18n);function x(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var y;function _(e){var t=e.title,r=e.description,i=void 0===r?null:r,o=e.children;return(0,a.jsxs)("div",{className:"givewp-form-settings__section",children:[(0,a.jsxs)("div",{className:"givewp-form-settings__section__header",children:[(0,a.jsx)("h4",{children:t}),i&&(0,a.jsx)("p",{children:i})]}),(0,a.jsx)("div",{className:"givewp-form-settings__section__body",children:o})]})}r(4184),"function"==typeof SuppressedError&&SuppressedError,x(".mce-floatpanel,.mce-inline-toolbar-grp,.mce-notification{z-index:9999999999!important}.components-popover__content .givewp-classic-editor{margin:0!important}.givewp-classic-editor{width:100%}.givewp-classic-editor>label{box-sizing:border-box;display:block;font-size:11px;font-weight:500;line-height:1.4;margin-bottom:.7rem;margin-top:1.5rem;max-width:100%;overflow:hidden;padding-bottom:0;padding-top:0;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}.givewp-classic-editor .wp-editor-tools{z-index:auto}.givewp-classic-editor .wp-editor-tabs{display:none}.givewp-classic-editor .wp-editor-container{border-radius:.125rem;overflow:hidden}.givewp-classic-editor .mce-top-part:before{display:none}.givewp-classic-editor .mce-tinymce,.givewp-classic-editor .wp-editor-container{box-shadow:none}.givewp-classic-editor textarea{width:100%}.givewp-classic-editor .wp-switch-editor{box-sizing:content-box!important}.givewp-classic-editor.show-editor-tabs .wp-editor-tabs{display:block!important}.givewp-classic-editor.show-editor-tabs .quicktags-toolbar input.button.button-small{background:#f6f7f7;border-color:var(--wp-admin-theme-color)!important;color:var(--wp-admin-theme-color);font-size:12px!important;inline-size:auto;line-height:2;min-height:26px;padding:0 8px;vertical-align:top}.givewp-classic-editor.show-editor-tabs .wp-editor-wrap.html-active textarea{border:0}"),window.wp,function(e){e.USD="USD",e.CAD="CAD",e.EUR="EUR",e.AED="AED",e.AFN="AFN",e.ALL="ALL",e.AMD="AMD",e.ARS="ARS",e.AUD="AUD",e.AZN="AZN",e.BAM="BAM",e.BDT="BDT",e.BGN="BGN",e.BHD="BHD",e.BIF="BIF",e.BND="BND",e.BOB="BOB",e.BRL="BRL",e.BWP="BWP",e.BYN="BYN",e.BZD="BZD",e.CDF="CDF",e.CHF="CHF",e.CLP="CLP",e.CNY="CNY",e.COP="COP",e.CRC="CRC",e.CVE="CVE",e.CZK="CZK",e.DJF="DJF",e.DKK="DKK",e.DOP="DOP",e.DZD="DZD",e.EEK="EEK",e.EGP="EGP",e.ERN="ERN",e.ETB="ETB",e.GBP="GBP",e.GEL="GEL",e.GHS="GHS",e.GNF="GNF",e.GTQ="GTQ",e.HKD="HKD",e.HNL="HNL",e.HRK="HRK",e.HUF="HUF",e.IDR="IDR",e.ILS="ILS",e.INR="INR",e.IQD="IQD",e.IRR="IRR",e.ISK="ISK",e.JMD="JMD",e.JOD="JOD",e.JPY="JPY",e.KES="KES",e.KHR="KHR",e.KMF="KMF",e.KRW="KRW",e.KWD="KWD",e.KZT="KZT",e.LBP="LBP",e.LKR="LKR",e.LTL="LTL",e.LVL="LVL",e.LYD="LYD",e.MAD="MAD",e.MDL="MDL",e.MGA="MGA",e.MKD="MKD",e.MMK="MMK",e.MOP="MOP",e.MUR="MUR",e.MXN="MXN",e.MYR="MYR",e.MZN="MZN",e.NAD="NAD",e.NGN="NGN",e.NIO="NIO",e.NOK="NOK",e.NPR="NPR",e.NZD="NZD",e.OMR="OMR",e.PAB="PAB",e.PEN="PEN",e.PHP="PHP",e.PKR="PKR",e.PLN="PLN",e.PYG="PYG",e.QAR="QAR",e.RON="RON",e.RSD="RSD",e.RUB="RUB",e.RWF="RWF",e.SAR="SAR",e.SDG="SDG",e.SEK="SEK",e.SGD="SGD",e.SOS="SOS",e.SYP="SYP",e.THB="THB",e.TND="TND",e.TOP="TOP",e.TRY="TRY",e.TTD="TTD",e.TWD="TWD",e.TZS="TZS",e.UAH="UAH",e.UGX="UGX",e.UYU="UYU",e.UZS="UZS",e.VEF="VEF",e.VND="VND",e.XAF="XAF",e.XOF="XOF",e.YER="YER",e.ZAR="ZAR",e.ZMK="ZMK",e.ZWL="ZWL"}(y||(y={})),x(".givewp-options-header{align-items:center;display:flex;flex-direction:row;gap:.5rem;justify-content:space-between;width:100%}.givewp-options-header--label{margin-bottom:0}.givewp-options-header--button{color:var(--givewp-grey-500);height:fit-content!important;min-width:fit-content!important;padding:0!important}.givewp-options-header--button svg{height:1.25rem;width:1.25rem}.givewp-options-list--item{display:grid;gap:.5rem;grid-template-columns:auto auto 1fr auto;grid-template-rows:2rem;margin-top:.5rem}.givewp-options-list--item>*{align-self:center}.givewp-options-list--item--draggable{color:var(--givewp-grey-500);cursor:grab;display:flex;user-select:none}.givewp-options-list--item--checked{margin:0!important;width:1rem!important}.givewp-options-list--item--inputs{display:flex;flex-direction:column;gap:.25rem}.givewp-options-list--item--inputs .components-base-control{margin-bottom:0!important}.givewp-options-list--item--inputs--open{grid-row:span 2}.givewp-options-list--item--inputs .givewp-options-list__textarea-wrapper{display:grid;gap:2px;width:calc(100% + 20px + .5rem)}.givewp-options-list--item--inputs .givewp-options-list__textarea-wrapper .givewp-options-list__textarea{border:1px solid #8c8c8c;border-radius:2px;height:64px}.givewp-options-list--item--inputs .givewp-options-list__textarea-counter{color:var(--givewp-grey-500);font-size:.625rem;line-height:1.4;text-align:right}.givewp-options-list--item--button{color:var(--givewp-grey-500);height:fit-content!important;min-width:fit-content!important;padding:0!important}"),x(".givewp-form-settings__section{border-bottom:1px solid var(--givewp-grey-50);display:flex;gap:3.5rem;margin-bottom:2.5rem;padding-bottom:2.5rem}@media (max-width:1279px){.givewp-form-settings__section{flex-direction:column;gap:2rem}}.givewp-form-settings__section__header{width:20rem}@media (max-width:1279px){.givewp-form-settings__section__header{padding-left:3.25rem;width:100%}}.givewp-form-settings__section__header h4{color:var(--givewp-grey-900);font-size:1rem;line-height:1.5rem;margin:0 0 var(--givewp-spacing-2)}.givewp-form-settings__section__header p{color:var(--givewp-grey-500);font-size:.75rem;line-height:1.125rem;margin:0}.givewp-form-settings__section__body{flex:1;max-width:33.25rem}.givewp-form-settings__section__body>:not(.no-extra-gap){padding-left:3.25rem}"),x(".givewp-block-notice{background:#fffaf2;border-left:2px solid var(--givewp-orange-400);border-radius:2px;padding:var(--givewp-spacing-3) var(--givewp-spacing-4)}.givewp-block-notice span{display:block;font-size:12px}.givewp-block-notice__title{color:var(--givewp-grey-900);font-size:.75rem;font-stretch:normal;font-style:normal;font-weight:600;line-height:1.33}.givewp-block-notice__description{color:var(--givewp-grey-700);margin:var(--givewp-spacing-2) 0 var(--givewp-spacing-4) 0}.givewp-block-notice__anchor{color:var(--givewp-grey-900);cursor:pointer}");const D=window.wp.apiFetch;var R=r.n(D);function E(){return window.giveTaxonomySettings}function N(){return window.giveTaxonomySettings.formTagsSelected}function O(){return window.giveTaxonomySettings.formCategoriesSelected}const P=({settings:e,setSettings:t})=>{const{formTags:r=N()}=e,i=e=>t({formTags:e}),[n,a]=(0,o.useState)([]);return(0,o.createElement)(b.FormTokenField,{label:(0,S.__)("Add Form Tag","give"),value:null!=r?r:[],onChange:e=>{const[t,o]=((e,t)=>{const r=e.find((e=>"string"==typeof e)),i=!t.some((e=>r===e.value.toLowerCase()));return[r,r&&i]})(e,r);var n,a;o?(n=t,a=e=>i([...r,{id:e,value:t}]),R()({path:"/wp/v2/give_forms_tag",method:"POST",data:{name:n}}).then((e=>a(e.id))).catch((e=>{if("term_exists"!==e.code)throw e;a(e.data.term_id)}))):i(e)},onInputChange:(0,h.debounce)((e=>R()({path:"/wp/v2/give_forms_tag?search="+e}).then(a)),500),suggestions:n?.map((e=>e.name)),disabled:!r})},C=window.wp.htmlEntities,T=(e,t,r)=>e.map((e=>(0,o.createElement)("div",{key:e.id,className:"editor-post-taxonomies__hierarchical-terms-choice"},(0,o.createElement)(b.CheckboxControl,{__nextHasNoMarginBottom:!0,checked:-1!==t.indexOf(e.id),onChange:()=>{const t=parseInt(e.id,10);r(t)},label:(0,C.decodeEntities)(e.name)}),!!e.children.length&&(0,o.createElement)("div",{className:"editor-post-taxonomies__hierarchical-terms-subchoices"},T(e.children,t,r))))),A=({settings:e,setSettings:t})=>{const{formCategories:r=O()}=e,i=(0,o.useMemo)((()=>function(e){const t=window.giveTaxonomySettings.formCategoriesAvailable.map((e=>({children:[],parent:null,...e})));if(t.some((({parent:e})=>null===e)))return t;const r=t.reduce(((e,t)=>{const{parent:r}=t;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),i=e=>e.map((e=>{const t=r[e.id];return{...e,children:t&&t.length?i(t):[]}}));return i(r[0]||[])}()),[]);return(0,o.createElement)("div",{style:{display:"flex",flexDirection:"column"}},T(i,r,(e=>{t({formCategories:r.includes(e)?r.filter((t=>t!==e)):[...r,e]})})))},K=({settings:e,setSettings:t})=>(0,o.createElement)("div",{id:"give-form-settings__form-taxonomies"},window.giveTaxonomySettings.formTagsEnabled&&(0,o.createElement)(_,{title:(0,S.__)("Form Tags","give")},(0,o.createElement)(b.PanelRow,{className:"no-extra-gap"},(0,o.createElement)(P,{settings:e,setSettings:t}))),window.giveTaxonomySettings.formCategoriesEnabled&&(0,o.createElement)(_,{title:(0,S.__)("Form Categories","give")},(0,o.createElement)(b.PanelRow,{className:"no-extra-gap"},(0,o.createElement)(A,{settings:e,setSettings:t}))));(0,i.addFilter)("givewp_form_builder_settings_additional_routes","givewp/form-taxonomies",(function(e){const t=E().formTagsEnabled,r=E().formCategoriesEnabled;return[...e,{name:t&&r?(0,S.__)("Tags and Categories",""):t?(0,S.__)("Form Tags",""):r?(0,S.__)("Form Categories",""):"",path:"give-form-tags",element:K}]}))},4184:(e,t)=>{var r;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)i.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},5251:(e,t,r)=>{"use strict";var i=r(9196),o=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var i,s={},c=null,p=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)n.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:p,props:s,_owner:a.current}}t.jsx=s,t.jsxs=s},5893:(e,t,r)=>{"use strict";e.exports=r(5251)},9196:e=>{"use strict";e.exports=window.React}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,r,o,n)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,n]=e[p],l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={39:0,585:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(s)var p=s(i)}for(t&&t(r);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},r=globalThis.webpackChunkgive=globalThis.webpackChunkgive||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[585],(()=>i(3658)));o=i.O(o)})();