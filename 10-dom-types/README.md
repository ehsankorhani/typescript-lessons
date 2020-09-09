# DOM and HTMLElements

With TypeScript we can work with HTML and Dom the same way as we can do with JS but with some enhancements.

Dom elements can be queried just as JS:

```ts
const anchor = document.querySelector('a');
```

However if you hover over ```anchor``` the IDE will show it as: ```HTMLAnchorElement```.
Because we are directly referencing an ```a``` tag.

However, if we try to access a an attribute of this element, we might get a warning of: *Object is possibly 'null'.

```ts
console.log(anchor.href);
```

TO avoid this, we either have to in some way check for null values:

```ts
if (anchor) {
    //...
}
```

Or use the ```!``` mark after querying the element:

```ts
const anchor = document.querySelector('a')!;
```

We only do this if we are sure of the existence of the element.

Now we know that by referencing an HTML tag directly we will get that type:

```ts
const form = document.querySelector('form')!;
// HTMLFormElement
```

But if we query this element by a class for example:

```ts
const form = document.querySelector('.new-item-form')!;
```

We will get ```Element``` as the type of this variable. The TypeScript cannot figure out the type with just a class.

SO, we can cast this variable to a particular type that we know and want:

```ts
const form = document.querySelector('.new-item-form') as HTMLFormElement;
```

*Note that we don't to use ```!``` anymore.

