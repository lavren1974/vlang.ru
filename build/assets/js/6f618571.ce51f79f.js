"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[6204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:11},s="Structs",o={unversionedId:"documentation/Structs",id:"documentation/Structs",title:"Structs",description:"Heap structs",source:"@site/docs/documentation/Structs.md",sourceDirName:"documentation",slug:"/documentation/Structs",permalink:"/docs/documentation/Structs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/Structs.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Statements & expressions",permalink:"/docs/documentation/Statements-expressions"},next:{title:"Unions",permalink:"/docs/documentation/Unions"}},l={},u=[{value:"Heap structs",id:"heap-structs",level:2},{value:"Default field values",id:"default-field-values",level:2},{value:"Required fields",id:"required-fields",level:2},{value:"Short struct literal syntax",id:"short-struct-literal-syntax",level:2},{value:"Trailing struct literal arguments",id:"trailing-struct-literal-arguments",level:3},{value:"Access modifiers",id:"access-modifiers",level:2},{value:"Anonymous structs",id:"anonymous-structs",level:2},{value:"Methods",id:"methods",level:2},{value:"Embedded structs",id:"embedded-structs",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"structs"},"Structs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Point {\n    x int\n    y int\n}\n\nmut p := Point{\n    x: 10\n    y: 20\n}\nprintln(p.x) // Struct fields are accessed using a dot\n// Alternative literal syntax for structs with 3 fields or fewer\np = Point{10, 20}\nassert p.x == 10\n")),(0,r.kt)("h2",{id:"heap-structs"},"Heap structs"),(0,r.kt)("p",null,"Structs are allocated on the stack. To allocate a struct on the heap\nand get a reference to it, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," prefix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Point {\n    x int\n    y int\n}\n\np := &Point{10, 10}\n// References have the same syntax for accessing fields\nprintln(p.x)\n")),(0,r.kt)("p",null,"The type of ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"&Point"),". It's a ",(0,r.kt)("a",{parentName:"p",href:"#references"},"reference")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),".\nReferences are similar to Go pointers and C++ references."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Foo {\nmut:\n    x int\n}\n\nfa := Foo{1}\nmut a := fa\na.x = 2\nassert fa.x == 1\nassert a.x == 2\n\n// fb := Foo{ 1 }\n// mut b := &fb  // error: `fb` is immutable, cannot have a mutable reference to it\n// b.x = 2\n\nmut fc := Foo{1}\nmut c := &fc\nc.x = 2\nassert fc.x == 2\nassert c.x == 2\nprintln(fc) // Foo{ x: 2 }\nprintln(c) // &Foo{ x: 2 } // Note `&` prefixed.\n")),(0,r.kt)("p",null,"see also ",(0,r.kt)("a",{parentName:"p",href:"#stack-and-heap"},"Stack and Heap")),(0,r.kt)("h2",{id:"default-field-values"},"Default field values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Foo {\n    n   int    // n is 0 by default\n    s   string // s is '' by default\n    a   []int  // a is `[]int{}` by default\n    pos int = -1 // custom default value\n}\n")),(0,r.kt)("p",null,"All struct fields are zeroed by default during the creation of the struct.\nArray and map fields are allocated."),(0,r.kt)("p",null,"It's also possible to define custom default values."),(0,r.kt)("h2",{id:"required-fields"},"Required fields"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Foo {\n    n int [required]\n}\n")),(0,r.kt)("p",null,"You can mark a struct field with the ",(0,r.kt)("inlineCode",{parentName:"p"},"[required]")," attribute, to tell V that\nthat field must be initialized when creating an instance of that struct."),(0,r.kt)("p",null,"This example will not compile, since the field ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," isn't explicitly initialized:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"failcompile",failcompile:!0},"_ = Foo{}\n")),(0,r.kt)("h2",{id:"short-struct-literal-syntax"},"Short struct literal syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Point {\n    x int\n    y int\n}\n\nmut p := Point{\n    x: 10\n    y: 20\n}\np = Point{\n    x: 30\n    y: 4\n}\nassert p.y == 4\n//\n// array: first element defines type of array\npoints := [Point{10, 20}, Point{20, 30}, Point{40, 50}]\nprintln(points) // [Point{x: 10, y: 20}, Point{x: 20, y: 30}, Point{x: 40,y: 50}]\n")),(0,r.kt)("p",null,"Omitting the struct name also works for returning a struct literal or passing one\nas a function argument."),(0,r.kt)("h3",{id:"trailing-struct-literal-arguments"},"Trailing struct literal arguments"),(0,r.kt)("p",null,"V doesn't have default function arguments or named arguments, for that trailing struct\nliteral syntax can be used instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"[params]\nstruct ButtonConfig {\n    text        string\n    is_disabled bool\n    width       int = 70\n    height      int = 20\n}\n\nstruct Button {\n    text   string\n    width  int\n    height int\n}\n\nfn new_button(c ButtonConfig) &Button {\n    return &Button{\n        width: c.width\n        height: c.height\n        text: c.text\n    }\n}\n\nbutton := new_button(text: 'Click me', width: 100)\n// the height is unset, so it's the default value\nassert button.height == 20\n")),(0,r.kt)("p",null,"As you can see, both the struct name and braces can be omitted, instead of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax nofmt",oksyntax:!0,nofmt:!0},"new_button(ButtonConfig{text:'Click me', width:100})\n")),(0,r.kt)("p",null,"This only works for functions that take a struct for the last argument."),(0,r.kt)("p",null,"NB: the ",(0,r.kt)("inlineCode",{parentName:"p"},"[params]")," tag is used to tell V, that the trailing struct parameter\ncan be omitted ",(0,r.kt)("em",{parentName:"p"},"entirely"),", so that you can write ",(0,r.kt)("inlineCode",{parentName:"p"},"button := new_button()"),".\nWithout it, you have to specify ",(0,r.kt)("em",{parentName:"p"},"at least")," one of the field names, even if it\nhas its default value, otherwise the compiler will produce this error message,\nwhen you call the function with no parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"error: expected 1 arguments, but got 0"),"."),(0,r.kt)("h2",{id:"access-modifiers"},"Access modifiers"),(0,r.kt)("p",null,"Struct fields are private and immutable by default (making structs immutable as well).\nTheir access modifiers can be changed with\n",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mut"),". In total, there are 5 possible options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Foo {\n    a int // private immutable (default)\nmut:\n    b int // private mutable\n    c int // (you can list multiple fields with the same access modifier)\npub:\n    d int // public immutable (readonly)\npub mut:\n    e int // public, but mutable only in parent module\n__global:\n    // (not recommended to use, that's why the 'global' keyword starts with __)\n    f int // public and mutable both inside and outside parent module\n}\n")),(0,r.kt)("p",null,"Private fields are available only inside the same ",(0,r.kt)("a",{parentName:"p",href:"#modules"},"module"),", any attempt\nto directly access them from another module will cause an error during compilation.\nPublic immutable fields are readonly everywhere."),(0,r.kt)("h2",{id:"anonymous-structs"},"Anonymous structs"),(0,r.kt)("p",null,"V supports anonymous structs: structs that don't have to be declared separately\nwith a struct name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Book {\n    author struct  {\n        name string\n        age  int\n    }\n\n    title string\n}\n\nbook := Book{\n    author: struct {\n        name: 'Samantha Black'\n        age: 24\n    }\n}\nassert book.author.name == 'Samantha Black'\nassert book.author.age == 24\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},'struct User {\n    age int\n}\n\nfn (u User) can_register() bool {\n    return u.age > 16\n}\n\nuser := User{\n    age: 10\n}\nprintln(user.can_register()) // "false"\nuser2 := User{\n    age: 20\n}\nprintln(user2.can_register()) // "true"\n')),(0,r.kt)("p",null,"V doesn't have classes, but you can define methods on types.\nA method is a function with a special receiver argument.\nThe receiver appears in its own argument list between the ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," keyword and the method name.\nMethods must be in the same module as the receiver type."),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"can_register")," method has a receiver of type ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"u"),".\nThe convention is not to use receiver names like ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),",\nbut a short, preferably one letter long, name."),(0,r.kt)("h2",{id:"embedded-structs"},"Embedded structs"),(0,r.kt)("p",null,"V support embedded structs ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Size {\nmut:\n    width  int\n    height int\n}\n\nfn (s &Size) area() int {\n    return s.width * s.height\n}\n\nstruct Button {\n    Size\n    title string\n}\n")),(0,r.kt)("p",null,"With embedding, the struct ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," will automatically have get all the fields and methods from\nthe struct ",(0,r.kt)("inlineCode",{parentName:"p"},"Size"),", which allows you to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"mut button := Button{\n    title: 'Click me'\n    height: 2\n}\n\nbutton.width = 3\nassert button.area() == 6\nassert button.Size.area() == 6\nprint(button)\n")),(0,r.kt)("p",null,"output :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Button{\n    Size: Size{\n        width: 3\n        height: 2\n    }\n    title: 'Click me'\n}\n")),(0,r.kt)("p",null,"Unlike inheritance, you cannot type cast between structs and embedded structs\n(the embedding struct can also has its own fields, and it can also embed multiple structs)."),(0,r.kt)("p",null,"If you need to access embedded structs directly, use an explicit reference like ",(0,r.kt)("inlineCode",{parentName:"p"},"button.Size"),"."),(0,r.kt)("p",null,"Conceptually, embedded structs are similar to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mixin"},"mixin"),"s\nin OOP, ",(0,r.kt)("em",{parentName:"p"},"NOT")," base classes."),(0,r.kt)("p",null,"You can also initialize an embedded struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"mut button := Button{\n    Size: Size{\n        width: 3\n        height: 2\n    }\n}\n")),(0,r.kt)("p",null,"or assign values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"button.Size = Size{\n    width: 4\n    height: 5\n}\n")),(0,r.kt)("p",null,"If multiple embedded structs have methods or fields with the same name, or if methods or fields\nwith the same name are defined in the struct, you can call methods or assign to variables in\nthe embedded struct like ",(0,r.kt)("inlineCode",{parentName:"p"},"button.Size.area()"),".\nWhen you do not specify the embedded struct name, the method of the outermost struct will be\ntargeted."))}d.isMDXComponent=!0}}]);