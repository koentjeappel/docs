(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[966],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return s},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=i(o),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return o?r.createElement(f,p(p({ref:t},s),{},{components:o})):r.createElement(f,p({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,p=new Array(c);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var i=2;i<c;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7588:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var r=o(2122),n=o(9756),c=(o(7294),o(3905)),p=["components"],a={sidebar_position:139},l="stop",i={unversionedId:"developers/pac-protocol-core/client-commands/stop",id:"developers/pac-protocol-core/client-commands/stop",isDocsHomePage:!1,title:"stop",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/stop.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/stop",permalink:"/developers/pac-protocol-core/client-commands/stop",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/stop.mdx",version:"current",sidebarPosition:139,frontMatter:{sidebar_position:139},sidebar:"coreSidebar",previous:{title:"spork",permalink:"/developers/pac-protocol-core/client-commands/spork"},next:{title:"submitblock",permalink:"/developers/pac-protocol-core/client-commands/submitblock"}},s=[{value:"Command",id:"command",children:[]}],u={toc:s};function m(e){var t=e.components,o=(0,n.Z)(e,p);return(0,c.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"stop"},"stop"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli stop\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help stop\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"stop\n\nStop pacprotocol server.\n")))}m.isMDXComponent=!0}}]);