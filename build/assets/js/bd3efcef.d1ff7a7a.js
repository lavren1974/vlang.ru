"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[5643],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,y=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return a?t.createElement(y,l(l({ref:n},m),{},{components:a})):t.createElement(y,l({ref:n},m))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3389:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},l="Arrays",s={unversionedId:"types/arrays",id:"types/arrays",title:"Arrays",description:"An array is a collection of data elements of the same type. An array literal is a",source:"@site/docs/types/arrays.md",sourceDirName:"types",slug:"/types/arrays",permalink:"/docs/types/arrays",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/types/arrays.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Numbers",permalink:"/docs/types/numbers"},next:{title:"Maps",permalink:"/docs/types/maps"}},o={},p=[{value:"Array Fields",id:"array-fields",level:2},{value:"Array Initialization",id:"array-initialization",level:2},{value:"Array Types",id:"array-types",level:2},{value:"Multidimensional Arrays",id:"multidimensional-arrays",level:2},{value:"Array methods",id:"array-methods",level:2},{value:"Sorting Arrays",id:"sorting-arrays",level:2},{value:"Array Slices",id:"array-slices",level:2},{value:"Slices with negative indexes",id:"slices-with-negative-indexes",level:2},{value:"Array method chaining",id:"array-method-chaining",level:2},{value:"Fixed size arrays",id:"fixed-size-arrays",level:2}],m={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"An array is a collection of data elements of the same type. An array literal is a\nlist of expressions surrounded by square brackets. An individual element can be\naccessed using an ",(0,r.kt)("em",{parentName:"p"},"index")," expression. Indexes start from ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut nums := [1, 2, 3]\nprintln(nums) // `[1, 2, 3]`\nprintln(nums[0]) // `1`\nprintln(nums[1]) // `2`\n\nnums[1] = 5\nprintln(nums) // `[1, 5, 3]`\n")),(0,r.kt)("a",{id:"array-operations"}),(0,r.kt)("p",null,"An element can be appended to the end of an array using the push operator ",(0,r.kt)("inlineCode",{parentName:"p"},"<<"),".\nIt can also append an entire array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},'mut nums := [1, 2, 3]\nnums << 4\nprintln(nums) // "[1, 2, 3, 4]"\n\n// append array\nnums << [5, 6, 7]\nprintln(nums) // "[1, 2, 3, 4, 5, 6, 7]"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut names := ['John']\nnames << 'Peter'\nnames << 'Sam'\n// names << 10  <-- This will not compile. `names` is an array of strings.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"val in array")," returns true if the array contains ",(0,r.kt)("inlineCode",{parentName:"p"},"val"),". See ",(0,r.kt)("a",{parentName:"p",href:"#in-operator"},(0,r.kt)("inlineCode",{parentName:"a"},"in")," operator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"names := ['John', 'Peter', 'Sam']\nprintln('Alex' in names) // \"false\"\n")),(0,r.kt)("h2",{id:"array-fields"},"Array Fields"),(0,r.kt)("p",null,'There are two fields that control the "size" of an array:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"len"),": ",(0,r.kt)("em",{parentName:"li"},"length")," - the number of pre-allocated and initialized elements in the array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cap"),": ",(0,r.kt)("em",{parentName:"li"},"capacity")," - the amount of memory space which has been reserved for elements,\nbut not initialized or counted as elements. The array can grow up to this size without\nbeing reallocated. Usually, V takes care of this field automatically but there are\ncases where the user may want to do manual optimizations (see ",(0,r.kt)("a",{parentName:"li",href:"#array-initialization"},"below"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},'mut nums := [1, 2, 3]\nprintln(nums.len) // "3"\nprintln(nums.cap) // "3" or greater\nnums = [] // The array is now empty\nprintln(nums.len) // "0"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"data")," is a field (of type ",(0,r.kt)("inlineCode",{parentName:"p"},"voidptr"),") with the address of the first\nelement. This is for low-level ",(0,r.kt)("a",{parentName:"p",href:"#memory-unsafe-code"},(0,r.kt)("inlineCode",{parentName:"a"},"unsafe"))," code."),(0,r.kt)("p",null,"Note that the fields are read-only and can't be modified by the user."),(0,r.kt)("h2",{id:"array-initialization"},"Array Initialization"),(0,r.kt)("p",null,"The type of an array is determined by the first element:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")," is an array of ints (",(0,r.kt)("inlineCode",{parentName:"li"},"[]int"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"['a', 'b']")," is an array of strings (",(0,r.kt)("inlineCode",{parentName:"li"},"[]string"),").")),(0,r.kt)("p",null,"The user can explicitly specify the type for the first element: ",(0,r.kt)("inlineCode",{parentName:"p"},"[u8(16), 32, 64, 128]"),".\nV arrays are homogeneous (all elements must have the same type).\nThis means that code like ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 'a']")," will not compile."),(0,r.kt)("p",null,"The above syntax is fine for a small number of known elements but for very large or empty\narrays there is a second initialization syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := []int{len: 10000, cap: 30000, init: 3}\n")),(0,r.kt)("p",null,"This creates an array of 10000 ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," elements that are all initialized with ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),". Memory\nspace is reserved for 30000 elements. The parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"len"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," are optional;\n",(0,r.kt)("inlineCode",{parentName:"p"},"len")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," to the default initialization of the element type (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\nfor numerical type, ",(0,r.kt)("inlineCode",{parentName:"p"},"''")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", etc). The run time system makes sure that the\ncapacity is not smaller than ",(0,r.kt)("inlineCode",{parentName:"p"},"len")," (even if a smaller value is specified explicitly):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"arr := []int{len: 5, init: -1}\n// `arr == [-1, -1, -1, -1, -1]`, arr.cap == 5\n\n// Declare an empty array:\nusers := []int{}\n")),(0,r.kt)("p",null,"Setting the capacity improves performance of pushing elements to the array\nas reallocations can be avoided:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut numbers := []int{cap: 1000}\nprintln(numbers.len) // 0\n// Now appending elements won't reallocate\nfor i in 0 .. 1000 {\n    numbers << i\n}\n")),(0,r.kt)("p",null,"Note: The above code uses a ",(0,r.kt)("a",{parentName:"p",href:"#range-for"},"range ",(0,r.kt)("inlineCode",{parentName:"a"},"for"))," statement."),(0,r.kt)("p",null,"You can initialize the array by accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," variable which gives\nthe index as shown here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"count := []int{len: 4, init: it}\nassert count == [0, 1, 2, 3]\n\nmut square := []int{len: 6, init: it * it}\n// square == [0, 1, 4, 9, 16, 25]\n")),(0,r.kt)("h2",{id:"array-types"},"Array Types"),(0,r.kt)("p",null,"An array can be of these types:\n| Types        | Example Definition                   |\n| ------------ | ------------------------------------ |\n| Number       | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]int,[]i64"),"                        |\n| String       | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]string"),"                           |\n| Rune         | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]rune"),"                             |\n| Boolean      | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]bool"),"                             |\n| Array        | ",(0,r.kt)("inlineCode",{parentName:"p"},"[][]int"),"                            |\n| Struct       | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MyStructName"),"                     |\n| Channel      | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]chan f64"),"                         |\n| Function     | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MyFunctionType")," ",(0,r.kt)("inlineCode",{parentName:"p"},"[]fn (int) bool")," |\n| Interface    | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MyInterfaceName"),"                  |\n| Sum Type     | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MySumTypeName"),"                    |\n| Generic Type | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]T"),"                                |\n| Map          | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]map[string]f64"),"                   |\n| Enum         | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MyEnumType"),"                       |\n| Alias        | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]MyAliasTypeName"),"                  |\n| Thread       | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]thread int"),"                       |\n| Reference    | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]&f64"),"                             |\n| Shared       | ",(0,r.kt)("inlineCode",{parentName:"p"},"[]shared MyStructType"),"              |"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Code:")),(0,r.kt)("p",null,"This example uses ",(0,r.kt)("a",{parentName:"p",href:"#structs"},"Structs")," and ",(0,r.kt)("a",{parentName:"p",href:"#sum-types"},"Sum Types")," to create an array\nwhich can handle different types (e.g. Points, Lines) of data elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct Point {\n    x int\n    y int\n}\n\nstruct Line {\n    p1 Point\n    p2 Point\n}\n\ntype ObjectSumType = Line | Point\n\nmut object_list := []ObjectSumType{}\nobject_list << Point{1, 1}\nobject_list << Line{\n    p1: Point{3, 3}\n    p2: Point{4, 4}\n}\ndump(object_list)\n/*\nobject_list: [ObjectSumType(Point{\n    x: 1\n    y: 1\n}), ObjectSumType(Line{\n    p1: Point{\n        x: 3\n        y: 3\n    }\n    p2: Point{\n        x: 4\n        y: 4\n    }\n})]\n*/\n")),(0,r.kt)("h2",{id:"multidimensional-arrays"},"Multidimensional Arrays"),(0,r.kt)("p",null,"Arrays can have more than one dimension."),(0,r.kt)("p",null,"2d array example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := [][]int{len: 2, init: []int{len: 3}}\na[0][1] = 2\nprintln(a) // [[0, 2, 0], [0, 0, 0]]\n")),(0,r.kt)("p",null,"3d array example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := [][][]int{len: 2, init: [][]int{len: 3, init: []int{len: 2}}}\na[0][1][1] = 2\nprintln(a) // [[[0, 0], [0, 2], [0, 0]], [[0, 0], [0, 0], [0, 0]]]\n")),(0,r.kt)("h2",{id:"array-methods"},"Array methods"),(0,r.kt)("p",null,"All arrays can be easily printed with ",(0,r.kt)("inlineCode",{parentName:"p"},"println(arr)")," and converted to a string\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"s := arr.str()"),"."),(0,r.kt)("p",null,"Copying the data from the array is done with ",(0,r.kt)("inlineCode",{parentName:"p"},".clone()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"nums := [1, 2, 3]\nnums_copy := nums.clone()\n")),(0,r.kt)("p",null,"Arrays can be efficiently filtered and mapped with the ",(0,r.kt)("inlineCode",{parentName:"p"},".filter()")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"nums := [1, 2, 3, 4, 5, 6]\neven := nums.filter(it % 2 == 0)\nprintln(even) // [2, 4, 6]\n// filter can accept anonymous functions\neven_fn := nums.filter(fn (x int) bool {\n    return x % 2 == 0\n})\nprintln(even_fn)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"words := ['hello', 'world']\nupper := words.map(it.to_upper())\nprintln(upper) // ['HELLO', 'WORLD']\n// map can also accept anonymous functions\nupper_fn := words.map(fn (w string) string {\n    return w.to_upper()\n})\nprintln(upper_fn) // ['HELLO', 'WORLD']\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"it")," is a builtin variable which refers to the element currently being\nprocessed in filter/map methods."),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},".any()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".all()")," can be used to conveniently test\nfor elements that satisfy a condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"nums := [1, 2, 3]\nprintln(nums.any(it == 2)) // true\nprintln(nums.all(it >= 2)) // false\n")),(0,r.kt)("p",null,"There are further built-in methods for arrays:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.repeat(n)")," concatenates the array elements ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," times"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.insert(i, val)")," inserts a new element ",(0,r.kt)("inlineCode",{parentName:"li"},"val")," at index ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," and\nshifts all following elements to the right"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.insert(i, [3, 4, 5])")," inserts several elements"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.prepend(val)")," inserts a value at the beginning, equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"a.insert(0, val)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.prepend(arr)")," inserts elements of array ",(0,r.kt)("inlineCode",{parentName:"li"},"arr")," at the beginning"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.trim(new_len)")," truncates the length (if ",(0,r.kt)("inlineCode",{parentName:"li"},"new_length < a.len"),", otherwise does nothing)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.clear()")," empties the array without changing ",(0,r.kt)("inlineCode",{parentName:"li"},"cap")," (equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"a.trim(0)"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.delete_many(start, size)")," removes ",(0,r.kt)("inlineCode",{parentName:"li"},"size")," consecutive elements from index ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),"\u2013"," triggers reallocation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.delete(index)")," equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"a.delete_many(index, 1)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.delete_last()")," removes the last element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.first()")," equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"a[0]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.last()")," equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"a[a.len - 1]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.pop()")," removes the last element and returns it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.reverse()")," makes a new array with the elements of ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," in reverse order"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.reverse_in_place()")," reverses the order of elements in ",(0,r.kt)("inlineCode",{parentName:"li"},"a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a.join(joiner)")," concatenates an array of strings into one string\nusing ",(0,r.kt)("inlineCode",{parentName:"li"},"joiner")," string as a separator")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"https://modules.vlang.io/arrays.html"},"vlib/arrays"),"."),(0,r.kt)("h2",{id:"sorting-arrays"},"Sorting Arrays"),(0,r.kt)("p",null,"Sorting arrays of all kinds is very simple and intuitive. Special variables ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\nare used when providing a custom sorting condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut numbers := [1, 3, 2]\nnumbers.sort() // 1, 2, 3\nnumbers.sort(a > b) // 3, 2, 1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct User {\n    age  int\n    name string\n}\n\nmut users := [User{21, 'Bob'}, User{20, 'Zarkon'}, User{25, 'Alice'}]\nusers.sort(a.age < b.age) // sort by User.age int field\nusers.sort(a.name > b.name) // reverse sort by User.name string field\n")),(0,r.kt)("p",null,"V also supports custom sorting, through the ",(0,r.kt)("inlineCode",{parentName:"p"},"sort_with_compare")," array method.\nWhich expects a comparing function which will define the sort order.\nUseful for sorting on multiple fields at the same time by custom sorting rules.\nThe code below sorts the array ascending on ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and descending ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"struct User {\n    age  int\n    name string\n}\n\nmut users := [User{21, 'Bob'}, User{65, 'Bob'}, User{25, 'Alice'}]\n\ncustom_sort_fn := fn (a &User, b &User) int {\n    // return -1 when a comes before b\n    // return 0, when both are in same order\n    // return 1 when b comes before a\n    if a.name == b.name {\n        if a.age < b.age {\n            return 1\n        }\n        if a.age > b.age {\n            return -1\n        }\n        return 0\n    }\n    if a.name < b.name {\n        return -1\n    } else if a.name > b.name {\n        return 1\n    }\n    return 0\n}\nusers.sort_with_compare(custom_sort_fn)\n")),(0,r.kt)("h2",{id:"array-slices"},"Array Slices"),(0,r.kt)("p",null,"A slice is a part of a parent array. Initially it refers to the elements\nbetween two indices separated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"..")," operator. The right-side index must\nbe greater than or equal to the left side index."),(0,r.kt)("p",null,"If a right-side index is absent, it is assumed to be the array length. If a\nleft-side index is absent, it is assumed to be 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"nums := [0, 10, 20, 30, 40]\nprintln(nums[1..4]) // [10, 20, 30]\nprintln(nums[..4]) // [0, 10, 20, 30]\nprintln(nums[1..]) // [10, 20, 30, 40]\n")),(0,r.kt)("p",null,"In V slices are arrays themselves (they are not distinct types). As a result\nall array operations may be performed on them. E.g. they can be pushed onto an\narray of the same type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"array_1 := [3, 5, 4, 7, 6]\nmut array_2 := [0, 1]\narray_2 << array_1[..3]\nprintln(array_2) // `[0, 1, 3, 5, 4]`\n")),(0,r.kt)("p",null,"A slice is always created with the smallest possible capacity ",(0,r.kt)("inlineCode",{parentName:"p"},"cap == len")," (see\n",(0,r.kt)("a",{parentName:"p",href:"#array-initialization"},(0,r.kt)("inlineCode",{parentName:"a"},"cap")," above"),") no matter what the capacity or length\nof the parent array is. As a result it is immediately reallocated and copied to another\nmemory location when the size increases thus becoming independent from the\nparent array (",(0,r.kt)("em",{parentName:"p"},"copy on grow"),"). In particular pushing elements to a slice\ndoes not alter the parent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := [0, 1, 2, 3, 4, 5]\nmut b := a[2..4]\nb[0] = 7 // `b[0]` is referring to `a[2]`\nprintln(a) // `[0, 1, 7, 3, 4, 5]`\nb << 9\n// `b` has been reallocated and is now independent from `a`\nprintln(a) // `[0, 1, 7, 3, 4, 5]` - no change\nprintln(b) // `[7, 3, 9]`\n")),(0,r.kt)("p",null,"Appending to the parent array may or may not make it independent from its child slices.\nThe behaviour depends on the parent's capacity and is predictable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := []int{len: 5, cap: 6, init: 2}\nmut b := a[1..4]\na << 3\n// no reallocation - fits in `cap`\nb[2] = 13 // `a[3]` is modified\na << 4\n// a has been reallocated and is now independent from `b` (`cap` was exceeded)\nb[1] = 3 // no change in `a`\nprintln(a) // `[2, 2, 2, 13, 2, 3, 4]`\nprintln(b) // `[2, 3, 13]`\n")),(0,r.kt)("p",null,"You can call .clone() on the slice, if you do want to have an independent copy right away:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut a := [0, 1, 2, 3, 4, 5]\nmut b := a[2..4].clone()\nb[0] = 7 // NB: `b[0]` is NOT referring to `a[2]`, as it would have been, without the .clone()\nprintln(a) // [0, 1, 2, 3, 4, 5]\nprintln(b) // [7, 3]\n")),(0,r.kt)("h2",{id:"slices-with-negative-indexes"},"Slices with negative indexes"),(0,r.kt)("p",null,"V supports array and string slices with negative indexes.\nNegative indexing starts from the end of the array towards the start,\nfor example ",(0,r.kt)("inlineCode",{parentName:"p"},"-3")," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"array.len - 3"),".\nNegative slices have a different syntax from normal slices, i.e. you need\nto add a ",(0,r.kt)("inlineCode",{parentName:"p"},"gate")," between the array name and the square bracket: ",(0,r.kt)("inlineCode",{parentName:"p"},"a#[..-3]"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"gate"),' specifies that this is a different type of slice and remember that\nthe result is "locked" inside the array.\nThe returned slice is always a valid array, though it may be empty:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"a := [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprintln(a#[-3..]) // [7, 8, 9]\nprintln(a#[-20..]) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprintln(a#[-20..-8]) // [0, 1]\nprintln(a#[..-3]) // [0, 1, 2, 3, 4, 5, 6]\n\n// empty arrays\nprintln(a#[-20..-10]) // []\nprintln(a#[20..10]) // []\nprintln(a#[20..30]) // []\n")),(0,r.kt)("h2",{id:"array-method-chaining"},"Array method chaining"),(0,r.kt)("p",null,"You can chain the calls of array methods like ",(0,r.kt)("inlineCode",{parentName:"p"},".filter()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," and use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," built-in variable to achieve a classic ",(0,r.kt)("inlineCode",{parentName:"p"},"map/filter")," functional paradigm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"// using filter, map and negatives array slices\nfiles := ['pippo.jpg', '01.bmp', '_v.txt', 'img_02.jpg', 'img_01.JPG']\nfiltered := files.filter(it#[-4..].to_lower() == '.jpg').map(it.to_upper())\n// ['PIPPO.JPG', 'IMG_02.JPG', 'IMG_01.JPG']\n")),(0,r.kt)("h2",{id:"fixed-size-arrays"},"Fixed size arrays"),(0,r.kt)("p",null,"V also supports arrays with fixed size. Unlike ordinary arrays, their\nlength is constant. You cannot append elements to them, nor shrink them.\nYou can only modify their elements in place."),(0,r.kt)("p",null,"However, access to the elements of fixed size arrays is more efficient,\nthey need less memory than ordinary arrays, and unlike ordinary arrays,\ntheir data is on the stack, so you may want to use them as buffers if you\ndo not want additional heap allocations."),(0,r.kt)("p",null,"Most methods are defined to work on ordinary arrays, not on fixed size arrays.\nYou can convert a fixed size array to an ordinary array with slicing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-v"},"mut fnums := [3]int{} // fnums is a fixed size array with 3 elements.\nfnums[0] = 1\nfnums[1] = 10\nfnums[2] = 100\nprintln(fnums) // => [1, 10, 100]\nprintln(typeof(fnums).name) // => [3]int\n\nfnums2 := [1, 10, 100]! // short init syntax that does the same (the syntax will probably change)\n\nanums := fnums[..] // same as `anums := fnums[0..fnums.len]`\nprintln(anums) // => [1, 10, 100]\nprintln(typeof(anums).name) // => []int\n")),(0,r.kt)("p",null,"Note that slicing will cause the data of the fixed size array to be copied to\nthe newly created ordinary array."))}d.isMDXComponent=!0}}]);