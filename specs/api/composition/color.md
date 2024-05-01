---
title: Color Composition API
slug: /api/composition/color
---
# Color Composition API
## Apply Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to apply colors based on Himig's component
color anatomy spec, and creating an API with it.

```scss
@use 'pkg:@matteusan/sentro';

.hs-component {
  @include himigcolor-apply('component', (
    fill: '',
    ink: '',
    border: ''
  ));
}
```

#### Syntax

```scss
@mixin color-apply($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                             |
|------------|-----------------------|---------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.          |
| $theme     | `map<string, string>` | The colors you want to apply. (`fill`, `ink`, `border`) |

## Bind Mixin
This mixin is located inside the main `Himig` module. This mixin allows you to bind colors based on Himig's component
color anatomy spec to an existing styled component (with the appropriate keys).

This is especially useful whenever you want to make variants in color on an already styled component.

```scss
@use 'pkg:@matteusan/sentro';

.hs-component {
  @include himigcolor-bind('component', (
    fill: '',
    ink: '',
    border: ''
  ));
}
```

#### Syntax

```scss
@mixin color-bind($component, $theme) {
  ...
}
```

| Parameter  | Type                  | Description                                             |
|------------|-----------------------|---------------------------------------------------------|
| $component | `string`              | The component name. This is used for the keys.          |
| $theme     | `map<string, string>` | The colors you want to apply. (`fill`, `ink`, `border`) |

## Border Mixin
The border mixin lets you apply border color to an element while creating an API around it that follows the Himig spec.

```scss
@use 'pkg:@matteusan/sentro';

.hs-component {
  @include himigcolor-border('component', 'primary-400');
}
```

| Parameter  | Type             | Description                                                                 |
|------------|------------------|-----------------------------------------------------------------------------|
| $component | `string`         | The component name. This is used for the keys.                              |
| $color     | `token or color` | The border color you want to apply.                                         |
| $intent    | `string`         | The intention of the color application. Choose between `create` and `bind`. |

## Fill Mixin
The fill mixin lets you apply background color to an element while creating an API around it that follows the Himig spec.

```scss
@use 'pkg:@matteusan/sentro';

.hs-component {
  @include himigcolor-fill('component', 'primary-400');
}
```

| Parameter  | Type             | Description                                                                 |
|------------|------------------|-----------------------------------------------------------------------------|
| $component | `string`         | The component name. This is used for the keys.                              |
| $color     | `token or color` | The fill color you want to apply.                                           |
| $intent    | `string`         | The intention of the color application. Choose between `create` and `bind`. |

## Ink Mixin
The ink mixin lets you apply text color to an element while creating an API around it that follows the Himig spec.

```scss
@use 'pkg:@matteusan/sentro';

.hs-component {
  @include himigcolor-ink('component', 'primary-400');
}
```

| Parameter  | Type             | Description                                                                 |
|------------|------------------|-----------------------------------------------------------------------------|
| $component | `string`         | The component name. This is used for the keys.                              |
| $color     | `token or color` | The text color you want to apply.                                           |
| $intent    | `string`         | The intention of the color application. Choose between `create` and `bind`. |