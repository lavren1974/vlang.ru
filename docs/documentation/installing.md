---
sidebar_position: 1
---

# Установка V из исходников
Лучший способ получить самую последнюю версию V — установить ее из исходного кода. Это легко и занимает всего несколько секунд:

```bash
git clone https://github.com/vlang/v
cd v
make
# HINT: Using Windows?: run make.bat in the cmd.exe shell
```
For more details, see the [Installing V](https://github.com/vlang/v/blob/master/README.md#installing-v-from-source)
section in the README.md.

## Upgrading V to latest version
If V is already installed on a machine, it can be upgraded to its latest version
by using the V's built-in self-updater.
To do so, run the command `v up`.

<!--
NB: there are several special keywords, which you can put after the code fences for v:
compile, cgen, live, ignore, failcompile, okfmt, oksyntax, badsyntax, wip, nofmt
For more details, do: `v check-md`
-->