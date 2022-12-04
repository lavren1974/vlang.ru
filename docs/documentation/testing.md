---
sidebar_position: 23
---

# Testing

## Asserts

```v
fn foo(mut v []int) {
	v[0] = 1
}

mut v := [20]
foo(mut v)
assert v[0] < 4
```
An `assert` statement checks that its expression evaluates to `true`. If an assert fails,
the program will usually abort. Asserts should only be used to detect programming errors. When an
assert fails it is reported to *stderr*, and the values on each side of a comparison operator
(such as `<`, `==`) will be printed when possible. This is useful to easily find an
unexpected value. Assert statements can be used in any function, not just test ones,
which is handy when developing new functionality, to keep your invariants in check.

Note: all `assert` statements are *removed*, when you compile your program with the `-prod` flag.

## Asserts with an extra message

This form of the `assert` statement, will print the extra message when it fails. Note, that
you can use any string expression there - string literals, functions returning a string,
strings that interpolate variables, etc.

```v
fn test_assertion_with_extra_message_failure() {
	for i in 0 .. 100 {
		assert i * 2 - 45 < 75 + 10, 'assertion failed for i: $i'
	}
}
```
## Asserts that do not abort your program
When initially prototyping functionality and tests, it is sometimes desirable to
have asserts, that do not stop the program, but just print their failures. That can
be achieved by tagging your assert containing functions with an `[assert_continues]`
tag, for example running this program:
```v
[assert_continues]
fn abc(ii int) {
	assert ii == 2
}
for i in 0 .. 4 {
	abc(i)
}
```
... will produce this output:
```
assert_continues_example.v:3: FAIL: fn main.abc: assert ii == 2
   left value: ii = 0
   right value: 2
assert_continues_example.v:3: FAIL: fn main.abc: assert ii == 2
   left value: ii = 1
  right value: 2
assert_continues_example.v:3: FAIL: fn main.abc: assert ii == 2
   left value: ii = 3
  right value: 2
```			   

Note: V also supports a command line flag `-assert continues`, which will change the
behaviour of all asserts globally, as if you had tagged every function with `[assert_continues]`.

## Test files

```v
// hello.v
module main

fn hello() string {
	return 'Hello world'
}

fn main() {
	println(hello())
}
```

```v failcompile
// hello_test.v
module main

fn test_hello() {
	assert hello() == 'Hello world'
}
```
To run the test above, use `v hello_test.v`. This will check that the function `hello` is
producing the correct output. V executes all test functions in the file.

* All test functions have to be inside a test file whose name ends in `_test.v`.
* Test function names must begin with `test_` to mark them for execution.
* Normal functions can also be defined in test files, and should be called manually. Other
  symbols can also be defined in test files e.g. types.
* There are two kinds of tests: external and internal.
* Internal tests must *declare* their module, just like all other .v
files from the same module. Internal tests can even call private functions in
the same module.
* External tests must *import* the modules which they test. They do not
have access to the private functions/types of the modules. They can test only
the external/public API that a module provides.

In the example above, `test_hello` is an internal test, that can call
the private function `hello()` because `hello_test.v` has `module main`,
just like `hello.v`, i.e. both are part of the same module. Note also that
since `module main` is a regular module like the others, internal tests can
be used to test private functions in your main program .v files too.

You can also define these special test functions in a test file:
* `testsuite_begin` which will be run *before* all other test functions.
* `testsuite_end` which will be run *after* all other test functions.

If a test function has an error return type, any propagated errors will fail the test:

```v
import strconv

fn test_atoi() ? {
	assert strconv.atoi('1')? == 1
	assert strconv.atoi('one')? == 1 // test will fail
}
```
### Running tests

To run test functions in an individual test file, use `v foo_test.v`.

To test an entire module, use `v test mymodule`. You can also use `v test .` to test
everything inside your current folder (and subfolders). You can pass the `-stats`
option to see more details about the individual tests run.

You can put additional test data, including .v source files in a folder, named
`testdata`, right next to your _test.v files. V's test framework will *ignore*
such folders, while scanning for tests to run. This is useful, if you want to
put .v files with invalid V source code, or other tests, including known
failing ones, that should be run in a specific way/options by a parent _test.v
file.

NB: the path to the V compiler, is available through @VEXE, so a _test.v
file, can easily run *other* test files like this:
```v oksyntax
import os

fn test_subtest() {
	res := os.execute('${os.quoted_path(@VEXE)} other_test.v')
	assert res.exit_code == 1
	assert res.output.contains('other_test.v does not exist')
}
```
