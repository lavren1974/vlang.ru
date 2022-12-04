---
sidebar_position: 18
---

# Cross-platform shell scripts in V

V can be used as an alternative to Bash to write deployment scripts, build scripts, etc.

The advantage of using V for this, is the simplicity and predictability of the language, and
cross-platform support. "V scripts" run on Unix-like systems, as well as on Windows.

To use V's script mode, save your source file with the `.vsh` file extension.
It will make all functions in the `os` module global (so that you can use `mkdir()` instead
of `os.mkdir()`, for example).

V also knows to compile & run `.vsh` files immediately, so you do not need a separate
step to compile them. V will also recompile an executable, produced by a `.vsh` file,
*only when it is older than the .vsh source file*, i.e. runs after the first one, will
be faster, since there is no need for a re-compilation of a script, that has not been changed.

An example `deploy.vsh`:
```v oksyntax
#!/usr/bin/env -S v
// Note: the shebang line above, associates the .vsh file to V on Unix-like systems,
// so it can be run just by specifying the path to the .vsh file, once it's made
// executable, using `chmod +x deploy.vsh`, i.e. after that chmod command, you can
// run the .vsh script, by just typing its name/path like this: `./deploy.vsh`

// print command then execute it
fn sh(cmd string) {
	println('❯ $cmd')
	print(execute_or_exit(cmd).output)
}

// Remove if build/ exits, ignore any errors if it doesn't
rmdir_all('build') or {}

// Create build/, never fails as build/ does not exist
mkdir('build')?

// Move *.v files to build/
result := execute('mv *.v build/')
if result.exit_code != 0 {
	println(result.output)
}

sh('ls')

// Similar to:
// files := ls('.')?
// mut count := 0
// if files.len > 0 {
//     for file in files {
//         if file.ends_with('.v') {
//              mv(file, 'build/') or {
//                  println('err: $err')
//                  return
//              }
//         }
//         count++
//     }
// }
// if count == 0 {
//     println('No files')
// }
```

Now you can either compile this like a normal V program and get an executable you can deploy and run
anywhere:
`v deploy.vsh && ./deploy`

Or just run it more like a traditional Bash script:
`v run deploy.vsh`

On Unix-like platforms, the file can be run directly after making it executable using `chmod +x`:
`./deploy.vsh`

## Vsh scripts with no extension

Whilst V does normally not allow vsh scripts without the designated file extension, there is a way
to circumvent this rule and have a file with a fully custom name and shebang. Whilst this feature
exists it is only recommended for specific usecases like scripts that will be put in the path and
should **not** be used for things like build or deploy scripts. To access this feature start the
file with `#!/usr/bin/env -S v -raw-vsh-tmp-prefix tmp` where `tmp` is the prefix for
the built executable. This will run in crun mode so it will only rebuild if changes to the script
were made and keep the binary as `tmp.<scriptfilename>`. **Caution**: if this filename already
exists the file will be overriden. If you want to rebuild each time and not keep this binary instead
use `#!/usr/bin/env -S v -raw-vsh-tmp-prefix tmp run`.
