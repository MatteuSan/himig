# Alert Component
- This is the documentation on how to use the Alert component on your stack theme.

## Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:
```scss
@use '../node_modules/@stack/css/Alert';

...

@include Alert.render();
```

## HTML Component
```html
<div class="alert elevation--z3">
    <span class="alert__icon material-icons-outlined">info</span>
    <p class="alert__text">This is a daily quest price</p>
</div>
```

## API
### CSS Classes
- This API (or Classes in this case) is to be used in the HTML elements you are going to place. From the provided element above you can modify the .alert class into the other states using `--`.

|  Class | Output |   
|---|---|
| `.alert`  | Outputs the regular Alert component  |
| `.alert--error`  | Outputs the Alert component in its `error` state |
|  `.alert--success` | Outputs the Alert component in its `success` state |
| `.alert--warning` | Outputs the Alert component in its `warning` state |
| `.alert--undefined` | Outputs the Alert component in its `undefined` state 
| `.alert__text` | The text of the Alert component
| `.alert__icon` | The icon of the Alert component |
  

### Overriding API
- This API is for overriding the current theme for the Alert component using the `.render()` function. You can override the following `$parameters` inside the `.render()` function.

| $parameter | Effect |   
|---|---|
| `$fill` | Overrides the current `background` related properties (minus the --type classes)
| `$ink` | Overrides the current `color` text-related properties (minus the ---type classes)
| `$ink` | Overrides the current `color` icon-related properties (minus the ---type classes)
| `$padding` | Overrides the current `padding` property of the component
| `$border` | Overrides the current `border` property of the component
| `$border-radius` | Overrides the current `border-radius` property of the component
| `$clip-path` | Overrides the current shape of the element using the `clip-path` property of the component

#### Overriding API Implementatation Example

```scss
...

@include Alert.render(
    $fill: #232323,
    $ink: #cacaca,
    $border: 1px solid blue,
    $border-radius: 0
);
```

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*