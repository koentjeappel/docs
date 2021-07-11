(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8565],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8356:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),l=["components"],c={sidebar_position:59},i="getmerkleblocks",s={unversionedId:"developers/pac-protocol-core/client-commands/getmerkleblocks",id:"developers/pac-protocol-core/client-commands/getmerkleblocks",isDocsHomePage:!1,title:"getmerkleblocks",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/getmerkleblocks.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/getmerkleblocks",permalink:"/developers/pac-protocol-core/client-commands/getmerkleblocks",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/getmerkleblocks.mdx",version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59},sidebar:"coreSidebar",previous:{title:"getmempoolinfo",permalink:"/developers/pac-protocol-core/client-commands/getmempoolinfo"},next:{title:"getmininginfo",permalink:"/developers/pac-protocol-core/client-commands/getmininginfo"}},p=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>filter</code> <span class='asterisk'>*</span>",id:"filter-",children:[]},{value:"<code>hash</code> <span class='asterisk'>*</span>",id:"hash-",children:[]},{value:"<code>count</code>",id:"count",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],m={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getmerkleblocks"},"getmerkleblocks"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getmerkleblocks "filter" "hash" ( count )\n')),(0,a.kt)("p",null,"Returns an array of hex-encoded merkleblocks for ","<","count",">"," blocks starting from ","<","hash",">"," which match ","<","filter",">","."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"filter-"},(0,a.kt)("inlineCode",{parentName:"h3"},"filter")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The hex encoded bloom filter"),(0,a.kt)("h3",{id:"hash-"},(0,a.kt)("inlineCode",{parentName:"h3"},"hash")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The block hash"),(0,a.kt)("h3",{id:"count"},(0,a.kt)("inlineCode",{parentName:"h3"},"count")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional, default/max=2000)")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getmerkleblocks "2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmerkleblocks", "params": ["2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  "data",                        #(string)  A string that is serialized, hex-encoded data for a merkleblock.\n  ...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getmerkleblocks\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getmerkleblocks "filter" "hash" ( count )\n\nReturns an array of hex-encoded merkleblocks for <count> blocks starting from <hash> which match <filter>.\n\nArguments:\n1. "filter"        (string, required) The hex encoded bloom filter\n2. "hash"          (string, required) The block hash\n3. count           (numeric, optional, default/max=2000)\n\nResult:\n[\n  "data",                        (string)  A string that is serialized, hex-encoded data for a merkleblock.\n  ...\n]\n\nExamples:\n> pacprotocol-cli getmerkleblocks "2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmerkleblocks", "params": ["2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);