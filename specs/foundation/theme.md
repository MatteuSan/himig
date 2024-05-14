---
title: Theme
slug: /foundation/theme
---
# Theme
The theme allows you to organize tokens in a more manageable way. It prepares the tokens for component use as the raw tokens
are commonly not allowed for component use.

The theme governs three aspects of the design system: Color, structure, and typography.

## Color Theming
The color theme is defined in four different parts:

1) **Primary Color** - Defines the color of most of the medium-sized surfaces like cards, profiles, lists, etc.
2) **Accent Color** - Defines the color of elements that require attention like a button, alert, badge, etc.
3) **Surface Colors** - Defines the color of most of the large-sized surfaces like overviews, headers, appbars, navigation bars etc.
4) **Background Color** - Defines the color of the surface all elements will interact on.
5) **State Colors** - Defines the color of surfaces that indicate a state like error, warning, and success.

#### SCSS
Typically, when setting this up the design system comes in with the GS Theme by default. To override these, you can use
a [color token key](color/color-tokens.md) to change the color. Otherwise, if you wish to use raw color values, you'd
have to pass in a `map` with the [`200-800` schema](color/color-tokens.md#color-theme-schema).

| $parameter    | Type                   |
|---------------|------------------------|
| `$primary`    | Color Token Key or Map |
| `$accent`     | Color Token Key or Map |
| `$surface`    | Color Token Key or Map |
| `$background` | Color Token            |
| `$error`      | Color Token Key or Map |

```scss
@use '@matteusan/sentro';

@include himig.init(
  $surface: (
    200: #f70,
    300: #f70,
    400: #f70,
    600: #f70,
    800: #f70,
  ),
  $accent: 'ms-yellow',
  $background: 'ms-green.800',
) {
  // Components...
}
```

## Structure Theming
The structure theme is divided into different portions:

1) **Radius** - Defines the corner radii of an element.
2) **Breakpoints** - Defines points on the screen where certain styles can happen.
3) **Dimensions** - Defines the width and height of an element.

#### SCSS
Typically, when setting this up the design system comes in with the GS Theme by default. To override these, pass in a
map, insert a theme variant, and use
a [structure token key](structure/structure-tokens.md) to change the value, or pass in a raw value if you want something
more custom.

| $parameter     | Type                                 |
|----------------|--------------------------------------|
| `$radius`      | Map of Structure Tokens or raw value |
| `$breakpoints` | Map of Structure Tokens or raw value |

```scss
@use '@matteusan/sentro';

@include himig.init(
  $radius: (
    small: 'radius.sm',
    medium: 'radius.md',
    large: 'radius.lg',
  ),
  $breakpoints: (
    small: 324px,
    medium: 'breakpoint.md',
    large: 'breakpoint.lg'
  )
) {
  // Components...
}
```

## Typography Theming
Typography Theming is divided by purpose:

1) **Global** - Defines the entirety of the typography theme
2) **Supertitle** - For large headings, commonly used in hero components.
3) **Title** - For headings. This defines a section of the site.
4) **Subtitle** - For subheadings. This defines a sub section of a section.
5) **Body** - The default text style. Applies to most content.
6) **Mono** - The default mono text style. Applies to code snippets, especially in pages that displays logs and metadata.
7) **Small** - For small texts. Applies to content that are minor in hierarchy.

#### SCSS
Typically, when setting this up the design system comes in with the GS Theme by default. To override these, pass in a
map, insert your desired property, and use
a [typography token key](typography/typography-tokens.md) to change the value, or pass in a raw value if you want
something more custom.

```scss
@use '@matteusan/sentro';

@include himig.init(
  $global: (
    family: 'family.sans-serif',
    size: 'size.sm',
    weight: 'weight.normal',
    line-height: 'line-height.normal'
  ),
  $supertitle: (
    family: ('Open Sans', sans-serif),
    size: 'size.2xl',
    weight: 'weight.black'
  ),
) {
  // Components...
}
```