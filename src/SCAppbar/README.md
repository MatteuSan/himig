# SCAppbar component
- This is the SCAppbar component usage instructions.
## Installation instructions
>🛈 Both these commands installs everything in the stack library.
```shell
# NPM installation
npm install @growstocks/stack

#Yarn installation
yarn add @growstocks/stack
```
- Alternatively, you can use the CDN version
```html
<!-- StackStyles -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@growstocks/stack@3.0.0-alpha.3/main.css" />
```
```css
/* You can also import individual components in your css files */
@import 'https://unpkg.com/@growstocks/stack@3.0.0-alpha.3/SCAppbar/main.css';
```
## HTML Usage
```html
<nav class="sc-appbar">
    <div class="sc-appbar__container">
        <a href="#">
            <div class="sc-appbar__item active" data-tooltip="Home">
                <i class="sc-appbar__item__icon material-icons" aria-hidden="true">home</i>
                <p class="sc-appbar__item__label">Home</p>
            </div>
        </a>
        <a href="#">
            <div class="sc-appbar__item" data-tooltip="About">
                <i class="sc-appbar__item__icon material-icons-outlined" aria-hidden="true">info</i>
                <p class="sc-appbar__item__label">About</p>
            </div>
        </a>
        <a href="#">
            <div class="sc-appbar__item" data-tooltip="Marketplace">
                <i class="sc-appbar__item__icon material-icons" aria-hidden="true">store</i>
                <p class="sc-appbar__item__label">Marketplace</p>
            </div>
        </a>
        <a href="#">
            <div class="sc-appbar__item" data-tooltip="Dashboard">
                <i class="sc-appbar__item__icon material-icons" aria-hidden="true">dashboard</i>
                <p class="sc-appbar__item__label">Dashboard</p>
            </div>
        </a>
    </div>
</nav>
```

## Style Usage
>These styles can be placed in a style file and can be located anywhere, as long as the HTML file can call the style file you made.
### CSS Usage
- The CSS usage for every component is as follows. Import the style from the NPM package, and you'll be set to go.
```css
@import 'path/to/node_modules/@growstocks/stack/SCAppbar';
```
### SCSS Usage
- The SCSS usage for every component is a bit different to the CSS usage. By using the SCSS implementation, you have more control over the styles.
- The syntax utilizes SCSS mixins, so we created a mixin to call all the styles available called `render()`.
- The syntax design chosen may be verbose to some, but its purpose is to be as explicit as possible when writing the code.
```scss
@use '~@growstocks/stack/SCAppbar';

@include SCAppbar.render();
```
### CSS Classes API
| Parameter | Effect |
|-----|-----|
| `.sc-appbar` | **REQUIRED**. The parent component class. |
| `.sc-appbar__container` | **REQUIRED**. The parent wrapper class for the component. |
| `.sc-appbar__item` | **REQUIRED**. The appbar item class. |
| `.sc-appbar__item__icon` | **REQUIRED**. Indicates the icon for the appbar items. |
| `.sc-appbar__item__label` | **REQUIRED**. Indicates the label for the appbar items. |

### CSS Variables API
| Parameter | Effect |
|-----|-----|
| `--sc-appbar-fill` | This affects the component's overall fill theme (background). This can range from being a plain old color value, to a gradient, to an image file. As long as it's a background-able value, you can put it in. |
| `--sc-appbar-ink` | This affects the component's overall ink theme (text-color, icon-color, etc.). This can only take in any color value. |
| `--sc-appbar-text-size` | This affects the component's overall type theme (text-size). This can only take in any `font-size` value. |
| `--sc-appbar-radius` | This affects the component's radius (border-radius). The border radius value can have the same syntax as the `border-radius` property in vanilla CSS. |

### SCSS `render()` mixin API
- This SCSS mixin API requires understanding of Stack's concept of [Theme Injection](#scss-theme-injection).
- The available parameters for the component's `render()` mixin.

| Parameter | Effect |
|-----|-----|
| `$color-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your color theme. |
| `$shape-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your shape theme. |
| `$typography-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your typography theme. 
| `$settings` | **[MAP] RECOMMENDED**. The component's settings. The data shape of this varies depending on the component.

#### `$settings` API
| Parameter | Effect |
|-----|-----|
| `items` | **[MAP] RECOMMENDED**. Sets the amount of `.appbar__item` elements you can put in the component. |
| `breakpoint` | **[MAP] OPTIONAL**. Sets the default breakpoint for all component style. Available options include `small`, `medium`, and `large`. By default, it is set to `medium` |

### SCSS Theme Injection
- Theme Injection is injecting json-like theme data into a mixin's parameter like the [`render()` mixin](#scss-render-mixin-api).
- This API is conveniently designed to support both a separate data file or inline data.

#### Color theme data API
- The theme data follows a particular data shape for all the properties.
- It takes two values, a fill color, and an ink color. The built-in stack code then takes these values and applies theme to the appropriate properties for the component to consume.
```scss
$color-theme-data: (
  'default': (#fill-color, #ink-color)
);
```
- Here are the available properties for the color theme data.

| Parameter | Effect |
|-----|-----|
| `default` | **REQUIRED**. The default color value of the component. |

#### Shape theme data API
- The theme data follows a particular data shape for all the properties.
```scss
$shape-theme-data: (
  'shape': rounded
);
```
- Here are the available properties for the color theme data.

| Parameter | Effect |
|-----|-----|
| `shape` | **REQUIRED**. The shape of the component. |
| `radius` | **OPTIONAL**. A fine-tuner for the component's default border-radius property. |
| `exceptions` | **OPTIONAL**. A reserved property for making extensive custom components. This property sets all the shapes that are not supposed to be used for a component. |

#### Typography theme data API
- The theme data follows a particular data shape for all the properties.
```scss
$typography-theme-data: (
  'size': 14px
);
```
- Here are the available properties for the color theme data.

| Parameter | Effect |
|-----|-----|
| `size` | **REQUIRED**. The font-size of the text in a component. |
| `weight` | **OPTIONAL**. The font-weight of the text in a component |
| `spacing` | **OPTIONAL**. The letter-spacing of the text in a component |
| `decoration` | **OPTIONAL**. The text-decoration of the text in a component. |
| `transform` | **OPTIONAL**. The text-transform of the text in a component. |
