# Alert Component
- This is the documentation on how to use the Alert component on your stack theme.

## Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:
```scss
@use '../node_modules/@growstocks/css/Alert';

...

@include Alert.render();
```

## HTML Component
```html
<div class="alert elevation--z3">
    <span class="alert__icon material-icons-outlined">info</span>
    <p class="alert__text">This is an alert</p>
</div>
```

## API
### CSS Classes
- This API (or Classes in this case) is to be used in the HTML elements you are going to place. From the provided element above you can modify the .alert class into the other states using `--`.

|  Class | Output |   
|---|---|
| `.alert`  | Outputs the regular Alert component  |
| `.alert--{state}`  | Outputs the Alert component in a particular state. Available states: `success`, `warning`, `error`, and `undefined` |
|  `.alert--outlined` | Outputs the Alert component in its outlined version. |
| `.alert--outlined--{state}` | Outputs the Alert component in its outlined version. Available states: `success`, `warning`, `error`, and `undefined` |
| `.alert__text` | The text of the Alert component
| `.alert__icon` | The icon of the Alert component |
  

### Overriding API
- This API is for overriding the current theme for the Alert component using the `.render()` function in your styling file. You can override the following `$parameters` inside the `.render()` function.

| $parameter | Effect |   
|---|---|
| `$fill` | Overrides the current `background` related properties (minus the --type classes)
| `$ink` | Overrides the current `color` text-related properties (minus the ---type classes)
| `$icon-ink` | Overrides the current `color` icon-related properties (minus the ---type classes)
| `$padding` | Overrides the current `padding` property of the component
| `$border` | Overrides the current `border` property of the component
| `$border-fill` | Overrides the current `border-color` property of the component
| `$border-radius` | Overrides the current `border-radius` property of the component
| `$shape` | Alters the shape of your component. Available shapes include `default`, `rounded`, `clipped`, `pill`, and `block`
| `$clip-size` | Overrides the clipping size of the element with the `clipped` shape state.
| `$custom-clip` | Overrides current clip path to your custom clip path
| `$type: (...)` | Sets the button type to render, may it be a single type or multiple types. Available types to set are `filled`, and `outlined` |

#### Overriding API Implementation Example

```scss
...

@include Alert.render(
    $fill: #232323,
    $ink: #cacaca,
    $border: 1px solid var(--secondary),
    $border-radius: 0,
    $shape: pill,
    $type: (
        outlined: true,
        filled: true,
    )
);
```

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*