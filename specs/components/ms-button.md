---
title: MsButton
slug: /components/ms-button
---
# MsButton
Buttons call the user to a specific action in the page. May it be in a form, or a hyperlink.

## Usage
### HTML
```html
<button class="ms-button" role="button">
  <span class="ms-button__label">Button</span>
</button>
```
There's a caveat to the HTML structure. If you wish to use the button component to redirect a user to another page, please use `<a></a>` tags instead. This improves accessibility, and the way styles work for this component. 

Additionally, anchor elements don't have a disabled attribute so you wouldn't really need a disabled state for this.
```html
<a href="#" class="ms-button" role="link">
  <span class="ms-button__label">Button</span>
</a>
```

### SCSS
```scss
@use '@matteusan/sentro';
@use '@matteusan/himig/ms-button';

@include himig.init() {
  @include ms-button.render();
}
```

## Variants
Button variants are called using the [`is-` modifier](../foundation/components.md#structure). 

### Text Variant
These are used as tertiary actions, or actions that are of the least attention to.
```html
<button class="ms-button" role="button">
  <span class="ms-button__label">Button</span>
</button>
```

### Outlined Variant
These are used as secondary actions, or actions that are of the second of the attention to.
```html
<button class="ms-button is-outlined" role="button">
  <span class="ms-button__label">Button</span>
</button>
```

### Filled Variant
These are used as primary actions, or actions that are of the first of the attention to.
```html
<button class="ms-button is-filled" role="button">
  <span class="ms-button__label">Button</span>
</button>
```

## Icons
Icons are great for attaching pictograms to actions. This makes repeated actions more memorable and easier to understand at a glance. Either can be placed as a leading or trailing icon; but never both at the same time.

### Leading Icon
```html
<button class="ms-button is-filled" role="button">
  <span class="ms-button__label">Button</span>
  <i class="ms-button__icon"><!-- svg --></i>
</button>
```

### Trailing Icon
```html
<button class="ms-button is-filled" role="button">
  <i class="ms-button__icon"><!-- svg --></i>
  <span class="ms-button__label">Button</span>
</button>
```

## API
### Anatomical Classes
These classes make up the elements inside a component.

| Class               | Effect                      |
|---------------------|-----------------------------|
| `.ms-button`        | Main button class.          |
| `.ms-button__label` | Class for the button label. |
| `.ms-button__icon`  | Class for the button icon.  |

### Variant Classes
For information on how to use these classes, [click here](index.md#modification-html).

| Class           | Effect                                                |
|-----------------|-------------------------------------------------------|
| `.is-outlined`  | Renders the component in its outlined style.          |
| `.is-filled`    | Renders the component in its filled style.            |
| `.is-error`     | Renders the component in its error state.             |


### Custom Properties
These are for creating your own component theme classes that you can append to the parent element markup.

| Property                 | Effect                                   |
|--------------------------|------------------------------------------|
| `--ms-button-fill`       | Changes the button's background color.   |
| `--ms-button-ink`        | Changes the button's text color.         |
| `--ms-button-border`     | Changes the button's border color.       |
| `--ms-button-radius`     | Changes the button's border radius.      |
| `--ms-button-gap`        | Changes the button's label and icon gap. |
| `--ms-button-padding`    | Changes the button's padding.            |
| `--ms-button-weight`     | Changes the button's weight.             |
| `--ms-button-icon-ink`   | Changes the button's icon color.         |
| `--ms-button-icon-size`  | Changes the button's icon size.          |
| `--ms-button-label-ink`  | Changes the button's label color.        |
| `--ms-button-label-size` | Changes the button's label size.         |

### Configuring styles
Here are all the themeable properties for this component. The directions to use these properties are located in
the [render API](index.md#modification-scss).

```scss
// _button-theme.scss

$init-color: (
  fill: (
    default: 'accent-400',
    hover: 'accent-300',
    active: 'accent-200',
    focus: 'accent-400',
    disabled: 'disabled',
  ),
  ink: (
    default: 'accent-ink',
    hover: 'accent-ink',
    active: 'accent-ink',
    focus: 'accent-ink',
    disabled: 'disabled-ink',
  ),
  border: (
    default: 'accent-400',
    hover: 'accent-300',
    active: 'accent-200',
    focus: 'accent-400',
    disabled: 'disabled',
  ),
);

$init-struct: (
  width: (
    default: 100%,
    min: 69px,
    max: max-content
  ),
  padding: ('md' 'lg'),
  radius: 'small',
  border-width: 'xs',
  border-style: solid,
  gap: 'xs'
);

$init-typography: (
  family: 'global',
  size: 'body',
  weight: 'bold',
  line-height: 1.25rem
);

$init-settings: ();
```

### Extending styles
If you wish to extend the component styles, the [`extend()` API](index.md#extension-scss) might come in handy.