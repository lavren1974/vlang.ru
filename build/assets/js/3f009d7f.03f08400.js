"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[9170],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),p=l(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,o(o({ref:e},c),{},{components:t})):r.createElement(d,o({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2434:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:13},o="Functions 2",u={unversionedId:"documentation/functions2",id:"documentation/functions2",title:"Functions 2",description:"Immutable function args by default",source:"@site/docs/documentation/functions2.md",sourceDirName:"documentation",slug:"/documentation/functions2",permalink:"/docs/documentation/functions2",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Unions",permalink:"/docs/documentation/unions"},next:{title:"References",permalink:"/docs/documentation/references"}},s={},l=[{value:"Immutable function args by default",id:"immutable-function-args-by-default",level:2},{value:"Mutable arguments",id:"mutable-arguments",level:2},{value:"Struct update syntax",id:"struct-update-syntax",level:3},{value:"Variable number of arguments",id:"variable-number-of-arguments",level:2},{value:"Anonymous &amp; higher order functions",id:"anonymous--higher-order-functions",level:2},{value:"Closures",id:"closures",level:2}],c={toc:l};function m(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-2"},"Functions 2"),(0,a.kt)("h2",{id:"immutable-function-args-by-default"},"Immutable function args by default"),(0,a.kt)("p",null,"In V function arguments are immutable by default, and mutable args have to be\nmarked on call."),(0,a.kt)("p",null,"Since there are also no globals, that means that the return values of the functions,\nare a function of their arguments only, and their evaluation has no side effects\n(unless the function uses I/O)."),(0,a.kt)("p",null,"Function arguments are immutable by default, even when ",(0,a.kt)("a",{parentName:"p",href:"#references"},"references")," are passed."),(0,a.kt)("p",null,"Note that V is not a purely functional language however."),(0,a.kt)("p",null,"There is a compiler flag to enable global variables (",(0,a.kt)("inlineCode",{parentName:"p"},"-enable-globals"),"), but this is\nintended for low-level applications like kernels and drivers."),(0,a.kt)("h2",{id:"mutable-arguments"},"Mutable arguments"),(0,a.kt)("p",null,"It is possible to modify function arguments by declaring them with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"mut"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},'struct User {\n    name string\nmut:\n    is_registered bool\n}\n\nfn (mut u User) register() {\n    u.is_registered = true\n}\n\nmut user := User{}\nprintln(user.is_registered) // "false"\nuser.register()\nprintln(user.is_registered) // "true"\n')),(0,a.kt)("p",null,"In this example, the receiver (which is just the first argument) is explicitly marked as mutable,\nso ",(0,a.kt)("inlineCode",{parentName:"p"},"register()")," can change the user object. The same works with non-receiver arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},'fn multiply_by_2(mut arr []int) {\n    for i in 0 .. arr.len {\n        arr[i] *= 2\n    }\n}\n\nmut nums := [1, 2, 3]\nmultiply_by_2(mut nums)\nprintln(nums)\n// "[2, 4, 6]"\n')),(0,a.kt)("p",null,"Note, that you have to add ",(0,a.kt)("inlineCode",{parentName:"p"},"mut")," before ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," when calling this function. This makes\nit clear that the function being called will modify the value."),(0,a.kt)("p",null,"It is preferable to return values instead of modifying arguments,\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"user = register(user)")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"user.register()"),") instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"register(mut user)"),".\nModifying arguments should only be done in performance-critical parts of your application\nto reduce allocations and copying."),(0,a.kt)("p",null,"For this reason V doesn't allow the modification of arguments with primitive types (e.g. integers).\nOnly more complex types such as arrays and maps may be modified."),(0,a.kt)("h3",{id:"struct-update-syntax"},"Struct update syntax"),(0,a.kt)("p",null,"V makes it easy to return a modified version of an object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"struct User {\n    name          string\n    age           int\n    is_registered bool\n}\n\nfn register(u User) User {\n    return User{\n        ...u\n        is_registered: true\n    }\n}\n\nmut user := User{\n    name: 'abc'\n    age: 23\n}\nuser = register(user)\nprintln(user)\n")),(0,a.kt)("h2",{id:"variable-number-of-arguments"},"Variable number of arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"fn sum(a ...int) int {\n    mut total := 0\n    for x in a {\n        total += x\n    }\n    return total\n}\n\nprintln(sum()) // 0\nprintln(sum(1)) // 1\nprintln(sum(2, 3)) // 5\n// using array decomposition\na := [2, 3, 4]\nprintln(sum(...a)) // <-- using prefix ... here. output: 9\nb := [5, 6, 7]\nprintln(sum(...b)) // output: 18\n")),(0,a.kt)("h2",{id:"anonymous--higher-order-functions"},"Anonymous & higher order functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},'fn sqr(n int) int {\n    return n * n\n}\n\nfn cube(n int) int {\n    return n * n * n\n}\n\nfn run(value int, op fn (int) int) int {\n    return op(value)\n}\n\nfn main() {\n    // Functions can be passed to other functions\n    println(run(5, sqr)) // "25"\n    // Anonymous functions can be declared inside other functions:\n    double_fn := fn (n int) int {\n        return n + n\n    }\n    println(run(5, double_fn)) // "10"\n    // Functions can be passed around without assigning them to variables:\n    res := run(5, fn (n int) int {\n        return n + n\n    })\n    println(res) // "10"\n    // You can even have an array/map of functions:\n    fns := [sqr, cube]\n    println(fns[0](10)) // "100"\n    fns_map := {\n        \'sqr\':  sqr\n        \'cube\': cube\n    }\n    println(fns_map[\'cube\'](2)) // "8"\n}\n')),(0,a.kt)("h2",{id:"closures"},"Closures"),(0,a.kt)("p",null,"V supports closures too.\nThis means that anonymous functions can inherit variables from the scope they were created in.\nThey must do so explicitly by listing all variables that are inherited."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"my_int := 1\nmy_closure := fn [my_int] () {\n    println(my_int)\n}\nmy_closure() // prints 1\n")),(0,a.kt)("p",null,"Inherited variables are copied when the anonymous function is created.\nThis means that if the original variable is modified after the creation of the function,\nthe modification won't be reflected in the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"mut i := 1\nfunc := fn [i] () int {\n    return i\n}\nprintln(func() == 1) // true\ni = 123\nprintln(func() == 1) // still true\n")),(0,a.kt)("p",null,"However, the variable can be modified inside the anonymous function.\nThe change won't be reflected outside, but will be in the later function calls."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"fn new_counter() fn () int {\n    mut i := 0\n    return fn [mut i] () int {\n        i++\n        return i\n    }\n}\n\nc := new_counter()\nprintln(c()) // 1\nprintln(c()) // 2\nprintln(c()) // 3\n")),(0,a.kt)("p",null,"If you need the value to be modified outside the function, use a reference.\n",(0,a.kt)("strong",{parentName:"p"},"Warning"),": ",(0,a.kt)("em",{parentName:"p"},"you need to make sure the reference is always valid,\notherwise this can result in undefined behavior.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"mut i := 0\nmut ref := &i\nprint_counter := fn [ref] () {\n    println(*ref)\n}\n\nprint_counter() // 0\ni = 10\nprint_counter() // 10\n")))}m.isMDXComponent=!0}}]);