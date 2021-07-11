(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8162],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,a(a({ref:t},i),{},{components:r})):n.createElement(f,a({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5818:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return m}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a=["components"],p={sidebar_position:92},l="keepass",s={unversionedId:"developers/pac-protocol-core/client-commands/keepass",id:"developers/pac-protocol-core/client-commands/keepass",isDocsHomePage:!1,title:"keepass",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/keepass.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/keepass",permalink:"/developers/pac-protocol-core/client-commands/keepass",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/keepass.mdx",version:"current",sidebarPosition:92,frontMatter:{sidebar_position:92},sidebar:"coreSidebar",previous:{title:"importwallet",permalink:"/developers/pac-protocol-core/client-commands/importwallet"},next:{title:"keypoolrefill",permalink:"/developers/pac-protocol-core/client-commands/keypoolrefill"}},i=[{value:"Command",id:"command",children:[]}],u={toc:i};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"keepass"},"keepass"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli keepass <genkey|init|setpassphrase>\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help keepass\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"keepass <genkey|init|setpassphrase>\n\n")))}m.isMDXComponent=!0}}]);