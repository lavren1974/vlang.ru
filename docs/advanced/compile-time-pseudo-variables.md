---
sidebar_position: 9
---

# Compile time pseudo variables

V also gives your code access to a set of pseudo string variables,
that are substituted at compile time:

- `@FN` => replaced with the name of the current V function
- `@METHOD` => replaced with ReceiverType.MethodName
- `@MOD` => replaced with the name of the current V module
- `@STRUCT` => replaced with the name of the current V struct
- `@FILE` => replaced with the path of the V source file
- `@LINE` => replaced with the V line number where it appears (as a string).
- `@COLUMN` => replaced with the column where it appears (as a string).
- `@VEXE` => replaced with the path to the V compiler
- `@VEXEROOT`  => will be substituted with the *folder*,
   where the V executable is (as a string).
- `@VHASH`  => replaced with the shortened commit hash of the V compiler (as a string).
- `@VMOD_FILE` => replaced with the contents of the nearest v.mod file (as a string).
- `@VMODROOT` => will be substituted with the *folder*,
   where the nearest v.mod file is (as a string).

That allows you to do the following example, useful while debugging/logging/tracing your code:
```v
eprintln('file: ' + @FILE + ' | line: ' + @LINE + ' | fn: ' + @MOD + '.' + @FN)
```

Another example, is if you want to embed the version/name from v.mod *inside* your executable:
```v ignore
import v.vmod
vm := vmod.decode( @VMOD_FILE ) or { panic(err) }
eprintln('$vm.name $vm.version\n $vm.description')
```