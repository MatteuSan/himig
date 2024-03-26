---
title: Components
slug: /foundation/components
---
# Components
Components are primitive elements provided in the design system. These are carefully chosen, planned, and engineered to be reusable for any use case.

The Himig components are components that got used often in projects, and are potentially re-engineered from the ground up over and over again when we initialize a new project.

## Primitive-only Approach
Himig has adopted a primitive only approach to its components list.

As projects grow over time, it introduces design problems specific for that project only. For example, this project requires a specific layout, or a specific style of navigation that may differ so far from the spec of the design system but still maintain core principles of what the design system stands for. 

The primitive only approach to components allows for flexibility in creating 'internal design systems' for each project. Each component is designed to be plugged into a design system depending on when you need it and play accordingly. Think of it as the core components of a larger design system for a product or a series of products.

So now, those layout specifications and that navigation experience that's specific for that project can now be a reality, while still maintaining the integrity of the design system.

## Structure
Himig components uses the Modified BEM class naming architecture. Himig still retains the block and element naming scheme. However, we replaced the verbose modifier classes (which would look like this: `ms-button--variant`) with shorter and scoped ones like this: (`is-variant`).

For example, a button with a large variant would look like this:
```html
<button class="ms-button is-large">
  <span class="ms-button__label">Button</span>
</button>
```
You might ask, does it have specificity issues? The answer is a proud no, it does not have specificity issues. And here's why:

We're using the block's class name as a specifier for the variant like so:
```scss
.ms-button {
  // CSS...
  
  &.is-large {
    // CSS...
  }
}
```
This reduces the possibility of leaking the large styles to other components with a similarly named variant. The variants are scoped into the block itself.

Not only this, we've also taken measure to use custom properties as the only way to modify core styles like [colors](color/index.md), [structs](structure/index.md), and [typography](typography/index.md).
```scss
.ms-button {
  // CSS...
  @include himig.color-apply('button', (...));
  
  &.is-large {
    // CSS...
    @include himig.color-bind('button', (...));
  }
}
```
Now if you wish to create your own variants of a primitive component, this [guide](../components/index.md#extending-components) features everything you need in creating component variants.