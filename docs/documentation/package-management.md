---
sidebar_position: 28
---

# Package management

A V *module* is a single folder with .v files inside. A V *package* can
contain one or more V modules. A V *package* should have a `v.mod` file
at its top folder, describing the contents of the package.

V packages are installed normally in your `~/.vmodules` folder. That 
location can be overriden by setting the env variable `VMODULES`.

## Package commands

You can use the V frontend to do package operations, just like you can
use it for compiling code, formatting code, vetting code etc.

```powershell
v [package_command] [param]
```

where a package command can be one of:

```
   install           Install a package from VPM.
   remove            Remove a package that was installed from VPM.
   search            Search for a package from VPM.
   update            Update an installed package from VPM.
   upgrade           Upgrade all the outdated packages.
   list              List all installed packages.
   outdated          Show installed packages that need updates.
```

You can install packages already created by someone else with [VPM](https://vpm.vlang.io/):
```powershell
v install [package]
```
**Example:**
```powershell
v install ui
```

Packages can be installed directly from git or mercurial repositories.
```powershell
v install [--once] [--git|--hg] [url]
```
**Example:**
```powershell
v install --git https://github.com/vlang/markdown
```

Sometimes you may want to install the dependencies **ONLY** if those are not installed:

```
v install --once [package]
```

Removing a package with v:

```powershell
v remove [package]
```
**Example:**
```powershell
v remove ui
```

Updating an installed package from [VPM](https://vpm.vlang.io/):

```powershell
v update [package]
```
**Example:**
```powershell
v update ui
```

Or you can update all your packages:
```powershell
v update
```

To see all the modules you have installed, you can use:

```powershell
v list
```
**Example:**
```powershell
> v list
Installed packages:
  markdown
  ui
```

To see all the modules that need updates:
```powershell
v outdated
```
**Example:**
```powershell
> v outdated
Modules are up to date.
```

## Publish package

1. Put a `v.mod` file inside the toplevel folder of your package (if you
	created your package with the command `v new mypackage` or `v init` 
	you already have a `v.mod` file).

	```sh
	v new mypackage
	Input your project description: My nice package.
	Input your project version: (0.0.0) 0.0.1
	Input your project license: (MIT)
	Initialising ...
	Complete!
	```

	Example `v.mod`:
	```v ignore
	Module {
		name: 'mypackage'
		description: 'My nice package.'
		version: '0.0.1'
		license: 'MIT'
		dependencies: []
	}
	```

	Minimal file structure:
	```
	v.mod
	mypackage.v
	```

	The name of your module should be used with the `module` directive
	at the top of all files in your module. For `mymodule.v`:
	```v
	module mypackage

	pub fn hello_world() {
		println('Hello World!')
	}
	```

2. Create a git repository in the folder with the `v.mod` file
	(this is not required if you used `v new` or `v init`):
	```sh
	git init
	git add .
	git commit -m "INIT"
	````

3. Create a public repository on github.com.
4. Connect your local repository to the remote repository and push the changes.
5. Add your package to the public V package registry VPM:
	https://vpm.vlang.io/new

	You will have to login with your Github account to register the package.
	**Warning:** _Currently it is not possible to edit your entry after submitting.
	Check your package name and github url twice as this cannot be changed by you later._
6. The final package name is a combination of your github account and
	the package name you provided e.g. `mygithubname.mypackage`.

**Optional:** tag your V package with `vlang` and `vlang-package` on github.com
to allow for a better search experience.