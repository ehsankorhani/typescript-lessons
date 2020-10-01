# Tuples

Tuples are data structures like Arrays but the data type in each position is fixed once it's initialized.

So if we define a tuple as:

```ts
let engineSpec: [string, number, boolean] = ['Turbo', 8, true];
```

The data in this tuple can change but not the data type.

This is invalid:

```ts
engineSpec[0] = 8;
```

But we can do these:

```ts
engineSpec[0] = 'Compressor';
engineSpec[1] = 4;
```

This is useful when we want to create arrays of defined set of values (i.e. student record).

For example if we want to ```spread``` an array value into an object with certain a interface, we will get an error from the compiler because it doesn't know the exact type:

```ts
const type = document.querySelector('#type') as HTMLSelectElement
const detail = document.querySelector('#detail') as HTMLSelectElement

let values = [type.value, detail.value];

let doc: IFormatter;

doc = new Car(...values)
```

Tuples will solve this by:

```ts
let values: [number, string];
values = [type.value, detail.value];
```