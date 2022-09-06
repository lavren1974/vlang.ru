"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[6123],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),p=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=p(t),f=i,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return t?r.createElement(d,o(o({ref:e},u),{},{components:t})):r.createElement(d,o({ref:e},u))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3420:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:16},o="Builtin functions",l={unversionedId:"documentation/builtin-functions",id:"documentation/builtin-functions",title:"Builtin functions",description:"Some functions are builtin like println. Here is the complete list:",source:"@site/docs/documentation/builtin-functions.md",sourceDirName:"documentation",slug:"/documentation/builtin-functions",permalink:"/docs/documentation/builtin-functions",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Constants",permalink:"/docs/documentation/constants"},next:{title:"Modules",permalink:"/docs/documentation/modules"}},s={},p=[{value:"println",id:"println",level:2},{value:"Printing custom types",id:"printing-custom-types",level:2},{value:"Dumping expressions at runtime",id:"dumping-expressions-at-runtime",level:2}],u={toc:p};function c(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"builtin-functions"},"Builtin functions"),(0,i.kt)("p",null,"Some functions are builtin like ",(0,i.kt)("inlineCode",{parentName:"p"},"println"),". Here is the complete list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"fn print(s string) // prints anything on stdout\nfn println(s string) // prints anything and a newline on stdout\n\nfn eprint(s string) // same as print(), but uses stderr\nfn eprintln(s string) // same as println(), but uses stderr\n\nfn exit(code int) // terminates the program with a custom error code\nfn panic(s string) // prints a message and backtraces on stderr, and terminates the program with error code 1\nfn print_backtrace() // prints backtraces on stderr\n")),(0,i.kt)("p",null,"Note: Although the ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," functions take a string, V accepts other printable types too.\nSee below for details."),(0,i.kt)("p",null,"There is also a special built-in function called ",(0,i.kt)("a",{parentName:"p",href:"#dumping-expressions-at-runtime"},(0,i.kt)("inlineCode",{parentName:"a"},"dump")),"."),(0,i.kt)("h2",{id:"println"},"println"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"println")," is a simple yet powerful builtin function, that can print anything:\nstrings, numbers, arrays, maps, structs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},'struct User {\n    name string\n    age  int\n}\n\nprintln(1) // "1"\nprintln(\'hi\') // "hi"\nprintln([1, 2, 3]) // "[1, 2, 3]"\nprintln(User{ name: \'Bob\', age: 20 }) // "User{name:\'Bob\', age:20}"\n')),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"#array-methods"},"Array methods"),"."),(0,i.kt)("a",{id:"custom-print-of-types"}),(0,i.kt)("h2",{id:"printing-custom-types"},"Printing custom types"),(0,i.kt)("p",null,"If you want to define a custom print value for your type, simply define a\n",(0,i.kt)("inlineCode",{parentName:"p"},"str() string")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"struct Color {\n    r int\n    g int\n    b int\n}\n\npub fn (c Color) str() string {\n    return '{$c.r, $c.g, $c.b}'\n}\n\nred := Color{\n    r: 255\n    g: 0\n    b: 0\n}\nprintln(red)\n")),(0,i.kt)("h2",{id:"dumping-expressions-at-runtime"},"Dumping expressions at runtime"),(0,i.kt)("p",null,"You can dump/trace the value of any V expression using ",(0,i.kt)("inlineCode",{parentName:"p"},"dump(expr)"),".\nFor example, save this code sample as ",(0,i.kt)("inlineCode",{parentName:"p"},"factorial.v"),", then run it with\n",(0,i.kt)("inlineCode",{parentName:"p"},"v run factorial.v"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"fn factorial(n u32) u32 {\n    if dump(n <= 1) {\n        return dump(1)\n    }\n    return dump(n * factorial(n - 1))\n}\n\nfn main() {\n    println(factorial(5))\n}\n")),(0,i.kt)("p",null,"You will get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[factorial.v:2] n <= 1: false\n[factorial.v:2] n <= 1: false\n[factorial.v:2] n <= 1: false\n[factorial.v:2] n <= 1: false\n[factorial.v:2] n <= 1: true\n[factorial.v:3] 1: 1\n[factorial.v:5] n * factorial(n - 1): 2\n[factorial.v:5] n * factorial(n - 1): 6\n[factorial.v:5] n * factorial(n - 1): 24\n[factorial.v:5] n * factorial(n - 1): 120\n120\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"dump(expr)")," will trace both the source location,\nthe expression itself, and the expression value."))}c.isMDXComponent=!0}}]);