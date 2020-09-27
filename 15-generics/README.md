# Generics

With Generics we can write dynamic and reusable blocks of code for different types.

Imagine the example below which accepts any object (with lower "0") type and adds a random Id to that:

```ts
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}
```

We can use it like:

```ts
const myJeep = addUID({make: "Jeep", model: "Cherokee"})
let model = myJeep.model;
// Property 'model' does not exist on type '{ uid: number; }'.
```

because ```myJeep``` doesn't know which property it holds.

To address this we can convert the function, to a generic function:

```ts
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}
```

The above works.<br>
But now we can send any JavaScript type to this function. Not only an object.

```ts
const myJeep = addUID('hello kitty!');
```

What we can do is to define the type this can accept:

```ts
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}
```

So now the ```T``` should be a type that extends ```object``` (with lower case "o").

We can even be more specific and define what that ```object``` should hold:

```ts
const addUID = <T extends { make: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}
```

The above function only accepts an object that has property ```make```.

<br>

## Generics with Interfaces

Interfaces define how an object should look like.

In the code below we want to define the ```data``` type dynamically:

```ts
interface ICar {
    uid: number;
    make: string;
    data: '???'
}
```

We can do it we generics as:

```ts
interface ICar<T> {
    uid: number;
    make: string;
    data: T
}
```

Then we can define an object passing the required type for ```data```:

```ts
const myRanger: ICar<string> = {
    uid: 1,
    make: "Ford",
    data: "New"
}
```

or

```ts
const myRanger: ICar<number[]> = {
    uid: 1,
    make: "Ford",
    data: [1, 2, 3]
}
```