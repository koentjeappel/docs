(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7154],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return i},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||l;return a?r.createElement(d,s(s({ref:t},i),{},{components:a})):r.createElement(d,s({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8407:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return m}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),s=["components"],o={sidebar_position:20},p="encryptwallet",c={unversionedId:"developers/pac-protocol-core/client-commands/encryptwallet",id:"developers/pac-protocol-core/client-commands/encryptwallet",isDocsHomePage:!1,title:"encryptwallet",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/encryptwallet.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/encryptwallet",permalink:"/developers/pac-protocol-core/client-commands/encryptwallet",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/encryptwallet.mdx",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"coreSidebar",previous:{title:"dumpwallet",permalink:"/developers/pac-protocol-core/client-commands/dumpwallet"},next:{title:"estimatesmartfee",permalink:"/developers/pac-protocol-core/client-commands/estimatesmartfee"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>passphrase</code>",id:"passphrase",children:[]}]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"encryptwallet"},"encryptwallet"),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli encryptwallet "passphrase"\n')),(0,l.kt)("p",null,"Encrypts the wallet with 'passphrase'. This is for first time encryption.\nAfter this, any calls that interact with private keys such as sending or signing\nwill require the passphrase to be set prior the making these calls.\nUse the walletpassphrase call for this, and then walletlock call.\nIf the wallet is already encrypted, use the walletpassphrasechange call."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"passphrase"},(0,l.kt)("inlineCode",{parentName:"h3"},"passphrase")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(string)")),(0,l.kt)("p",null,"The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Encrypt your wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli encryptwallet "my pass phrase"\n')),(0,l.kt)("p",null,"Now set the passphrase to use the wallet, such as for signing or sending pacprotocol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli walletpassphrase "my pass phrase"\n')),(0,l.kt)("p",null,"Now we can do something like sign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signmessage "address" "test message"\n')),(0,l.kt)("p",null,"Now lock the wallet again by removing the passphrase"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli walletlock \n")),(0,l.kt)("p",null,"As a json rpc call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "encryptwallet", "params": ["my pass phrase"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help encryptwallet\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'encryptwallet "passphrase"\n\nEncrypts the wallet with \'passphrase\'. This is for first time encryption.\nAfter this, any calls that interact with private keys such as sending or signing \nwill require the passphrase to be set prior the making these calls.\nUse the walletpassphrase call for this, and then walletlock call.\nIf the wallet is already encrypted, use the walletpassphrasechange call.\n\nArguments:\n1. "passphrase"    (string) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.\n\nExamples:\n\nEncrypt your wallet\n> pacprotocol-cli encryptwallet "my pass phrase"\n\nNow set the passphrase to use the wallet, such as for signing or sending pacprotocol\n> pacprotocol-cli walletpassphrase "my pass phrase"\n\nNow we can do something like sign\n> pacprotocol-cli signmessage "address" "test message"\n\nNow lock the wallet again by removing the passphrase\n> pacprotocol-cli walletlock \n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "encryptwallet", "params": ["my pass phrase"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);