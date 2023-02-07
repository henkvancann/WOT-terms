"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,l={unversionedId:"terms/glossary/blind-oobi",id:"terms/glossary/blind-oobi",title:"blind-oobi",description:"Definition",source:"@site/docs/terms/glossary/blind-oobi.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/blind-oobi",permalink:"/WOT-terms/docs/terms/glossary/blind-oobi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blake3",permalink:"/WOT-terms/docs/terms/glossary/blake3"},next:{title:"blinded-revocation-registry",permalink:"/WOT-terms/docs/terms/glossary/blinded-revocation-registry"}},s={},u=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2},{value:"The working",id:"the-working",level:2},{value:"Unblind",id:"unblind",level:2},{value:"Why is a blind OOBI interesting",id:"why-is-a-blind-oobi-interesting",level:2},{value:"Related terms",id:"related-terms",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A blind ",(0,i.kt)("a",{parentName:"p",href:"OOBI"},"OOBI")," means that you have some mechanisms in place for verifying the ",(0,i.kt)("a",{parentName:"p",href:"AID"},"AID")," instead of via the OOBI itself. A blind OOBI is essentially a ",(0,i.kt)("a",{parentName:"p",href:"URL"},"URL"),'. It\'s called "blind" because the witness is not in the OOBI itself. You haves other ways of verifying the AID supplied. '),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"A blind OOBI through an AID that is on some witness list and has been verified to root-of-trust already. So you know the human being behind this referred AID. Because it's an AID that has a ",(0,i.kt)("a",{parentName:"p",href:"KEL"},"KEL")," out there, which has been securely established, you can trust it. So a blind OOBI makes a via-via commitment. "),(0,i.kt)("h2",{id:"the-working"},"The working"),(0,i.kt)("p",null,"A natural person that you trust is an owner of an AID. Then you cryptographically commit this AID to another AID through some mechanism (e.g. a witness list)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\"Here's my public key and here's my AID and because this in an another witness list I trust it.\"")),(0,i.kt)("h2",{id:"unblind"},"Unblind"),(0,i.kt)("p",null,"A 'blind' AID becomes \"unblind\" when you establish a direct relationship with human being who controls the referenced AID. You shortcut the blind OOBI because you established a direct OOBI to the formerly reference AID."),(0,i.kt)("h2",{id:"why-is-a-blind-oobi-interesting"},"Why is a blind OOBI interesting"),(0,i.kt)("p",null,"type 2 authentication: minimise the friction\n{TBW prio 3}"),(0,i.kt)("h2",{id:"related-terms"},"Related terms"),(0,i.kt)("p",null,"Authentication by reference, latent authenticity"))}p.isMDXComponent=!0}}]);