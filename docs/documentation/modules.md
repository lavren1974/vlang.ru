---
sidebar_position: 17
---

# Modules

Every file in the root of a folder is part of the same module.
Simple programs don't need to specify module name, in which case it defaults to 'main'.

## Create modules

V is a very modular language. Creating reusable modules is encouraged and is
quite easy to do.
To create a new module, create a directory with your module's name containing
.v files with code:

```shell
cd ~/code/modules
mkdir mymodule
vim mymodule/myfile.v
```
```v failcompile
// myfile.v
module mymodule

// To export a function we have to use `pub`
pub fn say_hi() {
	println('hello from mymodule!')
}
```

You can now use `mymodule` in your code:

```v failcompile
import mymodule

fn main() {
	mymodule.say_hi()
}
```

* Module names should be short, under 10 characters.
* Module names must use `snake_case`.
* Circular imports are not allowed.
* You can have as many .v files in a module as you want.
* You can create modules anywhere.
* All modules are compiled statically into a single executable.

## `init` functions

If you want a module to automatically call some setup/initialization code when it is imported,
you can use a module `init` function:

```v
fn init() {
	// your setup code here ...
}
```

The `init` function cannot be public - it will be called automatically. This feature is
particularly useful for initializing a C library.
