# Stack
Check out the demo [here](https://growstocks.github.io/stack)!
- [GrowStocks](https://growstocks.xyz)' open source Design System for building beautiful, quick, responsive, and flexible user interfaces based on GrowStocks' design system.

# Features
- Relatively easy to configure
- Easily paired with [Alpine.js](https://github.com/alpinejs/alpine)

# Prerequisites
* SASS/SCSS Live Watcher or Live Compiler (refer to your IDE's plugins marketplace)

# Installation Instructions
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
       $on-error: #fff,
       $on-warning: #000,
       $on-success: #fff,
       $on-undefined: #fff,
       $on-input: #000
   );
   ```
5. Add your theme overrides in the `stack/css/_overrides.scss` file.
6. Add your theme's custom styles in the `stack/css/_custom.scss` file.
7. DONE!

# Addons
- There's an included `_demo.html` file that you can use to see the library in action!
