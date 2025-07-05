---
title: Typography Composition API
slug: /api/composition/typography
---
# Typography Composition API
## Apply Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to apply CSS properties related to a component's typography and create an API around it.

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-apply('component', (
    family: 'serif',
    size: 'supertitle',
    weight: 'bold',
    leading: 'x-short',
    squeeze: 'x-tight',
    stretch: 'condensed'
  ));
}
```

#### Syntax

```scss
@mixin typography-apply($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                                       |
|------------|-----------------------|-------------------------------------------------------------------|
| $component | `string`              | The component name used for key registration.                     |
| $theme     | `map<string, string>` | The typography tokens to apply. (`family`, `size`, etc.)          |

## Bind Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to bind typography styles to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in typography on an already styled component.

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-bind('component', (
    family: 'serif',
    size: 'supertitle',
    weight: 'bold',
    leading: 'x-short',
    squeeze: 'x-tight',
    stretch: 'condensed'
  ));
}
```

#### Syntax

```scss
@mixin typography-bind($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                             |
|------------|-----------------------|---------------------------------------------------------|
| $component | `string`              | The component name used for key registration.           |
| $theme     | `map<string, string>` | The typography tokens to bind. (`family`, `size`, etc.) |

## Utility Mixins
These mixins are used internally by the `apply` and `bind` mixins, but you can also use them independently to apply specific typography styles.

### Family Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-family('component', ('sans-serif'));
}
```

| Parameter  | Type             | Description                                                  |
|------------|------------------|--------------------------------------------------------------|
| $component | `string`         | Component key.                                               |
| $family    | `token`          | Font family token.                                           |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`.             |

### Size Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-size('component', ('md'));
}
```

| Parameter  | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| $component | `string`         | Component key.                                           |
| $size      | `token`          | Font size token.                                         |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`.         |


### Weight Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-weight('component', ('bold'));
}
```

| Parameter  | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| $component | `string`         | Component key.                                           |
| $weight    | `token`          | Font weight token.                                       |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`.         |


### Line Height Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-line-height('component', ('normal'));
}
```

| Parameter    | Type             | Description                                              |
|--------------|------------------|----------------------------------------------------------|
| $component   | `string`         | Component key.                                           |
| $line-height | `token`          | Line-height token.                                       |
| $intent      | `string`         | Either `create` or `bind`. Defaults to `create`.         |


### Squeeze Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-squeeze('component', ('normal'));
}
```

| Parameter  | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| $component | `string`         | Component key.                                           |
| $squeeze   | `token`          | Letter-spacing token.                                    |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`.         |

---

### Stretch Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.typography-stretch('component', ('normal'));
}
```

| Parameter  | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| $component | `string`         | Component key.                                           |
| $stretch   | `token`          | Font stretch token.                                      |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`.         |
