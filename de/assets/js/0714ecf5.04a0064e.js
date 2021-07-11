(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8957],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},968:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return i}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={sidebar_position:155},s={unversionedId:"core/developers/pac-protocol-core/client-commands/setprivatesendamount",id:"core/developers/pac-protocol-core/client-commands/setprivatesendamount",isDocsHomePage:!1,title:"setprivatesendamount",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/setprivatesendamount.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/setprivatesendamount",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/setprivatesendamount",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/setprivatesendamount.mdx",version:"current",sidebarPosition:155,frontMatter:{sidebar_position:155},sidebar:"coreSidebar",previous:{title:"setaccount",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/setaccount"},next:{title:"setprivatesendrounds",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/setprivatesendrounds"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>amount</code> <span class='asterisk'>*</span>",id:"amount-",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function i(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli setprivatesendamount amount\n")),(0,a.kt)("p",null,"Set the goal amount in PAC for PrivateSend mixing."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"amount-"},(0,a.kt)("inlineCode",{parentName:"h3"},"amount")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, required)")),(0,a.kt)("p",null,"The default amount is 100000 Cannot be more than 100000 nor less than 2"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli setprivatesendamount 500\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "setprivatesendamount", "params": [208] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help setprivatesendamount\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'setprivatesendamount amount\n\nSet the goal amount in PAC for PrivateSend mixing.\n\nArguments:\n1. amount         (numeric, required) The default amount is 100000 Cannot be more than 100000 nor less than 2\nExamples:\n> pacglobal-cli setprivatesendamount 500\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "setprivatesendamount", "params": [208] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}i.isMDXComponent=!0}}]);