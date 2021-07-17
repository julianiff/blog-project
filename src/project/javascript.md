---
layout: project.11ty.cjs
title: Project ⌲ Import Map
tags: project
name: Projects
description: Javascript Tipps
---

<iff-title level="2">Javascript Tipps</hls-title>
<iff-title level="4">Best practises for Javascript from Airbnb github that i found interesting.</hls-title>

<iff-text>Use Array.from for converting array-linke object to an array</hls-text>

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
