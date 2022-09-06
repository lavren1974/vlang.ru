"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[8386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:15},i="Constants",l={unversionedId:"documentation/constants",id:"documentation/constants",title:"Constants",description:"Constants are declared with const. They can only be defined",source:"@site/docs/documentation/constants.md",sourceDirName:"documentation",slug:"/documentation/constants",permalink:"/docs/documentation/constants",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/docs/documentation/references"},next:{title:"Builtin functions",permalink:"/docs/documentation/builtin-functions"}},s={},c=[{value:"Required module prefix",id:"required-module-prefix",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"constants"},"Constants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"const (\n    pi    = 3.14\n    world = '\u4e16\u754c'\n)\n\nprintln(pi)\nprintln(world)\n")),(0,a.kt)("p",null,"Constants are declared with ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),". They can only be defined\nat the module level (outside of functions).\nConstant values can never be changed. You can also declare a single\nconstant separately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"const e = 2.71828\n")),(0,a.kt)("p",null,"V constants are more flexible than in most languages. You can assign more complex values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"struct Color {\n    r int\n    g int\n    b int\n}\n\nfn rgb(r int, g int, b int) Color {\n    return Color{\n        r: r\n        g: g\n        b: b\n    }\n}\n\nconst (\n    numbers = [1, 2, 3]\n    red     = Color{\n        r: 255\n        g: 0\n        b: 0\n    }\n    // evaluate function call at compile-time*\n    blue = rgb(0, 0, 255)\n)\n\nprintln(numbers)\nprintln(red)\nprintln(blue)\n")),(0,a.kt)("p",null,"*"," WIP - for now function calls are evaluated at program start-up"),(0,a.kt)("p",null,"Global variables are not normally allowed, so this can be really useful."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modules")),(0,a.kt)("p",null,"Constants can be made public with ",(0,a.kt)("inlineCode",{parentName:"p"},"pub const"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"module mymodule\n\npub const golden_ratio = 1.61803\n\nfn calc() {\n    println(mymodule.golden_ratio)\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," keyword is only allowed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," keyword and cannot be used inside\na ",(0,a.kt)("inlineCode",{parentName:"p"},"const ( )")," block."),(0,a.kt)("p",null,"Outside from module main all constants need to be prefixed with the module name."),(0,a.kt)("h2",{id:"required-module-prefix"},"Required module prefix"),(0,a.kt)("p",null,"When naming constants, ",(0,a.kt)("inlineCode",{parentName:"p"},"snake_case")," must be used. In order to distinguish consts\nfrom local variables, the full path to consts must be specified. For example,\nto access the PI const, full ",(0,a.kt)("inlineCode",{parentName:"p"},"math.pi")," name must be used both outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"math"),"\nmodule, and inside it. That restriction is relaxed only for the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," module\n(the one containing your ",(0,a.kt)("inlineCode",{parentName:"p"},"fn main()"),"), where you can use the unqualified name of\nconstants defined there, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers"),", rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"main.numbers"),"."),(0,a.kt)("p",null,"vfmt takes care of this rule, so you can type ",(0,a.kt)("inlineCode",{parentName:"p"},"println(pi)")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"math")," module,\nand vfmt will automatically update it to ",(0,a.kt)("inlineCode",{parentName:"p"},"println(math.pi)"),"."))}p.isMDXComponent=!0}}]);