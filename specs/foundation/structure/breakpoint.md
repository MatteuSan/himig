---
title: Breakpoint
slug: /foundation/structure/breakpoint
---
# Breakpoint
Breakpoints are points on a screen that defines an element's style. Himig uses breakpoints to create fluid and responsive
interfaces that embody its philosophies across multiple devices.

## Breakpoint Tokens
Breakpoint tokens are constant, and cannot be mutated unless specified in the theme. These tokens are crafted to fit the Growstocks branding on multiple devices.

| Token             | Value    |
|-------------------|----------|
| `breakpoint.none` | `0`      |
| `breakpoint.xs`   | `277px`  |
| `breakpoint.sm`   | `320px`  |
| `breakpoint.md`   | `640px`  |
| `breakpoint.lg`   | `890px`  |
| `breakpoint.xl`   | `1077px` |

### Modifying the breakpoints
Modifying the breakpoints are allowed if the product has a different design specification than the Growstocks brand.
Using the `breakpoint-config()` mixin, you can modify these values by passing in a map of your breakpoints in the first
parameter.

By using this mixin, you can add/modify current values but can never delete the defaults.

```scss
@use 'node_modules/@matteusan/himig';

@include himigbreakpoint-config-override((
  // Breakpoints...
));
```

If you want to completely reset the breakpoints, you can set the `$override` parameter to `true`.

```scss
@use 'node_modules/@matteusan/himig';

@include himigbreakpoint-config-override((
  // Breakpoints...
), $override: true);
```

## Applying Breakpoints
To apply a breakpoint on an element, use the `breakpoint()` mixin. Query a [breakpoint token variant](#breakpoint-tokens) in the mixin and write
content inside the declaration.

```scss
@use 'node_modules/@matteusan/himig';

.component {
  // Initial styles...
  
  @include himigbreakpoint('md') {
    // New styles...
  }
}
```