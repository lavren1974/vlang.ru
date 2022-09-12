"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[2408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:7},r="Global Variables",o={unversionedId:"advanced/global-variables",id:"advanced/global-variables",title:"Global Variables",description:"By default V does not allow global variables. However, in low level applications they have their",source:"@site/docs/advanced/global-variables.md",sourceDirName:"advanced",slug:"/advanced/global-variables",permalink:"/docs/advanced/global-variables",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Atomics",permalink:"/docs/advanced/atomics"},next:{title:"Debugging",permalink:"/docs/advanced/debugging"}},s={},p=[{value:"Passing C compilation flags",id:"passing-c-compilation-flags",level:2},{value:"#pkgconfig",id:"pkgconfig",level:2},{value:"Including C code",id:"including-c-code",level:2},{value:"C types",id:"c-types",level:2},{value:"C Declarations",id:"c-declarations",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"global-variables"},"Global Variables"),(0,i.kt)("p",null,"By default V does not allow global variables. However, in low level applications they have their\nplace so their usage can be enabled with the compiler flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-enable-globals"),".\nDeclarations of global variables must be surrounded with a ",(0,i.kt)("inlineCode",{parentName:"p"},"__global ( ... )"),"\nspecification ","\u2013"," as in the example ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/atomics"},"above"),"."),(0,i.kt)("p",null,"An initializer for global variables must be explicitly converted to the\ndesired target type. If no initializer is given a default initialization is done.\nSome objects like semaphores and mutexes require an explicit initialization ",(0,i.kt)("em",{parentName:"p"},"in place"),", i.e.\nnot with a value returned from a function call but with a method call by reference.\nA separate ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," function can be used for this purpose ","\u2013"," it will be called before ",(0,i.kt)("inlineCode",{parentName:"p"},"main()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"globals",globals:!0},"import sync\n\n__global (\n    sem   sync.Semaphore // needs initialization in `init()`\n    mtx   sync.RwMutex // needs initialization in `init()`\n    f1    = f64(34.0625) // explicily initialized\n    shmap shared map[string]f64 // initialized as empty `shared` map\n    f2    f64 // initialized to `0.0`\n)\n\nfn init() {\n    sem.init(0)\n    mtx.init()\n}\n")),(0,i.kt)("p",null,"Be aware that in multi threaded applications the access to global variables is subject\nto race conditions. There are several approaches to deal with these:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"shared")," types for the variable declarations and use ",(0,i.kt)("inlineCode",{parentName:"li"},"lock")," blocks for access.\nThis is most appropriate for larger objects like structs, arrays or maps."),(0,i.kt)("li",{parentName:"ul"},'handle primitive data types as "atomics" using special C-functions (see ',(0,i.kt)("a",{parentName:"li",href:"/docs/advanced/atomics"},"above"),")."),(0,i.kt)("li",{parentName:"ul"},"use explicit synchronization primitives like mutexes to control access. The compiler\ncannot really help in this case, so you have to know what you are doing."),(0,i.kt)("li",{parentName:"ul"},"don't care ","\u2013"," this approach is possible but makes only sense if the exact values\nof global variables do not really matter. An example can be found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"rand")," module\nwhere global variables are used to generate (non cryptographic) pseudo random numbers.\nIn this case data races lead to random numbers in different threads becoming somewhat\ncorrelated, which is acceptable considering the performance penalty that using\nsynchonization primitives would represent.")),(0,i.kt)("h2",{id:"passing-c-compilation-flags"},"Passing C compilation flags"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"#flag")," directives to the top of your V files to provide C compilation flags like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-I")," for adding C include files search paths"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-l")," for adding C library names that you want to get linked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-L")," for adding C library files search paths"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-D")," for setting compile time variables")),(0,i.kt)("p",null,"You can (optionally) use different flags for different targets.\nCurrently the ",(0,i.kt)("inlineCode",{parentName:"p"},"linux"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"darwin")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"freebsd"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"windows")," flags are supported."),(0,i.kt)("p",null,"NB: Each flag must go on its own line (for now)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"#flag linux -lsdl2\n#flag linux -Ivig\n#flag linux -DCIMGUI_DEFINE_ENUMS_AND_STRUCTS=1\n#flag linux -DIMGUI_DISABLE_OBSOLETE_FUNCTIONS=1\n#flag linux -DIMGUI_IMPL_API=\n")),(0,i.kt)("p",null,"In the console build command, you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-cflags")," to pass custom flags to the backend C compiler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-cc")," to change the default C backend compiler."),(0,i.kt)("li",{parentName:"ul"},"For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"-cc gcc-9 -cflags -fsanitize=thread"),".")),(0,i.kt)("p",null,"You can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"VFLAGS")," environment variable in your terminal to store your ",(0,i.kt)("inlineCode",{parentName:"p"},"-cc"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"-cflags")," settings, rather than including them in the build command each time."),(0,i.kt)("h2",{id:"pkgconfig"},"#pkgconfig"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"#pkgconfig")," directive is used to tell the compiler which modules should be used for compiling\nand linking using the pkg-config files provided by the respective dependencies."),(0,i.kt)("p",null,"As long as backticks can't be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"#flag")," and spawning processes is not desirable for security\nand portability reasons, V uses its own pkgconfig library that is compatible with the standard\nfreedesktop one."),(0,i.kt)("p",null,"If no flags are passed it will add ",(0,i.kt)("inlineCode",{parentName:"p"},"--cflags")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--libs"),", both lines below do the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},"#pkgconfig r_core\n#pkgconfig --cflags --libs r_core\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".pc")," files are looked up into a hardcoded list of default pkg-config paths, the user can add\nextra paths by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PKG_CONFIG_PATH")," environment variable. Multiple modules can be passed."),(0,i.kt)("p",null,"To check the existence of a pkg-config use ",(0,i.kt)("inlineCode",{parentName:"p"},"$pkgconfig('pkg')"),' as a compile time "if" condition to\ncheck if a pkg-config exists. If it exists the branch will be created. Use ',(0,i.kt)("inlineCode",{parentName:"p"},"$else")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"$else $if"),"\nto handle other cases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"$if $pkgconfig('mysqlclient') {\n    #pkgconfig mysqlclient\n} $else $if $pkgconfig('mariadb') {\n    #pkgconfig mariadb\n}\n")),(0,i.kt)("h2",{id:"including-c-code"},"Including C code"),(0,i.kt)("p",null,"You can also include C code directly in your V module.\nFor example, let's say that your C code is located in a folder named 'c' inside your module folder.\nThen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Put a v.mod file inside the toplevel folder of your module (if you\ncreated your module with ",(0,i.kt)("inlineCode",{parentName:"li"},"v new")," you already have v.mod file). For\nexample:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"Module {\n    name: 'mymodule',\n    description: 'My nice module wraps a simple C library.',\n    version: '0.0.1'\n    dependencies: []\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add these lines to the top of your module:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"oksyntax",oksyntax:!0},'#flag -I @VMODROOT/c\n#flag @VMODROOT/c/implementation.o\n#include "header.h"\n')),(0,i.kt)("p",null,"NB: @VMODROOT will be replaced by V with the ",(0,i.kt)("em",{parentName:"p"},"nearest parent folder, where there is a v.mod file"),".\nAny .v file beside or below the folder where the v.mod file is,\ncan use ",(0,i.kt)("inlineCode",{parentName:"p"},"#flag @VMODROOT/abc")," to refer to this folder.\nThe @VMODROOT folder is also ",(0,i.kt)("em",{parentName:"p"},"prepended")," to the module lookup path,\nso you can ",(0,i.kt)("em",{parentName:"p"},"import")," other modules under your @VMODROOT, by just naming them."),(0,i.kt)("p",null,"The instructions above will make V look for an compiled .o file in\nyour module ",(0,i.kt)("inlineCode",{parentName:"p"},"folder/c/implementation.o"),".\nIf V finds it, the .o file will get linked to the main executable, that used the module.\nIf it does not find it, V assumes that there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"@VMODROOT/c/implementation.c")," file,\nand tries to compile it to a .o file, then will use that."),(0,i.kt)("p",null,"This allows you to have C code, that is contained in a V module, so that its distribution is easier.\nYou can see a complete minimal example for using C code in a V wrapper module here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code"},"project_with_c_code"),".\nAnother example, demonstrating passing structs from C to V and back again:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code_2"},"interoperate between C to V to C"),"."),(0,i.kt)("h2",{id:"c-types"},"C types"),(0,i.kt)("p",null,"Ordinary zero terminated C strings can be converted to V strings with\n",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe { &char(cstring).vstring() }")," or if you know their length already with\n",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe { &char(cstring).vstring_with_len(len) }"),"."),(0,i.kt)("p",null,"NB: The .vstring() and .vstring_with_len() methods do NOT create a copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"cstring"),",\nso you should NOT free it after calling the method ",(0,i.kt)("inlineCode",{parentName:"p"},".vstring()"),".\nIf you need to make a copy of the C string (some libc APIs like ",(0,i.kt)("inlineCode",{parentName:"p"},"getenv")," pretty much require that,\nsince they return pointers to internal libc memory), you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"cstring_to_vstring(cstring)"),"."),(0,i.kt)("p",null,"On Windows, C APIs often return so called ",(0,i.kt)("inlineCode",{parentName:"p"},"wide")," strings (utf16 encoding).\nThese can be converted to V strings with ",(0,i.kt)("inlineCode",{parentName:"p"},"string_from_wide(&u16(cwidestring))")," ."),(0,i.kt)("p",null,"V has these types for easier interoperability with C:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voidptr")," for C's ",(0,i.kt)("inlineCode",{parentName:"li"},"void*"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&byte")," for C's ",(0,i.kt)("inlineCode",{parentName:"li"},"byte*")," and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&char")," for C's ",(0,i.kt)("inlineCode",{parentName:"li"},"char*"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&&char")," for C's ",(0,i.kt)("inlineCode",{parentName:"li"},"char**"))),(0,i.kt)("p",null,"To cast a ",(0,i.kt)("inlineCode",{parentName:"p"},"voidptr")," to a V reference, use ",(0,i.kt)("inlineCode",{parentName:"p"},"user := &User(user_void_ptr)"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"voidptr")," can also be dereferenced into a V struct through casting: ",(0,i.kt)("inlineCode",{parentName:"p"},"user := User(user_void_ptr)"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/blob/master/vlib/v/tests/project_with_c_code/mod1/wrapper.v"},"an example of a module that calls C code from V")),(0,i.kt)("h2",{id:"c-declarations"},"C Declarations"),(0,i.kt)("p",null,"C identifiers are accessed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," prefix similarly to how module-specific\nidentifiers are accessed. Functions must be redeclared in V before they can be used.\nAny C types may be used behind the ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," prefix, but types must be redeclared in V in\norder to access type members."),(0,i.kt)("p",null,"To redeclare complex types, such as in the following C code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct SomeCStruct {\n    uint8_t implTraits;\n    uint16_t memPoolData;\n    union {\n        struct {\n            void* data;\n            size_t size;\n        };\n\n        DataView view;\n    };\n};\n")),(0,i.kt)("p",null,"members of sub-data-structures may be directly declared in the containing struct as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"struct C.SomeCStruct {\n    implTraits  byte\n    memPoolData u16\n    // These members are part of sub data structures that can't currently be represented in V.\n    // Declaring them directly like this is sufficient for access.\n    // union {\n    // struct {\n    data voidptr\n    size usize\n    // }\n    view C.DataView\n    // }\n}\n")),(0,i.kt)("p",null,"The existence of the data members is made known to V, and they may be used without\nre-creating the original structure exactly."),(0,i.kt)("p",null,"Alternatively, you may ",(0,i.kt)("a",{parentName:"p",href:"/docs/documentation/structs#embedded-structs"},"embed")," the sub-data-structures to maintain\na parallel code structure."))}d.isMDXComponent=!0}}]);