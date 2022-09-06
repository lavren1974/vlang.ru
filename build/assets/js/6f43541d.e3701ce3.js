"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[6237],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return t?a.createElement(f,i(i({ref:n},m),{},{components:t})):a.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:6},i="Atomics",c={unversionedId:"advanced/atomics",id:"advanced/atomics",title:"Atomics",description:"V has no special support for atomics, yet, nevertheless it's possible to treat variables as atomics",source:"@site/docs/advanced/atomics.md",sourceDirName:"advanced",slug:"/advanced/atomics",permalink:"/docs/advanced/atomics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/atomics.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Calling V from C",permalink:"/docs/advanced/calling-v-from-c"},next:{title:"Global Variables",permalink:"/docs/advanced/global-variables"}},s={},l=[],m={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"atomics"},"Atomics"),(0,o.kt)("p",null,"V has no special support for atomics, yet, nevertheless it's possible to treat variables as atomics\nby calling C functions from V. The standard C11 atomic functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"atomic_store()")," are usually\ndefined with the help of macros and C compiler magic to provide a kind of ",(0,o.kt)("em",{parentName:"p"},"overloaded C functions"),".\nSince V does not support overloading functions by intention there are wrapper functions defined in\nC headers named ",(0,o.kt)("inlineCode",{parentName:"p"},"atomic.h")," that are part of the V compiler infrastructure."),(0,o.kt)("p",null,"There are dedicated wrappers for all unsigned integer types and for pointers.\n(",(0,o.kt)("inlineCode",{parentName:"p"},"byte")," is not fully supported on Windows) ","\u2013"," the function names include the type name\nas suffix. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"C.atomic_load_ptr()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"C.atomic_fetch_add_u64()"),"."),(0,o.kt)("p",null,"To use these functions the C header for the used OS has to be included and the functions\nthat are intended to be used have to be declared. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-v",metastring:"globals",globals:!0},'$if windows {\n    #include "@VEXEROOT/thirdparty/stdatomic/win/atomic.h"\n} $else {\n    #include "@VEXEROOT/thirdparty/stdatomic/nix/atomic.h"\n}\n\n// declare functions we want to use - V does not parse the C header\nfn C.atomic_store_u32(&u32, u32)\nfn C.atomic_load_u32(&u32) u32\nfn C.atomic_compare_exchange_weak_u32(&u32, &u32, u32) bool\nfn C.atomic_compare_exchange_strong_u32(&u32, &u32, u32) bool\n\nconst num_iterations = 10000000\n\n// see section "Global Variables" below\n__global (\n    atom u32 // ordinary variable but used as atomic\n)\n\nfn change() int {\n    mut races_won_by_change := 0\n    for {\n        mut cmp := u32(17) // addressable value to compare with and to store the found value\n        // atomic version of `if atom == 17 { atom = 23 races_won_by_change++ } else { cmp = atom }`\n        if C.atomic_compare_exchange_strong_u32(&atom, &cmp, 23) {\n            races_won_by_change++\n        } else {\n            if cmp == 31 {\n                break\n            }\n            cmp = 17 // re-assign because overwritten with value of atom\n        }\n    }\n    return races_won_by_change\n}\n\nfn main() {\n    C.atomic_store_u32(&atom, 17)\n    t := go change()\n    mut races_won_by_main := 0\n    mut cmp17 := u32(17)\n    mut cmp23 := u32(23)\n    for i in 0 .. num_iterations {\n        // atomic version of `if atom == 17 { atom = 23 races_won_by_main++ }`\n        if C.atomic_compare_exchange_strong_u32(&atom, &cmp17, 23) {\n            races_won_by_main++\n        } else {\n            cmp17 = 17\n        }\n        desir := if i == num_iterations - 1 { u32(31) } else { u32(17) }\n        // atomic version of `for atom != 23 {} atom = desir`\n        for !C.atomic_compare_exchange_weak_u32(&atom, &cmp23, desir) {\n            cmp23 = 23\n        }\n    }\n    races_won_by_change := t.wait()\n    atom_new := C.atomic_load_u32(&atom)\n    println(\'atom: $atom_new, #exchanges: ${races_won_by_main + races_won_by_change}\')\n    // prints `atom: 31, #exchanges: 10000000`)\n    println(\'races won by\\n- `main()`: $races_won_by_main\\n- `change()`: $races_won_by_change\')\n}\n')),(0,o.kt)("p",null,"In this example both ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," and the spawned thread ",(0,o.kt)("inlineCode",{parentName:"p"},"change()")," try to replace a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"17"),"\nin the global ",(0,o.kt)("inlineCode",{parentName:"p"},"atom")," with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"23"),". The replacement in the opposite direction is\ndone exactly 10000000 times. The last replacement will be with ",(0,o.kt)("inlineCode",{parentName:"p"},"31")," which makes the spawned\nthread finish."),(0,o.kt)("p",null,"It is not predictable how many replacements occur in which thread, but the sum will always\nbe 10000000. (With the non-atomic commands from the comments the value will be higher or the program\nwill hang ","\u2013"," dependent on the compiler optimization used.)"))}p.isMDXComponent=!0}}]);