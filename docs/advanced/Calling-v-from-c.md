---
sidebar_position: 5
---

# Calling V from C

Since V can compile to C, calling V code from C is very easy.

By default all V functions have the following naming scheme in C: `[module name]__[fn_name]`.

For example, `fn foo() {}` in module `bar` will result in `bar__foo()`.

To use a custom export name, use the `[export]` attribute:

```
[export: 'my_custom_c_name']
fn foo() {
}
```