# Compile TypeScript to plain JavaScript

TypeScript supports JavaScript syntax.

Create a simple HTML page. Add a script tag that references the ```main.js``` file. This file does not exist yet.

Create a ```main.ts``` file and add these simple JS code inside:

```ts
const make = 'Porsche';

console.log(make);

const carRecords = document.querySelectorAll('car-record');

carRecords.forEach(car => {
  console.log(car);
});
```

In your Terminal, browse to ```app``` folder (where the TypeScript file resides).<br>
Compile the file with ```tsc``` command:

```bash
$ tsc main.ts main.js
# to compile to same file name
$ tsc main.ts
```

The output will be:

```js
var make = 'Porsche';
console.log(make);
var carRecords = document.querySelectorAll('car-record');
carRecords.forEach(function (car) {
    console.log(car);
});
```

Notice the ```var``` instead of the ```const```.


Open the ```index.html``` with LiveServer and view the result.

<br>

### Add Watcher

To be able to compile changes in TypeScript file to the JS file automatically:

```bash
$ tsc main.ts -w
```