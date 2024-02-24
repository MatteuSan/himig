![Gaia Logo Light Mode](https://raw.githubusercontent.com/GrowStocks/gaia/main/media/gds-logo-light.svg?sanitize=true#gh-light-mode-only)
![Gaia Logo Dark Mode](https://raw.githubusercontent.com/GrowStocks/gaia/main/media/gds-logo-dark.svg?sanitize=true#gh-dark-mode-only)

## Prerequisites
Be sure to have [NodeJS](https://nodejs.org) LTS installed. Any other version will risk the project breaking in
development.
This design system is dependent on the CSS preprocessor, [Sass](https://sass-lang.com). When using Sass, **be sure to
use DartSass instead of the now deprecated LibSass (node-sass)**.

## Setup
```sh
$ npm install @growstocks/himig --save

# or

$ yarn add @growstocks/himig
```
```scss
// main.scss

@use 'node_modules/@matteusan/himig';
@use 'node_modules/@matteusan/himig/ms-button';

@include himig.init {
  @include ms-button.render();
}
```

## Contributing
Contributing guidelines are located [here](https://github.com/MatteuSan/himig/tree/main/.github/CONTRIBUTING.md).