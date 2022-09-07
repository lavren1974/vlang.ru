---
sidebar_position: 27
---

# Tools

## v fmt

You don't need to worry about formatting your code or setting style guidelines.
`v fmt` takes care of that:

```shell
v fmt file.v
```

It's recommended to set up your editor, so that `v fmt -w` runs on every save.
A vfmt run is usually pretty cheap (takes <30ms).

Always run `v fmt -w file.v` before pushing your code.
## v shader

You can use GPU shaders with V graphical apps. You write your shaders in an
[annotated GLSL dialect](https://github.com/vlang/v/blob/1d8ece7/examples/sokol/02_cubes_glsl/cube_glsl.glsl)
and use `v shader` to compile them for all supported target platforms.

```shell
v shader /path/to/project/dir/or/file.v
```

Currently you need to [include a header and declare a glue function](https://github.com/vlang/v/blob/c14c324/examples/sokol/02_cubes_glsl/cube_glsl.v#L43-L46) before
using the shader in your code.

## Profiling

V has good support for profiling your programs: `v -profile profile.txt run file.v`
That will produce a profile.txt file, which you can then analyze.

The generated profile.txt file will have lines with 4 columns:
a) how many times a function was called
b) how much time in total a function took (in ms)
c) how much time on average, a call to a function took (in ns)
d) the name of the v function

You can sort on column 3 (average time per function) using:
`sort -n -k3 profile.txt|tail`

You can also use stopwatches to measure just portions of your code explicitly:
```v
import time

fn main() {
	sw := time.new_stopwatch()
	println('Hello world')
	println('Greeting the world took: ${sw.elapsed().nanoseconds()}ns')
}
```