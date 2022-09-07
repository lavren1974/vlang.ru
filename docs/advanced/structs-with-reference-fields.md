---
sidebar_position: 2
---

# Structs with reference fields

Structs with references require explicitly setting the initial value to a
reference value unless the struct already defines its own initial value.

Zero-value references, or nil pointers, will **NOT** be supported in the future,
for now data structures such as Linked Lists or Binary Trees that rely on reference
fields that can use the value `0`, understanding that it is unsafe, and that it can
cause a panic.

```v
struct Node {
	a &Node
	b &Node = 0 // Auto-initialized to nil, use with caution!
}

// Reference fields must be initialized unless an initial value is declared.
// Zero (0) is OK but use with caution, it's a nil pointer.
foo := Node{
	a: 0
}
bar := Node{
	a: &foo
}
baz := Node{
	a: 0
	b: 0
}
qux := Node{
	a: &foo
	b: &bar
}
println(baz)
println(qux)
```