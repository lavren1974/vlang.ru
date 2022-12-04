---
sidebar_position: 5
---

# Calling V from C

Since V can compile to C, calling V code from C is very easy, once you know how.

Use `v -o file.c your_file.v` to generate a C file, corresponding to the V code.

More details in [call_v_from_c example](https://github.com/vlang/v/blob/master/examples/call_v_from_c).

## Export to shared library

By default all V functions have the following naming scheme in C: `[module name]__[fn_name]`.

For example, `fn foo() {}` in module `bar` will result in `bar__foo()`.

To use a custom export name, use the `[export]` attribute:

```
[export: 'my_custom_c_name']
fn foo() {
}
```