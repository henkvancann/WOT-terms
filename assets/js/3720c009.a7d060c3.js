"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[3751],{10727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(67294),r=a(86010),n=a(35155),s=a(1944),c=a(35281),m=a(39178),o=a(26090),u=a(90197);function g(e){let{tags:t}=e;const a=(0,n.M)();return l.createElement(s.FG,{className:(0,r.Z)(c.k.wrapper.docsPages,c.k.page.docsTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(u.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(o.Z,{tags:t}))))))}},13008:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),r=a(86010),n=a(39960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:a,count:c}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(s.tag,c?s.tagWithCount:s.tagRegular)},a,c&&l.createElement("span",null,c))}},26090:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),r=a(35155),n=a(13008);const s={tag:"tag_Nnez"};function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(n.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},35155:(e,t,a)=>{a.d(t,{M:()=>r,P:()=>n});var l=a(95999);const r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);