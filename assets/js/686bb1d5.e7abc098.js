(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6539],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5062:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:82},l="getzmqnotifications",s={unversionedId:"developers/pac-protocol-core/client-commands/getzmqnotifications",id:"developers/pac-protocol-core/client-commands/getzmqnotifications",isDocsHomePage:!1,title:"getzmqnotifications",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/getzmqnotifications.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/getzmqnotifications",permalink:"/developers/pac-protocol-core/client-commands/getzmqnotifications",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/getzmqnotifications.mdx",version:"current",sidebarPosition:82,frontMatter:{sidebar_position:82},sidebar:"coreSidebar",previous:{title:"getwalletinfo",permalink:"/developers/pac-protocol-core/client-commands/getwalletinfo"},next:{title:"gobject",permalink:"/developers/pac-protocol-core/client-commands/gobject"}},p=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getzmqnotifications"},"getzmqnotifications"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getzmqnotifications\n")),(0,a.kt)("p",null,"Returns information about the active ZeroMQ notifications."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getzmqnotifications \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getzmqnotifications", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {                        #(json object)\n    "type": "pubhashtx",   #(string) Type of notification\n    "address": "..."       #(string) Address of the publisher\n  },\n  ...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getzmqnotifications\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getzmqnotifications\n\nReturns information about the active ZeroMQ notifications.\n\nResult:\n[\n  {                        (json object)\n    "type": "pubhashtx",   (string) Type of notification\n    "address": "..."       (string) Address of the publisher\n  },\n  ...\n]\n\nExamples:\n> pacprotocol-cli getzmqnotifications \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getzmqnotifications", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);