---
sidebar_position: 16
---

# Builtin functions

Some functions are builtin like `println`. Here is the complete list:

```v ignore
fn print(s string) // prints anything on stdout
fn println(s string) // prints anything and a newline on stdout

fn eprint(s string) // same as print(), but uses stderr
fn eprintln(s string) // same as println(), but uses stderr

fn exit(code int) // terminates the program with a custom error code
fn panic(s string) // prints a message and backtraces on stderr, and terminates the program with error code 1
fn print_backtrace() // prints backtraces on stderr
```
Note: Although the `print` functions take a string, V accepts other printable types too.
See below for details.

There is also a special built-in function called [`dump`](#dumping-expressions-at-runtime).

## println

`println` is a simple yet powerful builtin function, that can print anything:
strings, numbers, arrays, maps, structs.

```v
struct User {
	name string
	age  int
}

println(1) // "1"
println('hi') // "hi"
println([1, 2, 3]) // "[1, 2, 3]"
println(User{ name: 'Bob', age: 20 }) // "User{name:'Bob', age:20}"
```

See also [Array methods](#array-methods).

<a id='custom-print-of-types' />

## Printing custom types

If you want to define a custom print value for your type, simply define a
`str() string` method:

```v
struct Color {
	r int
	g int
	b int
}

pub fn (c Color) str() string {
	return '{$c.r, $c.g, $c.b}'
}

red := Color{
	r: 255
	g: 0
	b: 0
}
println(red)
```
## Dumping expressions at runtime

You can dump/trace the value of any V expression using `dump(expr)`.
For example, save this code sample as `factorial.v`, then run it with
`v run factorial.v`:
```v
fn factorial(n u32) u32 {
	if dump(n <= 1) {
		return dump(1)
	}
	return dump(n * factorial(n - 1))
}

fn main() {
	println(factorial(5))
}
```
You will get:
```
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: true
[factorial.v:3] 1: 1
[factorial.v:5] n * factorial(n - 1): 2
[factorial.v:5] n * factorial(n - 1): 6
[factorial.v:5] n * factorial(n - 1): 24
[factorial.v:5] n * factorial(n - 1): 120
120
```
Note that `dump(expr)` will trace both the source location,
the expression itself, and the expression value.