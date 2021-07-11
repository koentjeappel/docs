(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8821],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(i,".").concat(m)]||u[m]||l[m]||c;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8664:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a=["components"],s={sidebar_position:15},i="decodescript",p={unversionedId:"developers/pac-protocol-core/client-commands/decodescript",id:"developers/pac-protocol-core/client-commands/decodescript",isDocsHomePage:!1,title:"decodescript",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/decodescript.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/decodescript",permalink:"/developers/pac-protocol-core/client-commands/decodescript",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/decodescript.mdx",version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"coreSidebar",previous:{title:"decoderawtransaction",permalink:"/developers/pac-protocol-core/client-commands/decoderawtransaction"},next:{title:"disconnectnode",permalink:"/developers/pac-protocol-core/client-commands/disconnectnode"}},d=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hexstring</code>",id:"hexstring",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"decodescript"},"decodescript"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli decodescript "hexstring"\n')),(0,c.kt)("p",null,"Decode a hex-encoded script."),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"hexstring"},(0,c.kt)("inlineCode",{parentName:"h3"},"hexstring")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(string)")),(0,c.kt)("p",null,"the hex encoded script"),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli decodescript "hexstring"\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "decodescript", "params": ["hexstring"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asm":"asm",   #(string) Script public key\n  "hex":"hex",   #(string) hex encoded public key\n  "type":"type", #(string) The output type\n  "reqSigs": n,    #(numeric) The required signatures\n  "addresses": [   #(json array of string)\n     "address"     #(string) PAC address\n     ,...\n  ],\n  "p2sh","address" #(string) address of P2SH script wrapping this redeem script #(not returned if the script is already a P2SH).\n}\n')),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help decodescript\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'decodescript "hexstring"\n\nDecode a hex-encoded script.\n\nArguments:\n1. "hexstring"     (string) the hex encoded script\n\nResult:\n{\n  "asm":"asm",   (string) Script public key\n  "hex":"hex",   (string) hex encoded public key\n  "type":"type", (string) The output type\n  "reqSigs": n,    (numeric) The required signatures\n  "addresses": [   (json array of string)\n     "address"     (string) PAC address\n     ,...\n  ],\n  "p2sh","address" (string) address of P2SH script wrapping this redeem script (not returned if the script is already a P2SH).\n}\n\nExamples:\n> pacprotocol-cli decodescript "hexstring"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "decodescript", "params": ["hexstring"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);