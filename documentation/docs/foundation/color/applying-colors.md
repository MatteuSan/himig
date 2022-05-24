---
title: Applying Colors
slug: /foundation/color/applying-colors
---
# Applying Colors
Gaia's guidelines to applying colors to an element.

## Component Color Anatomy
When applying color to a component, we generally apply it to three main parts of an element/component:

1) The container itself
2) The content inside
3) The borders

![Color Anatomy](../_media/color-anatomy.png)

### Fill
The fill color is the color applied to the container itself. This generally comprises about 70% of an element's color.
The fill color is commonly associated with the `background-color` CSS property.

This color's value can either be a [primitive token](../tokens.md#primitive-tokens), a [theme token](../tokens.md#theme-tokens), or raw value from the [specified valid raw values](#valid-raw-colors).

#### SCSS
For the API information, please visit the [color composition API page](../../api/composition/color.md).

```scss
@use 'node_modules/@growstocks/gaia';

.gs-component {
  @include gaia.color-fill('component', 'token-or-value');
}
```

### Ink
The ink color is the color applied to the content inside the component, usually text. The ink color is commonly
associated with the `color` CSS property.

This color's value can either be a [primitive token](../tokens.md#primitive-tokens), a [theme token](../tokens.md#theme-tokens), or raw value from the [specified valid raw values](#valid-raw-colors).

#### SCSS
For the API information, please visit the [color composition API page](../../api/composition/color.md).

```scss
@use 'node_modules/@growstocks/gaia';

.gs-component {
  @include gaia.color-ink('component', 'token-or-value');
}
```

### Border
The border color is the color applied to the edges of an element. The border color is commonly associated with the `border-color` CSS property.

This color's value can either be a [primitive token](../tokens.md#primitive-tokens), a [theme token](../tokens.md#theme-tokens), or raw value from the [specified valid raw values](#valid-raw-colors).

#### SCSS
For the API information, please visit the [color composition API page](../../api/composition/color.md).

```scss
@use 'node_modules/@growstocks/gaia';

.gs-component {
  @include gaia.color-border('component', 'token-or-value');
}
```

## Applying the colors together
Gaia provides an SCSS mixin that lets you apply all three in one go. It's the `color-apply()` mixin. It takes the component name, and the color map.

For the API information, please visit the [color composition API page](../../api/composition/color.md).

```scss
@use 'node_modules/@growstocks/gaia';

.gs-component {
  @include gaia.color-apply('component', (
    fill: 'token-or-value',
    ink: 'token-or-value',
    border: 'token-or-value'
  ));
}
```

### What if we don't want a color on the `x` part?
The design system doesn't prohibit you to use the **transparent color** for a specific part of the component. In fact, it is used in the outlined styles of a component (see [outlined button style](page missing)).

## Valid Raw Colors
Here's a list of all the valid raw colors you can use:

| Color                    |
|--------------------------|
| `inherit`                |
| `transparent`            |
| `rgba(<color>, 0%)`      |
| `rgba(<r> <g> <b> / 0%)` |
| `rgba(<r>, <g>, <b>, 0)` |