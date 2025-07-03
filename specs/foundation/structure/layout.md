---
title: Layout
slug: /foundation/structure/layout
---
# Layout
Layout defines the static behavior of an element in an interface. Himig uses layout to organize content in an interface.

## Flow
By default, Himig uses a flex-box column-flowing layout scheme. However, you can turn on 'grid mode' by changing a property inside the main content wrapper.

### Grid mode
To turn on grid mode, add this line in your Himig init content block:

```scss
@include himig.key-bind('content-wrap-display', grid);
```

In grid mode, Himig uses the 12-column grid system to cover all use cases for layout on multiple devices.

Read more about this layout system [here](https://m2.material.io/design/layout/responsive-layout-grid.html).

| Breakpoint      | # of columns |
|-----------------|--------------|
| `breakpoint.sm` | 4            |
| `breakpoint.md` | 8            |
| `breakpoint.lg` | 12           |

## Implementing Layout
We found that using utility classes to compose layouts is the way to go. Hence, we've not provided any form of mixin to
let you compose layouts.