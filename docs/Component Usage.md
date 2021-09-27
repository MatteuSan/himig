# General Component Usage
- This is the general component usage instructions.
## Installation instructions
>🛈 Both these commands installs everything in the stack library.
```shell
# NPM installation
npm install @growstocks/stack

#Yarn installation
yarn add @growstocks/stack
```
## HTML Usage
- In specific documentation for each component, we wrote the required HTML code snippet to be used in your project/s.

## Style Usage
>These styles can be placed in a style file and can be located anywhere, as long as the HTML file can call the style file you made.
### CSS Usage
- The CSS usage for every component is as follows. Import the style from the NPM package, and you'll be set to go.
```css
@import '@growstocks/stack/[SCComponentName]';
```
### SCSS Usage
- The SCSS usage for every component is a bit different to the CSS usage. By using the SCSS implementation, you have more control over the styles.
- The syntax utilizes SCSS mixins, so we created a mixin to call all the styles available called `render()`.
- The syntax design chosen may be verbose to some, but its purpose is to be as explicit as possible when writing the code.
```scss
@use '~@growstocks/stack/[SCComponentName]';

@include SCComponentName.render();
```
### CSS Classes API
- The CSS classes are for the component's structure and variations.
- These CSS classes aren't a one-size-fits all system. The component-specific documentations will contain the classes' documentation.
### CSS Variables API
- The CSS variables will only have 4 main properties available to ALL components.
- The other CSS variables will only be specific to their respective components.

| Parameter | Effect |
|-----|-----|
| `--sc-[component-name]-fill` | This affects the component's overall fill theme (background). This can range from being a plain old color value, to a gradient, to an image file. As long as it's a background-able value, you can put it in. |
| `--sc-[component-name]-ink` | This affects the component's overall ink theme (text-color, icon-color, etc.). This can only take in any color value. |
| `--sc-[component-name]-text-size` | This affects the component's overall type theme (text-size). This can only take in any `font-size` value. |
| `--sc-[component-name]-radius` | This affects the component's radius (border-radius). The border radius value can have the same syntax as the `border-radius` property in vanilla CSS.

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
| `hover` | **OPTIONAL**. The color of the component's hover state. |
| `focus` | **OPTIONAL**. The color of the component's focus state. |
| `active` | **OPTIONAL**. The color of the component's active state. |
| `disabled` | **OPTIONAL**. The color of the component's disabled state. |
| `elevation` | **OPTIONAL**. The color of the component's elevation. |
| `outline` | **OPTIONAL**. The color of the component's outline property. |

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

### SCSS `render()` mixin API
- This SCSS mixin API requires understanding of Stack's concept of [Theme Injection](#scss-theme-injection).
- The available parameters for the component's `render()` mixin.

| Parameter | Effect |
|-----|-----|
| `$color-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your color theme. |
| `$shape-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your shape theme. |
| `$typography-theme` | **[MAP] OPTIONAL**. This is the mixin parameter to inject your typography theme.
| `$settings` | **[MAP] OPTIONAL**. The component's settings. The data shape of this varies depending on the component.
