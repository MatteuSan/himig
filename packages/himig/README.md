## Prerequisites
Be sure to have [NodeJS](https://nodejs.org) LTS installed. Any other version will risk the project breaking in
development.
This design system is dependent on the CSS preprocessor, [Sass](https://sass-lang.com). When using Sass, **be sure to
use DartSass instead of the now deprecated LibSass (node-sass)**.

## Setup
```sh
$ npm install @matteusan/himig --save

# or

$ yarn add @matteusan/himig
```
```scss
// main.scss

@use 'pkg:@matteusan/himig';
@use 'pkg:@matteusan/himig/ms-button';

@include himig.init {
  @include ms-button.render();
}
```

## Contributing
Contributing guidelines are located [here](https://github.com/MatteuSan/himig/tree/main/.github/CONTRIBUTING.md).