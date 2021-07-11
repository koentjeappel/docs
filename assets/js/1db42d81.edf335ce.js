(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7447],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,w=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(w,o(o({ref:t},p),{},{components:a})):n.createElement(w,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2984:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],c={sidebar_position:12},s="createwallet",i={unversionedId:"developers/pac-protocol-core/client-commands/createwallet",id:"developers/pac-protocol-core/client-commands/createwallet",isDocsHomePage:!1,title:"createwallet",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/createwallet.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/createwallet",permalink:"/developers/pac-protocol-core/client-commands/createwallet",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/createwallet.mdx",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"coreSidebar",previous:{title:"createrawtransaction",permalink:"/developers/pac-protocol-core/client-commands/createrawtransaction"},next:{title:"debug",permalink:"/developers/pac-protocol-core/client-commands/debug"}},p=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>wallet_name</code> <span class='asterisk'>*</span>",id:"wallet_name-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"createwallet"},"createwallet"),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli createwallet "wallet_name"\n')),(0,l.kt)("p",null,"Creates and loads a new wallet."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"wallet_name-"},(0,l.kt)("inlineCode",{parentName:"h3"},"wallet_name")," ",(0,l.kt)("span",{class:"asterisk"},"*")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(string, required)")),(0,l.kt)("p",null,"The name for the new wallet. If this is a path, the wallet will be created at the path location."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli createwallet "testwallet"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "createwallet", "params": ["testwallet"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("h2",{id:"result"},"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" :    &lt;wallet_name&gt;,        #(string) The wallet name if created successfully. If the wallet was created using a full path, the wallet_name will be the full path.\n  "warning" : &lt;warning&gt;,            #(string) Warning message if wallet was not loaded cleanly.\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help createwallet\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'createwallet "wallet_name"\n\nCreates and loads a new wallet.\n\nArguments:\n1. "wallet_name"    (string, required) The name for the new wallet. If this is a path, the wallet will be created at the path location.\n\nResult:\n{\n  "name" :    <wallet_name>,        (string) The wallet name if created successfully. If the wallet was created using a full path, the wallet_name will be the full path.\n  "warning" : <warning>,            (string) Warning message if wallet was not loaded cleanly.\n}\n\nExamples:\n> pacprotocol-cli createwallet "testwallet"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "createwallet", "params": ["testwallet"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);