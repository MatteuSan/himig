---
title: Structure Composition API
slug: /api/composition/structure
---
# Structure Composition API
## Apply Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to apply CSS properties related to a component's structure and create an API around it.

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-apply('component', (
    radius: 'md',
    gap: 'sm',
    padding: 'md',
    border-size: 'xs',
  ));
}
```

#### Syntax

```scss
@mixin struct-apply($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                                    |
|------------|-----------------------|----------------------------------------------------------------|
| $component | `string`              | The component name used for key registration.                  |
| $theme     | `map<string, string>` | The struct tokens to apply. (`radius`, `gap`, `padding`, etc.) |

## Bind Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to bind struct styles to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in struct on an already styled component.

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-bind('component', (
    radius: 'md',
    gap: 'sm',
    padding: 'md',
    border-size: 'xs',
  ));
}
```

#### Syntax

```scss
@mixin struct-bind($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                                    |
|------------|-----------------------|----------------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.                 |
| $theme     | `map<string, string>` | The struct tokens to apply. (`radius`, `gap`, `padding`, etc.) |

## Utility Mixins
These mixins are used internally by the `apply` and `bind` mixins, but you can also use them independently to apply specific struct styles.

### Width Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-width('component', ('md' 0 0 'md'));
}
```

| Parameter  | Type                                   | Description                                      |
|------------|----------------------------------------|--------------------------------------------------|
| $component | `string`                               | Component key.                                   |
| $width     | `map<string, string>, token or values` | Width tokens or custom values.                   |
| $intent    | `string`                               | Either `create` or `bind`. Defaults to `create`. |

### Height Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-height('component', ('md' 0 0 'md'));
}
```

| Parameter  | Type                                   | Description                                      |
|------------|----------------------------------------|--------------------------------------------------|
| $component | `string`                               | Component key.                                   |
| $height    | `map<string, string>, token or values` | Height tokens or custom values.                  |
| $intent    | `string`                               | Either `create` or `bind`. Defaults to `create`. |

### Radius Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-radius('component', ('md' 0 0 'md'));
}
```

| Parameter  | Type                           | Description                                      |
|------------|--------------------------------|--------------------------------------------------|
| $component | `string`                       | Component key.                                   |
| $radius    | `list<string>, token or value` | Radius token or custom radius.                   |
| $intent    | `string`                       | Either `create` or `bind`. Defaults to `create`. |


### Gap Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-gap('component', 'md');
}
```

| Parameter  | Type             | Description                                      |
|------------|------------------|--------------------------------------------------|
| $component | `string`         | Component key.                                   |
| $gap       | `token or value` | Gap token or custom value.                       |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`. |


### Margin Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-margin('component', ('md' 0 0 'md'));
}
```

| Parameter  | Type                           | Description                                      |
|------------|--------------------------------|--------------------------------------------------|
| $component | `string`                       | Component key.                                   |
| $margin    | `list<string>, token or value` | Margin token or values.                          |
| $intent    | `string`                       | Either `create` or `bind`. Defaults to `create`. |

### Padding Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-padding('component', ('md' 0 0 'md'));
}
```

| Parameter  | Type                           | Description                                      |
|------------|--------------------------------|--------------------------------------------------|
| $component | `string`                       | Component key.                                   |
| $padding   | `list<string>, token or value` | Padding token or values.                         |
| $intent    | `string`                       | Either `create` or `bind`. Defaults to `create`. |

### Shadow Mixin

```scss
@use 'pkg:@matteusan/himig';

.hs-component {
  @include himig.struct-shadow('component', 'low');
}
```

| Parameter  | Type             | Description                                      |
|------------|------------------|--------------------------------------------------|
| $component | `string`         | Component key.                                   |
| $shadow    | `token or value` | Shadow token.                                    |
| $intent    | `string`         | Either `create` or `bind`. Defaults to `create`. |