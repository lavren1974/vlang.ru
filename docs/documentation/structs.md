---
sidebar_position: 11
---

# Structs

```v
struct Point {
	x int
	y int
}

mut p := Point{
	x: 10
	y: 20
}
println(p.x) // Struct fields are accessed using a dot
// Alternative literal syntax for structs with 3 fields or fewer
p = Point{10, 20}
assert p.x == 10
```

## Heap structs

Structs are allocated on the stack. To allocate a struct on the heap
and get a reference to it, use the `&` prefix:

```v
struct Point {
	x int
	y int
}

p := &Point{10, 10}
// References have the same syntax for accessing fields
println(p.x)
```

The type of `p` is `&Point`. It's a [reference](./references.md) to `Point`.
References are similar to Go pointers and C++ references.

```v
struct Foo {
mut:
	x int
}

fa := Foo{1}
mut a := fa
a.x = 2
assert fa.x == 1
assert a.x == 2

// fb := Foo{ 1 }
// mut b := &fb  // error: `fb` is immutable, cannot have a mutable reference to it
// b.x = 2

mut fc := Foo{1}
mut c := &fc
c.x = 2
assert fc.x == 2
assert c.x == 2
println(fc) // Foo{ x: 2 }
println(c) // &Foo{ x: 2 } // Note `&` prefixed.
```
see also [Stack and Heap](./memory-management.md#stack-and-heap)

## Default field values

```v
struct Foo {
	n   int    // n is 0 by default
	s   string // s is '' by default
	a   []int  // a is `[]int{}` by default
	pos int = -1 // custom default value
}
```

All struct fields are zeroed by default during the creation of the struct.
Array and map fields are allocated.

It's also possible to define custom default values.

## Required fields

```v
struct Foo {
	n int [required]
}
```

You can mark a struct field with the `[required]` attribute, to tell V that
that field must be initialized when creating an instance of that struct.

This example will not compile, since the field `n` isn't explicitly initialized:
```v failcompile
_ = Foo{}
```
<!-- <a id='short-struct-initialization-syntax' /> -->

## Short struct literal syntax

```v
struct Point {
	x int
	y int
}

mut p := Point{
	x: 10
	y: 20
}
p = Point{
	x: 30
	y: 4
}
assert p.y == 4
//
// array: first element defines type of array
points := [Point{10, 20}, Point{20, 30}, Point{40, 50}]
println(points) // [Point{x: 10, y: 20}, Point{x: 20, y: 30}, Point{x: 40,y: 50}]
```

Omitting the struct name also works for returning a struct literal or passing one
as a function argument.

### Trailing struct literal arguments

V doesn't have default function arguments or named arguments, for that trailing struct
literal syntax can be used instead:

```v
[params]
struct ButtonConfig {
	text        string
	is_disabled bool
	width       int = 70
	height      int = 20
}

struct Button {
	text   string
	width  int
	height int
}

fn new_button(c ButtonConfig) &Button {
	return &Button{
		width: c.width
		height: c.height
		text: c.text
	}
}

button := new_button(text: 'Click me', width: 100)
// the height is unset, so it's the default value
assert button.height == 20
```

As you can see, both the struct name and braces can be omitted, instead of:

```v oksyntax nofmt
new_button(ButtonConfig{text:'Click me', width:100})
```

This only works for functions that take a struct for the last argument.

NB: the `[params]` tag is used to tell V, that the trailing struct parameter
can be omitted *entirely*, so that you can write `button := new_button()`.
Without it, you have to specify *at least* one of the field names, even if it
has its default value, otherwise the compiler will produce this error message,
when you call the function with no parameters:
`error: expected 1 arguments, but got 0`.

## Access modifiers

Struct fields are private and immutable by default (making structs immutable as well).
Their access modifiers can be changed with
`pub` and `mut`. In total, there are 5 possible options:

```v
struct Foo {
	a int // private immutable (default)
mut:
	b int // private mutable
	c int // (you can list multiple fields with the same access modifier)
pub:
	d int // public immutable (readonly)
pub mut:
	e int // public, but mutable only in parent module
__global:
	// (not recommended to use, that's why the 'global' keyword starts with __)
	f int // public and mutable both inside and outside parent module
}
```
Private fields are available only inside the same [module](./modules.md), any attempt
to directly access them from another module will cause an error during compilation.
Public immutable fields are readonly everywhere.

## Anonymous structs

V supports anonymous structs: structs that don't have to be declared separately
with a struct name.

```v
struct Book {
	author struct {
		name string
		age  int
	}

	title string
}

book := Book{
	author: struct {
		name: 'Samantha Black'
		age: 24
	}
}
assert book.author.name == 'Samantha Black'
assert book.author.age == 24
```

## `[noinit]` structs

V supports `[noinit]` structs, which are structs that cannot be initialised outside the module
they are defined in. They are either meant to be used internally or they can be used externally
through _factory functions_.

For an example, consider the following source in a directory `sample`:

```v oksyntax
module sample
[noinit]
pub struct Information {
pub:
	data string
}
pub fn new_information(data string) !Information {
	if data.len == 0 || data.len > 100 {
		return error('data must be between 1 and 100 characters')
	}
	return Information{
		data: data
	}
}
```

Note that `new_information` is a _factory_ function. Now when we want to use this struct
outside the module:

```v okfmt
import sample
fn main() {
	// This doesn't work when the [noinit] attribute is present:
	// info := sample.Information{
	// 	data: 'Sample information.'
	// }
	// Use this instead:
	info := sample.new_information('Sample information.')!
	println(info)
}
```

## Methods

```v
struct User {
	age int
}

fn (u User) can_register() bool {
	return u.age > 16
}

user := User{
	age: 10
}
println(user.can_register()) // "false"
user2 := User{
	age: 20
}
println(user2.can_register()) // "true"
```

V doesn't have classes, but you can define methods on types.
A method is a function with a special receiver argument.
The receiver appears in its own argument list between the `fn` keyword and the method name.
Methods must be in the same module as the receiver type.

In this example, the `can_register` method has a receiver of type `User` named `u`.
The convention is not to use receiver names like `self` or `this`,
but a short, preferably one letter long, name.

## Embedded structs

V support embedded structs .

```v
struct Size {
mut:
	width  int
	height int
}

fn (s &Size) area() int {
	return s.width * s.height
}

struct Button {
	Size
	title string
}
```

With embedding, the struct `Button` will automatically have get all the fields and methods from
the struct `Size`, which allows you to do:

```v oksyntax
mut button := Button{
	title: 'Click me'
	height: 2
}

button.width = 3
assert button.area() == 6
assert button.Size.area() == 6
print(button)
```

output :
```
Button{
    Size: Size{
        width: 3
        height: 2
    }
    title: 'Click me'
}
```

Unlike inheritance, you cannot type cast between structs and embedded structs
(the embedding struct can also has its own fields, and it can also embed multiple structs).

If you need to access embedded structs directly, use an explicit reference like `button.Size`.

Conceptually, embedded structs are similar to [mixins](https://en.wikipedia.org/wiki/Mixin)
in OOP, *NOT* base classes.

You can also initialize an embedded struct:

```v oksyntax
mut button := Button{
	Size: Size{
		width: 3
		height: 2
	}
}
```

or assign values:

```v oksyntax
button.Size = Size{
	width: 4
	height: 5
}
```

If multiple embedded structs have methods or fields with the same name, or if methods or fields
with the same name are defined in the struct, you can call methods or assign to variables in
the embedded struct like `button.Size.area()`.
When you do not specify the embedded struct name, the method of the outermost struct will be
targeted.