(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3771],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return l},kt:function(){return d}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),u=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=u(n.components);return o.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=u(t),d=r,x=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?o.createElement(x,a(a({ref:e},l),{},{components:t})):o.createElement(x,a({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},351:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:50},c="getcoinjoininfo",u={unversionedId:"developers/pac-protocol-core/client-commands/getcoinjoininfo",id:"developers/pac-protocol-core/client-commands/getcoinjoininfo",isDocsHomePage:!1,title:"getcoinjoininfo",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/getcoinjoininfo.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/getcoinjoininfo",permalink:"/developers/pac-protocol-core/client-commands/getcoinjoininfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/developers/pac-protocol-core/client-commands/getcoinjoininfo.mdx",version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"coreSidebar",previous:{title:"getchaintxstats",permalink:"/developers/pac-protocol-core/client-commands/getchaintxstats"},next:{title:"getconnectioncount",permalink:"/developers/pac-protocol-core/client-commands/getconnectioncount"}},l=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],m={toc:l};function p(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getcoinjoininfo"},"getcoinjoininfo"),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getcoinjoininfo\n")),(0,i.kt)("p",null,"getcoinjoininfo\nReturns an object containing an information about CoinJoin settings and state."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getcoinjoininfo \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getcoinjoininfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Result #(for regular nodes):\n{\n  "enabled": true|false,             #(bool) Whether mixing functionality is enabled\n  "multisession": true|false,        #(bool) Whether CoinJoin Multisession option is enabled\n  "max_sessions": xxx,               #(numeric) How many parallel mixing sessions can there be at once\n  "max_rounds": xxx,                 #(numeric) How many rounds to mix\n  "max_amount": xxx,                 #(numeric) Target CoinJoin balance in PAC\n  "denoms_goal": xxx,                #(numeric) How many inputs of each denominated amount to target\n  "denoms_hardcap": xxx,             #(numeric) Maximum limit of how many inputs of each denominated amount to create\n  "queue_size": xxx,                 #(numeric) How many queues there are currently on the network\n  "running": true|false,             #(bool) Whether mixing is currently running\n  "sessions":                        #(array of json objects)\n    [\n      {\n      "protxhash": "...",            #(string) The ProTxHash of the masternode\n      "outpoint": "txid-index",      #(string) The outpoint of the masternode\n      "service": "host:port",        #(string) The IP address and port of the masternode\n      "denomination": xxx,           #(numeric) The denomination of the mixing session in PAC\n      "state": "...",                #(string) Current state of the mixing session\n      "entries_count": xxx,          #(numeric) The number of entries in the mixing session\n      }\n      ,...\n    ],\n  "keys_left": xxx,                  #(numeric) How many new keys are left since last automatic backup\n  "warnings": "..."                  #(string) Warnings if any\n}\n\nResult #(for masternodes):\n{\n  "queue_size": xxx,                 #(numeric) How many queues there are currently on the network\n  "denomination": xxx,               #(numeric) The denomination of the mixing session in PAC\n  "state": "...",                    #(string) Current state of the mixing session\n  "entries_count": xxx,              #(numeric) The number of entries in the mixing session\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getcoinjoininfo\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getcoinjoininfo\nReturns an object containing an information about CoinJoin settings and state.\n\nResult (for regular nodes):\n{\n  "enabled": true|false,             (bool) Whether mixing functionality is enabled\n  "multisession": true|false,        (bool) Whether CoinJoin Multisession option is enabled\n  "max_sessions": xxx,               (numeric) How many parallel mixing sessions can there be at once\n  "max_rounds": xxx,                 (numeric) How many rounds to mix\n  "max_amount": xxx,                 (numeric) Target CoinJoin balance in PAC\n  "denoms_goal": xxx,                (numeric) How many inputs of each denominated amount to target\n  "denoms_hardcap": xxx,             (numeric) Maximum limit of how many inputs of each denominated amount to create\n  "queue_size": xxx,                 (numeric) How many queues there are currently on the network\n  "running": true|false,             (bool) Whether mixing is currently running\n  "sessions":                        (array of json objects)\n    [\n      {\n      "protxhash": "...",            (string) The ProTxHash of the masternode\n      "outpoint": "txid-index",      (string) The outpoint of the masternode\n      "service": "host:port",        (string) The IP address and port of the masternode\n      "denomination": xxx,           (numeric) The denomination of the mixing session in PAC\n      "state": "...",                (string) Current state of the mixing session\n      "entries_count": xxx,          (numeric) The number of entries in the mixing session\n      }\n      ,...\n    ],\n  "keys_left": xxx,                  (numeric) How many new keys are left since last automatic backup\n  "warnings": "..."                  (string) Warnings if any\n}\n\nResult (for masternodes):\n{\n  "queue_size": xxx,                 (numeric) How many queues there are currently on the network\n  "denomination": xxx,               (numeric) The denomination of the mixing session in PAC\n  "state": "...",                    (string) Current state of the mixing session\n  "entries_count": xxx,              (numeric) The number of entries in the mixing session\n}\n\nExamples:\n> pacprotocol-cli getcoinjoininfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getcoinjoininfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);