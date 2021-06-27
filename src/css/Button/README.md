# Button Component
- This is the documentation on how to use the Button component on your stack theme.

## Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:
```scss
@use '../node_modules/@growstocks/css/Button';

...

@include Button.render();
```

## HTML Component
```html
<button data-icon-before="favorite" type="submit" class="btn--primary elevation--z1">Button Primary</button>
```

## API
### CSS Classes
- This API (or Classes in this case) is to be used in the HTML elements you are going to place. From the provided element above you can modify the `.btn` class into the other states using `--`.

|  Class | Output |   
|---|---|
| `.btn`  | Outputs the regular Button component  |
| `.btn--primary`  | Outputs the Button component in its solid color state |
|  `.btn--text-only` | Outputs the Button component in its text only state |

### Attribute API
| Attribute | Output |   
|---|---|
| `data-icon-before`  | Displays the icon you put here before the button label
| `data-icon-after`  | Displays the icon you put here after the button label |

#### Attribute API Implementation example
```html
<button data-icon-before="send" class="btn--primary">Send</button>
```

### Overriding API
- This API is for overriding the current theme for the Button component using the `.render()` function in your styling file. You can override the following `$parameters` inside the `.render()` function.

| $parameter | Effect |   
|---|---|
| `$fill` | Overrides the current `background` related properties
| `$ink` | Overrides the current `color` text-related properties
| `$ink-reverse` | Overrides the current reverse of `color` text-related properties (specifically on the `.btn` class)
| `$icon-ink` | Overrides the current `color` icon-related properties
| `$font-size` | Overrides the current `size` text-related properties
| `$icon-size` | Overrides the current `size` icon-related properties
| `$font-weight` | Overrides the current `weight` text-related properties
| `$padding` | Overrides the current `padding` property of the component
| `$border` | Overrides the current `border` property of the component
| `$border-fill` | Overrides the current `border-color` property of the component
| `$border-radius` | Overrides the current `border-radius` property of the component
| `$shape` | Alters the shape of your component. Available shapes include `default`, `rounded`, `clipped`, `pill`, and `block`
| `$clip-size` | Overrides the clipping size of the element with the `clipped` shape state.
| `$custom-clip` | Overrides current clip path to your own custom clip path
| `$type: (...)` | Sets the button type to render, may it be a single type or multiple types. Available types to set are `text`, `outlined`, and `filled` |

#### Overriding API Implementation Example

```scss
...

@include Button.render(
    $fill: #232323,
    $ink: var(--secondary),
    $shape: clipped
);
```

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*