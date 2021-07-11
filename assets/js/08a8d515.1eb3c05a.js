(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8173],{3905:function(t,e,o){"use strict";o.d(e,{Zo:function(){return i},kt:function(){return m}});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):c(c({},e),t)),o},i=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,c(c({ref:e},i),{},{components:o})):r.createElement(f,c({ref:e},i))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,c=new Array(a);c[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,c[1]=p;for(var s=2;s<a;s++)c[s]=o[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5658:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return d}});var r=o(2122),n=o(9756),a=(o(7294),o(3905)),c=["components"],p={sidebar_position:2},l="Install Bootstrap",s={unversionedId:"developers/pac-protocol-core/install-bootstrap",id:"developers/pac-protocol-core/install-bootstrap",isDocsHomePage:!1,title:"Install Bootstrap",description:"Downloading & Installing Bootstrap can help you to sync it faster. It can also help in situation if the blockchain is not syncing on your machine.",source:"@site/docs/developers/pac-protocol-core/install-bootstrap.mdx",sourceDirName:"developers/pac-protocol-core",slug:"/developers/pac-protocol-core/install-bootstrap",permalink:"/developers/pac-protocol-core/install-bootstrap",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/install-bootstrap.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"coreSidebar",previous:{title:"Getting Started (with HTTP API)",permalink:"/developers/pac-protocol-core/getting-started"},next:{title:"Setting up Swapfile",permalink:"/developers/pac-protocol-core/setting-up-swapfile"}},i=[],u={toc:i};function d(t){var e=t.components,o=(0,n.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-bootstrap"},"Install Bootstrap"),(0,a.kt)("p",null,"Downloading & Installing Bootstrap can help you to sync it faster. It can also help in situation if the blockchain is not syncing on your machine."),(0,a.kt)("p",null,"This is ",(0,a.kt)("strong",{parentName:"p"},"optional")," and not mandatory."),(0,a.kt)("p",null,"At first stop your daemon instance by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop pac.service\n")),(0,a.kt)("p",null,"If you skipped the ",(0,a.kt)("a",{parentName:"p",href:"/developers/pac-protocol-core/getting-started#step-3---creating-systemctl-service-optional-recommended"},"Step 3 from Getting Started"),", you can run daemon by following step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./root/PACProtocol/pacprotocol-cli stop # Only when skipped Step 3\n")),(0,a.kt)("p",null,"Remove some content in ",(0,a.kt)("inlineCode",{parentName:"p"},".PACProtocol"),", download Bootstrap and move content of Bootstrap to ",(0,a.kt)("inlineCode",{parentName:"p"},".PACProtocol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Download Bootstrap & Unpack it\nwget https://utils.pacprotocol.com/Bootstrap.tar.gz -O /root/Bootstrap.tar.gz\ntar -xzf /root/Bootstrap.tar.gz -C /root/Bootstrap\n\n# Remove blockchain files + Bootstrap.tar.gz\nrm -rf /root/.PACProtocol/evodb /root/.PACProtocol/chainstate /root/.PACProtocol/blocks /root/.PACProtocol/peers.dat /root/Boostrap.tar.gz\n\n# Move Bootstrap files to .PACProtocol\nmv /root/Bootstrap/evodb /root/.PACProtocol/evodb\nmv /root/Bootstrap/chainstate /root/.PACProtocol/chainstate\nmv /root/Bootstrap/blocks /root/.PACProtocol/blocks\nmv /root/Bootstrap/peers.dat /root/.PACProtocol/peers.dat\n")),(0,a.kt)("p",null,"Then you can safetly turn PAC Protocol Daemon on again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start pac.service\n")),(0,a.kt)("p",null,"Or if skipped ",(0,a.kt)("a",{parentName:"p",href:"/developers/pac-protocol-core/getting-started#step-3---creating-systemctl-service-optional-recommended"},"Step 3 from Getting Started"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./root/PACProtocol/pacprotocold -daemon # Only when skipped Step 3\n")),(0,a.kt)("p",null,"In this case, it will sync much quicklier. It should be done in few minutes."),(0,a.kt)("p",null,"You can validate if the blockchain is fully synced:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"mnsync","params":["status"]}\' -H \'content-type:text/plain;\' http://<rpcusername>:<rpcpassword>@127.0.0.1:7111/\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},'"isBlockchainSynced"')," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it means the blockchain on your machine is fully synced!"))}d.isMDXComponent=!0}}]);