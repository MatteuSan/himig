# Banner Component
- This is the documentation on how to use the Banner component on your stack theme.

## Integration
- Once Stack is in your node modules folder, put this in the styling file that you've made for your project:
```scss
@use '../node_modules/@stack/css/Banner';

...

@include Banner.render();
```

## HTML Component
```html
<div class="banner">
    <div class="wrap--text">
        <h1>Banner Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
</div>
```

## API
### CSS Classes
- This API (or Classes in this case) is to be used in the HTML elements you are going to place.

|  Class | Output |   
|---|---|
| `.banner`  | Outputs the regular Banner component  |
| `.wrap--text`  | Encases your banner text inside. |
|  `.banner__socials` | Encases your banner social media links in the banner. |
  

### Overriding API
- This API is for overriding the current theme for the Banner component using the `.render()` function in your styling file. You can override the following `$parameters` inside the `.render()` function.

| $parameter | Effect |   
|---|---|
| `$fill` | Overrides the current `background` related properties.
| `$ink` | Overrides the current `color` text-related properties
| `$clip-path` | Overrides the current shape of the element using the `clip-path` property of the component |

#### Overriding API Implementation Example

```scss
...

@include Banner.render(
    $fill: #232323,
    $ink: #cacaca,
    $clip-path: polygon($parameters)
);
```

*Copyright (c) 2021 GrowStocks Development Group* <br>
*MIT Licensed*