---
layout: project.11ty.cjs
title: Project ⌲ Design System
tags: project
name: Projects
description: Design System
---

<iff-title level="2">Design System</hls-title>
<iff-title level="4">Incremental improvements with reusable Components, easy application integration and Component Delivery Systems.</hls-title>

<iff-icon-text icon="end" href="https://github.com/julianiff/design-system" target="_blank"><iff-text styling="label" slot="text">Design System</iff-text></iff-icon-text>

<iff-title level="3">Reusable Components</hls-title>
<iff-text>At its core, a design system offers reusable components for consumer systems. A known mental model to guide the creation of design systems is the concept of atomic design. An atomic design has different layers of abstraction. The smallest abstraction is the atom. These are small design tokens or elements. Building on these atoms are the molecules. These elements are combinations of atoms and sometimes also molcules itself.</iff-text>
<iff-text>At the top are organisms and then pages/templates. Like a molecule, an organism is built by combining multiple atoms and molecules. The main distinction from a molecule is that it is a finished construct. That means it does not offer styling extensability but mostly only variations through attributes. Following up with some example for clarity.</iff-text>

<iff-title level="3">Atom</hls-title>

<iff-text>Atoms are open elements that can be adjusted extensibly. For example the text component. It offers a styling variant with the styling paragraph, has an alignation for the styling and lets the consumer choose the tag name. These are the attributes that can be changed.<iff-text>

```js
<iff-text styling="paragraph" textAlign="left" tag="p">
  Here Comes the Text
</iff-text>
```

<iff-text>Additionally the atoms also offer a styling interface in the form of --css-variables. The color for example has multiple variables. If a css-variable is defined that is more left, then this variable is the one that has precedent and is chosen. The default value it uses from the theme with the variable --iff-alias-font--color. But when the --iff-font--color is set the value that is set with --iff-font--color is used. So on with state and hover css variable that allows for a lot of flexibility in usage.<iff-text>

```js
color:
var(--iff-hover__font--color,
var(--iff-state__font--color,
var(--iff__font--color,
var(--iff-alias__font--color
))));
```

<iff-text>Atoms have attribute and styling interfaces. Attributes allow to build preset variations to be used. For example the styling of a paragraph can be preset with an attribute. The styling interface allows to control the degree of freedom of the component. It displays the user what can be changed and how. The styling interface can be very free with atoms to allows for many design variants.<iff-text>

<iff-title level="3">Molecules / Organism</hls-title>
<iff-text>Composed of atoms, the molecules also offer a attribute and styling interface. The styling interface is already usually more restrictive then with atoms and a molecule offers more attributes to change.<iff-text>

```html
<iff-icon-text icon="start">Link</iff-icon-text>

<iff-icon-text icon="start">
  <iff-text slot="text" styling="paragraph-slim"> Link paragraph </iff-text>
</iff-icon-text>
```

<iff-icon-text icon="start">Link</iff-icon-text>

<iff-text>The example above shows how a icon-text can look like. The component can be used to display an icon with a text. But it can also be extended to be clickable and adjust the position of the icon. Additionally a slot with the text styling exists that allows to customize the appearance of the text inside the icon-text.</iff-text>

```html
<iff-grid-layout layout="1-1-1">
  <iff-grid-item style="background-color: green" gridWidth="full">
    <iff-text styling="paragraph">One</iff-text>
  </iff-grid-item>
  <iff-grid-item style="background-color: blue" gridWidth="full">
    <iff-text styling="paragraph">Two</iff-text>
  </iff-grid-item>
  <iff-grid-item style="background-color: yellow" gridWidth="full">
    <iff-text styling="paragraph">Three</iff-text>
  </iff-grid-item>
</iff-grid-layout>
```

<iff-grid-layout layout="1-1-1">
  <iff-grid-item style="background-color: green" gridWidth="full">
    <iff-text styling="paragraph">One</iff-text>
  </iff-grid-item>
  <iff-grid-item style="background-color: blue" gridWidth="full">
    <iff-text styling="paragraph">Two</iff-text>
  </iff-grid-item>
  <iff-grid-item style="background-color: yellow" gridWidth="full">
    <iff-text styling="paragraph">Three</iff-text>
  </iff-grid-item>
</iff-grid-layout>

<iff-text>This example shows a grid-layout that separated into 3 columns and can be used in combination with grid-item childs that have different variantions to be configured. Inside the grid-item is then a text component with a paragraph styling.</iff-text>

<iff-text styling="paragraph-slim">An example Design System can be found under the following link. It is build with atoms, molecules and organisms. Lit.dev is a library that creates webcomponents with ease and offers a flexible way to create design-system.</iff-text>

<iff-icon-text icon="end" href="https://github.com/julianiff/design-system" target="_blank"><iff-text styling="paragraph-bold" slot="text">Design System Github</iff-text></iff-icon-text>

<iff-icon-text icon="end" href="https://lit.dev/" target="_blank"><iff-text noLineHeight styling="paragraph-bold" slot="text">Lit.dev Webcomponents</iff-text></iff-icon-text>
