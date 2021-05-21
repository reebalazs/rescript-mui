(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(85)),i={title:"Introduction"},c={unversionedId:"styles-ppx/introduction",id:"styles-ppx/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is a PPX?",source:"@site/docs/styles-ppx/introduction.md",permalink:"/docs/styles-ppx/introduction",sidebar:"docs",previous:{title:"Icons",permalink:"/docs/project-structure/icons"},next:{title:"Installation",permalink:"/docs/styles-ppx/installation"}},s=[{value:"What is a PPX?",id:"what-is-a-ppx",children:[]},{value:"Why do we need one for bs-material-ui?",id:"why-do-we-need-one-for-bs-material-ui",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-ppx"},"What is a PPX?"),Object(o.b)("p",null,"PPX stands for ",Object(o.b)("strong",{parentName:"p"},"Pre Processor eXtension"),". There is a fairly detailed article\nby ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/dylanirlbeck"}),"@dylanirlbeck")," that I'd recommed if you're\ninterested in the nuts and bolts of these extensions:\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://dev.to/dylanirlbeck/intro-to-ppxs-for-reason-newcomers-2829"}),"Link to the article"),"."),Object(o.b)("h2",{id:"why-do-we-need-one-for-bs-material-ui"},"Why do we need one for bs-material-ui?"),Object(o.b)("p",null,"When you create some\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://material-ui.com/guides/typescript/#usage-of-withstyles"}),"styles in MaterialUi"),",\nyou pass an object to the ",Object(o.b)("inlineCode",{parentName:"p"},"withStyles")," function that returns another object with\nthe same keys that contains the class names as values."),Object(o.b)("p",null,"While this is easily representable in Typescript for example, there is no\nstraight forward way to do this in ",Object(o.b)("inlineCode",{parentName:"p"},"ReScript"),". This is where the PPX comes in."),Object(o.b)("p",null,"You pass an object in and it automatically generates all needed types and\nfunction applications for you. This keeps the tedious and quite verbose work\nfrom you while staying completely type safe when accessing the generated class\nnames."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/styles-ppx/usage"}),"Usage")," for more details."))}l.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);