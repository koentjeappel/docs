(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[9715],{3905:function(e,r,o){"use strict";o.d(r,{Zo:function(){return s},kt:function(){return d}});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function l(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?l(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function a(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=t.createContext({}),i=function(e){var r=t.useContext(p),o=r;return e&&(o="function"==typeof e?e(r):c(c({},r),e)),o},s=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=i(o),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return o?t.createElement(f,c(c({ref:r},s),{},{components:o})):t.createElement(f,c({ref:r},s))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=o.length,c=new Array(l);c[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var i=2;i<l;i++)c[i]=o[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5619:function(e,r,o){"use strict";o.r(r),o.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p},default:function(){return s}});var t=o(2122),n=o(9756),l=(o(7294),o(3905)),c={sidebar_position:137},a={unversionedId:"core/developers/pac-protocol-core/client-commands/keypoolrefill",id:"core/developers/pac-protocol-core/client-commands/keypoolrefill",isDocsHomePage:!1,title:"keypoolrefill",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/keypoolrefill.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/keypoolrefill",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/keypoolrefill",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/keypoolrefill.mdx",version:"current",sidebarPosition:137,frontMatter:{sidebar_position:137},sidebar:"coreSidebar",previous:{title:"keepass",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/keepass"},next:{title:"listaccounts",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listaccounts"}},p=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>newsize</code>",id:"newsize",children:[]}]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function s(e){var r=e.components,o=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},i,o,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli keypoolrefill ( newsize )\n")),(0,l.kt)("p",null,"Fills the keypool."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"newsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"newsize")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(numeric, optional, default=1000)")),(0,l.kt)("p",null,"The new keypool size"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli keypoolrefill \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "keypoolrefill", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help keypoolrefill\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'keypoolrefill ( newsize )\n\nFills the keypool.\n\nArguments:\n1. newsize     (numeric, optional, default=1000) The new keypool size\n\nExamples:\n> pacglobal-cli keypoolrefill \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "keypoolrefill", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}s.isMDXComponent=!0}}]);