(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[4221],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,c(c({ref:n},i),{},{components:t})):o.createElement(f,c({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9605:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return i}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),c={sidebar_position:141},l={unversionedId:"core/developers/pac-protocol-core/client-commands/listlockunspent",id:"core/developers/pac-protocol-core/client-commands/listlockunspent",isDocsHomePage:!1,title:"listlockunspent",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/listlockunspent.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/listlockunspent",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listlockunspent",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/listlockunspent.mdx",version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"coreSidebar",previous:{title:"listaddressgroupings",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listaddressgroupings"},next:{title:"listreceivedbyaccount",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listreceivedbyaccount"}},s=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:s};function i(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listlockunspent\n")),(0,a.kt)("p",null,"Returns list of temporarily unspendable outputs.\nSee the lockunspent call to lock and unlock transactions for spending."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"List the unspent transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listunspent \n")),(0,a.kt)("p",null,"Lock an unspent transaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli lockunspent false "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n')),(0,a.kt)("p",null,"List the locked transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listlockunspent \n")),(0,a.kt)("p",null,"Unlock the transaction again"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli lockunspent true "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n')),(0,a.kt)("p",null,"As a json rpc call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listlockunspent", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "txid" : "transactionid",     #(string) The transaction id locked\n    "vout" : n                      #(numeric) The vout value\n  }\n  ,...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listlockunspent\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'listlockunspent\n\nReturns list of temporarily unspendable outputs.\nSee the lockunspent call to lock and unlock transactions for spending.\n\nResult:\n[\n  {\n    "txid" : "transactionid",     (string) The transaction id locked\n    "vout" : n                      (numeric) The vout value\n  }\n  ,...\n]\n\nExamples:\n\nList the unspent transactions\n> pacglobal-cli listunspent \n\nLock an unspent transaction\n> pacglobal-cli lockunspent false "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n\nList the locked transactions\n> pacglobal-cli listlockunspent \n\nUnlock the transaction again\n> pacglobal-cli lockunspent true "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listlockunspent", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}i.isMDXComponent=!0}}]);