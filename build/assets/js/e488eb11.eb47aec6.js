"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={title:"Red Teaming and MITRE ATT&CK",date:new Date("2020-01-21T00:00:00.000Z"),"sidebar-position":4,description:"An overview of Red Teaming the role played by MITRE ATT&CK.\n"},s="MITRE ATT&CK",c={unversionedId:"Concepts/mitre_attack",id:"Concepts/mitre_attack",isDocsHomePage:!1,title:"Red Teaming and MITRE ATT&CK",description:"An overview of Red Teaming the role played by MITRE ATT&CK.\n",source:"@site/docs/Concepts/mitre_attack.md",sourceDirName:"Concepts",slug:"/Concepts/mitre_attack",permalink:"/docs/Concepts/mitre_attack",version:"current",frontMatter:{title:"Red Teaming and MITRE ATT&CK",date:"2020-01-21T00:00:00.000Z","sidebar-position":4,description:"An overview of Red Teaming the role played by MITRE ATT&CK.\n"},sidebar:"tutorialSidebar",previous:{title:"Rules of Engagement (ROE) Planning",permalink:"/docs/checklists/roe-planning"},next:{title:"What is Red Teaming?",permalink:"/docs/Concepts/red-teaming"}},l=[{value:"References",id:"references",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mitre-attck"},"MITRE ATT&CK"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MITRE\u2019s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK\u2122) is a curated knowledge base and model for cyber adversary behavior, reflecting the various phases of an adversary\u2019s lifecycle and the platforms they are known to target. ATT&CK is useful for understanding security risk against known adversary behavior, for planning security improvements, and verifying defenses work as expected."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(715).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ATT&CK is broken into Tactics, Techniques, and Procedures")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tactics")," are the tactical goals a threat may use during an operation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Techniques")," describe the actions threats take to achieve their objectives."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Procedures")," are the technical steps required to perform the action.")),(0,i.kt)("p",null,"This frameworks provides a classification of all threat actions regardless of the underlying vulnerabilities. "),(0,i.kt)("p",null,"Red teams can emulate realistic TTPs through research and experience.  Much of this information has been complied in to ATT&CK. ATT&CK can be thought of a menu of TTPs. Red teams can use this to ensure they have a comprehensive set of threat TTPs, and blue teams can use this to build a scorecard of how well they are able to defend against various TTPs."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ATT&CK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://attack.mitre.org/wiki/Main_Page"},"https://attack.mitre.org/wiki/Main_Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PRE-ATT&CK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://attack.mitre.org/pre-attack/index.php/Main_Page"},"https://attack.mitre.org/pre-attack/index.php/Main_Page"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ATT&CK Navigator"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.mitre.org/capabilities/cybersecurity/overview/cybersecurity-blog/the-attck%E2%84%A2-navigator-a-new-open-source"},"https://www.mitre.org/capabilities/cybersecurity/overview/cybersecurity-blog/the-attck%E2%84%A2-navigator-a-new-open-source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ATT&CK Navigator Example"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://mitre.github.io/attack-navigator/enterprise/"},"https://mitre.github.io/attack-navigator/enterprise/"))))))}u.isMDXComponent=!0},715:function(e,t,n){t.Z=n.p+"assets/images/mitre-1-10efaad9c747d3239f4690f6a758c7a6.png"}}]);