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
| `gs-white.200` | `#ffffff` |
| `gs-white.300` | `#f70`    |
| `gs-white.400` | `#f70`    |
| `gs-white.600` | `#f70`    |
| `gs-white.800` | `#c4c4c4` |

| Key            | Hex value |
|----------------|-----------|
| `gs-black.200` | `#232323` |
| `gs-black.300` | `#f70`    |
| `gs-black.400` | `#f70`    |
| `gs-black.600` | `#f70`    |
| `gs-black.800` | `#000000` |

| Key           | Hex value |
|---------------|-----------|
| `gs-grey.200` | `#545454` |
| `gs-grey.300` | `#434343` |
| `gs-grey.400` | `#323232` |
| `gs-grey.600` | `#212121` |
| `gs-grey.800` | `#101010` |

| Key          | Hex value |
|--------------|-----------|
| `gs-red.200` | `#f70`    |
| `gs-red.300` | `#f70`    |
| `gs-red.400` | `#f70`    |
| `gs-red.600` | `#f70`    |
| `gs-red.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `gs-orange.200` | `#f70`    |
| `gs-orange.300` | `#f70`    |
| `gs-orange.400` | `#f70`    |
| `gs-orange.600` | `#f70`    |
| `gs-orange.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `gs-yellow.200` | `#f70`    |
| `gs-yellow.300` | `#f70`    |
| `gs-yellow.400` | `#f70`    |
| `gs-yellow.600` | `#f70`    |
| `gs-yellow.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `gs-lime.200` | `#f70`    |
| `gs-lime.300` | `#f70`    |
| `gs-lime.400` | `#f70`    |
| `gs-lime.600` | `#f70`    |
| `gs-lime.800` | `#f70`    |

| Key            | Hex value |
|----------------|-----------|
| `gs-green.200` | `#f70`    |
| `gs-green.300` | `#f70`    |
| `gs-green.400` | `#f70`    |
| `gs-green.600` | `#f70`    |
| `gs-green.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `gs-aqua.200` | `#f70`    |
| `gs-aqua.300` | `#f70`    |
| `gs-aqua.400` | `#f70`    |
| `gs-aqua.600` | `#f70`    |
| `gs-aqua.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `gs-blue.200` | `#f70`    |
| `gs-blue.300` | `#f70`    |
| `gs-blue.400` | `#f70`    |
| `gs-blue.600` | `#f70`    |
| `gs-blue.800` | `#f70`    |

| Key             | Hex value |
|-----------------|-----------|
| `gs-purple.200` | `#f70`    |
| `gs-purple.300` | `#f70`    |
| `gs-purple.400` | `#f70`    |
| `gs-purple.600` | `#f70`    |
| `gs-purple.800` | `#f70`    |

| Key           | Hex value |
|---------------|-----------|
| `gs-pink.200` | `#f70`    |
| `gs-pink.300` | `#f70`    |
| `gs-pink.400` | `#f70`    |
| `gs-pink.600` | `#f70`    |
| `gs-pink.800` | `#f70`    |

## Color Token Usage
These color tokens do not come with the main compiled style, hence we will use a special mixin to retrieve them from a specific file.

```scss
@use 'node_modules/@growstocks/gaia';

.component {
  @include gaia.color-apply('component', (
    fill: gaia.color-token-get('gs-blue.400')
  ));
}
```