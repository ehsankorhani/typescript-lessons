# TypeScript Config

We saw that compiling a TS file will create a JS file in the same directory.

More complex applications require a separate folder structure. A common pattern is to have an structure like this:

```
public
----index.html
----styles.css
----app.js
----controller.js
src
----app.ts
----controller.ts
```

We would like the compiler to create every compiled file in the public folder. To do this we need to create the ```tsconfig.json``` file.

To do that, in the root folder write:

```bash
tsc --init
```

```tsconfig``` contains many config options. In this case the ones we are interested in are:

```json
"outDir": "./", /* Redirect output structure to the directory. */
"rootDir": "./", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
```

We can these two configs to:

```json
"outDir": "./public",
"rootDir": "./src", 
```

This will copy every compiled file to ```./public``` folder but it's not enough to only take files from ```./src``` folder. For this we also need to set additional config outside of main ```compilerOptions``` property:

```json
"include": ["src"]
```

Now a simple ```tsc``` command or ```tsc -w``` will compile all files from *src* directory to *public*.