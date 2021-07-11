(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1453],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),m=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},s=function(e){var o=m(e.components);return r.createElement(p.Provider,{value:o},e.children)},i={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=n,f=u["".concat(p,".").concat(d)]||u[d]||i[d]||a;return t?r.createElement(f,l(l({ref:o},s),{},{components:t})):r.createElement(f,l({ref:o},s))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var p in o)hasOwnProperty.call(o,p)&&(c[p]=o[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},974:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=t(2122),n=t(9756),a=(t(7294),t(3905)),l=["components"],c={sidebar_position:121},p="savemempool",m={unversionedId:"developers/pac-protocol-core/client-commands/savemempool",id:"developers/pac-protocol-core/client-commands/savemempool",isDocsHomePage:!1,title:"savemempool",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/savemempool.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/savemempool",permalink:"/developers/pac-protocol-core/client-commands/savemempool",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/savemempool.mdx",version:"current",sidebarPosition:121,frontMatter:{sidebar_position:121},sidebar:"coreSidebar",previous:{title:"rescanblockchain",permalink:"/developers/pac-protocol-core/client-commands/rescanblockchain"},next:{title:"sendfrom",permalink:"/developers/pac-protocol-core/client-commands/sendfrom"}},s=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function u(e){var o=e.components,t=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"savemempool"},"savemempool"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli savemempool\n")),(0,a.kt)("p",null,"Dumps the mempool to disk. It will fail until the previous dump is fully loaded."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli savemempool \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "savemempool", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help savemempool\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'savemempool\n\nDumps the mempool to disk. It will fail until the previous dump is fully loaded.\n\nExamples:\n> pacprotocol-cli savemempool \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "savemempool", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);