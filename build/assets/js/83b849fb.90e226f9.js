"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[3770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:20},a="Generics",p={unversionedId:"documentation/generics",id:"documentation/generics",title:"Generics",description:"Currently generic function definitions must declare their type parameters, but in",source:"@site/docs/documentation/generics.md",sourceDirName:"documentation",slug:"/documentation/generics",permalink:"/docs/documentation/generics",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Custom error types",permalink:"/docs/documentation/custom-error-types"},next:{title:"Concurrency",permalink:"/docs/documentation/concurrency"}},c={},s=[],u={toc:s};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generics"},"Generics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"wip",wip:!0},"\nstruct Repo<T> {\n    db DB\n}\n\nstruct User {\n    id   int\n    name string\n}\n\nstruct Post {\n    id   int\n    user_id int\n    title string\n    body string\n}\n\nfn new_repo<T>(db DB) Repo<T> {\n    return Repo<T>{db: db}\n}\n\n// This is a generic function. V will generate it for every type it's used with.\nfn (r Repo<T>) find_by_id(id int) ?T {\n    table_name := T.name // in this example getting the name of the type gives us the table name\n    return r.db.query_one<T>('select * from $table_name where id = ?', id)\n}\n\ndb := new_db()\nusers_repo := new_repo<User>(db) // returns Repo<User>\nposts_repo := new_repo<Post>(db) // returns Repo<Post>\nuser := users_repo.find_by_id(1)? // find_by_id<User>\npost := posts_repo.find_by_id(1)? // find_by_id<Post>\n")),(0,i.kt)("p",null,"Currently generic function definitions must declare their type parameters, but in\nfuture V will infer generic type parameters from single-letter type names in\nruntime parameter types. This is why ",(0,i.kt)("inlineCode",{parentName:"p"},"find_by_id")," can omit ",(0,i.kt)("inlineCode",{parentName:"p"},"<T>"),", because the\nreceiver argument ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," uses a generic type ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,i.kt)("p",null,"Another example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"fn compare<T>(a T, b T) int {\n    if a < b {\n        return -1\n    }\n    if a > b {\n        return 1\n    }\n    return 0\n}\n\n// compare<int>\nprintln(compare(1, 0)) // Outputs: 1\nprintln(compare(1, 1)) //          0\nprintln(compare(1, 2)) //         -1\n// compare<string>\nprintln(compare('1', '0')) // Outputs: 1\nprintln(compare('1', '1')) //          0\nprintln(compare('1', '2')) //         -1\n// compare<f64>\nprintln(compare(1.1, 1.0)) // Outputs: 1\nprintln(compare(1.1, 1.1)) //          0\nprintln(compare(1.1, 1.2)) //         -1\n")))}l.isMDXComponent=!0}}]);