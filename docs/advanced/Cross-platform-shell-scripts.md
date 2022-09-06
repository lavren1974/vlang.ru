---
sidebar_position: 17
---

# Cross-platform shell scripts in V

V can be used as an alternative to Bash to write deployment scripts, build scripts, etc.

The advantage of using V for this is the simplicity and predictability of the language, and
cross-platform support. "V scripts" run on Unix-like systems as well as on Windows.

Use the `.vsh` file extension. It will make all functions in the `os`
module global (so that you can use `mkdir()` instead of `os.mkdir()`, for example).

An example `deploy.vsh`:
```v wip
#!/usr/bin/env -S v run
// The shebang above associates the file to V on Unix-like systems,
// so it can be run just by specifying the path to the file
// once it's made executable using `chmod +x`.

// print command then execute it
fn sh(cmd string){
  println("❯ $cmd")
  print(execute_or_exit(cmd).output)
}

// Remove if build/ exits, ignore any errors if it doesn't
rmdir_all('build') or { }

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