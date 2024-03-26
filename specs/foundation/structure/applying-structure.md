---
title: Applying Structure
slug: /foundation/structure/applying-structure
---
# Applying Structure
Himig's guidelines to applying structure to an element.

## Component Structure Anatomy
The component structure anatomy uses the native DOM structuring, wherein we take advantage of these parts:

1) Dimensions
2) Padding
3) Margin
4) Border

### Dimensions
Dimensions define the width and height of an element in a 2D space. This is commonly associated with the `width`, and `height` CSS properties.

#### SCSS
For the API information, please visit the [structure composition API page](../../api/composition/structure.md).

```scss
@use 'node_modules/@matteusan/himig';

.component {
  @include himigstruct-width('component', 'token-or-map-or-value');
}
```

### Padding
Padding defines the space inside an element. This is commonly associated with the `padding` CSS property.

#### SCSS
For the API information, please visit the [structure composition API page](../../api/composition/structure.md).

```scss
@use 'node_modules/@matteusan/himig';

.component {
  @include himigstruct-padding('component', 'token-or-value');
}
```
### Margin
Margin defines the space outside an element. This is commonly associated with the `margin` CSS property.

#### SCSS
For the API information, please visit the [structure composition API page](../../api/composition/structure.md).

```scss
@use 'node_modules/@matteusan/himig';

.component {
  @include himigstruct-margin('component', 'token-or-value');
}
```

### Border
Border defines the space at the edges of an element. This is commonly associated with the `border-size` CSS property.

#### SCSS
For the API information, please visit the [structure composition API page](../../api/composition/structure.md).

```scss
@use 'node_modules/@matteusan/himig';

.component {
  @include himigstruct-border('component', 'token-or-value');
}
```

## Applying structs together
Himig provides an SCSS mixin that lets you apply all structs in one go. It's the `struct-apply()` mixin. It takes the component name, and the struct map.

For the API information, please visit the [structure composition API page](../../api/composition/structure.md).

```scss
@use 'node_modules/@matteusan/himig';

.ms-component {
  @include himigstruct-apply('component', (
    width: (
      default: 'token-or-value',
      max: 'token-or-value'
    ),
    height: 'token-or-value',
    padding: 'token-or-value',
    margin: 'token-or-value',
    border: 'token-or-value'
  ));
}
```