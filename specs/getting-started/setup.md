---
title: Setup
slug: /getting-started/setup
---
# Setup
A guide to setting up the development environment for Himig.

## Installation
```sh
# Yarn
$ yarn add @matteusan/himig sass

# NPM
$ npm install @matteusan/himig sass
```

## Instantiation
In your project's sass entry file. Initialize the design system.

```scss
@use 'node_modules/@matteusan/himig';

@include himig.init() {
  // ...
}
```

Whenever you feel the need to include a component, instantiate it inside the Gaia initializer.

```scss
@use 'node_modules/@matteusan/himig';
@use 'node_modules/@matteusan/himig/ms-button';

@include himig.init() {
  @include ms-button.render();
}
```

### Theme Configuration
To see how to configure the theme, go to [this page](../foundation/theme.md).