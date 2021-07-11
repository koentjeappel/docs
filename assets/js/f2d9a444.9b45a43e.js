(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8983],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||p;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<p;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},992:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var o=r(2122),n=r(9756),p=(r(7294),r(3905)),a=["components"],i={sidebar_position:3},c="Setting up Swapfile",s={unversionedId:"developers/pac-protocol-core/setting-up-swapfile",id:"developers/pac-protocol-core/setting-up-swapfile",isDocsHomePage:!1,title:"Setting up Swapfile",description:"Setting up swapfile is optional, but recommended, in case if the core happens to take more than 1 GB of memory. This helps to avoid crashing core unintended.",source:"@site/docs/developers/pac-protocol-core/setting-up-swapfile.mdx",sourceDirName:"developers/pac-protocol-core",slug:"/developers/pac-protocol-core/setting-up-swapfile",permalink:"/developers/pac-protocol-core/setting-up-swapfile",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/setting-up-swapfile.mdx",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"coreSidebar",previous:{title:"Install Bootstrap",permalink:"/developers/pac-protocol-core/install-bootstrap"},next:{title:"Daemon Options (pacprotocold)",permalink:"/developers/pac-protocol-core/daemon-options"}},l=[],u={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"setting-up-swapfile"},"Setting up Swapfile"),(0,p.kt)("p",null,"Setting up swapfile is ",(0,p.kt)("strong",{parentName:"p"},"optional, but recommended"),", in case if the core happens to take more than 1 GB of memory. This helps to avoid crashing core unintended."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'sudo swapoff -a\nsudo fallocate -l 5G /swapfile #5GB of swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\necho "/swapfile swap swap defaults 0 0" >> /etc/fstab\n')))}f.isMDXComponent=!0}}]);