(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5580],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return x}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),x=r,f=p["".concat(s,".").concat(x)]||p[x]||d[x]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6239:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:40},s="getblockchaininfo",l={unversionedId:"developers/pac-protocol-core/client-commands/getblockchaininfo",id:"developers/pac-protocol-core/client-commands/getblockchaininfo",isDocsHomePage:!1,title:"getblockchaininfo",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/getblockchaininfo.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/getblockchaininfo",permalink:"/developers/pac-protocol-core/client-commands/getblockchaininfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/getblockchaininfo.mdx",version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"coreSidebar",previous:{title:"getblock",permalink:"/developers/pac-protocol-core/client-commands/getblock"},next:{title:"getblockcount",permalink:"/developers/pac-protocol-core/client-commands/getblockcount"}},u=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getblockchaininfo"},"getblockchaininfo"),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getblockchaininfo\n")),(0,i.kt)("p",null,"getblockchaininfo\nReturns an object containing various state info regarding blockchain processing."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getblockchaininfo \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockchaininfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chain": "xxxx",              #(string) current network name as defined in BIP70 #(main, test, regtest) and\n                                          devnet or devnet-&lt;name&gt; for "-devnet" and "-devnet=&lt;name&gt;" respectively\n  "blocks": xxxxxx,             #(numeric) the current number of blocks processed in the server\n  "headers": xxxxxx,            #(numeric) the current number of headers we have validated\n  "bestblockhash": "...",       #(string) the hash of the currently best block\n  "difficulty": xxxxxx,         #(numeric) the current difficulty\n  "mediantime": xxxxxx,         #(numeric) median time for the current best block\n  "verificationprogress": xxxx, #(numeric) estimate of verification progress [0..1]\n  "initialblockdownload": xxxx, #(bool) #(debug information) estimate of whether this node is in Initial Block Download mode.\n  "chainwork": "xxxx"           #(string) total amount of work in active chain, in hexadecimal\n  "size_on_disk": xxxxxx,       #(numeric) the estimated size of the block and undo files on disk\n  "pruned": xx,                 #(boolean) if the blocks are subject to pruning\n  "pruneheight": xxxxxx,        #(numeric) lowest-height complete block stored #(only present if pruning is enabled)\n  "automatic_pruning": xx,      #(boolean) whether automatic pruning is enabled #(only present if pruning is enabled)\n  "prune_target_size": xxxxxx,  #(numeric) the target size used by pruning #(only present if automatic pruning is enabled)\n  "softforks": [                #(array) status of softforks in progress\n     {\n        "id": "xxxx",           #(string) name of softfork\n        "version": xx,          #(numeric) block version\n        "reject": {             #(object) progress toward rejecting pre-softfork blocks\n           "status": xx,        #(boolean) true if threshold reached\n        },\n     }, ...\n  ],\n  "bip9_softforks": {           #(object) status of BIP9 softforks in progress\n     "xxxx" : {                 #(string) name of the softfork\n        "status": "xxxx",       #(string) one of "defined", "started", "locked_in", "active", "failed"\n        "bit": xx,              #(numeric) the bit #(0-28) in the block version field used to signal this softfork #(only for "started" status)\n        "startTime": xx,        #(numeric) the minimum median time past of a block at which the bit gains its meaning\n        "timeout": xx,          #(numeric) the median time past of a block at which the deployment is considered failed if not yet locked in\n        "since": xx,            #(numeric) height of the first block to which the status applies\n        "statistics": {         #(object) numeric statistics about BIP9 signalling for a softfork #(only for "started" status)\n           "period": xx,        #(numeric) the length in blocks of the BIP9 signalling period \n           "threshold": xx,     #(numeric) the number of blocks with the version bit set required to activate the feature \n           "elapsed": xx,       #(numeric) the number of blocks elapsed since the beginning of the current period \n           "count": xx,         #(numeric) the number of blocks with the version bit set in the current period \n           "possible": xx       #(boolean) returns false if there are not enough blocks left in this period to pass activation threshold \n        }\n     }\n  }\n  "warnings" : "...",           #(string) any network and blockchain warnings.\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getblockchaininfo\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getblockchaininfo\nReturns an object containing various state info regarding blockchain processing.\n\nResult:\n{\n  "chain": "xxxx",              (string) current network name as defined in BIP70 (main, test, regtest) and\n                                          devnet or devnet-<name> for "-devnet" and "-devnet=<name>" respectively\n  "blocks": xxxxxx,             (numeric) the current number of blocks processed in the server\n  "headers": xxxxxx,            (numeric) the current number of headers we have validated\n  "bestblockhash": "...",       (string) the hash of the currently best block\n  "difficulty": xxxxxx,         (numeric) the current difficulty\n  "mediantime": xxxxxx,         (numeric) median time for the current best block\n  "verificationprogress": xxxx, (numeric) estimate of verification progress [0..1]\n  "initialblockdownload": xxxx, (bool) (debug information) estimate of whether this node is in Initial Block Download mode.\n  "chainwork": "xxxx"           (string) total amount of work in active chain, in hexadecimal\n  "size_on_disk": xxxxxx,       (numeric) the estimated size of the block and undo files on disk\n  "pruned": xx,                 (boolean) if the blocks are subject to pruning\n  "pruneheight": xxxxxx,        (numeric) lowest-height complete block stored (only present if pruning is enabled)\n  "automatic_pruning": xx,      (boolean) whether automatic pruning is enabled (only present if pruning is enabled)\n  "prune_target_size": xxxxxx,  (numeric) the target size used by pruning (only present if automatic pruning is enabled)\n  "softforks": [                (array) status of softforks in progress\n     {\n        "id": "xxxx",           (string) name of softfork\n        "version": xx,          (numeric) block version\n        "reject": {             (object) progress toward rejecting pre-softfork blocks\n           "status": xx,        (boolean) true if threshold reached\n        },\n     }, ...\n  ],\n  "bip9_softforks": {           (object) status of BIP9 softforks in progress\n     "xxxx" : {                 (string) name of the softfork\n        "status": "xxxx",       (string) one of "defined", "started", "locked_in", "active", "failed"\n        "bit": xx,              (numeric) the bit (0-28) in the block version field used to signal this softfork (only for "started" status)\n        "startTime": xx,        (numeric) the minimum median time past of a block at which the bit gains its meaning\n        "timeout": xx,          (numeric) the median time past of a block at which the deployment is considered failed if not yet locked in\n        "since": xx,            (numeric) height of the first block to which the status applies\n        "statistics": {         (object) numeric statistics about BIP9 signalling for a softfork (only for "started" status)\n           "period": xx,        (numeric) the length in blocks of the BIP9 signalling period \n           "threshold": xx,     (numeric) the number of blocks with the version bit set required to activate the feature \n           "elapsed": xx,       (numeric) the number of blocks elapsed since the beginning of the current period \n           "count": xx,         (numeric) the number of blocks with the version bit set in the current period \n           "possible": xx       (boolean) returns false if there are not enough blocks left in this period to pass activation threshold \n        }\n     }\n  }\n  "warnings" : "...",           (string) any network and blockchain warnings.\n}\n\nExamples:\n> pacprotocol-cli getblockchaininfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockchaininfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);