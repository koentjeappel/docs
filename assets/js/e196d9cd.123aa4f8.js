(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3674],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,c(c({ref:t},u),{},{components:n})):o.createElement(h,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9787:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:79},s="gettxoutsetinfo",l={unversionedId:"developers/pac-protocol-core/client-commands/gettxoutsetinfo",id:"developers/pac-protocol-core/client-commands/gettxoutsetinfo",isDocsHomePage:!1,title:"gettxoutsetinfo",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/gettxoutsetinfo.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/gettxoutsetinfo",permalink:"/developers/pac-protocol-core/client-commands/gettxoutsetinfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/gettxoutsetinfo.mdx",version:"current",sidebarPosition:79,frontMatter:{sidebar_position:79},sidebar:"coreSidebar",previous:{title:"gettxoutproof",permalink:"/developers/pac-protocol-core/client-commands/gettxoutproof"},next:{title:"getunconfirmedbalance",permalink:"/developers/pac-protocol-core/client-commands/getunconfirmedbalance"}},u=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gettxoutsetinfo"},"gettxoutsetinfo"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli gettxoutsetinfo\n")),(0,a.kt)("p",null,"Returns statistics about the unspent transaction output set.\nNote this call may take some time."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli gettxoutsetinfo \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettxoutsetinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "height":n,     #(numeric) The current block height #(index)\n  "bestblock": "hex",   #(string) The hash of the block at the tip of the chain\n  "transactions": n,      #(numeric) The number of transactions with unspent outputs\n  "txouts": n,            #(numeric) The number of unspent transaction outputs\n  "bogosize": n,          #(numeric) A meaningless metric for UTXO set size\n  "hash_serialized_2": "hash", #(string) The serialized hash\n  "disk_size": n,         #(numeric) The estimated size of the chainstate on disk\n  "total_amount": x.xxx          #(numeric) The total amount\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help gettxoutsetinfo\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gettxoutsetinfo\n\nReturns statistics about the unspent transaction output set.\nNote this call may take some time.\n\nResult:\n{\n  "height":n,     (numeric) The current block height (index)\n  "bestblock": "hex",   (string) The hash of the block at the tip of the chain\n  "transactions": n,      (numeric) The number of transactions with unspent outputs\n  "txouts": n,            (numeric) The number of unspent transaction outputs\n  "bogosize": n,          (numeric) A meaningless metric for UTXO set size\n  "hash_serialized_2": "hash", (string) The serialized hash\n  "disk_size": n,         (numeric) The estimated size of the chainstate on disk\n  "total_amount": x.xxx          (numeric) The total amount\n}\n\nExamples:\n> pacprotocol-cli gettxoutsetinfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettxoutsetinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);