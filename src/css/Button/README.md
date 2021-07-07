# Button Component
- This is the documentation on how to use the Button component on your stack theme.

# Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:

## SCSS
```scss
@use '~@growstocks/stack/css/Button';

...

@include Button.render();
```

## HTML Component
- Base
```html
<button class="sc-button">
    <i class="material-icons sc-button__icon" aria-hidden="true">thumb_up</i>
    <span class="sc-button__label">Liked</span>
</button>
```
- Outlined
```html
<button class="sc-button--outlined">
    <i class="material-icons sc-button__icon" aria-hidden="true">thumb_up</i>
    <span class="sc-button__label">Liked</span>
</button>
```
- Filled
```html
<button class="sc-button--filled">
    <i class="material-icons sc-button__icon" aria-hidden="true">thumb_up</i>
    <span class="sc-button__label">Liked</span>
</button>
```

# API
## CSS Classes
- This API (or Classes in this case) is to be used in the HTML elements you are going to place. From the provided element above you can modify the `.btn` class into the other states using `--`.

|  Class | Output |   
|---|---|
| `.sc-button`  | Outputs the regular Button component (text only)  |
| `.sc-button--outlined`  | Outputs the Button component in its outlined color state |
|  `.sc-button--filled` | Outputs the Button component in its filled state |

## Overriding API
- This API is for overriding the current theme for the Button component using the `.render()` function in your styling file. You can override the following `$parameters` inside the `.render()` function.

| $parameter | Effect |   
|---|---|
| `$fill-settings: (...)` | Overrides the current `container color` related properties. (Properties are located [here](https://youtube.com))
| `$ink-settings: (...)` | Overrides the current `text color` text-related properties. (Properties are located [here](https://youtube.com))
| `$shape-settings: (...)` | Overrides the current `shape` related properties. (Properties are located [here](https://youtube.com))
| `$type: (...)` | Sets the button type to render, may it be a single type or multiple types. Available types to set are `text`, `outlined`, and `filled` |

### Overriding API Implementation Example

```scss
...

@include Button.render(
    $shape-settings: (
        shape: pill
    ),
    $type: (
        text: true,
        outlined: true,
        filled: true
    )
);
```

## Base API
- The `base()` API ables you to make custom components with ease while maintaining the Stack design principles.

| $parameter | Effect |   
|---|---|
| `$component-name` | [`STRING`] Sets the component name.
| `$base-fill-settings: (...)` | [`MAP`] Sets the `container color` related properties for the base. (Properties are located [here](https://youtube.com))
| `$ink-settings: (...)` | [`MAP`] Sets the `text color` text-related properties. (Properties are located [here](https://youtube.com))
| `$shape-settings: (...)` | [`MAP`] Sets the `shape` related properties. (Properties are located [here](https://youtube.com))
| `$base-style` | [`UNQUOTED STRING`] Sets the button style to render. Available styles to set are `text`, `outlined`, and `filled` |

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*