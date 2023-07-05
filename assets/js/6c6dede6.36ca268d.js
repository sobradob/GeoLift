"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4608],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},398:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={slug:"geo-measurement-review",title:"A Brief Review of Geo Measurement Approaches",authors:["arturo"],tags:["GeoLift","Geo Measurement","SCM","DID"]},l=void 0,c={permalink:"/GeoLift/blog/geo-measurement-review",editUrl:"https://github.com/facebookincubator/GeoLift/blog/2021-10-02-GeoMeasurement.md",source:"@site/blog/2021-10-02-GeoMeasurement.md",title:"A Brief Review of Geo Measurement Approaches",description:"Intro to Quasi-Experiments",date:"2021-10-02T00:00:00.000Z",formattedDate:"October 2, 2021",tags:[{label:"GeoLift",permalink:"/GeoLift/blog/tags/geo-lift"},{label:"Geo Measurement",permalink:"/GeoLift/blog/tags/geo-measurement"},{label:"SCM",permalink:"/GeoLift/blog/tags/scm"},{label:"DID",permalink:"/GeoLift/blog/tags/did"}],readingTime:1.68,truncated:!1,authors:[{name:"Arturo Esquerra",title:"Marketing Science @ Meta | GeoLift Team",url:"https://github.com/ArturoEsquerra/",imageURL:"https://github.com/ArturoEsquerra.png",key:"arturo"}],prevItem:{title:"Launching GeoLift v2.3 - Streamlined and Improved Power Calculations",permalink:"/GeoLift/blog/geolift-v23"},nextItem:{title:"Welcome",permalink:"/GeoLift/blog/welcome"}},u={authorsImageUrls:[void 0]},m=[{value:"Intro to Quasi-Experiments",id:"intro-to-quasi-experiments",children:[],level:2}],p={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intro-to-quasi-experiments"},"Intro to Quasi-Experiments"),(0,a.kt)("p",null,"While Randomized Control Trials remain as the gold-standard for causal analysis, good RCTs are hard to come by given how complicated and expensive they are to execute. In particular, their reliance on randomization, which is the foundation for their unbiasedness, is often one of the factors that limit their usage. Some of the most common drawbacks of randomly splitting a population into test and control groups are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementing and maintaining the randomization throughout the experiment requires a robust infrastructure."),(0,a.kt)("li",{parentName:"ul"},"Limiting the treatment to only the test group can be unethical. For example, restraining the control group from receiving life-saving medicine is wrong. This could also be the case for PSAs."),(0,a.kt)("li",{parentName:"ul"},"It is common to have constraints on which units can be part of the test and control groups. These constraints prevent us from having a good randomization. For example, in a geo-experiment there are often a set of locations that need to receive the treatment and some units can\u2019t get the treatment, which severely reduces the possible randomizations and greatly reduces the experiment\u2019s precision.")),(0,a.kt)("p",null,"Quasi-experimental methods offer a great alternative to measure the impact of a treatment (such as an ad campaign) whenever randomization is not logistically feasible or ethical. These methods differ from traditional RCTs in that they don\u2019t use randomization to select the test and control groups. This gives us a lot of additional flexibility in the experimental design at the cost of a typically larger sample sizes and additional modeling assumptions. Nevertheless, under the right circumstances quasi-experiments provide a great alternative to measure a treatment and can empower advertisers that have been historically unable to use incrementality to start taking decisions based on Lift. Moreover, one of the most commonly used type of quasi-experiments are geo tests, in which the units of experimentation are geographical areas such as zip-codes, cities, regions, or states. In this note we will do a historical review of the most commonly used approaches to geographic quasi-experimentation and compare them to GeoLift."))}f.isMDXComponent=!0}}]);