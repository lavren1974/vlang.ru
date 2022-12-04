---
sidebar_position: 22
---

# JSON

Because of the ubiquitous nature of JSON, support for it is built directly into V.

V generates code for JSON encoding and decoding.
No runtime reflection is used. This results in much better performance.

## Decoding JSON

```v
import json

struct Foo {
	x int
}

struct User {
	// Adding a [required] attribute will make decoding fail, if that
	// field is not present in the input.
	// If a field is not [required], but is missing, it will be assumed
	// to have its default value, like 0 for numbers, or '' for strings,
	// and decoding will not fail.
	name string [required]
	age  int
	// Use the `skip` attribute to skip certain fields
	foo Foo [skip]
	// If the field name is different in JSON, it can be specified
	last_name string [json: lastName]
}

data := '{ "name": "Frodo", "lastName": "Baggins", "age": 25 }'
user := json.decode(User, data) or {
	eprintln('Failed to decode json, error: $err')
	return
}
println(user.name)
println(user.last_name)
println(user.age)
// You can also decode JSON arrays:
sfoos := '[{"x":123},{"x":456}]'
foos := json.decode([]Foo, sfoos)!
println(foos[0].x)
println(foos[1].x)
```

The `json.decode` function takes two arguments:
the first is the type into which the JSON value should be decoded and
the second is a string containing the JSON data.

## Encoding JSON

```v
import json

struct User {
	name  string
	score i64
}

mut data := map[string]int{}
user := &User{
	name: 'Pierre'
	score: 1024
}

data['x'] = 42
data['y'] = 360

println(json.encode(data)) // {"x":42,"y":360}
println(json.encode(user)) // {"name":"Pierre","score":1024}
```