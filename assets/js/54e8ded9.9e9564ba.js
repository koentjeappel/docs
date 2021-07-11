(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[311],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,c(c({ref:t},s),{},{components:r})):o.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3096:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),c=["components"],l={sidebar_position:150},i="voteraw",p={unversionedId:"developers/pac-protocol-core/client-commands/voteraw",id:"developers/pac-protocol-core/client-commands/voteraw",isDocsHomePage:!1,title:"voteraw",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/voteraw.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/voteraw",permalink:"/developers/pac-protocol-core/client-commands/voteraw",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/voteraw.mdx",version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150},sidebar:"coreSidebar",previous:{title:"verifytxoutproof",permalink:"/developers/pac-protocol-core/client-commands/verifytxoutproof"},next:{title:"walletlock",permalink:"/developers/pac-protocol-core/client-commands/walletlock"}},s=[{value:"Command",id:"command",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"voteraw"},"voteraw"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli voteraw <mn-collateral-tx-hash> <mn-collateral-tx-index> <governance-hash> <vote-signal> [yes|no|abstain] <time> <vote-sig>\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help voteraw\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"voteraw <mn-collateral-tx-hash> <mn-collateral-tx-index> <governance-hash> <vote-signal> [yes|no|abstain] <time> <vote-sig>\nCompile and relay a governance vote with provided external signature instead of signing vote internally\n\n")))}m.isMDXComponent=!0}}]);