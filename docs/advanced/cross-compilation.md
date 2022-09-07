---
sidebar_position: 16
---

# Cross compilation

To cross compile your project simply run

```shell
v -os windows .
```

or

```shell
v -os linux .
```
NB: Cross-compiling a windows binary on a linux machine requires the GNU C compiler for
MinGW-w64 (targeting Win64) to first be installed.

```shell
sudo apt-get install gcc-mingw-w64-x86-64
```
(Cross compiling for macOS is temporarily not possible.)

If you don't have any C dependencies, that's all you need to do. This works even
when compiling GUI apps using the `ui` module or graphical apps using `gg`.

You will need to install Clang, LLD linker, and download a zip file with
libraries and include files for Windows and Linux. V will provide you with a link.