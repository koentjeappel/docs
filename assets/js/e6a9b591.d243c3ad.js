(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[9124],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||s;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9142:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:134},c="signmessagewithprivkey",p={unversionedId:"developers/pac-protocol-core/client-commands/signmessagewithprivkey",id:"developers/pac-protocol-core/client-commands/signmessagewithprivkey",isDocsHomePage:!1,title:"signmessagewithprivkey",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/signmessagewithprivkey.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/signmessagewithprivkey",permalink:"/developers/pac-protocol-core/client-commands/signmessagewithprivkey",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/signmessagewithprivkey.mdx",version:"current",sidebarPosition:134,frontMatter:{sidebar_position:134},sidebar:"coreSidebar",previous:{title:"signmessage",permalink:"/developers/pac-protocol-core/client-commands/signmessage"},next:{title:"signrawtransaction",permalink:"/developers/pac-protocol-core/client-commands/signrawtransaction"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>privkey</code> <span class='asterisk'>*</span>",id:"privkey-",children:[]},{value:"<code>message</code> <span class='asterisk'>*</span>",id:"message-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"signmessagewithprivkey"},"signmessagewithprivkey"),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signmessagewithprivkey "privkey" "message"\n')),(0,s.kt)("p",null,"Sign a message with the private key of an address"),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("h3",{id:"privkey-"},(0,s.kt)("inlineCode",{parentName:"h3"},"privkey")," ",(0,s.kt)("span",{class:"asterisk"},"*")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(string, required)")),(0,s.kt)("p",null,"The private key to sign the message with."),(0,s.kt)("h3",{id:"message-"},(0,s.kt)("inlineCode",{parentName:"h3"},"message")," ",(0,s.kt)("span",{class:"asterisk"},"*")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(string, required)")),(0,s.kt)("p",null,"The message to create a signature of."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Create the signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signmessagewithprivkey "privkey" "my message"\n')),(0,s.kt)("p",null,"Verify the signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n')),(0,s.kt)("p",null,"As json rpc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessagewithprivkey", "params": ["privkey", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'"signature"          #(string) The signature of the message encoded in base 64\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help signmessagewithprivkey\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'signmessagewithprivkey "privkey" "message"\n\nSign a message with the private key of an address\n\nArguments:\n1. "privkey"         (string, required) The private key to sign the message with.\n2. "message"         (string, required) The message to create a signature of.\n\nResult:\n"signature"          (string) The signature of the message encoded in base 64\n\nExamples:\n\nCreate the signature\n> pacprotocol-cli signmessagewithprivkey "privkey" "my message"\n\nVerify the signature\n> pacprotocol-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n\nAs json rpc\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessagewithprivkey", "params": ["privkey", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);