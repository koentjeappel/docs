(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6455],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1417:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),s={sidebar_position:100},c={unversionedId:"core/developers/pac-protocol-core/client-commands/createmultisig",id:"core/developers/pac-protocol-core/client-commands/createmultisig",isDocsHomePage:!1,title:"createmultisig",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/createmultisig.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/createmultisig",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/createmultisig",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/createmultisig.mdx",version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"coreSidebar",previous:{title:"signrawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/signrawtransaction"},next:{title:"estimatefee",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/estimatefee"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>nrequired</code> <span class='asterisk'>*</span>",id:"nrequired-",children:[]},{value:"<code>keys</code> <span class='asterisk'>*</span>",id:"keys-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:i};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli createmultisig nrequired ["key",...]\n')),(0,o.kt)("p",null,"Creates a multi-signature address with n signature of m keys required.\nIt returns a json object with the address and redeemScript."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"nrequired-"},(0,o.kt)("inlineCode",{parentName:"h3"},"nrequired")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(numeric, required)")),(0,o.kt)("p",null,"The number of required signatures out of the n keys or addresses."),(0,o.kt)("h3",{id:"keys-"},(0,o.kt)("inlineCode",{parentName:"h3"},"keys")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"A json array of keys which are pacglobal addresses or hex-encoded public keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n     "key"    (string) pacglobal address or hex-encoded public key\n     ,...\n]\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create a multisig address from 2 addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli createmultisig 2 "[\\"Xt4qk9uKvQYAonVGSZNXqxeDmtjaEWgfrs\\",\\"XoSoWQkpgLpppPoyyzbUFh1fq2RBvW6UK1\\"]"\n')),(0,o.kt)("p",null,"As a json rpc call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "createmultisig", "params": [2, "[\\"Xt4qk9uKvQYAonVGSZNXqxeDmtjaEWgfrs\\",\\"XoSoWQkpgLpppPoyyzbUFh1fq2RBvW6UK1\\"]"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address":"multisigaddress",  #(string) The value of the new multisig address.\n  "redeemScript":"script"       #(string) The string value of the hex-encoded redemption script.\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help createmultisig\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'createmultisig nrequired ["key",...]\n\nCreates a multi-signature address with n signature of m keys required.\nIt returns a json object with the address and redeemScript.\n\nArguments:\n1. nrequired      (numeric, required) The number of required signatures out of the n keys or addresses.\n2. "keys"       (string, required) A json array of keys which are pacglobal addresses or hex-encoded public keys\n     [\n       "key"    (string) pacglobal address or hex-encoded public key\n       ,...\n     ]\n\nResult:\n{\n  "address":"multisigaddress",  (string) The value of the new multisig address.\n  "redeemScript":"script"       (string) The string value of the hex-encoded redemption script.\n}\n\nExamples:\n\nCreate a multisig address from 2 addresses\n> pacglobal-cli createmultisig 2 "[\\"Xt4qk9uKvQYAonVGSZNXqxeDmtjaEWgfrs\\",\\"XoSoWQkpgLpppPoyyzbUFh1fq2RBvW6UK1\\"]"\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "createmultisig", "params": [2, "[\\"Xt4qk9uKvQYAonVGSZNXqxeDmtjaEWgfrs\\",\\"XoSoWQkpgLpppPoyyzbUFh1fq2RBvW6UK1\\"]"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);