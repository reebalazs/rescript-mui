(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(85)),i={title:"Installation"},p={unversionedId:"styles-ppx/installation",id:"styles-ppx/installation",isDocsHomePage:!1,title:"Installation",description:"First, add it to you dependencies using npm or yarn:",source:"@site/docs/styles-ppx/installation.md",permalink:"/docs/styles-ppx/installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/styles-ppx/introduction"},next:{title:"Usage",permalink:"/docs/styles-ppx/usage"}},c=[],l={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First, add it to you dependencies using ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @jsiebern/bs-material-ui-ppx\n# or\nnpm install @jsiebern/bs-material-ui-ppx\n")),Object(o.b)("p",null,"Second, add it to ",Object(o.b)("inlineCode",{parentName:"p"},"ppx-flags")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"bsconfig.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ppx-flags": ["@jsiebern/bs-material-ui-ppx/ppx"]\n}\n')),Object(o.b)("p",null,"In some cases, depending on your project structure and build process, you might\nhave to reference the path directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ppx-flags": ["./node_modules/@jsiebern/bs-material-ui-ppx/ppx"]\n}\n')))}s.isMDXComponent=!0},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,p(p({ref:n},l),{},{components:t})):a.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);