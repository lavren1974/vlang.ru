---
sidebar_position: 28
---

# Package management

```powershell
v [module option] [param]
```

###### module options:

```
   install           Install a module from VPM.
   remove            Remove a module that was installed from VPM.
   search            Search for a module from VPM.
   update            Update an installed module from VPM.
   upgrade           Upgrade all the outdated modules.
   list              List all installed modules.
   outdated          Show installed modules that need updates.
```

You can install modules already created by someone else with [VPM](https://vpm.vlang.io/):
```powershell
v install [module]
```
**Example:**
```powershell
v install ui
```

Modules can be installed directly from git or mercurial repositories.
```powershell
v install [--once] [--git|--hg] [url]
```
**Example:**
```powershell
v install --git https://github.com/vlang/markdown
```

Sometimes you may want to install the dependencies **ONLY** if those are not installed:

```
v install --once [module]
```

Removing a module with v:

```powershell
v remove [module]
```
**Example:**
```powershell
v remove ui
```

Updating an installed module from [VPM](https://vpm.vlang.io/):

```powershell
v update [module]
```
**Example:**
```powershell
v update ui
```

Or you can update all your modules:
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
Installed modules:
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

1. Put a `v.mod` file inside the toplevel folder of your module (if you
	created your module with the command `v new mymodule` or `v init` you already have a v.mod file).

	```sh
	v new mymodule
	Input your project description: My nice module.
	Input your project version: (0.0.0) 0.0.1
	Input your project license: (MIT)
	Initialising ...
	Complete!
	```

	Example `v.mod`:
	```v ignore
	Module {
		name: 'mymodule'
		description: 'My nice module.'
		version: '0.0.1'
		license: 'MIT'
		dependencies: []
	}
	```

	Minimal file structure:
	```
	v.mod
	mymodule.v
	```

	The name of your module should be used with the `module` directive
	at the top of all files in your module. For `mymodule.v`:
	```v
	module mymodule

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
5. Add your module to the public V module registry VPM:
	https://vpm.vlang.io/new

	You will have to login with your Github account to register the module.
	**Warning:** _Currently it is not possible to edit your entry after submitting.
	Check your module name and github url twice as this cannot be changed by you later._
6. The final module name is a combination of your github account and
	the module name you provided e.g. `mygithubname.mymodule`.

**Optional:** tag your V module with `vlang` and `vlang-module` on github.com
to allow for a better search experience.