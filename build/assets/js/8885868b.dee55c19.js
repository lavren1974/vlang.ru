"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[4283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(o,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},s="Calling C from V",l={unversionedId:"advanced/calling-c-from-v",id:"advanced/calling-c-from-v",title:"Calling C from V",description:"Example",source:"@site/docs/advanced/calling-c-from-v.md",sourceDirName:"advanced",slug:"/advanced/calling-c-from-v",permalink:"/docs/advanced/calling-c-from-v",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/calling-c-from-v.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"sizeof and __offsetof",permalink:"/docs/advanced/sizeof-and-offsetof"},next:{title:"Calling V from C",permalink:"/docs/advanced/calling-v-from-c"}},o={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calling-c-from-v"},"Calling C from V"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"#flag -lsqlite3\n#include \"sqlite3.h\"\n// See also the example from https://www.sqlite.org/quickstart.html\nstruct C.sqlite3 {\n}\n\nstruct C.sqlite3_stmt {\n}\n\ntype FnSqlite3Callback = fn (voidptr, int, &&char, &&char) int\n\nfn C.sqlite3_open(&char, &&C.sqlite3) int\n\nfn C.sqlite3_close(&C.sqlite3) int\n\nfn C.sqlite3_column_int(stmt &C.sqlite3_stmt, n int) int\n\n// ... you can also just define the type of parameter and leave out the C. prefix\nfn C.sqlite3_prepare_v2(&C.sqlite3, &char, int, &&C.sqlite3_stmt, &&char) int\n\nfn C.sqlite3_step(&C.sqlite3_stmt)\n\nfn C.sqlite3_finalize(&C.sqlite3_stmt)\n\nfn C.sqlite3_exec(db &C.sqlite3, sql &char, cb FnSqlite3Callback, cb_arg voidptr, emsg &&char) int\n\nfn C.sqlite3_free(voidptr)\n\nfn my_callback(arg voidptr, howmany int, cvalues &&char, cnames &&char) int {\n    unsafe {\n        for i in 0 .. howmany {\n            print('| ${cstring_to_vstring(cnames[i])}: ${cstring_to_vstring(cvalues[i]):20} ')\n        }\n    }\n    println('|')\n    return 0\n}\n\nfn main() {\n    db := &C.sqlite3(0) // this means `sqlite3* db = 0`\n    // passing a string literal to a C function call results in a C string, not a V string\n    C.sqlite3_open(c'users.db', &db)\n    // C.sqlite3_open(db_path.str, &db)\n    query := 'select count(*) from users'\n    stmt := &C.sqlite3_stmt(0)\n    // NB: you can also use the `.str` field of a V string,\n    // to get its C style zero terminated representation\n    C.sqlite3_prepare_v2(db, &char(query.str), -1, &stmt, 0)\n    C.sqlite3_step(stmt)\n    nr_users := C.sqlite3_column_int(stmt, 0)\n    C.sqlite3_finalize(stmt)\n    println('There are $nr_users users in the database.')\n    //\n    error_msg := &char(0)\n    query_all_users := 'select * from users'\n    rc := C.sqlite3_exec(db, &char(query_all_users.str), my_callback, voidptr(7), &error_msg)\n    if rc != C.SQLITE_OK {\n        eprintln(unsafe { cstring_to_vstring(error_msg) })\n        C.sqlite3_free(error_msg)\n    }\n    C.sqlite3_close(db)\n}\n")))}u.isMDXComponent=!0}}]);