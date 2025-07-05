---
title: Constants
slug: /api/constants
---
# Constants
These are exported constants available for consumption. You can use them directly using the `himig` import namespace.

## Color Constants
```scss
$fill-default-opacity: 0%;
$fill-hover-opacity: 20%;
$fill-focus-opacity: 20%;
$fill-active-opacity: 33%;

$border-default-opacity: 0%;
$border-hover-opacity: 2%;
$border-focus-opacity: 2%;
$border-active-opacity: 3.3%;

$outline-focus-opacity: 50%;

/// @type map
/// @description helper variable for inheriting values for all color properties
$color-inherit-template: (
  fill: inherit,
  ink: inherit,
  border: inherit
);
```

## Struct Constants
```scss
/// @type map
/// @description helper variable for inheriting values for all struct properties
$struct-inherit-template: (
  width: inherit,
  height: inherit,
  radius: inherit,
  padding: inherit,
  margin: inherit,
  gap: inherit,
  border-width: inherit,
  border-style: inherit,
  shadow: inherit
);
```

## Typography Constants
```scss
/// @type map
/// @description helper variable for inheriting values for all typography properties
$type-inherit-template: (
  family: inherit,
  size: inherit,
  weight: inherit,
  line-height: inherit
);
```