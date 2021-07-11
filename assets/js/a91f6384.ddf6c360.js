(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1833],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,a(a({ref:t},i),{},{components:r})):n.createElement(f,a({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3162:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return m}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),a=["components"],c={sidebar_position:151},p="walletlock",s={unversionedId:"developers/pac-protocol-core/client-commands/walletlock",id:"developers/pac-protocol-core/client-commands/walletlock",isDocsHomePage:!1,title:"walletlock",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/walletlock.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/walletlock",permalink:"/developers/pac-protocol-core/client-commands/walletlock",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/walletlock.mdx",version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151},sidebar:"coreSidebar",previous:{title:"voteraw",permalink:"/developers/pac-protocol-core/client-commands/voteraw"},next:{title:"walletpassphrase",permalink:"/developers/pac-protocol-core/client-commands/walletpassphrase"}},i=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"walletlock"},"walletlock"),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli walletlock\n")),(0,l.kt)("p",null,"Removes the wallet encryption key from memory, locking the wallet.\nAfter calling this method, you will need to call walletpassphrase again\nbefore being able to call any methods which require the wallet to be unlocked."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Set the passphrase for 2 minutes to perform a transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli walletpassphrase "my pass phrase" 120\n')),(0,l.kt)("p",null,"Perform a send (requires passphrase set)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli sendtoaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 1.0\n')),(0,l.kt)("p",null,"Clear the passphrase since we are done before 2 minutes is up"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli walletlock \n")),(0,l.kt)("p",null,"As json rpc call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletlock", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help walletlock\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'walletlock\n\nRemoves the wallet encryption key from memory, locking the wallet.\nAfter calling this method, you will need to call walletpassphrase again\nbefore being able to call any methods which require the wallet to be unlocked.\n\nExamples:\n\nSet the passphrase for 2 minutes to perform a transaction\n> pacprotocol-cli walletpassphrase "my pass phrase" 120\n\nPerform a send (requires passphrase set)\n> pacprotocol-cli sendtoaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 1.0\n\nClear the passphrase since we are done before 2 minutes is up\n> pacprotocol-cli walletlock \n\nAs json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletlock", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);