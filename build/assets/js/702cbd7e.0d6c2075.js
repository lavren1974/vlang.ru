"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[1797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:9},o="Compile time pseudo variables",l={unversionedId:"advanced/compile-time-pseudo-variables",id:"advanced/compile-time-pseudo-variables",title:"Compile time pseudo variables",description:"V also gives your code access to a set of pseudo string variables,",source:"@site/docs/advanced/compile-time-pseudo-variables.md",sourceDirName:"advanced",slug:"/advanced/compile-time-pseudo-variables",permalink:"/docs/advanced/compile-time-pseudo-variables",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/docs/advanced/debugging"},next:{title:"Conditional compilation",permalink:"/docs/advanced/conditional-compilation"}},p={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compile-time-pseudo-variables"},"Compile time pseudo variables"),(0,a.kt)("p",null,"V also gives your code access to a set of pseudo string variables,\nthat are substituted at compile time:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FN")," => replaced with the name of the current V function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@METHOD")," => replaced with ReceiverType.MethodName"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@MOD")," => replaced with the name of the current V module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@STRUCT")," => replaced with the name of the current V struct"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FILE")," => replaced with the path of the V source file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@LINE")," => replaced with the V line number where it appears (as a string)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@COLUMN")," => replaced with the column where it appears (as a string)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@VEXE")," => replaced with the path to the V compiler"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@VEXEROOT"),"  => will be substituted with the ",(0,a.kt)("em",{parentName:"li"},"folder"),",\nwhere the V executable is (as a string)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@VHASH"),"  => replaced with the shortened commit hash of the V compiler (as a string)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@VMOD_FILE")," => replaced with the contents of the nearest v.mod file (as a string)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@VMODROOT")," => will be substituted with the ",(0,a.kt)("em",{parentName:"li"},"folder"),",\nwhere the nearest v.mod file is (as a string).")),(0,a.kt)("p",null,"That allows you to do the following example, useful while debugging/logging/tracing your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"eprintln('file: ' + @FILE + ' | line: ' + @LINE + ' | fn: ' + @MOD + '.' + @FN)\n")),(0,a.kt)("p",null,"Another example, is if you want to embed the version/name from v.mod ",(0,a.kt)("em",{parentName:"p"},"inside")," your executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"import v.vmod\nvm := vmod.decode( @VMOD_FILE ) or { panic(err) }\neprintln('$vm.name $vm.version\\n $vm.description')\n")))}m.isMDXComponent=!0}}]);