(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2529],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],p={sidebar_position:90},c="importpubkey",i={unversionedId:"developers/pac-protocol-core/client-commands/importpubkey",id:"developers/pac-protocol-core/client-commands/importpubkey",isDocsHomePage:!1,title:"importpubkey",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/importpubkey.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/importpubkey",permalink:"/developers/pac-protocol-core/client-commands/importpubkey",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/importpubkey.mdx",version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"coreSidebar",previous:{title:"importprunedfunds",permalink:"/developers/pac-protocol-core/client-commands/importprunedfunds"},next:{title:"importwallet",permalink:"/developers/pac-protocol-core/client-commands/importwallet"}},u=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>pubkey</code> <span class='asterisk'>*</span>",id:"pubkey-",children:[]},{value:"<code>label</code>",id:"label",children:[]},{value:"<code>rescan</code>",id:"rescan",children:[]}]},{value:"Examples",id:"examples",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importpubkey"},"importpubkey"),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importpubkey "pubkey" ( "label" rescan )\n')),(0,o.kt)("p",null,"Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"pubkey-"},(0,o.kt)("inlineCode",{parentName:"h3"},"pubkey")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The hex-encoded public key"),(0,o.kt)("h3",{id:"label"},(0,o.kt)("inlineCode",{parentName:"h3"},"label")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'(string, optional, default="")')),(0,o.kt)("p",null,"An optional label"),(0,o.kt)("h3",{id:"rescan"},(0,o.kt)("inlineCode",{parentName:"h3"},"rescan")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=true)")),(0,o.kt)("p",null,"Rescan the wallet for transactions"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls"),(0,o.kt)("p",null,"may report that the imported pubkey exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes."),(0,o.kt)("p",null,"Import a public key with rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importpubkey "mypubkey"\n')),(0,o.kt)("p",null,"Import using a label without rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importpubkey "mypubkey" "testing" false\n')),(0,o.kt)("p",null,"As a JSON-RPC call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importpubkey", "params": ["mypubkey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help importpubkey\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'importpubkey "pubkey" ( "label" rescan )\n\nAdds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.\n\nArguments:\n1. "pubkey"           (string, required) The hex-encoded public key\n2. "label"            (string, optional, default="") An optional label\n3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions\n\nNote: This call can take over an hour to complete if rescan is true, during that time, other rpc calls\nmay report that the imported pubkey exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.\n\nExamples:\n\nImport a public key with rescan\n> pacprotocol-cli importpubkey "mypubkey"\n\nImport using a label without rescan\n> pacprotocol-cli importpubkey "mypubkey" "testing" false\n\nAs a JSON-RPC call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importpubkey", "params": ["mypubkey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);