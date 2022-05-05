![Gaia Logo](media/gds-logo-dark.svg)

## Prerequisites
Be sure to have NodeJS LTS installed. Any other version will risk the project breaking in development.

## Setup
```sh
$ npm install @growstocks/gaia --save

# or

$ yarn add @growstocks/gaia
```
```scss
// main.scss

@use 'node_modules/@growstocks/gaia';
@use 'node_modules/@growstocks/gaia/gds-button';

@include gaia.init {
  @include gds-button.render();
}
```

## Contributing
Contributing guidelines are located [here](https://github.com/GrowStocks/gaia/tree/main/.github/CONTRIBUTING.md).