# Theme
- This is the documentation on how to use the Alert component on your stack theme.

## Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:
```scss
@use '../node_modules/@stack/css/Theme' with (
    $primary: #12305e,
    $primary-light: #44638b,
    $primary-dark: #001334,
    ...
);
```

## API
### Theming API
- *Use the `with ($parameters: $value);` for this API. (Please refer to the example below this API table)*

| $parameter | Effect |   
|---|---|
| `$primary`<br>`$primary-light`<br>`$primary-dark` | Sets the `primary` fill color properties in the theme
| `$primary-variant`<br>`$primary-variant-light`<br>`$primary-variant-dark` | Sets the `primary--variant` fill color properties in the theme
| `$secondary`<br>`$secondary-light`<br>`$secondary-dark` | Sets the `secondary` fill color properties in the theme
| `$surface` | Sets the `surface` fill color property in the theme
| `$input`<br>`$input-disabled` | Sets the `input` and `input-disabled` fill color properties in the theme
| `$on-primary`<br>`$on-secondary`<br>`$on-surface`<br>`$on-input` | Sets the `on-〇〇` ink color properties in the theme for their corresponding fill colors. (e.g. `$primary` related fill colors are all going to use the `$on-primary` ink color value for their text)

#### Theming API Implementatation Example

```scss
// @GrowStocks default theme
@use '../src/@stack/css/Theme' with (
    $primary: #12305e,
    $primary-light: #44638b,
    $primary-dark: #001334,

    $primary-variant: #1d69a9,
    $primary-variant-light: #7d9fcb,
    $primary-variant-dark: #1c4c86,

    $secondary: #ffa000,
    $secondary-light: #ffd149,
    $secondary-dark: #c67100,

    $surface: #000b18,

    $input: #b0bfcd,
    $input-disabled: #708196,
    $placeholder: #606060,

    $on-primary: #fff,
    $on-secondary: #000,
    $on-surface: #fff,
    $on-input: #000
);
```

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*