(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[9337],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||c;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8817:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=r(2122),n=r(9756),c=(r(7294),r(3905)),a=["components"],l={sidebar_position:25},p="getaccount",i={unversionedId:"developers/pac-protocol-core/client-commands/getaccount",id:"developers/pac-protocol-core/client-commands/getaccount",isDocsHomePage:!1,title:"getaccount",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/getaccount.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/getaccount",permalink:"/developers/pac-protocol-core/client-commands/getaccount",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/getaccount.mdx",version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"coreSidebar",previous:{title:"generatetoaddress",permalink:"/developers/pac-protocol-core/client-commands/generatetoaddress"},next:{title:"getaccountaddress",permalink:"/developers/pac-protocol-core/client-commands/getaccountaddress"}},u=[{value:"Command",id:"command",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"getaccount"},"getaccount"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getaccount (Deprecated, will be removed in V0.18. To use this command, start pacprotocold with -deprecatedrpc=accounts)\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getaccount\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"getaccount (Deprecated, will be removed in V0.18. To use this command, start pacprotocold with -deprecatedrpc=accounts)\n")))}d.isMDXComponent=!0}}]);