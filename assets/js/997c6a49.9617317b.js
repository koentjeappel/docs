(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[423],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return t?o.createElement(k,a(a({ref:r},p),{},{components:t})):o.createElement(k,a({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<c;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6649:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var o=t(2122),n=t(9756),c=(t(7294),t(3905)),a=["components"],l={sidebar_position:114},s="preciousblock",i={unversionedId:"developers/pac-protocol-core/client-commands/preciousblock",id:"developers/pac-protocol-core/client-commands/preciousblock",isDocsHomePage:!1,title:"preciousblock",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/preciousblock.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/preciousblock",permalink:"/developers/pac-protocol-core/client-commands/preciousblock",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/preciousblock.mdx",version:"current",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"coreSidebar",previous:{title:"ping",permalink:"/developers/pac-protocol-core/client-commands/ping"},next:{title:"prioritisetransaction",permalink:"/developers/pac-protocol-core/client-commands/prioritisetransaction"}},p=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>blockhash</code> <span class='asterisk'>*</span>",id:"blockhash-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],u={toc:p};function m(e){var r=e.components,t=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"preciousblock"},"preciousblock"),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli preciousblock "blockhash"\n')),(0,c.kt)("p",null,"Treats a block as if it were received before others with the same work."),(0,c.kt)("p",null,"A later preciousblock call can override the effect of an earlier one."),(0,c.kt)("p",null,"The effects of preciousblock are not retained across restarts."),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"blockhash-"},(0,c.kt)("inlineCode",{parentName:"h3"},"blockhash")," ",(0,c.kt)("span",{class:"asterisk"},"*")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(string, required)")),(0,c.kt)("p",null,"the hash of the block to mark as precious"),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli preciousblock "blockhash"\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "preciousblock", "params": ["blockhash"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help preciousblock\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'preciousblock "blockhash"\n\nTreats a block as if it were received before others with the same work.\n\nA later preciousblock call can override the effect of an earlier one.\n\nThe effects of preciousblock are not retained across restarts.\n\nArguments:\n1. "blockhash"   (string, required) the hash of the block to mark as precious\n\nResult:\n\nExamples:\n> pacprotocol-cli preciousblock "blockhash"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "preciousblock", "params": ["blockhash"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);