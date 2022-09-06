---
sidebar_position: 19
---

# Custom error types

V gives you the ability to define custom error types through the `IError` interface.
The interface requires two methods: `msg() string` and `code() int`. Every type that
implements these methods can be used as an error.

When defining a custom error type it is recommended to embed the builtin `Error` default
implementation. This provides an empty default implementation for both required methods,
so you only have to implement what you really need, and may provide additional utility
functions in the future.

```v
struct PathError {
	Error
	path string
}

fn (err PathError) msg() string {
	return 'Failed to open path: $err.path'
}

fn try_open(path string) ? {
	return IError(PathError{
		path: path
	})
}

fn main() {
	try_open('/tmp') or { panic(err) }
}
```