---
title: Applying Typography
slug: /foundation/typography/applying-typography
---
# Applying Typography
Himig's guidelines to using typography in interfaces.

## Content Typography Anatomy
A content's typography can be defined in the following properties:

1) Family
2) Size
3) Weight
4) Line Height

### Family
Font family defines the style of the content. This can signify text hierarchy, emphasis, or just a stylistic choice.

#### SCSS
For the API information, please visit the [typography composition API page](../../api/composition/typography.md).

```scss
@use 'pkg:@matteusan/sentro';

.ms-component {
  @include himigtypography-family('component', 'token-or-value');
}
```

### Size
Font size defines the size of the content. This can be useful when you want to add hierarchy in your content.

#### SCSS
For the API information, please visit the [typography composition API page](../../api/composition/typography.md).

```scss
@use 'pkg:@matteusan/sentro';

.ms-component {
  @include himigtypography-size('component', 'token-or-value');
}
```

### Weight
Font weight defines how heavy the text looks. This is particularly useful when adding hierarchy or emphasis in your
content.

#### SCSS
For the API information, please visit the [typography composition API page](../../api/composition/typography.md).

```scss
@use 'pkg:@matteusan/sentro';

.ms-component {
  @include himigtypography-weight('component', 'token-or-value');
}
```

### Line Height
Line height defines the vertical space in your content. This lets your content breathe instead of being cramped to ease
the user's reading experience.

#### SCSS
For the API information, please visit the [typography composition API page](../../api/composition/typography.md).

```scss
@use 'pkg:@matteusan/sentro';

.ms-component {
  @include himigtypography-line-height('component', 'token-or-value');
}
```

## Applying typography styles together
Himig provides an SCSS mixin that lets you apply all properties in one go. It's the `typography-apply()` mixin. It takes the component name, and the typography styles map.

For the API information, please visit the [typography composition API page](../../api/composition/typography.md).

```scss
@use 'pkg:@matteusan/sentro';

.ms-component {
  @include himigtypography-apply('component', (
    family: 'token-or-value',
    size: 'token-or-value',
    weight: 'token-or-value',
    line-height: 'token-or-value'
  ));
}
```