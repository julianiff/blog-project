---
layout: project.11ty.cjs
title: Project ⌲ Import Map
tags: project
name: Projects
pageTitle: Javascript Tipps
lead: Best practises and Tipps for Javascript that are worth remembering.
navigation: Javascript Tipps
---

<iff-icon-text icon="end" href="https://github.com/airbnb/javascript" target="_blank"><iff-text styling="label" slot="text">Airbnb StyleGuide</iff-text></iff-icon-text>
<iff-icon-text icon="end" href="https://github.com/bendc/frontend-guidelines" target="_blank"><iff-text styling="label" slot="text">Frontend Guidelines</iff-text></iff-icon-text>
<iff-icon-text icon="end" href="https://eloquentjavascript.net/" target="_blank"><iff-text styling="label" slot="text">Eloquent Javascript</iff-text></iff-icon-text>

<iff-text>How to Iterate over Objects</hls-text>

```js
// Objects aren't iterable by default
// Add iterator symbol and return a generator object.
const person = {
  name: "Arnold Iterator",
  age: 55
  *[Symbol.iterator]() { yield* Object.values(this) }
}


[...person] // ["Arnold Iterator", 55]
```

<iff-text>Use Array.from for converting array-like objects to an array</hls-text>

```js
const arrLike = {0: 'foo', 1: 'bar', 2: 'baz', length: 3};

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

<iff-text>Use object destructuring when acessing and using multiple properties</hls-text>

```js
// good
function getFullName(user) {
  const {firstName, lastName} = user;
  return `${firstName} ${lastName}`;
}

// best -> See how the Parameter is deconstructed
function getFullName({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}
```

<iff-text>Always put default parameters last</hls-text>

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

<iff-text>Conditional statements follow these simple rules</hls-text>

```js
Objects evaluate to true
Undefined evaluates to false
Null evaluates to false
Booleans evaluate to the value of the boolean
Numbers evaluate to false if +0, -0, or NaN, otherwise true
Strings evaluate to false if an empty string '', otherwise true
```

<iff-text>Ternaries should not be nested and generally be single line expressions.</hls-text>

```js
// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

<iff-text>Avoid unneeded ternary statements.</hls-text>

```js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

<iff-text>Type Casting with String, Number and Boolean</hls-text>

```js
// good
const totalScore = String(this.reviewScore);
// good
const val = Number(inputValue);
// good
const hasAge = Boolean(age);
// best
const hasAge = !!age;
```

<iff-text>Naming Convention, base filename should exactly atch the default export</hls-text>

```js
// good
// PascalCase export/import/filename
import CheckBox from './CheckBox';
// camelCase export/import/filename
import fortyTwo from './fortyTwo';
// camelCase export/import/directory name/implicit "index"
import insideDirectory from './insideDirectory';
```

<iff-text>Acronyms and initialisms all uppercased or lowercased</hls-text>

```js
// bad
const HttpRequests = [
  // ...
];
// good
const HTTPRequests = [
  // ...
];
// best
import TextMessageContainer from './containers/TextMessageContainer';

// best
const requests = [
  // ...
];
```

<iff-text>Uppercase if const and it can be trusted as a developer</hls-text>

```js
// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value',
};

// good
export const MAPPING = {
  key: 'value',
};
```

<iff-text>Do not use accessor function in Javascript, because they are hareder to test, maintian and reson about.</hls-text>

```js
// bad
class Dragon {
  get age() {
    // ...
  }

  set age(value) {
    // ...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}
```

<iff-text>When checking for a boolean use isVal() or hasVal()</hls-text>

```js
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```

<iff-text>When handling Events always pass Objects as data Payload.</hls-text>

```js
// good
CustomEvent('listingUpdated', {listingID: listing.id});

// ...

ListeningOn('listingUpdated', (e, data) => {
  // do something with data.listingID
});
```

<iff-text>Always write tests that are.</hls-text>

```js
Strive to write many small pure functions without mutions.
Be cautious about Stubs and Mocks. These can make tests more brittle.
When fixing a bug, write a regression test.
A fixed bug without a regression test is almost certainly going to break again.
```

<iff-text>Use HTML semantics to describe the content.</hls-text>

```js
<!-- bad -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- good -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

<iff-text>Composition, avoid nested function calls. use Compoition</hls-text>

```js
const plus1 = (a) => a + 1;
const mult2 = (a) => a * 2;

// bad
mult2(plus1(5)); // => 12

// good
const pipeline =
  (...funcs) =>
  (val) =>
    funcs.reduce((a, b) => b(a), val);
const addThenMult = pipeline(plus1, mult2);
addThenMult(5); // => 12
```

<iff-text>Dependencies, dont use Thrid-party code when its not needed.</hls-text>

```js
// bad
var _ = require("underscore");
_.compact(["foo", 0]));
_.unique(["foo", "foo"]);
_.union(["foo"], ["bar"], ["foo"]);

// good
const compact = arr => arr.filter(el => el);
const unique = arr => [...new Set(arr)];
const union = (...arr) => unique([].concat(...arr));

compact(["foo", 0]);
unique(["foo", "foo"]);
union(["foo"], ["bar"], ["foo"]);
```

<iff-text>Object Iteration, dont use for...in loops where possible</hls-text>

```js
const shared = {foo: 'foo'};
const obj = Object.create(shared, {
  bar: {
    value: 'bar',
    enumerable: true,
  },
});

// good
Object.keys(obj).forEach((prop) => console.log(prop));
```

<iff-text>Javascript memoization</hls-text>

```js
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
// Now the function is memoized and speeds up the execution.
// with a simple object a cache can be built
addFunction(15);
addFunction(12); // it would take the data from the cache.
```
