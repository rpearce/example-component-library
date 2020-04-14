# example-component-library

Example repository for a shared React components library

## Building

```
$ yarn build
```

## Examples
* [storybook example output](https://rpearce.github.io/example-component-library/)
* [create-react-app](./examples/create-react-app)
* [gatsby](./examples/gatsby)

## Component Structure

```
Circle
├── __snapshots__
│   └── test.tsx.snap
├── index.tsx
├── stories.tsx
├── styles.css
└── test.tsx
```

The component and everything to do with it are co-located in the
`source/Circle/` folder:
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
import { Circle } from 'mylib'

// import directly from the esm build
import Circle from 'mylib/dist/esm/Circle'

// import directly from the commonjs build
import Circle from 'mylib/dist/cjs/Circle'

// import directly from the umd build
import Circle from 'mylib/dist/umd/Circle'
```

### CSS
Component CSS can be imported like this:

```js
import 'mylib/dist/css/Circle/styles.css'
```

If you wish to import _all_ components' CSS:

```js
import 'mylib/dist/css/styles.css'
```
