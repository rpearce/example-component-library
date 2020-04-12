# example-component-library

Example repository for a shared React components library

## Building

```
$ yarn build
```

## Component Structure

```
MyComponent
├── __snapshots__
│   └── test.tsx.snap
├── index.tsx
├── stories.tsx
├── styles.css
└── test.tsx
```

The component and everything to do with it are co-located in the
`source/MyComponent/` folder:
* `index` component file (and any additional component files)
* stories
* CSS
* tests

## Exports
All components are exported in `source/index.ts`, and their inclusion here is
what allows them to get included in the build output in `dist`.

```js
// source/index.ts

export { default as Circle } from './Circle'
export { default as Rectangle } from './Rectangle'
```

## Importing

### JS
Component JavaScript can be imported in a few different ways:

```js
// importing from the index file
import { MyComponent } from 'mylib'

// import directly from the esm build
import MyComponent from 'mylib/dist/esm/MyComponent'

// import directly from the commonjs build
import MyComponent from 'mylib/dist/csj/MyComponent'

// import directly from the umd build
import MyComponent from 'mylib/dist/umd/MyComponent'
```

### CSS
Component CSS can be imported like this:

```js
import 'mylib/dist/css/MyComponent.css'
```
