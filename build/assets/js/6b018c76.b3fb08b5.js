"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[7753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,y=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:19},i="Custom error types",p={unversionedId:"documentation/custom-error-types",id:"documentation/custom-error-types",title:"Custom error types",description:"V gives you the ability to define custom error types through the IError interface.",source:"@site/docs/documentation/custom-error-types.md",sourceDirName:"documentation",slug:"/documentation/custom-error-types",permalink:"/docs/documentation/custom-error-types",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Type Declarations",permalink:"/docs/documentation/type-declarations"},next:{title:"Generics",permalink:"/docs/documentation/generics"}},c={},s=[],u={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-error-types"},"Custom error types"),(0,o.kt)("p",null,"V gives you the ability to define custom error types through the ",(0,o.kt)("inlineCode",{parentName:"p"},"IError")," interface.\nThe interface requires two methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"msg() string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"code() int"),". Every type that\nimplements these methods can be used as an error."),(0,o.kt)("p",null,"When defining a custom error type it is recommended to embed the builtin ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," default\nimplementation. This provides an empty default implementation for both required methods,\nso you only have to implement what you really need, and may provide additional utility\nfunctions in the future."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v"},"struct PathError {\n    Error\n    path string\n}\n\nfn (err PathError) msg() string {\n    return 'Failed to open path: $err.path'\n}\n\nfn try_open(path string) ? {\n    return IError(PathError{\n        path: path\n    })\n}\n\nfn main() {\n    try_open('/tmp') or { panic(err) }\n}\n")))}l.isMDXComponent=!0}}]);