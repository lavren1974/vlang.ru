"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[4231],{3905:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>u});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),m=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(i),u=a,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return i?t.createElement(f,o(o({ref:n},d),{},{components:i})):t.createElement(f,o({ref:n},d))}));function u(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var m=2;m<l;m++)o[m]=i[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9270:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var t=i(7462),a=(i(7294),i(3905));const l={sidebar_position:9},o="Conditional compilation",r={unversionedId:"advanced/conditional-compilation",id:"advanced/conditional-compilation",title:"Conditional compilation",description:"Compile time code",source:"@site/docs/advanced/conditional-compilation.md",sourceDirName:"advanced",slug:"/advanced/conditional-compilation",permalink:"/docs/advanced/conditional-compilation",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Compile time pseudo variables",permalink:"/docs/advanced/compile-time-pseudo-variables"},next:{title:"Performance tuning",permalink:"/docs/advanced/performance-tuning"}},p={},m=[{value:"Compile time code",id:"compile-time-code",level:2},{value:"<code>$if</code> condition",id:"if-condition",level:3},{value:"<code>$embed_file</code>",id:"embed_file",level:3},{value:"<code>$tmpl</code> for embedding and parsing V template files",id:"tmpl-for-embedding-and-parsing-v-template-files",level:3},{value:"<code>$env</code>",id:"env",level:3},{value:"<code>$compile_error</code> and <code>$compile_warn</code>",id:"compile_error-and-compile_warn",level:3},{value:"Environment specific files",id:"environment-specific-files",level:2}],d={toc:m};function s(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conditional-compilation"},"Conditional compilation"),(0,a.kt)("h2",{id:"compile-time-code"},"Compile time code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$")," is used as a prefix for compile-time operations."),(0,a.kt)("h3",{id:"if-condition"},(0,a.kt)("inlineCode",{parentName:"h3"},"$if")," condition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    // Support for multiple conditions in one branch\n    $if ios || android {\n        println('Running on a mobile device!')\n    }\n    $if linux && x64 {\n        println('64-bit Linux.')\n    }\n    // Usage as expression\n    os := $if windows { 'Windows' } $else { 'UNIX' }\n    println('Using $os')\n    // $else-$if branches\n    $if tinyc {\n        println('tinyc')\n    } $else $if clang {\n        println('clang')\n    } $else $if gcc {\n        println('gcc')\n    } $else {\n        println('different compiler')\n    }\n    $if test {\n        println('testing')\n    }\n    // v -cg ...\n    $if debug {\n        println('debugging')\n    }\n    // v -prod ...\n    $if prod {\n        println('production build')\n    }\n    // v -d option ...\n    $if option ? {\n        println('custom option')\n    }\n}\n")),(0,a.kt)("p",null,"If you want an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," to be evaluated at compile time it must be prefixed with a ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," sign.\nRight now it can be used to detect an OS, compiler, platform or compilation options.\n",(0,a.kt)("inlineCode",{parentName:"p"},"$if debug")," is a special option like ",(0,a.kt)("inlineCode",{parentName:"p"},"$if windows")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$if x32"),", it's enabled if the program\nis compiled with ",(0,a.kt)("inlineCode",{parentName:"p"},"v -g")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"v -cg"),".\nIf you're using a custom ifdef, then you do need ",(0,a.kt)("inlineCode",{parentName:"p"},"$if option ? {}")," and compile with",(0,a.kt)("inlineCode",{parentName:"p"},"v -d option"),".\nFull list of builtin options:\n| OS                            | Compilers         | Platforms             | Other                     |\n| ---                           | ---               | ---                   | ---                       |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"linux"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"macos"),"   | ",(0,a.kt)("inlineCode",{parentName:"p"},"gcc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tinyc"),"    | ",(0,a.kt)("inlineCode",{parentName:"p"},"amd64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64"),"      | ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"   |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"mac"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"darwin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ios"),",       | ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mingw"),"  | ",(0,a.kt)("inlineCode",{parentName:"p"},"x64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"x32"),"          | ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"glibc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"prealloc")," |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"android"),",",(0,a.kt)("inlineCode",{parentName:"p"},"mach"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dragonfly")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"msvc"),"            | ",(0,a.kt)("inlineCode",{parentName:"p"},"little_endian"),"       | ",(0,a.kt)("inlineCode",{parentName:"p"},"no_bounds_checking"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"freestanding"),"    |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"gnu"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hpux"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"haiku"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"qnx")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"cplusplus"),"       | ",(0,a.kt)("inlineCode",{parentName:"p"},"big_endian"),"          | ",(0,a.kt)("inlineCode",{parentName:"p"},"no_segfault_handler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"no_backtrace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"no_main")," |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"solaris")," | | | |"),(0,a.kt)("h3",{id:"embed_file"},(0,a.kt)("inlineCode",{parentName:"h3"},"$embed_file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"import os\nfn main() {\n    embedded_file := $embed_file('v.png')\n    os.write_file('exported.png', embedded_file.to_string())?\n}\n")),(0,a.kt)("p",null,"V can embed arbitrary files into the executable with the ",(0,a.kt)("inlineCode",{parentName:"p"},"$embed_file(<path>)"),"\ncompile time call. Paths can be absolute or relative to the source file."),(0,a.kt)("p",null,"When you do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"-prod"),", the file will not be embedded. Instead, it will\nbe loaded ",(0,a.kt)("em",{parentName:"p"},"the first time")," your program calls ",(0,a.kt)("inlineCode",{parentName:"p"},"embedded_file.data()")," at runtime, making\nit easier to change in external editor programs, without needing to recompile\nyour executable."),(0,a.kt)("p",null,"When you compile with ",(0,a.kt)("inlineCode",{parentName:"p"},"-prod"),", the file ",(0,a.kt)("em",{parentName:"p"},"will be embedded inside")," your\nexecutable, increasing your binary size, but making it more self contained\nand thus easier to distribute. In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"embedded_file.data()")," will cause ",(0,a.kt)("em",{parentName:"p"},"no IO"),",\nand it will always return the same data."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$embed_file")," supports compression of the embedded file when compiling with ",(0,a.kt)("inlineCode",{parentName:"p"},"-prod"),".\nCurrently only one compression type is supported: ",(0,a.kt)("inlineCode",{parentName:"p"},"zlib")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"import os\nfn main() {\n    embedded_file := $embed_file('v.png', .zlib) // compressed using zlib\n    os.write_file('exported.png', embedded_file.to_string())?\n}\n")),(0,a.kt)("h3",{id:"tmpl-for-embedding-and-parsing-v-template-files"},(0,a.kt)("inlineCode",{parentName:"h3"},"$tmpl")," for embedding and parsing V template files"),(0,a.kt)("p",null,"V has a simple template language for text and html templates, and they can easily\nbe embedded via ",(0,a.kt)("inlineCode",{parentName:"p"},"$tmpl('path/to/template.txt')"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"fn build() string {\n    name := 'Peter'\n    age := 25\n    numbers := [1, 2, 3]\n    return $tmpl('1.txt')\n}\n\nfn main() {\n    println(build())\n}\n")),(0,a.kt)("p",null,"1.txt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name: @name\n\nage: @age\n\nnumbers: @numbers\n\n@for number in numbers\n  @number\n@end\n")),(0,a.kt)("p",null,"output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name: Peter\n\nage: 25\n\nnumbers: [1, 2, 3]\n\n1\n2\n3\n")),(0,a.kt)("h3",{id:"env"},(0,a.kt)("inlineCode",{parentName:"h3"},"$env")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v"},"module main\n\nfn main() {\n    compile_time_env := $env('ENV_VAR')\n    println(compile_time_env)\n}\n")),(0,a.kt)("p",null,"V can bring in values at compile time from environment variables.\n",(0,a.kt)("inlineCode",{parentName:"p"},"$env('ENV_VAR')")," can also be used in top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"#flag")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," statements:\n",(0,a.kt)("inlineCode",{parentName:"p"},"#flag linux -I $env('JAVA_HOME')/include"),"."),(0,a.kt)("h3",{id:"compile_error-and-compile_warn"},(0,a.kt)("inlineCode",{parentName:"h3"},"$compile_error")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"$compile_warn")),(0,a.kt)("p",null,"These two comptime functions are very useful for displaying custom errors/warnings during\ncompile time."),(0,a.kt)("p",null,"Both receive as their only argument a string literal that contains the message to display:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"failcompile nofmt",failcompile:!0,nofmt:!0},"// x.v\nmodule main\n\n$if linux {\n    $compile_error('Linux is not supported')\n}\n\nfn main() {\n}\n\n$ v run x.v\nx.v:4:5: error: Linux is not supported\n    2 |\n    3 | $if linux {\n    4 |     $compile_error('Linux is not supported')\n      |     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n    5 | }\n    6 |\n")),(0,a.kt)("h2",{id:"environment-specific-files"},"Environment specific files"),(0,a.kt)("p",null,"If a file has an environment-specific suffix, it will only be compiled for that environment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".js.v")," => will be used only by the JS backend. These files can contain JS. code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".c.v")," => will be used only by the C backend. These files can contain C. code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".native.v")," => will be used only by V's native backend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_nix.c.v")," => will be used only on Unix systems (non Windows)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_${os}.c.v")," => will be used only on the specific ",(0,a.kt)("inlineCode",{parentName:"li"},"os")," system.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"li"},"_windows.c.v")," will be used only when compiling on Windows, or with ",(0,a.kt)("inlineCode",{parentName:"li"},"-os windows"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_default.c.v")," => will be used only if there is NOT a more specific platform file.\nFor example, if you have both ",(0,a.kt)("inlineCode",{parentName:"li"},"file_linux.c.v")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"file_default.c.v"),",\nand you are compiling for linux, then only ",(0,a.kt)("inlineCode",{parentName:"li"},"file_linux.c.v")," will be used,\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"file_default.c.v")," will be ignored.")),(0,a.kt)("p",null,"Here is a more complete example:\nmain.v:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"module main\nfn main() { println(message) }\n")),(0,a.kt)("p",null,"main_default.c.v:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"module main\nconst ( message = 'Hello world' )\n")),(0,a.kt)("p",null,"main_linux.c.v:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"module main\nconst ( message = 'Hello linux' )\n")),(0,a.kt)("p",null,"main_windows.c.v:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"module main\nconst ( message = 'Hello windows' )\n")),(0,a.kt)("p",null,"With the example above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"when you compile for windows, you will get 'Hello windows'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"when you compile for linux, you will get 'Hello linux'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"when you compile for any other platform, you will get the\nnon specific 'Hello world' message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"_d_customflag.v")," => will be used ",(0,a.kt)("em",{parentName:"p"},"only")," if you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"-d customflag")," to V.\nThat corresponds to ",(0,a.kt)("inlineCode",{parentName:"p"},"$if customflag ? {}"),", but for a whole file, not just a\nsingle block. ",(0,a.kt)("inlineCode",{parentName:"p"},"customflag")," should be a snake",(0,a.kt)("em",{parentName:"p"},"case identifier, it can not\ncontain arbitrary characters (only lower case latin letters + numbers + `"),(0,a.kt)("inlineCode",{parentName:"p"},").\nNB: a combinatorial "),"_d_customflag_linux.c.v",(0,a.kt)("inlineCode",{parentName:"p"},"postfix will not work.\nIf you do need a custom flag file, that has platform dependent code, use the\npostfix"),"_d_customflag.v",(0,a.kt)("inlineCode",{parentName:"p"},", and then use plaftorm dependent compile time\nconditional blocks inside it, i.e. "),"$if linux {}` etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"_notd_customflag.v")," => similar to _d_customflag.v, but will be used\n",(0,a.kt)("em",{parentName:"p"},"only")," if you do NOT pass ",(0,a.kt)("inlineCode",{parentName:"p"},"-d customflag")," to V."))))}s.isMDXComponent=!0}}]);