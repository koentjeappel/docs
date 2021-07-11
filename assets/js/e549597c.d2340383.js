(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1742],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(k,s(s({ref:t},i),{},{components:r})):n.createElement(k,s({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5683:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return i},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=["components"],c={sidebar_position:24},l="generatetoaddress",d={unversionedId:"developers/pac-protocol-core/client-commands/generatetoaddress",id:"developers/pac-protocol-core/client-commands/generatetoaddress",isDocsHomePage:!1,title:"generatetoaddress",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/generatetoaddress.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/generatetoaddress",permalink:"/developers/pac-protocol-core/client-commands/generatetoaddress",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/generatetoaddress.mdx",version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"coreSidebar",previous:{title:"generate",permalink:"/developers/pac-protocol-core/client-commands/generate"},next:{title:"getaccount",permalink:"/developers/pac-protocol-core/client-commands/getaccount"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>nblocks</code> <span class='asterisk'>*</span>",id:"nblocks-",children:[]},{value:"<code>address</code> <span class='asterisk'>*</span>",id:"address-",children:[]},{value:"<code>maxtries</code>",id:"maxtries",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:i};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generatetoaddress"},"generatetoaddress"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli generatetoaddress nblocks address (maxtries)\n")),(0,a.kt)("p",null,"Mine blocks immediately to a specified address (before the RPC call returns)"),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"nblocks-"},(0,a.kt)("inlineCode",{parentName:"h3"},"nblocks")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, required)")),(0,a.kt)("p",null,"How many blocks are generated immediately."),(0,a.kt)("h3",{id:"address-"},(0,a.kt)("inlineCode",{parentName:"h3"},"address")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The address to send the newly generated PAC Protocol to."),(0,a.kt)("h3",{id:"maxtries"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxtries")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional)")),(0,a.kt)("p",null,"How many iterations to try (default = 1000000)."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Generate 11 blocks to myaddress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli generatetoaddress 11 "myaddress"\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[ blockhashes ]     #(array) hashes of blocks generated\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help generatetoaddress\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'generatetoaddress nblocks address (maxtries)\n\nMine blocks immediately to a specified address (before the RPC call returns)\n\nArguments:\n1. nblocks      (numeric, required) How many blocks are generated immediately.\n2. address      (string, required) The address to send the newly generated PAC Protocol to.\n3. maxtries     (numeric, optional) How many iterations to try (default = 1000000).\n\nResult:\n[ blockhashes ]     (array) hashes of blocks generated\n\nExamples:\n\nGenerate 11 blocks to myaddress\n> pacprotocol-cli generatetoaddress 11 "myaddress"\n\n')))}u.isMDXComponent=!0}}]);