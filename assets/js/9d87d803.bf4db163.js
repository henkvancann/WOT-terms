"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[7224],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},f=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=d(i),h=n,m=c["".concat(o,".").concat(h)]||c[h]||p[h]||r;return i?a.createElement(m,l(l({ref:t},f),{},{components:i})):a.createElement(m,l({ref:t},f))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},69227:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={},l=void 0,s={unversionedId:"terms/glossary/self-addressing-identifier",id:"terms/glossary/self-addressing-identifier",title:"self-addressing-identifier",description:"Definition",source:"@site/docs/terms/glossary/self-addressing-identifier.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/self-addressing-identifier",permalink:"/WOT-terms/docs/terms/glossary/self-addressing-identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"self-addressing-data",permalink:"/WOT-terms/docs/terms/glossary/self-addressing-data"},next:{title:"self-certifying-identifier",permalink:"/WOT-terms/docs/terms/glossary/self-certifying-identifier"}},o={},d=[{value:"Definition",id:"definition",level:2},{value:"To generate a SAID",id:"to-generate-a-said",level:3},{value:"To verify that a SAID truly identifies a specific chunk of data",id:"to-verify-that-a-said-truly-identifies-a-specific-chunk-of-data",level:3},{value:"Differences in SAID algorthms manifest in the following choices",id:"differences-in-said-algorthms-manifest-in-the-following-choices",level:3},{value:"Notation",id:"notation",level:3}],f={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"An identifier that is deterministically generated from and embedded in the content it identifies, making it and its data mutually tamper-evident."),(0,n.kt)("h3",{id:"to-generate-a-said"},"To generate a SAID"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Fully populate the data that the SAID will identify, leaving a placeholder for the value of the SAID itself."),(0,n.kt)("li",{parentName:"ol"},"Canonicalize the data, if needed. The result is called the SAID's ",(0,n.kt)("strong",{parentName:"li"},"identifiable basis"),"."),(0,n.kt)("li",{parentName:"ol"},"Hash the ",(0,n.kt)("em",{parentName:"li"},"identifiable basis"),". The result is the value of the SAID."),(0,n.kt)("li",{parentName:"ol"},"Replace the placeholder in ",(0,n.kt)("em",{parentName:"li"},"identifiable basis")," the with the newly generated identifier, so the SAID is embedded in the data it identifies. The result is called the ",(0,n.kt)("strong",{parentName:"li"},"saidified data."))),(0,n.kt)("h3",{id:"to-verify-that-a-said-truly-identifies-a-specific-chunk-of-data"},"To verify that a SAID truly identifies a specific chunk of data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Canonicalize the data, if needed. The result is ",(0,n.kt)("strong",{parentName:"li"},"claimed saidified data"),"."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("em",{parentName:"li"},"claimed saidified data"),", replace the SAID value with a placeholder. The result is the ",(0,n.kt)("strong",{parentName:"li"},"identifiable basis")," for the SAID."),(0,n.kt)("li",{parentName:"ol"},"Hash the ",(0,n.kt)("em",{parentName:"li"},"identifiable basis"),"."),(0,n.kt)("li",{parentName:"ol"},"Compare the hash value to the SAID. If they are equal, then the SAID identifies the ",(0,n.kt)("em",{parentName:"li"},"claimed saidified data"),". ")),(0,n.kt)("h3",{id:"differences-in-said-algorthms-manifest-in-the-following-choices"},"Differences in SAID algorthms manifest in the following choices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"how data is canonicalized"),(0,n.kt)("li",{parentName:"ul"},"which hash algorithm is used"),(0,n.kt)("li",{parentName:"ul"},"which placeholder is used"),(0,n.kt)("li",{parentName:"ul"},"how the bytes produced by the hash algorithm are encoded"),(0,n.kt)("li",{parentName:"ul"},"how the SAID value is formatted")),(0,n.kt)("h3",{id:"notation"},"Notation"),(0,n.kt)("p",null,"A terse way to describe a SAID and its data is to write an expression that consists of the token ",(0,n.kt)("inlineCode",{parentName:"p"},"SAID")," followed by a token with field names in canonical order, where the field containing the SAID itsef is marked by the suffix ",(0,n.kt)("inlineCode",{parentName:"p"},"=said"),". For example, the saidification of a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"ContactInfo")," data structure might be given as ",(0,n.kt)("inlineCode",{parentName:"p"},"SAID(name, address, phone, email, id=said)"),"."))}p.isMDXComponent=!0}}]);