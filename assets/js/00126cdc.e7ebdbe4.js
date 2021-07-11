(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8157],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5954:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),s=["components"],l={sidebar_position:124},i="sendrawtransaction",c={unversionedId:"developers/pac-protocol-core/client-commands/sendrawtransaction",id:"developers/pac-protocol-core/client-commands/sendrawtransaction",isDocsHomePage:!1,title:"sendrawtransaction",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/sendrawtransaction.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/sendrawtransaction",permalink:"/developers/pac-protocol-core/client-commands/sendrawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/sendrawtransaction.mdx",version:"current",sidebarPosition:124,frontMatter:{sidebar_position:124},sidebar:"coreSidebar",previous:{title:"sendmany",permalink:"/developers/pac-protocol-core/client-commands/sendmany"},next:{title:"sendtoaddress",permalink:"/developers/pac-protocol-core/client-commands/sendtoaddress"}},p=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hexstring</code> <span class='asterisk'>*</span>",id:"hexstring-",children:[]},{value:"<code>allowhighfees</code>",id:"allowhighfees",children:[]},{value:"<code>instantsend</code>",id:"instantsend",children:[]},{value:"<code>bypasslimits</code>",id:"bypasslimits",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendrawtransaction"},"sendrawtransaction"),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli sendrawtransaction "hexstring" ( allowhighfees instantsend bypasslimits)\n')),(0,o.kt)("p",null,"Submits raw transaction (serialized, hex-encoded) to local node and network."),(0,o.kt)("p",null,"Also see createrawtransaction and signrawtransaction calls."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"hexstring-"},(0,o.kt)("inlineCode",{parentName:"h3"},"hexstring")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The hex string of the raw transaction)"),(0,o.kt)("h3",{id:"allowhighfees"},(0,o.kt)("inlineCode",{parentName:"h3"},"allowhighfees")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,o.kt)("p",null,"Allow high fees"),(0,o.kt)("h3",{id:"instantsend"},(0,o.kt)("inlineCode",{parentName:"h3"},"instantsend")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,o.kt)("p",null,"Deprecated and ignored"),(0,o.kt)("h3",{id:"bypasslimits"},(0,o.kt)("inlineCode",{parentName:"h3"},"bypasslimits")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,o.kt)("p",null,"Bypass transaction policy limits"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create a transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli createrawtransaction "[{\\"txid\\" : \\"mytxid\\",\\"vout\\":0}]" "{\\"myaddress\\":0.01}"\n')),(0,o.kt)("p",null,"Sign the transaction, and get back the hex"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signrawtransaction "myhex"\n')),(0,o.kt)("p",null,"Send the transaction (signed hex)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli sendrawtransaction "signedhex"\n')),(0,o.kt)("p",null,"As a json rpc call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "sendrawtransaction", "params": ["signedhex"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"hex"             #(string) The transaction hash in hex\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help sendrawtransaction\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sendrawtransaction "hexstring" ( allowhighfees instantsend bypasslimits)\n\nSubmits raw transaction (serialized, hex-encoded) to local node and network.\n\nAlso see createrawtransaction and signrawtransaction calls.\n\nArguments:\n1. "hexstring"    (string, required) The hex string of the raw transaction)\n2. allowhighfees  (boolean, optional, default=false) Allow high fees\n3. instantsend    (boolean, optional, default=false) Deprecated and ignored\n4. bypasslimits   (boolean, optional, default=false) Bypass transaction policy limits\n\nResult:\n"hex"             (string) The transaction hash in hex\n\nExamples:\n\nCreate a transaction\n> pacprotocol-cli createrawtransaction "[{\\"txid\\" : \\"mytxid\\",\\"vout\\":0}]" "{\\"myaddress\\":0.01}"\nSign the transaction, and get back the hex\n> pacprotocol-cli signrawtransaction "myhex"\n\nSend the transaction (signed hex)\n> pacprotocol-cli sendrawtransaction "signedhex"\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "sendrawtransaction", "params": ["signedhex"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);