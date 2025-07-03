---
title: Setup
slug: /getting-started/setup
---
# Setup
A guide to setting up the development environment for Himig.

## Installation
```sh
# PNPM
$ pnpm add @matteusan/himig @matteusan/pintig sass

# NPM
$ npm i @matteusan/himig @matteusan/pintig sass
```

## Instantiation
In your project's sass entry file. Initialize the design system.

```scss
@use 'pkg:@matteusan/himig';

@include himig.init() {
  // ...
}
```

Whenever you feel the need to include a component, instantiate it inside the Himig initializer.

```scss
@use 'pkg:@matteusan/himig';
@use 'pkg:@matteusan/himig/ms-button';

@include himig.init() {
  @include ms-button.render();
}
```

### Theme Configuration
To see how to configure the theme, go to [this page](../foundation/theme.md).