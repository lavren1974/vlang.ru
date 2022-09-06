"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[7793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5},a="Functions",l={unversionedId:"documentation/functions",id:"documentation/functions",title:"Functions",description:"Again, the type comes after the argument's name.",source:"@site/docs/documentation/functions.md",sourceDirName:"documentation",slug:"/documentation/functions",permalink:"/docs/documentation/functions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Comments",permalink:"/docs/documentation/comments"},next:{title:"Symbol visibility",permalink:"/docs/documentation/symbol-visibility"}},u={},c=[{value:"Hoistings",id:"hoistings",level:2},{value:"Returning multiple values",id:"returning-multiple-values",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    println(add(77, 33))\n    println(sub(100, 50))\n}\n\nfn add(x int, y int) int {\n    return x + y\n}\n\nfn sub(x int, y int) int {\n    return x - y\n}\n")),(0,i.kt)("p",null,"Again, the type comes after the argument's name."),(0,i.kt)("p",null,"Just like in Go and C, functions cannot be overloaded.\nThis simplifies the code and improves maintainability and readability."),(0,i.kt)("h2",{id:"hoistings"},"Hoistings"),(0,i.kt)("p",null,"Functions can be used before their declaration:\n",(0,i.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," are declared after ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", but can still be called from ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),".\nThis is true for all declarations in V and eliminates the need for header files\nor thinking about the order of files and declarations."),(0,i.kt)("h2",{id:"returning-multiple-values"},"Returning multiple values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"fn foo() (int, int) {\n    return 2, 3\n}\n\na, b := foo()\nprintln(a) // 2\nprintln(b) // 3\nc, _ := foo() // ignore values using `_`\n")))}p.isMDXComponent=!0}}]);