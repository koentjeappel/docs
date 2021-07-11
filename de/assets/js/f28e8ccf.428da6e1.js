(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[299],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,c(c({ref:t},p),{},{components:n})):o.createElement(h,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1226:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c={sidebar_position:20},i={unversionedId:"core/developers/pac-protocol-core/client-commands/getchaintxstats",id:"core/developers/pac-protocol-core/client-commands/getchaintxstats",isDocsHomePage:!1,title:"getchaintxstats",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getchaintxstats.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getchaintxstats",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getchaintxstats",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getchaintxstats.mdx",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"coreSidebar",previous:{title:"getchaintips",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getchaintips"},next:{title:"getdifficulty",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getdifficulty"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>nblocks</code>",id:"nblocks",children:[]},{value:"<code>blockhash</code>",id:"blockhash",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getchaintxstats ( nblocks blockhash )\n")),(0,a.kt)("p",null,"Compute statistics about the total number and rate of transactions in the chain."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"nblocks"},(0,a.kt)("inlineCode",{parentName:"h3"},"nblocks")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional)")),(0,a.kt)("p",null,"Size of the window in number of blocks (default: one month)."),(0,a.kt)("h3",{id:"blockhash"},(0,a.kt)("inlineCode",{parentName:"h3"},"blockhash")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, optional)")),(0,a.kt)("p",null,"The hash of the block that ends the window."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getchaintxstats \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintxstats", "params": [2016] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "time": xxxxx,        #(numeric) The timestamp for the statistics in UNIX format.\n  "txcount": xxxxx,     #(numeric) The total number of transactions in the chain up to that point.\n  "txrate": x.xx,       #(numeric) The average rate of transactions per second in the window.\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getchaintxstats\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getchaintxstats ( nblocks blockhash )\n\nCompute statistics about the total number and rate of transactions in the chain.\n\nArguments:\n1. nblocks      (numeric, optional) Size of the window in number of blocks (default: one month).\n2. "blockhash"  (string, optional) The hash of the block that ends the window.\n\nResult:\n{\n  "time": xxxxx,        (numeric) The timestamp for the statistics in UNIX format.\n  "txcount": xxxxx,     (numeric) The total number of transactions in the chain up to that point.\n  "txrate": x.xx,       (numeric) The average rate of transactions per second in the window.\n}\n\nExamples:\n> pacglobal-cli getchaintxstats \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintxstats", "params": [2016] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);