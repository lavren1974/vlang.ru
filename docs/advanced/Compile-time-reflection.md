---
sidebar_position: 11
---

# Compile-time reflection

Having built-in JSON support is nice, but V also allows you to create efficient
serializers for any data format. V has compile-time `if` and `for` constructs:

```v
struct User {
	name string
	age  int
}

fn main() {
	$for field in User.fields {
		$if field.typ is string {
			println('$field.name is of type string')
		}
	}
}

// Output:
// name is of type string
```

QQQ
<!-- See [`examples/compiletime/reflection.v`](/examples/compiletime/reflection.v) -->
QQQ

for a more complete example.