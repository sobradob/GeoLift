"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),f=n,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4914:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:2},l="Comparison to other Methodologies",c={unversionedId:"Methodology/ComparisonOthers",id:"Methodology/ComparisonOthers",isDocsHomePage:!1,title:"Comparison to other Methodologies",description:"Below is a quick summary of some of the most popular geo testing algorithms currently used in the market. We have kept it at a very high-level intentionally. A more thorough comparison of GeoLift to other pseudo-experimental approaches can be found here.",source:"@site/docs/Methodology/ComparisonOthers.md",sourceDirName:"Methodology",slug:"/Methodology/ComparisonOthers",permalink:"/GeoLift/docs/Methodology/ComparisonOthers",editUrl:"https://github.com/facebookincubator/GeoLift/docs/Methodology/ComparisonOthers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GeoLift Methodology",permalink:"/GeoLift/docs/Methodology/Methodology"},next:{title:"GeoLift Best Practices",permalink:"/GeoLift/docs/Best Practices/BestPractices"}},p=[],u={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparison-to-other-methodologies"},"Comparison to other Methodologies"),(0,a.kt)("p",null,"Below is a quick summary of some of the most popular geo testing algorithms currently used in the market. We have kept it at a very high-level intentionally. A more thorough comparison of GeoLift to other pseudo-experimental approaches can be found ",(0,a.kt)("a",{parentName:"p",href:"https://fb.workplace.com/groups/geolift/permalink/792753078134296/"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Differences-in-differences:")," This is the most popular and easiest approach to run an inference for a geo test. Not recommended usually unless the predicted effect size is really large. DID has fallen out of use mainly due to its reliance on the parallel trends assumption, which rarely happens in actual experiments."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CausalImpact (by Google)"),": Uses a Bayesian time-series modeling technique to predict the counterfactual. It\u2019s especially useful when strong prior knowledge is available or when the KPI metric isn\u2019t available and modelling has to be done on a proxy."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"GeoX (by Google):")," Uses a linear model to predict the counterfactual time-series. It is positioned as a more robust solution for paired market studies and also as having superior small sample properties (low number of test/control markets)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Synthetic Control Method (synth):")," Uses a weighted combination of control market conversions to build a counterfactual for test markets. This method has gained a lot of popularity recently but can provide biased results if a perfect match can't be found from the pool of controls. Variations of this method power GeoLift.")))}m.isMDXComponent=!0}}]);