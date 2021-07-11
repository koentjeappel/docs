(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5431],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=l(n),m=o,g=i["".concat(d,".").concat(m)]||i[m]||p[m]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=i;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},875:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a={sidebar_position:6},c={unversionedId:"core/developers/pac-protocol-core/client-commands/getaddressutxos",id:"core/developers/pac-protocol-core/client-commands/getaddressutxos",isDocsHomePage:!1,title:"getaddressutxos",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getaddressutxos.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getaddressutxos",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getaddressutxos",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getaddressutxos.mdx",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"coreSidebar",previous:{title:"getaddresstxids",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getaddresstxids"},next:{title:"getbestblockhash",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getbestblockhash"}},d=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getaddressutxos\n")),(0,s.kt)("p",null,"Returns all unspent outputs for an address (requires addressindex to be enabled)."),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getaddressutxos \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressutxos", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "address"  #(string) The address base58check encoded\n    "txid"  #(string) The output txid\n    "outputIndex"  #(number) The output index\n    "script"  #(string) The script hex encoded\n    "satoshis"  #(number) The number of duffs of the output\n    "height"  #(number) The block height\n  }\n]\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getaddressutxos\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'getaddressutxos\n\nReturns all unspent outputs for an address (requires addressindex to be enabled).\n\nArguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n\nResult:\n[\n  {\n    "address"  (string) The address base58check encoded\n    "txid"  (string) The output txid\n    "outputIndex"  (number) The output index\n    "script"  (string) The script hex encoded\n    "satoshis"  (number) The number of duffs of the output\n    "height"  (number) The block height\n  }\n]\n\nExamples:\n> pacglobal-cli getaddressutxos \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressutxos", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);