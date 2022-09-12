---
sidebar_position: 7
---

# Global Variables

By default V does not allow global variables. However, in low level applications they have their
place so their usage can be enabled with the compiler flag `-enable-globals`.
Declarations of global variables must be surrounded with a `__global ( ... )`
specification &ndash; as in the example [above](./atomics.md).

An initializer for global variables must be explicitly converted to the
desired target type. If no initializer is given a default initialization is done.
Some objects like semaphores and mutexes require an explicit initialization *in place*, i.e.
not with a value returned from a function call but with a method call by reference.
A separate `init()` function can be used for this purpose &ndash; it will be called before `main()`:

```v globals
import sync

__global (
	sem   sync.Semaphore // needs initialization in `init()`
	mtx   sync.RwMutex // needs initialization in `init()`
	f1    = f64(34.0625) // explicily initialized
	shmap shared map[string]f64 // initialized as empty `shared` map
	f2    f64 // initialized to `0.0`
)

fn init() {
	sem.init(0)
	mtx.init()
}
```
Be aware that in multi threaded applications the access to global variables is subject
to race conditions. There are several approaches to deal with these:

- use `shared` types for the variable declarations and use `lock` blocks for access.
  This is most appropriate for larger objects like structs, arrays or maps.
- handle primitive data types as "atomics" using special C-functions (see [above](./atomics.md)).
- use explicit synchronization primitives like mutexes to control access. The compiler
  cannot really help in this case, so you have to know what you are doing.
- don't care &ndash; this approach is possible but makes only sense if the exact values
  of global variables do not really matter. An example can be found in the `rand` module
  where global variables are used to generate (non cryptographic) pseudo random numbers.
  In this case data races lead to random numbers in different threads becoming somewhat
  correlated, which is acceptable considering the performance penalty that using
  synchonization primitives would represent.

## Passing C compilation flags

Add `#flag` directives to the top of your V files to provide C compilation flags like:

- `-I` for adding C include files search paths
- `-l` for adding C library names that you want to get linked
- `-L` for adding C library files search paths
- `-D` for setting compile time variables

You can (optionally) use different flags for different targets.
Currently the `linux`, `darwin` , `freebsd`, and `windows` flags are supported.

NB: Each flag must go on its own line (for now)

```v oksyntax
#flag linux -lsdl2
#flag linux -Ivig
#flag linux -DCIMGUI_DEFINE_ENUMS_AND_STRUCTS=1
#flag linux -DIMGUI_DISABLE_OBSOLETE_FUNCTIONS=1
#flag linux -DIMGUI_IMPL_API=
```

In the console build command, you can use:
* `-cflags` to pass custom flags to the backend C compiler.
* `-cc` to change the default C backend compiler.
* For example: `-cc gcc-9 -cflags -fsanitize=thread`.

You can define a `VFLAGS` environment variable in your terminal to store your `-cc`
and `-cflags` settings, rather than including them in the build command each time.

## #pkgconfig

Add `#pkgconfig` directive is used to tell the compiler which modules should be used for compiling
and linking using the pkg-config files provided by the respective dependencies.

As long as backticks can't be used in `#flag` and spawning processes is not desirable for security
and portability reasons, V uses its own pkgconfig library that is compatible with the standard
freedesktop one.

If no flags are passed it will add `--cflags` and `--libs`, both lines below do the same:

```v oksyntax
#pkgconfig r_core
#pkgconfig --cflags --libs r_core
```

The `.pc` files are looked up into a hardcoded list of default pkg-config paths, the user can add
extra paths by using the `PKG_CONFIG_PATH` environment variable. Multiple modules can be passed.

To check the existence of a pkg-config use `$pkgconfig('pkg')` as a compile time "if" condition to
check if a pkg-config exists. If it exists the branch will be created. Use `$else` or `$else $if`
to handle other cases.

```v ignore
$if $pkgconfig('mysqlclient') {
	#pkgconfig mysqlclient
} $else $if $pkgconfig('mariadb') {
	#pkgconfig mariadb
}
```

## Including C code

You can also include C code directly in your V module.
For example, let's say that your C code is located in a folder named 'c' inside your module folder.
Then:

* Put a v.mod file inside the toplevel folder of your module (if you
created your module with `v new` you already have v.mod file). For
example:
```v ignore
Module {
	name: 'mymodule',
	description: 'My nice module wraps a simple C library.',
	version: '0.0.1'
	dependencies: []
}
```


* Add these lines to the top of your module:
```v oksyntax
#flag -I @VMODROOT/c
#flag @VMODROOT/c/implementation.o
#include "header.h"
```
NB: @VMODROOT will be replaced by V with the *nearest parent folder, where there is a v.mod file*.
Any .v file beside or below the folder where the v.mod file is,
can use `#flag @VMODROOT/abc` to refer to this folder.
The @VMODROOT folder is also *prepended* to the module lookup path,
so you can *import* other modules under your @VMODROOT, by just naming them.

The instructions above will make V look for an compiled .o file in
your module `folder/c/implementation.o`.
If V finds it, the .o file will get linked to the main executable, that used the module.
If it does not find it, V assumes that there is a `@VMODROOT/c/implementation.c` file,
and tries to compile it to a .o file, then will use that.

This allows you to have C code, that is contained in a V module, so that its distribution is easier.
You can see a complete minimal example for using C code in a V wrapper module here:
[project_with_c_code](https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code).
Another example, demonstrating passing structs from C to V and back again:
[interoperate between C to V to C](https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code_2).

## C types

Ordinary zero terminated C strings can be converted to V strings with
`unsafe { &char(cstring).vstring() }` or if you know their length already with
`unsafe { &char(cstring).vstring_with_len(len) }`.

NB: The .vstring() and .vstring_with_len() methods do NOT create a copy of the `cstring`,
so you should NOT free it after calling the method `.vstring()`.
If you need to make a copy of the C string (some libc APIs like `getenv` pretty much require that,
since they return pointers to internal libc memory), you can use `cstring_to_vstring(cstring)`.

On Windows, C APIs often return so called `wide` strings (utf16 encoding).
These can be converted to V strings with `string_from_wide(&u16(cwidestring))` .

V has these types for easier interoperability with C:

- `voidptr` for C's `void*`,
- `&byte` for C's `byte*` and
- `&char` for C's `char*`.
- `&&char` for C's `char**`

To cast a `voidptr` to a V reference, use `user := &User(user_void_ptr)`.

`voidptr` can also be dereferenced into a V struct through casting: `user := User(user_void_ptr)`.

[an example of a module that calls C code from V](https://github.com/vlang/v/blob/master/vlib/v/tests/project_with_c_code/mod1/wrapper.v)

## C Declarations

C identifiers are accessed with the `C` prefix similarly to how module-specific
identifiers are accessed. Functions must be redeclared in V before they can be used.
Any C types may be used behind the `C` prefix, but types must be redeclared in V in
order to access type members.

To redeclare complex types, such as in the following C code:

```c
struct SomeCStruct {
	uint8_t implTraits;
	uint16_t memPoolData;
	union {
		struct {
			void* data;
			size_t size;
		};

		DataView view;
	};
};
```

members of sub-data-structures may be directly declared in the containing struct as below:

```v
struct C.SomeCStruct {
	implTraits  byte
	memPoolData u16
	// These members are part of sub data structures that can't currently be represented in V.
	// Declaring them directly like this is sufficient for access.
	// union {
	// struct {
	data voidptr
	size usize
	// }
	view C.DataView
	// }
}
```

The existence of the data members is made known to V, and they may be used without
re-creating the original structure exactly.

Alternatively, you may [embed](../documentation/structs.md#embedded-structs) the sub-data-structures to maintain
a parallel code structure.