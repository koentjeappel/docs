(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6210],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4086:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],p={sidebar_position:88},i="importprivkey",c={unversionedId:"developers/pac-protocol-core/client-commands/importprivkey",id:"developers/pac-protocol-core/client-commands/importprivkey",isDocsHomePage:!1,title:"importprivkey",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/importprivkey.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/importprivkey",permalink:"/developers/pac-protocol-core/client-commands/importprivkey",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/importprivkey.mdx",version:"current",sidebarPosition:88,frontMatter:{sidebar_position:88},sidebar:"coreSidebar",previous:{title:"importmulti",permalink:"/developers/pac-protocol-core/client-commands/importmulti"},next:{title:"importprunedfunds",permalink:"/developers/pac-protocol-core/client-commands/importprunedfunds"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>privkey</code> <span class='asterisk'>*</span>",id:"privkey-",children:[]},{value:"<code>label</code>",id:"label",children:[]},{value:"<code>rescan</code>",id:"rescan",children:[]}]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importprivkey"},"importprivkey"),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importprivkey "privkey" ( "label" ) ( rescan )\n')),(0,o.kt)("p",null,"Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup.\nHint: use importmulti to import more than one private key."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"privkey-"},(0,o.kt)("inlineCode",{parentName:"h3"},"privkey")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The private key (see dumpprivkey)"),(0,o.kt)("h3",{id:"label"},(0,o.kt)("inlineCode",{parentName:"h3"},"label")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'(string, optional, default="")')),(0,o.kt)("p",null,"An optional label"),(0,o.kt)("h3",{id:"rescan"},(0,o.kt)("inlineCode",{parentName:"h3"},"rescan")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=true)")),(0,o.kt)("p",null,"Rescan the wallet for transactions"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls"),(0,o.kt)("p",null,"may report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes."),(0,o.kt)("p",null,"Dump a private key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli dumpprivkey "myaddress"\n')),(0,o.kt)("p",null,"Import the private key with rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importprivkey "mykey"\n')),(0,o.kt)("p",null,"Import using a label and without rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importprivkey "mykey" "testing" false\n')),(0,o.kt)("p",null,"Import using default blank label and without rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importprivkey "mykey" "" false\n')),(0,o.kt)("p",null,"As a JSON-RPC call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey", "params": ["mykey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help importprivkey\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'importprivkey "privkey" ( "label" ) ( rescan )\n\nAdds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup.\nHint: use importmulti to import more than one private key.\n\nArguments:\n1. "privkey"          (string, required) The private key (see dumpprivkey)\n2. "label"            (string, optional, default="") An optional label\n3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions\n\nNote: This call can take over an hour to complete if rescan is true, during that time, other rpc calls\nmay report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.\n\nExamples:\n\nDump a private key\n> pacprotocol-cli dumpprivkey "myaddress"\n\nImport the private key with rescan\n> pacprotocol-cli importprivkey "mykey"\n\nImport using a label and without rescan\n> pacprotocol-cli importprivkey "mykey" "testing" false\n\nImport using default blank label and without rescan\n> pacprotocol-cli importprivkey "mykey" "" false\n\nAs a JSON-RPC call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey", "params": ["mykey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);