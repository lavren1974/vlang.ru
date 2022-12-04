---
sidebar_position: 19
---

# Attributes

V has several attributes that modify the behavior of functions and structs.

An attribute is a compiler instruction specified inside `[]` right before a
function/struct/enum declaration and applies only to the following declaration.

```v
// [flag] enables Enum types to be used as bitfields
[flag]
enum BitField {
	read
	write
	other
}
fn main() {
	assert 1 == int(BitField.read)
	assert 2 == int(BitField.write)
	mut bf := BitField.read
	assert bf.has(.read | .other) // test if *at least one* of the flags is set
	assert !bf.all(.read | .other) // test if *all* of the flags is set
	bf.set(.write | .other)
	assert bf.has(.read | .write | .other)
	assert bf.all(.read | .write | .other)
	bf.toggle(.other)
	assert bf == BitField.read | .write
	assert bf.all(.read | .write)
	assert !bf.has(.other)
}
```

Struct field deprecations:
```v oksyntax
module abc
// Note that only *direct* accesses to Xyz.d in *other modules*, will produce deprecation notices/warnings:
pub struct Xyz {
pub mut:
	a int
	d int [deprecated: 'use Xyz.a instead'; deprecated_after: '2999-03-01']
	// the tags above, will produce a notice, since the deprecation date is in the far future
}
```

Function/method deprecations:
```v
// Calling this function will result in a deprecation warning
[deprecated]
fn old_function() {
}
// It can also display a custom deprecation message
[deprecated: 'use new_function() instead']
fn legacy_function() {}
// You can also specify a date, after which the function will be
// considered deprecated. Before that date, calls to the function
// will be compiler notices - you will see them, but the compilation
// is not affected. After that date, calls will become warnings,
// so ordinary compiling will still work, but compiling with -prod
// will not (all warnings are treated like errors with -prod).
// 6 months after the deprecation date, calls will be hard
// compiler errors.
[deprecated: 'use new_function2() instead']
[deprecated_after: '2021-05-27']
fn legacy_function2() {}
```

```v nofmt
// This function's calls will be inlined.
[inline]
fn inlined_function() {
}
// This function's calls will NOT be inlined.
[noinline]
fn function() {
}
// This function will NOT return to its callers.
// Such functions can be used at the end of or blocks,
// just like exit/1 or panic/1. Such functions can not
// have return types, and should end either in for{}, or
// by calling other `[noreturn]` functions.
[noreturn]
fn forever() {
	for {}
}
// The following struct must be allocated on the heap. Therefore, it can only be used as a
// reference (`&Window`) or inside another reference (`&OuterStruct{ Window{...} }`).
// See section "Stack and Heap"
[heap]
struct Window {
}
// V will not generate this function and all its calls if the provided flag is false.
// To use a flag, use `v -d flag`
[if debug]
fn foo() {
}
fn bar() {
	foo() // will not be called if `-d debug` is not passed
}
// The memory pointed to by the pointer arguments of this function will not be
// freed by the garbage collector (if in use) before the function returns
[keep_args_alive]
fn C.my_external_function(voidptr, int, voidptr) int
// Calls to following function must be in unsafe{} blocks.
// Note that the code in the body of `risky_business()` will still be
// checked, unless you also wrap it in `unsafe {}` blocks.
// This is useful, when you want to have an `[unsafe]` function that
// has checks before/after a certain unsafe operation, that will still
// benefit from V's safety features.
[unsafe]
fn risky_business() {
	// code that will be checked, perhaps checking pre conditions
	unsafe {
		// code that *will not be* checked, like pointer arithmetic,
		// accessing union fields, calling other `[unsafe]` fns, etc...
		// Usually, it is a good idea to try minimizing code wrapped
		// in unsafe{} as much as possible.
		// See also [Memory-unsafe code](#memory-unsafe-code)
	}
	// code that will be checked, perhaps checking post conditions and/or
	// keeping invariants
}
// V's autofree engine will not take care of memory management in this function.
// You will have the responsibility to free memory manually yourself in it.
[manualfree]
fn custom_allocations() {
}
// For C interop only, tells V that the following struct is defined with `typedef struct` in C
[typedef]
struct C.Foo {
}
// Used to add a custom calling convention to a function, available calling convention: stdcall, fastcall and cdecl.
// This list aslo apply for type aliases (see below).
[callconv: "stdcall"]
fn C.DefWindowProc(hwnd int, msg int, lparam int, wparam int)
// Used to add a custom calling convention to a function type aliases.
[callconv: "fastcall"]
type FastFn = fn (int) bool
// Windows only:
// Without this attribute all graphical apps will have the following behavior on Windows:
// If run from a console or terminal; keep the terminal open so all (e)println statements can be viewed.
// If run from e.g. Explorer, by double-click; app is opened, but no terminal is opened, and no (e)println output can be seen.
// Use it to force-open a terminal to view output in, even if the app is started from Explorer.
// Valid before main() only.
[console]
fn main() {
}
```