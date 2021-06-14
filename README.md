# Stack
Check out the demo [here](https://growstocks.github.io/stack)!
- [GrowStocks](https://growstocks.xyz)' open source Design System for building beautiful, quick, responsive, and flexible user interfaces based on GrowStocks' design system.

# Features
- Easily configurable
- Easily paired with [Alpine.js](https://github.com/alpinejs/alpine)

# Prerequisites
* SASS/SCSS Live Watcher or Live Compiler (refer to your IDE's plugins marketplace)

# Installation Instructions
1. Download or clone this repository. (also make sure to remove the  `.gitignore`, `tsconfig.json`, `package.json`, and `package.lock` files ;) )
2. Import the stack folder into your project's public folder.
3. Add the style.css and the index.js file in the `<head></head>` tags.
```html
<!-- @StackStyles -->
<link rel=stylesheet type="text/css" href="stack/css/style.css">
<!-- @StackScripts -->
<script src="stack/js/index.js"></script>
```
4. Configure your theme settings in the `stack/css/_env.scss` file.
5. Add your theme overrides in the `stack/css/_overrides.scss` file.
6. Add your theme's custom styles in the `stack/css/_custom.scss` file.
7. DONE!

# Addons
- There's an included `_demo.html` file that you can use to see the library in action!
