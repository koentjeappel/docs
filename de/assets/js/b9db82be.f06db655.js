(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7584],{3905:function(e,r,o){"use strict";o.d(r,{Zo:function(){return s},kt:function(){return d}});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?c(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),i=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},s=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(o),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return o?t.createElement(f,a(a({ref:r},s),{},{components:o})):t.createElement(f,a({ref:r},s))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=o.length,a=new Array(c);a[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<c;i++)a[i]=o[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9356:function(e,r,o){"use strict";o.r(r),o.d(r,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var t=o(2122),n=o(9756),c=(o(7294),o(3905)),a={sidebar_position:43},p={unversionedId:"core/developers/pac-protocol-core/client-commands/stop",id:"core/developers/pac-protocol-core/client-commands/stop",isDocsHomePage:!1,title:"stop",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/stop.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/stop",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/stop",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/stop.mdx",version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"coreSidebar",previous:{title:"help",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/help"},next:{title:"uptime",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/uptime"}},l=[{value:"Command",id:"command",children:[]}],i={toc:l};function s(e){var r=e.components,o=(0,n.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,t.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli stop\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help stop\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"stop\n\nStop PACGlobal server.\n")))}s.isMDXComponent=!0}}]);