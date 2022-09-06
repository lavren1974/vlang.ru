"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[7315],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:18},i="Type Declarations",s={unversionedId:"documentation/Type-Declarations",id:"documentation/Type-Declarations",title:"Type Declarations",description:"Interfaces",source:"@site/docs/documentation/Type-Declarations.md",sourceDirName:"documentation",slug:"/documentation/Type-Declarations",permalink:"/docs/documentation/Type-Declarations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/Type-Declarations.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/documentation/Modules"},next:{title:"Custom error types",permalink:"/docs/documentation/Custom-error-types"}},l={},p=[{value:"Interfaces",id:"interfaces",level:2},{value:"Implement an interface",id:"implement-an-interface",level:3},{value:"Casting an interface",id:"casting-an-interface",level:3},{value:"Interface method definitions",id:"interface-method-definitions",level:3},{value:"Embedded interface",id:"embedded-interface",level:3},{value:"Function Types",id:"function-types",level:2},{value:"Enums",id:"enums",level:2},{value:"Sum types",id:"sum-types",level:2},{value:"Dynamic casts",id:"dynamic-casts",level:3},{value:"Smart casting",id:"smart-casting",level:3},{value:"Matching sum types",id:"matching-sum-types",level:3},{value:"Type aliases",id:"type-aliases",level:2},{value:"Option/Result types and error handling",id:"optionresult-types-and-error-handling",level:2},{value:"Handling optionals",id:"handling-optionals",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"type-declarations"},"Type Declarations"),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"// interface-example.1\nstruct Dog {\n    breed string\n}\n\nfn (d Dog) speak() string {\n    return 'woof'\n}\n\nstruct Cat {\n    breed string\n}\n\nfn (c Cat) speak() string {\n    return 'meow'\n}\n\n// unlike Go and like TypeScript, V's interfaces can define fields, not just methods.\ninterface Speaker {\n    breed string\n    speak() string\n}\n\nfn main() {\n    dog := Dog{'Leonberger'}\n    cat := Cat{'Siamese'}\n\n    mut arr := []Speaker{}\n    arr << dog\n    arr << cat\n    for item in arr {\n        println('a $item.breed says: $item.speak()')\n    }\n}\n")),(0,r.kt)("h3",{id:"implement-an-interface"},"Implement an interface"),(0,r.kt)("p",null,'A type implements an interface by implementing its methods and fields.\nThere is no explicit declaration of intent, no "implements" keyword.'),(0,r.kt)("p",null,"An interface can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"mut:")," section. Implementing types will need\nto have a ",(0,r.kt)("inlineCode",{parentName:"p"},"mut")," receiver, for methods declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mut:")," section\nof an interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"// interface-example.2\nmodule main\n\npub interface Foo {\n    write(string) string\n}\n\n// => the method signature of a type, implementing interface Foo should be:\n// `pub fn (s Type) write(a string) string`\n\npub interface Bar {\nmut:\n    write(string) string\n}\n\n// => the method signature of a type, implementing interface Bar should be:\n// `pub fn (mut s Type) write(a string) string`\n\nstruct MyStruct {}\n\n// MyStruct implements the interface Foo, but *not* interface Bar\npub fn (s MyStruct) write(a string) string {\n    return a\n}\n\nfn main() {\n    s1 := MyStruct{}\n    fn1(s1)\n    // fn2(s1) -> compile error, since MyStruct does not implement Bar\n}\n\nfn fn1(s Foo) {\n    println(s.write('Foo'))\n}\n\n// fn fn2(s Bar) { // does not match\n//      println(s.write('Foo'))\n// }\n")),(0,r.kt)("h3",{id:"casting-an-interface"},"Casting an interface"),(0,r.kt)("p",null,"We can test the underlying type of an interface using dynamic cast operators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"// interface-exmaple.3 (continued from interface-exampe.1)\ninterface Something {}\n\nfn announce(s Something) {\n    if s is Dog {\n        println('a $s.breed dog') // `s` is automatically cast to `Dog` (smart cast)\n    } else if s is Cat {\n        println('a cat speaks $s.speak()')\n    } else {\n        println('something else')\n    }\n}\n\nfn main() {\n    dog := Dog{'Leonberger'}\n    cat := Cat{'Siamese'}\n    announce(dog)\n    announce(cat)\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"// interface-example.4\ninterface IFoo {\n    foo()\n}\n\ninterface IBar {\n    bar()\n}\n\n// implements only IFoo\nstruct SFoo {}\n\nfn (sf SFoo) foo() {}\n\n// implements both IFoo and IBar\nstruct SFooBar {}\n\nfn (sfb SFooBar) foo() {}\n\nfn (sfb SFooBar) bar() {\n    dump('This implements IBar')\n}\n\nfn main() {\n    mut arr := []IFoo{}\n    arr << SFoo{}\n    arr << SFooBar{}\n\n    for a in arr {\n        dump(a)\n        // In order to execute instances that implements IBar.\n        if a is IBar {\n            // a.bar() // Error.\n            b := a as IBar\n            dump(b)\n            b.bar()\n        }\n    }\n}\n")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"#dynamic-casts"},"Dynamic casts"),"."),(0,r.kt)("h3",{id:"interface-method-definitions"},"Interface method definitions"),(0,r.kt)("p",null,"Also unlike Go, an interface can have it's own methods, similar to how\nstructs can have their methods. These 'interface methods' do not have\nto be implemented, by structs which implement that interface.\nThey are just a convenient way to write ",(0,r.kt)("inlineCode",{parentName:"p"},"i.some_function()")," instead of\n",(0,r.kt)("inlineCode",{parentName:"p"},"some_function(i)"),", similar to how struct methods can be looked at, as\na convenience for writing ",(0,r.kt)("inlineCode",{parentName:"p"},"s.xyz()")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz(s)"),"."),(0,r.kt)("p",null,'N.B. This feature is NOT a "default implementation" like in C#.'),(0,r.kt)("p",null,"For example, if a struct ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," is wrapped in an interface ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", that has\nimplemented a method with the same name ",(0,r.kt)("inlineCode",{parentName:"p"},"speak"),", as a method implemented by\nthe struct, and you do ",(0,r.kt)("inlineCode",{parentName:"p"},"a.speak()"),", ",(0,r.kt)("em",{parentName:"p"},"only")," the interface method is called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"interface Adoptable {}\n\nfn (a Adoptable) speak() string {\n    return 'adopt me!'\n}\n\nstruct Cat {}\n\nfn (c Cat) speak() string {\n    return 'meow!'\n}\n\nstruct Dog {}\n\nfn main() {\n    cat := Cat{}\n    assert dump(cat.speak()) == 'meow!'\n    //\n    a := Adoptable(cat)\n    assert dump(a.speak()) == 'adopt me!' // call Adoptable's `speak`\n    if a is Cat {\n        // Inside this `if` however, V knows that `a` is not just any\n        // kind of Adoptable, but actually a Cat, so it will use the\n        // Cat `speak`, NOT the Adoptable `speak`:\n        dump(a.speak()) // meow!\n    }\n    //\n    b := Adoptable(Dog{})\n    assert dump(b.speak()) == 'adopt me!' // call Adoptable's `speak`\n    // if b is Dog {\n    //  dump(b.speak()) // error: unknown method or field: Dog.speak\n    // }\n}\n")),(0,r.kt)("h3",{id:"embedded-interface"},"Embedded interface"),(0,r.kt)("p",null,"Interfaces support embedding, just like structs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"pub interface Reader {\nmut:\n    read(mut buf []byte) ?int\n}\n\npub interface Writer {\nmut:\n    write(buf []byte) ?int\n}\n\n// ReaderWriter embeds both Reader and Writer.\n// The effect is the same as copy/pasting all of the\n// Reader and all of the Writer methods/fields into\n// ReaderWriter.\npub interface ReaderWriter {\n    Reader\n    Writer\n}\n")),(0,r.kt)("h2",{id:"function-types"},"Function Types"),(0,r.kt)("p",null,"You can use type aliases for naming specific function signatures - for\nexample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"type Filter = fn (string) string\n")),(0,r.kt)("p",null,"This works like any other type - for example, a function can accept an\nargument of a function type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"type Filter = fn (string) string\n\nfn filter(s string, f Filter) string {\n    return f(s)\n}\n")),(0,r.kt)("p",null,"V has duck-typing, so functions don't need to declare compatibility with\na function type - they just have to be compatible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"fn uppercase(s string) string {\n    return s.to_upper()\n}\n\n// now `uppercase` can be used everywhere where Filter is expected\n")),(0,r.kt)("p",null,"Compatible functions can also be explicitly cast to a function type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"my_filter := Filter(uppercase)\n")),(0,r.kt)("p",null,"The cast here is purely informational - again, duck-typing means that the\nresulting type is the same without an explicit cast:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"my_filter := uppercase\n")),(0,r.kt)("p",null,"You can pass the assigned function as an argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"println(filter('Hello world', my_filter)) // prints `HELLO WORLD`\n")),(0,r.kt)("p",null,"And you could of course have passed it directly as well, without using a\nlocal variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"println(filter('Hello world', uppercase))\n")),(0,r.kt)("p",null,"And this works with anonymous functions as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"println(filter('Hello world', fn (s string) string {\n    return s.to_upper()\n}))\n")),(0,r.kt)("p",null,"You can see the complete\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/tree/master/examples/function_types.v"},"example here"),"."),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"enum Color {\n    red\n    green\n    blue\n}\n\nmut color := Color.red\n// V knows that `color` is a `Color`. No need to use `color = Color.green` here.\ncolor = .green\nprintln(color) // \"green\"\nmatch color {\n    .red { println('the color was red') }\n    .green { println('the color was green') }\n    .blue { println('the color was blue') }\n}\n")),(0,r.kt)("p",null,"Enum match must be exhaustive or have an ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," branch.\nThis ensures that if a new enum field is added, it's handled everywhere in the code."),(0,r.kt)("p",null,"Enum fields cannot re-use reserved keywords. However, reserved keywords may be escaped\nwith an @."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"enum Color {\n    @none\n    red\n    green\n    blue\n}\n\ncolor := Color.@none\nprintln(color)\n")),(0,r.kt)("p",null,"Integers may be assigned to enum fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"enum Grocery {\n    apple\n    orange = 5\n    pear\n}\n\ng1 := int(Grocery.apple)\ng2 := int(Grocery.orange)\ng3 := int(Grocery.pear)\nprintln('Grocery IDs: $g1, $g2, $g3')\n")),(0,r.kt)("p",null,"Output: ",(0,r.kt)("inlineCode",{parentName:"p"},"Grocery IDs: 0, 5, 6"),"."),(0,r.kt)("p",null,"Operations are not allowed on enum variables; they must be explicitly cast to ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,r.kt)("p",null,"Enums can have methods, just like structs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"enum Cycle {\n    one\n    two\n    three\n}\n\nfn (c Cycle) next() Cycle {\n    match c {\n        .one {\n            return .two\n        }\n        .two {\n            return .three\n        }\n        .three {\n            return .one\n        }\n    }\n}\n\nmut c := Cycle.one\nfor _ in 0 .. 10 {\n    println(c)\n    c = c.next()\n}\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"one\ntwo\nthree\none\ntwo\nthree\none\ntwo\nthree\none\n")),(0,r.kt)("h2",{id:"sum-types"},"Sum types"),(0,r.kt)("p",null,"A sum type instance can hold a value of several different types. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\nkeyword to declare a sum type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Moon {}\n\nstruct Mars {}\n\nstruct Venus {}\n\ntype World = Mars | Moon | Venus\n\nsum := World(Moon{})\nassert sum.type_name() == 'Moon'\nprintln(sum)\n")),(0,r.kt)("p",null,"The built-in method ",(0,r.kt)("inlineCode",{parentName:"p"},"type_name")," returns the name of the currently held\ntype."),(0,r.kt)("p",null,"With sum types you could build recursive structures and write concise but powerful code on them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"// V's binary tree\nstruct Empty {}\n\nstruct Node {\n    value f64\n    left  Tree\n    right Tree\n}\n\ntype Tree = Empty | Node\n\n// sum up all node values\nfn sum(tree Tree) f64 {\n    return match tree {\n        Empty { 0 }\n        Node { tree.value + sum(tree.left) + sum(tree.right) }\n    }\n}\n\nfn main() {\n    left := Node{0.2, Empty{}, Empty{}}\n    right := Node{0.3, Empty{}, Node{0.4, Empty{}, Empty{}}}\n    tree := Node{0.5, left, right}\n    println(sum(tree)) // 0.2 + 0.3 + 0.4 + 0.5 = 1.4\n}\n")),(0,r.kt)("h3",{id:"dynamic-casts"},"Dynamic casts"),(0,r.kt)("p",null,"To check whether a sum type instance holds a certain type, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum is Type"),".\nTo cast a sum type to one of its variants you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"sum as Type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Moon {}\n\nstruct Mars {}\n\nstruct Venus {}\n\ntype World = Mars | Moon | Venus\n\nfn (m Mars) dust_storm() bool {\n    return true\n}\n\nfn main() {\n    mut w := World(Moon{})\n    assert w is Moon\n    w = Mars{}\n    // use `as` to access the Mars instance\n    mars := w as Mars\n    if mars.dust_storm() {\n        println('bad weather!')\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"as")," will panic if ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," doesn't hold a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mars")," instance.\nA safer way is to use a smart cast."),(0,r.kt)("h3",{id:"smart-casting"},"Smart casting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"if w is Mars {\n    assert typeof(w).name == 'Mars'\n    if w.dust_storm() {\n        println('bad weather!')\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"w")," has type ",(0,r.kt)("inlineCode",{parentName:"p"},"Mars")," inside the body of the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement. This is\nknown as ",(0,r.kt)("em",{parentName:"p"},"flow-sensitive typing"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," is a mutable identifier, it would be unsafe if the compiler smart casts it without a warning.\nThat's why you have to declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"mut")," before the ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"if mut w is Mars {\n    assert typeof(w).name == 'Mars'\n    if w.dust_storm() {\n        println('bad weather!')\n    }\n}\n")),(0,r.kt)("p",null,"Otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," would keep its original type."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This works for both, simple variables and complex expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},"user.name"))),(0,r.kt)("h3",{id:"matching-sum-types"},"Matching sum types"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," to determine the variant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Moon {}\n\nstruct Mars {}\n\nstruct Venus {}\n\ntype World = Mars | Moon | Venus\n\nfn open_parachutes(n int) {\n    println(n)\n}\n\nfn land(w World) {\n    match w {\n        Moon {} // no atmosphere\n        Mars {\n            // light atmosphere\n            open_parachutes(3)\n        }\n        Venus {\n            // heavy atmosphere\n            open_parachutes(1)\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"match")," must have a pattern for each variant or have an ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"struct Moon {}\nstruct Mars {}\nstruct Venus {}\n\ntype World = Moon | Mars | Venus\n\nfn (m Moon) moon_walk() {}\nfn (m Mars) shiver() {}\nfn (v Venus) sweat() {}\n\nfn pass_time(w World) {\n    match w {\n        // using the shadowed match variable, in this case `w` (smart cast)\n        Moon { w.moon_walk() }\n        Mars { w.shiver() }\n        else {}\n    }\n}\n")),(0,r.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,r.kt)("p",null,"To define a new type ",(0,r.kt)("inlineCode",{parentName:"p"},"NewType")," as an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ExistingType"),",\ndo ",(0,r.kt)("inlineCode",{parentName:"p"},"type NewType = ExistingType"),".",(0,r.kt)("br",null),"\nThis is a special case of a ",(0,r.kt)("a",{parentName:"p",href:"#sum-types"},"sum type")," declaration."),(0,r.kt)("h2",{id:"optionresult-types-and-error-handling"},"Option/Result types and error handling"),(0,r.kt)("p",null,"Option types are declared with ",(0,r.kt)("inlineCode",{parentName:"p"},"?Type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct User {\n    id   int\n    name string\n}\n\nstruct Repo {\n    users []User\n}\n\nfn (r Repo) find_user_by_id(id int) ?User {\n    for user in r.users {\n        if user.id == id {\n            // V automatically wraps this into an option type\n            return user\n        }\n    }\n    return error('User $id not found')\n}\n\nfn main() {\n    repo := Repo{\n        users: [User{1, 'Andrew'}, User{2, 'Bob'}, User{10, 'Charles'}]\n    }\n    user := repo.find_user_by_id(10) or { // Option types must be handled by `or` blocks\n        return\n    }\n    println(user.id) // \"10\"\n    println(user.name) // \"Charles\"\n}\n")),(0,r.kt)("p",null,"V combines ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," into one type, so you don't need to decide which one to use."),(0,r.kt)("p",null,'The amount of work required to "upgrade" a function to an optional function is minimal;\nyou have to add a ',(0,r.kt)("inlineCode",{parentName:"p"},"?")," to the return type and return an error when something goes wrong."),(0,r.kt)("p",null,"If you don't need to return an error message, you can simply ",(0,r.kt)("inlineCode",{parentName:"p"},"return none"),"\n(this is a more efficient equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},'return error("")'),")."),(0,r.kt)("p",null,"This is the primary mechanism for error handling in V. They are still values, like in Go,\nbut the advantage is that errors can't be unhandled, and handling them is a lot less verbose.\nUnlike other languages, V does not handle exceptions with ",(0,r.kt)("inlineCode",{parentName:"p"},"throw/try/catch")," blocks."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"err")," is defined inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," block and is set to the string message passed\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"error()")," function. ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," is empty if ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," was returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},'user := repo.find_user_by_id(7) or {\n    println(err) // "User 7 not found"\n    return\n}\n')),(0,r.kt)("h2",{id:"handling-optionals"},"Handling optionals"),(0,r.kt)("p",null,"There are four ways of handling an optional. The first method is to\npropagate the error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"import net.http\n\nfn f(url string) ?string {\n    resp := http.get(url)?\n    return resp.body\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http.get")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"?http.Response"),". Because ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," follows the call, the\nerror will be propagated to the caller of ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),". When using ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," after a\nfunction call producing an optional, the enclosing function must return\nan optional as well. If error propagation is used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"\nfunction it will ",(0,r.kt)("inlineCode",{parentName:"p"},"panic")," instead, since the error cannot be propagated\nany further."),(0,r.kt)("p",null,"The body of ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," is essentially a condensed version of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"    resp := http.get(url) or { return err }\n    return resp.body\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The second method is to break from execution early:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"user := repo.find_user_by_id(7) or { return }\n")),(0,r.kt)("p",null,"Here, you can either call ",(0,r.kt)("inlineCode",{parentName:"p"},"panic()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()"),", which will stop the execution of the\nentire program, or use a control flow statement (",(0,r.kt)("inlineCode",{parentName:"p"},"return"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"continue"),", etc)\nto break from the current block.\nNote that ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," can only be used inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,r.kt)("p",null,'V does not have a way to forcibly "unwrap" an optional (as other languages do,\nfor instance Rust\'s ',(0,r.kt)("inlineCode",{parentName:"p"},"unwrap()")," or Swift's ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),"). To do this, use ",(0,r.kt)("inlineCode",{parentName:"p"},"or { panic(err) }")," instead."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The third method is to provide a default value at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"or")," block.\nIn case of an error, that value would be assigned instead,\nso it must have the same type as the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," being handled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"fn do_something(s string) ?string {\n    if s == 'foo' {\n        return 'foo'\n    }\n    return error('invalid string') // Could be `return none` as well\n}\n\na := do_something('foo') or { 'default' } // a will be 'foo'\nb := do_something('bar') or { 'default' } // b will be 'default'\nprintln(a)\nprintln(b)\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The fourth method is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," unwrapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"import net.http\n\nif resp := http.get('https://google.com') {\n    println(resp.body) // resp is a http.Response, not an optional\n} else {\n    println(err)\n}\n")),(0,r.kt)("p",null,"Above, ",(0,r.kt)("inlineCode",{parentName:"p"},"http.get")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"?http.Response"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"resp")," is only in scope for the first\n",(0,r.kt)("inlineCode",{parentName:"p"},"if")," branch. ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," is only in scope for the ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," branch."))}c.isMDXComponent=!0}}]);