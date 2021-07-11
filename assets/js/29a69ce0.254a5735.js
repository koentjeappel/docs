(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5220],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1857:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o={sidebar_position:158},l={unversionedId:"core/developers/pac-protocol-core/client-commands/signmessage",id:"core/developers/pac-protocol-core/client-commands/signmessage",isDocsHomePage:!1,title:"signmessage",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/signmessage.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/signmessage",permalink:"/docs/core/developers/pac-protocol-core/client-commands/signmessage",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/signmessage.mdx",version:"current",sidebarPosition:158,frontMatter:{sidebar_position:158},sidebar:"coreSidebar",previous:{title:"settxfee",permalink:"/docs/core/developers/pac-protocol-core/client-commands/settxfee"},next:{title:"walletlock",permalink:"/docs/core/developers/pac-protocol-core/client-commands/walletlock"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>address</code> <span class='asterisk'>*</span>",id:"address-",children:[]},{value:"<code>message</code> <span class='asterisk'>*</span>",id:"message-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signmessage "address" "message"\n')),(0,s.kt)("p",null,"Sign a message with the private key of an address"),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("h3",{id:"address-"},(0,s.kt)("inlineCode",{parentName:"h3"},"address")," ",(0,s.kt)("span",{class:"asterisk"},"*")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(string, required)")),(0,s.kt)("p",null,"The dash address to use for the private key."),(0,s.kt)("h3",{id:"message-"},(0,s.kt)("inlineCode",{parentName:"h3"},"message")," ",(0,s.kt)("span",{class:"asterisk"},"*")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(string, required)")),(0,s.kt)("p",null,"The message to create a signature of."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Unlock the wallet for 30 seconds"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli walletpassphrase "mypassphrase" 30\n')),(0,s.kt)("p",null,"Create the signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli signmessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "my message"\n')),(0,s.kt)("p",null,"Verify the signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n')),(0,s.kt)("p",null,"As json rpc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessage", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'"signature"          #(string) The signature of the message encoded in base 64\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help signmessage\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'signmessage "address" "message"\n\nSign a message with the private key of an address\n\nArguments:\n1. "address"         (string, required) The dash address to use for the private key.\n2. "message"         (string, required) The message to create a signature of.\n\nResult:\n"signature"          (string) The signature of the message encoded in base 64\n\nExamples:\n\nUnlock the wallet for 30 seconds\n> pacglobal-cli walletpassphrase "mypassphrase" 30\n\nCreate the signature\n> pacglobal-cli signmessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "my message"\n\nVerify the signature\n> pacglobal-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n\nAs json rpc\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessage", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);