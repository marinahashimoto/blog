"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{1664:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(7294),a=r(5444),o=r(2407),i=r(4694),l=r(5697),s=r.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var g=!1;try{g=!0}catch(x){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:i.parse.icon?i.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function O(e){var t=e.forwardedRef,r=b(e,["forwardedRef"]),n=r.icon,a=r.mask,o=r.symbol,l=r.className,s=r.title,c=r.titleId,u=h(n),d=v("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,s=e.flip,c=e.size,u=e.rotation,p=e.pull,b=(f(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),null!=c),f(t,"fa-rotate-".concat(u),null!=u&&0!==u),f(t,"fa-pull-".concat(p),null!=p),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(r)),m(l.split(" ")))),y=v("transform","string"==typeof r.transform?i.parse.transform(r.transform):r.transform),E=v("mask",h(a)),j=(0,i.icon)(u,p({},d,{},y,{},E,{symbol:o,title:s,titleId:c}));if(!j)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var x=j.abstract,k={ref:t};return Object.keys(r).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),w(x[0],k)}O.displayName="FontAwesomeIcon",O.propTypes={border:s().bool,className:s().string,mask:s().oneOfType([s().object,s().array,s().string]),fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf(["horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),size:s().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=b(n,["style"]);return o.attrs.style=p({},o.attrs.style,{},l),t.apply(void 0,[r.tag,p({},o.attrs,{},s)].concat(m(a)))}.bind(null,n.createElement),E=r(7190);i.library.add(E.mdU,E.zhw);var j=function(){var e,t,i=(0,a.useStaticQuery)("2355076697"),l=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:r(1550)}),(null==l?void 0:l.name)&&n.createElement("p",null,"Written by"," ",n.createElement(a.Link,{to:"/about-me"},n.createElement("strong",null,l.name))," ",n.createElement("br",null)," ",(null==l?void 0:l.summary)||null,n.createElement("br",null),n.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},n.createElement(O,{icon:["fab","twitter"]}))," ",n.createElement("a",{href:"https://github.com/"+(null==s?void 0:s.github)},n.createElement(O,{icon:["fab","github"]}))))}},7704:function(e,t,r){r.r(t);var n=r(7294),a=r(5444),o=r(1664),i=r(7198),l=r(3751);t.default=function(e){var t,r=e.data,s=e.location,c=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=r.allMarkdownRemark.nodes;return 0===f.length?n.createElement(i.Z,{location:s,title:c},n.createElement(l.Z,{title:"All posts"}),n.createElement(o.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:s,title:c},n.createElement(l.Z,{title:"All posts"}),n.createElement(o.Z,null),n.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/7157c775479e7646bbdf089d9ba11658/d24ee/profile-pic.jpg","srcSet":"/static/7157c775479e7646bbdf089d9ba11658/d24ee/profile-pic.jpg 50w,\\n/static/7157c775479e7646bbdf089d9ba11658/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/7157c775479e7646bbdf089d9ba11658/d4bf4/profile-pic.avif 50w,\\n/static/7157c775479e7646bbdf089d9ba11658/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/7157c775479e7646bbdf089d9ba11658/3faea/profile-pic.webp 50w,\\n/static/7157c775479e7646bbdf089d9ba11658/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1ef541d28d45bfca56a7.js.map