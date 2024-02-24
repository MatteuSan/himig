---
title: Color Tokens
slug: /foundation/color/tokens
---
# Color Tokens
Gaia provides an extensive list of carefully crafted, pre-made color tokens ready to go.

## Color Token Schema
The color tokens follow a specific schema to make indexing much easier. The color tokens follow a `200-800` color schema:

- 200 → lightest color
- 300 → lighter color
- 400 → base color
- 600 → darker color
- 800 → darkest color

This schema is more than enough to cover the pre-made tokens.

### Color Theme Schema
The [color theme](../theme.md) schema will follow the same schema in the variant generation, except the `-ink` theme token variant.

## Color Token Index
| Key            | Hex value |
|----------------|-----------|
| `ms-white.200` | `#ffffff` |
| `ms-white.300` | `#f70`    |
| `ms-white.400` | `#f70`    |
| `ms-white.600` | `#f70`    |
| `ms-white.800` | `#c4c4c4` |

| Key            | Hex value |
|----------------|-----------|
| `ms-black.200` | `#232323` |
| `ms-black.300` | `#f70`    |
| `ms-black.400` | `#f70`    |
| `ms-black.600` | `#f70`    |
| `ms-black.800` | `#000000` |

| Key           | Hex value |
|---------------|-----------|
| `ms-grey.200` | `#545454` |
| `ms-grey.300` | `#434343` |
| `ms-grey.400` | `#323232` |
| `ms-grey.600` | `#212121` |
| `ms-grey.800` | `#101010` |

| Key          | Hex value |
|--------------|-----------|
| `ms-red.200` | `#f70`    |
| `ms-red.300` | `#f70`    |
| `ms-red.400` | `#f70`    |
| `ms-red.600` | `#f70`    |
| `ms-red.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `ms-orange.200` | `#f70`    |
| `ms-orange.300` | `#f70`    |
| `ms-orange.400` | `#f70`    |
| `ms-orange.600` | `#f70`    |
| `ms-orange.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `ms-yellow.200` | `#f70`    |
| `ms-yellow.300` | `#f70`    |
| `ms-yellow.400` | `#f70`    |
| `ms-yellow.600` | `#f70`    |
| `ms-yellow.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `ms-lime.200` | `#f70`    |
| `ms-lime.300` | `#f70`    |
| `ms-lime.400` | `#f70`    |
| `ms-lime.600` | `#f70`    |
| `ms-lime.800` | `#f70`    |

| Key            | Hex value |
|----------------|-----------|
| `ms-green.200` | `#f70`    |
| `ms-green.300` | `#f70`    |
| `ms-green.400` | `#f70`    |
| `ms-green.600` | `#f70`    |
| `ms-green.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `ms-aqua.200` | `#f70`    |
| `ms-aqua.300` | `#f70`    |
| `ms-aqua.400` | `#f70`    |
| `ms-aqua.600` | `#f70`    |
| `ms-aqua.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `ms-blue.200` | `#f70`    |
| `ms-blue.300` | `#f70`    |
| `ms-blue.400` | `#f70`    |
| `ms-blue.600` | `#f70`    |
| `ms-blue.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `ms-purple.200` | `#f70`    |
| `ms-purple.300` | `#f70`    |
| `ms-purple.400` | `#f70`    |
| `ms-purple.600` | `#f70`    |
| `ms-purple.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `ms-pink.200` | `#f70`    |
| `ms-pink.300` | `#f70`    |
| `ms-pink.400` | `#f70`    |
| `ms-pink.600` | `#f70`    |
| `ms-pink.800` | `#f70`    |

## Color Token Usage
These color tokens do not come with the main compiled style, hence we will use a special mixin to retrieve them from a specific file.

```scss
@use 'node_modules/@growstocks/gaia';

.component {
  @include gaia.color-apply('component', (
    fill: gaia.color-token-get('ms-blue.400')
  ));
}
```