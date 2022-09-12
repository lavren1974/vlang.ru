---
sidebar_position: 11
---

# Performance tuning

The generated C code is usually fast enough, when you compile your code
with `-prod`. There are some situations though, where you may want to give
additional hints to the compiler, so that it can further optimize some
blocks of code.

NB: These are *rarely* needed, and should not be used, unless you
*profile your code*, and then see that there are significant benefits for them.
To cite gcc's documentation: "programmers are notoriously bad at predicting
how their programs actually perform".

`[inline]` - you can tag functions with `[inline]`, so the C compiler will
try to inline them, which in some cases, may be beneficial for performance,
but may impact the size of your executable.

`[direct_array_access]` - in functions tagged with `[direct_array_access]`
the compiler will translate array operations directly into C array operations -
omitting bounds checking. This may save a lot of time in a function that iterates
over an array but at the cost of making the function unsafe - unless
the boundaries will be checked by the user.

`if _likely_(bool expression) {` this hints the C compiler, that the passed
boolean expression is very likely to be true, so it can generate assembly
code, with less chance of branch misprediction. In the JS backend,
that does nothing.

`if _unlikely_(bool expression) {` similar to `_likely_(x)`, but it hints that
the boolean expression is highly improbable. In the JS backend, that does nothing.

<!-- <a id='Reflection via codegen'> -->