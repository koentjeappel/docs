(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3188],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=r[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2519:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var t=r(2122),o=r(9756),s=(r(7294),r(3905)),a=["components"],l={sidebar_position:96},c="listaddressgroupings",i={unversionedId:"developers/pac-protocol-core/client-commands/listaddressgroupings",id:"developers/pac-protocol-core/client-commands/listaddressgroupings",isDocsHomePage:!1,title:"listaddressgroupings",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/listaddressgroupings.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/listaddressgroupings",permalink:"/developers/pac-protocol-core/client-commands/listaddressgroupings",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/listaddressgroupings.mdx",version:"current",sidebarPosition:96,frontMatter:{sidebar_position:96},sidebar:"coreSidebar",previous:{title:"listaddressbalances",permalink:"/developers/pac-protocol-core/client-commands/listaddressbalances"},next:{title:"listbanned",permalink:"/developers/pac-protocol-core/client-commands/listbanned"}},p=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:p};function u(e){var n=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"listaddressgroupings"},"listaddressgroupings"),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listaddressgroupings\n")),(0,s.kt)("p",null,"Lists groups of addresses which have had their common ownership\nmade public by common use as inputs or as the resulting change\nin past transactions"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listaddressgroupings \n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  [\n    [\n      "address",            #(string) The PAC address\n      amount,                 #(numeric) The amount in PAC\n      "label"               #(string, optional) The label\n    ]\n    ,...\n  ]\n  ,...\n]\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listaddressgroupings\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'listaddressgroupings\n\nLists groups of addresses which have had their common ownership\nmade public by common use as inputs or as the resulting change\nin past transactions\n\nResult:\n[\n  [\n    [\n      "address",            (string) The PAC address\n      amount,                 (numeric) The amount in PAC\n      "label"               (string, optional) The label\n    ]\n    ,...\n  ]\n  ,...\n]\n\nExamples:\n> pacprotocol-cli listaddressgroupings \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);