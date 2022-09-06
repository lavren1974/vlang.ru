---
sidebar_position: 3
---

# sizeof and __offsetof

* `sizeof(Type)` gives the size of a type in bytes.
* `__offsetof(Struct, field_name)` gives the offset in bytes of a struct field.

```v
struct Foo {
	a int
	b int
}

assert sizeof(Foo) == 8
assert __offsetof(Foo, a) == 0
assert __offsetof(Foo, b) == 4
```