---
sidebar_position: 24
---

# Memory management

V avoids doing unnecessary allocations in the first place by using value types,
string buffers, promoting a simple abstraction-free code style.

Most objects (~90-100%) are freed by V's autofree engine: the compiler inserts
necessary free calls automatically during compilation. Remaining small percentage
of objects is freed via reference counting.

The developer doesn't need to change anything in their code. "It just works", like in
Python, Go, or Java, except there's no heavy GC tracing everything or expensive RC for
each object.

## Control

You can take advantage of V's autofree engine and define a `free()` method on custom
data types:

```v
struct MyType {}

[unsafe]
fn (data &MyType) free() {
	// ...
}
```

Just as the compiler frees C data types with C's `free()`, it will statically insert
`free()` calls for your data type at the end of each variable's lifetime.

Autofree can be enabled with an `-autofree` flag.

For developers willing to have more low level control, autofree can be disabled with
`-manualfree`, or by adding a `[manualfree]` on each function that wants manage its
memory manually. (See [attributes](../advanced/attributes.md)).


Note 2: Autofree is still WIP. Until it stabilises and becomes the default, please
avoid using it. Right now allocations are handled by a minimal and well performing GC
until V's autofree engine is production ready.

**Examples**

```v
import strings

fn draw_text(s string, x int, y int) {
	// ...
}

fn draw_scene() {
	// ...
	name1 := 'abc'
	name2 := 'def ghi'
	draw_text('hello $name1', 10, 10)
	draw_text('hello $name2', 100, 10)
	draw_text(strings.repeat(`X`, 10000), 10, 50)
	// ...
}
```

The strings don't escape `draw_text`, so they are cleaned up when
the function exits.

In fact, with the `-prealloc` flag, the first two calls won't result in any allocations at all.
These two strings are small, so V will use a preallocated buffer for them.

```v
struct User {
	name string
}

fn test() []int {
	number := 7 // stack variable
	user := User{} // struct allocated on stack
	numbers := [1, 2, 3] // array allocated on heap, will be freed as the function exits
	println(number)
	println(user)
	println(numbers)
	numbers2 := [4, 5, 6] // array that's being returned, won't be freed here
	return numbers2
}
```

## Stack and Heap
### Stack and Heap Basics

Like with most other programming languages there are two locations where data can
be stored:

* The *stack* allows fast allocations with almost zero administrative overhead. The
  stack grows and shrinks with the function call depth &ndash; so every called
  function has its stack segment that remains valid until the function returns.
  No freeing is necessary, however, this also means that a reference to a stack
  object becomes invalid on function return. Furthermore stack space is
  limited (typically to a few Megabytes per thread).
* The *heap* is a large memory area (typically some Gigabytes) that is administrated
  by the operating system. Heap objects are allocated and freed by special function
  calls that delegate the administrative tasks to the OS. This means that they can
  remain valid across several function calls, however, the administration is
  expensive.

### V's default approach

Due to performance considerations V tries to put objects on the stack if possible
but allocates them on the heap when obviously necessary. Example:

```v
struct MyStruct {
	n int
}

struct RefStruct {
	r &MyStruct
}

fn main() {
	q, w := f()
	println('q: $q.r.n, w: $w.n')
}

fn f() (RefStruct, &MyStruct) {
	a := MyStruct{
		n: 1
	}
	b := MyStruct{
		n: 2
	}
	c := MyStruct{
		n: 3
	}
	e := RefStruct{
		r: &b
	}
	x := a.n + c.n
	println('x: $x')
	return e, &c
}
```

Here `a` is stored on the stack since it's address never leaves the function `f()`.
However a reference to `b` is part of `e` which is returned. Also a reference to
`c` is returned. For this reason `b` and `c` will be heap allocated.

Things become less obvious when a reference to an object is passed as function argument:

```v
struct MyStruct {
mut:
	n int
}

fn main() {
	mut q := MyStruct{
		n: 7
	}
	w := MyStruct{
		n: 13
	}
	x := q.f(&w) // references of `q` and `w` are passed
	println('q: $q\nx: $x')
}

fn (mut a MyStruct) f(b &MyStruct) int {
	a.n += b.n
	x := a.n * b.n
	return x
}
```
Here the call `q.f(&w)` passes references to `q` and `w` because `a` is
`mut` and `b` is of type `&MyStruct` in `f()`'s declaration, so technically
these references are leaving `main()`. However the *lifetime* of these
references lies inside the scope of `main()` so `q` and `w` are allocated
on the stack.

### Manual Control for Stack and Heap

In the last example the V compiler could put `q` and `w` on the stack
because it assumed that in the call `q.f(&w)` these references were only
used for reading and modifying the referred values &ndash; and not to pass the
references themselves somewhere else. This can be seen in a way that the
references to `q` and `w` are only *borrowed* to `f()`.

Things become different if `f()` is doing something with a reference itself:

```v
struct RefStruct {
mut:
	r &MyStruct
}

// see discussion below
[heap]
struct MyStruct {
	n int
}

fn main() {
	m := MyStruct{}
	mut r := RefStruct{
		r: &m
	}
	r.g()
	println('r: $r')
}

fn (mut r RefStruct) g() {
	s := MyStruct{
		n: 7
	}
	r.f(&s) // reference to `s` inside `r` is passed back to `main() `
}

fn (mut r RefStruct) f(s &MyStruct) {
	r.r = s // would trigger error without `[heap]`
}
```

Here `f()` looks quite innocent but is doing nasty things &ndash; it inserts a
reference to `s` into `r`. The problem with this is that `s` lives only as long
as `g()` is running but `r` is used in `main()` after that. For this reason
the compiler would complain about the assignment in `f()` because `s` *"might
refer to an object stored on stack"*. The assumption made in `g()` that the call
`r.f(&s)` would only borrow the reference to `s` is wrong.

A solution to this dilemma is the `[heap]` attribute at the declaration of
`struct MyStruct`. It instructs the compiler to *always* allocate `MyStruct`-objects
on the heap. This way the reference to `s` remains valid even after `g()` returns.
The compiler takes into consideration that `MyStruct` objects are always heap
allocated when checking `f()` and allows assigning the reference to `s` to the
`r.r` field.

There is a pattern often seen in other programming languages:

```v failcompile
fn (mut a MyStruct) f() &MyStruct {
	// do something with a
	return &a // would return address of borrowed object
}
```

Here `f()` is passed a reference `a` as receiver that is passed back to the caller and returned
as result at the same time. The intention behind such a declaration is method chaining like
`y = x.f().g()`. However, the problem with this approach is that a second reference
to `a` is created &ndash; so it is not only borrowed and `MyStruct` has to be
declared as `[heap]`.

In V the better approach is:

```v
struct MyStruct {
mut:
	n int
}

fn (mut a MyStruct) f() {
	// do something with `a`
}

fn (mut a MyStruct) g() {
	// do something else with `a`
}

fn main() {
	x := MyStruct{} // stack allocated
	mut y := x
	y.f()
	y.g()
	// instead of `mut y := x.f().g()
}
```

This way the `[heap]` attribute can be avoided &ndash; resulting in better performance.

However, stack space is very limited as mentioned above. For this reason the `[heap]`
attribute might be suitable for very large structures even if not required by use cases
like those mentioned above.

There is an alternative way to manually control allocation on a case to case basis. This
approach is not recommended but shown here for the sake of completeness:

```v
struct MyStruct {
	n int
}

struct RefStruct {
mut:
	r &MyStruct
}

// simple function - just to overwrite stack segment previously used by `g()`
fn use_stack() {
	x := 7.5
	y := 3.25
	z := x + y
	println('$x $y $z')
}

fn main() {
	m := MyStruct{}
	mut r := RefStruct{
		r: &m
	}
	r.g()
	use_stack() // to erase invalid stack contents
	println('r: $r')
}

fn (mut r RefStruct) g() {
	s := &MyStruct{ // `s` explicitly refers to a heap object
		n: 7
	}
	// change `&MyStruct` -> `MyStruct` above and `r.f(s)` -> `r.f(&s)` below
	// to see data in stack segment being overwritten
	r.f(s)
}

fn (mut r RefStruct) f(s &MyStruct) {
	r.r = unsafe { s } // override compiler check
}
```

Here the compiler check is suppressed by the `unsafe` block. To make `s` be heap
allocated even without `[heap]` attribute the `struct` literal is prefixed with
an ampersand: `&MyStruct{...}`.

This last step would not be required by the compiler but without it the reference
inside `r` becomes invalid (the memory area pointed to will be overwritten by
`use_stack()`) and the program might crash (or at least produce an unpredictable
final output). That's why this approach is *unsafe* and should be avoided!
