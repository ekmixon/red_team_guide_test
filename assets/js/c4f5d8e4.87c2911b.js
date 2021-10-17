"use strict";(self.webpackChunkbs_support=self.webpackChunkbs_support||[]).push([[195],{3667:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var n=t(7294),r=t(6010),c=t(2680),l=(t(6742),t(2263)),i=t(7462),s="features_pzNA",o=[{title:"Get a paperback copy",Png:t(5264).Z,Link:"https://www.amazon.com/dp/B083XVG633/ref=sr_1_2?keywords=red+team+development&qid=1579624713&sr=8-2",description:n.createElement(n.Fragment,null,"Purchase a paperback copy from Amazon")},{title:"Get a copy on Kindle",Png:t(2529).Z,Link:"https://www.amazon.com/gp/product/B0842BMMCC?pf_rd_p=ab873d20-a0ca-439b-ac45-cd78f07a84d8&pf_rd_r=2P19FT2TFRS8R4D4KP3V",description:n.createElement(n.Fragment,null,"Purchase a kindle copy from Amazon")},{title:"Leave a Review",Png:t(7048).Z,Link:"https://www.amazon.com/review/create-review?asin=B083XVG633",description:n.createElement(n.Fragment,null,"Already have a copy? Consider leaving a review.")}];function d(e){var a=e.Png,t=e.Link,c=e.title,l=e.description;return n.createElement("div",{className:(0,r.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("a",{href:t,target:"_blank"},"  ",n.createElement("img",{src:a,alt:c})," ")),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,c),n.createElement("p",null,l)))}function m(){return n.createElement("section",{className:s},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},o.map((function(e,a){return n.createElement(d,(0,i.Z)({key:a},e))})))))}var u=t(2004);function p(){(0,l.Z)().siteConfig;return n.createElement("header",{className:(0,r.Z)("h2")},n.createElement("div",{className:"container"},n.createElement("h3",null,"A practical guide to Red Team Operations, written by: Joe Vest and James Tubberville")),n.createElement("hr",null))}function h(){var e=(0,l.Z)().siteConfig;return n.createElement(c.Z,{title:""+e.title,description:"Description will go into a meta tag in <head />"},n.createElement("img",{src:"/red_team_guide_test/img/background.png"}),n.createElement(p,null),n.createElement("main",null,n.createElement(m,null),n.createElement("hr",null),n.createElement("div",{className:"container"},n.createElement("h3",null,"Book Reviews"),n.createElement("div",{className:"row"},n.createElement("a",{href:"https://www.amazon.com/Red-Team-Development-Operations-practical/dp/B083XVG633/ref=sr_1_1?crid=1USP7TO03RQOG&dchild=1&keywords=red+team+development+and+operations&qid=1634472764&sprefix=red+team+dev%2Caps%2C170&sr=8-1#customerReviews"},n.createElement("img",{src:"/red_team_guide_test/img/reviews.png"})),n.createElement(u.Z,{url:"https://www.youtube.com/watch?v=SQYBwVY8g9I"})))))}},6979:function(e,a,t){var n=t(7294),r=t(4184),c=t.n(r),l=t(5977),i=t(2263),s=t(8084);a.Z=function(e){var a=(0,n.useRef)(!1),r=(0,n.useRef)(null),o=(0,l.k6)(),d=(0,i.Z)().siteConfig,m=(void 0===d?{}:d).baseUrl,u=(0,s.usePluginData)("docusaurus-lunr-search"),p=function(){a.current||(Promise.all([fetch(""+m+u.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+m+u.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(878),t.e(452)]).then(t.bind(t,7780)),Promise.all([t.e(532),t.e(343)]).then(t.bind(t,3343))]).then((function(e){var a=e[0],t=e[1],n=e[2].default;0!==a.length&&function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,o.push(n)}})}(a,t,n)})),a.current=!0)},h=(0,n.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:h,onBlur:h,ref:r}))}},5264:function(e,a,t){a.Z=t.p+"assets/images/book-cover-ed9f0fe01cf48e9f6a6756cec3c4a309.png"},7048:function(e,a,t){a.Z=t.p+"assets/images/book-review-cc8450c394b42588698dbb6212ddd353.png"},2529:function(e,a,t){a.Z=t.p+"assets/images/kindle-cover-a12f9b71b6eff2ea5e7ce2862ffa3deb.png"}}]);