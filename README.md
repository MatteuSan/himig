# Stack
Check out the demo [here](https://growstocks.github.io/stack)!
- [GrowStocks](https://growstocks.xyz)' open source Design System for building beautiful, quick, responsive, and flexible user interfaces based on GrowStocks' design system.

## Features
- Relatively easy to configure
- Easily paired with [Alpine.js](https://github.com/alpinejs/alpine)

## Prerequisites
* SASS/SCSS Live Watcher or Live Compiler (refer to your IDE's plugins marketplace)

## Installation Instructions
1. Using NPM do:
   ```npm
   npm install @growstocks/stack
   ```
2. Make an scss file with your preferred name (e.g. `main.scss`, `style.scss`, `index.scss`.
3. Add the style.css and the _core.js file in the `<head></head>` tags.
```html
<!-- @StackStyles -->
<link rel=stylesheet type="text/css" href="css/filename.css">
<!-- @StackScripts -->
<script src="node_modules/@stack/js/_core.js"></script>
```
4. Configure your theme settings in the style file you made using the StackTheme API.
   ```scss
   @use '../node_modules/@stack/css/Theme' with (
    $primary: #yourcolorhere,
    $primary-light: #yourcolorhere,
    $primary-dark: #yourcolorhere,

    $primary-variant: #yourcolorhere,
    $primary-variant-light: #yourc...
    ...
   ```
   *The API for the style theming is located [here...](https://github.com/GrowStocks/stack/tree/unstable/src/%40stack/css/Theme)*
   
5. Call out the components using the following format:
   ```scss
   @use '../node_modules/@stack/css/ComponentName';
   
   ...
   
   @include ComponentName.render();
   ```
6. Let your **file watcher** do the work in compiling everything.
7. DONE!

## Addons
- There's an included `index.html` file that you can use to see the library in action!
