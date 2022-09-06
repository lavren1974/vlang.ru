---
sidebar_position: 8
---

# Debugging

## C Backend binaries (Default)

To debug issues in the generated binary (flag: `-b c`), you can pass these flags:

- `-g` - produces a less optimized executable with more debug information in it.
    V will enforce line numbers from the .v files in the stacktraces, that the
    executable will produce on panic. It is usually better to pass -g, unless
    you are writing low level code, in which case use the next option `-cg`.
- `-cg` - produces a less optimized executable with more debug information in it.
	The executable will use C source line numbers in this case. It is frequently
    used in combination with `-keepc`, so that you can inspect the generated
    C program in case of panic, or so that your debugger (`gdb`, `lldb` etc.)
    can show you the generated C source code.
- `-showcc` - prints the C command that is used to build the program.
- `-show-c-output` - prints the output, that your C compiler produced
    while compiling your program.
- `-keepc` - do not delete the generated C source code file after a successful
    compilation. Also keep using the same file path, so it is more stable,
    and easier to keep opened in an editor/IDE.

For best debugging experience if you are writing a low level wrapper for an existing
C library, you can pass several of these flags at the same time:
`v -keepc -cg -showcc yourprogram.v`, then just run your debugger (gdb/lldb) or IDE
on the produced executable `yourprogram`.

If you just want to inspect the generated C code,
without further compilation, you can also use the `-o` flag (e.g. `-o file.c`).
This will make V produce the `file.c` then stop.

If you want to see the generated C source code for *just* a single C function,
for example `main`, you can use: `-printfn main -o file.c`.

To debug the V executable itself you need to compile from src with `./v -g -o v cmd/v`.

You can debug tests with for example `v -g -keepc prog_test.v`. The `-keepc` flag is needed,
so that the executable is not deleted, after it was created and ran.

To see a detailed list of all flags that V supports,
use `v help`, `v help build` and `v help build-c`.

**Commandline Debugging**

1. compile your binary with debugging info `v -g hello.v`
2. debug with [lldb](https://lldb.llvm.org) or [GDB](https://www.gnu.org/software/gdb/) e.g. `lldb hello`

[Troubleshooting (debugging) executables created with V in GDB](https://github.com/vlang/v/wiki/Troubleshooting-(debugging)-executables-created-with-V-in-GDB)

**Visual debugging Setup:**
QQQ
<!-- * [Visual Studio Code](vscode.md) -->
QQQ
## Native Backend binaries

Currently there is no debugging support for binaries, created by the
native backend (flag: `-b native`).

## Javascript Backend

To debug the generated Javascript output you can activate source maps:
`v -b js -sourcemap hello.v -o hello.js`

For all supported options check the latest help:
`v help build-js`
