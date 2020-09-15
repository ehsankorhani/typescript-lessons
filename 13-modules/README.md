# Modules

For larger application we should always split our application into smaller modules, where each one is responsible for a particular task.

In TypeScript the best way to do that is by using **ES6** module system. TypeScript does not compile ES6 modules to a version of JS that older browser supports. But all major modern browsers support is this feature.  

In order for the browser to support the module system we should add ```type="module"``` attribute to script tag:

```html
<script type="module" src="app.js"></script>
```

In addition, in ```tsconfig.json``` file change the module system and target ```es6``` because we only support modern browsers.

```json
//"target": "es5",
"target": "es6",
//"module": "commonjs", 
"module": "es2015",  
```

<br>

## Export module

Move the class definition to a new file. Just add an ```export``` keyword before the class definition:

```ts
// car.ts

export class Car {
    // ...
}
```

<br>

## Import module

Import the ```Car``` module at the top of the script that will need to access this module:

```ts
import { Car } from './models/car.js'

const myRanger = new Car('Ford', 'Ranger', 12200);
myRanger.odometer = 2500;
```

Note that we are referencing a ```.js``` file, because ultimately we need to use to compiled JS not the TypeScript file.

<br>

## Support older browsers and Single file compilation

Our application compiles TS files to separate JS files. To compile to a single file and an older version of JS we can use tools such as *Webpack*.