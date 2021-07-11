(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2814],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4653:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),a=["components"],l={sidebar_position:145},i="verifychain",p={unversionedId:"developers/pac-protocol-core/client-commands/verifychain",id:"developers/pac-protocol-core/client-commands/verifychain",isDocsHomePage:!1,title:"verifychain",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/verifychain.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/verifychain",permalink:"/developers/pac-protocol-core/client-commands/verifychain",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/verifychain.mdx",version:"current",sidebarPosition:145,frontMatter:{sidebar_position:145},sidebar:"coreSidebar",previous:{title:"validateaddress",permalink:"/developers/pac-protocol-core/client-commands/validateaddress"},next:{title:"verifychainlock",permalink:"/developers/pac-protocol-core/client-commands/verifychainlock"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>checklevel</code>",id:"checklevel",children:[]},{value:"<code>nblocks</code>",id:"nblocks",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"verifychain"},"verifychain"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli verifychain ( checklevel nblocks )\n")),(0,c.kt)("p",null,"Verifies blockchain database."),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"checklevel"},(0,c.kt)("inlineCode",{parentName:"h3"},"checklevel")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(numeric, optional, 0-4, default=3)")),(0,c.kt)("p",null,"How thorough the block verification is."),(0,c.kt)("h3",{id:"nblocks"},(0,c.kt)("inlineCode",{parentName:"h3"},"nblocks")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(numeric, optional, default=6, 0=all)")),(0,c.kt)("p",null,"The number of blocks to check."),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli verifychain \n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "verifychain", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"true|false       #(boolean) Verified or not\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help verifychain\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'verifychain ( checklevel nblocks )\n\nVerifies blockchain database.\n\nArguments:\n1. checklevel   (numeric, optional, 0-4, default=3) How thorough the block verification is.\n2. nblocks      (numeric, optional, default=6, 0=all) The number of blocks to check.\n\nResult:\ntrue|false       (boolean) Verified or not\n\nExamples:\n> pacprotocol-cli verifychain \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "verifychain", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);