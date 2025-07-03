---
title: Typography Tokens
slug: /foundation/typography/tokens
---
# Typography Tokens
Himig provides an extensive list of carefully crafted, pre-made typography tokens ready to go.

## Typography Token Schema
The typography tokens follow a specific schema to make indexing much easier. Each token type follows its own schema:

| Token         | Schema                                                |
|---------------|-------------------------------------------------------|
| `family`      | Descriptive font name-based schema.                   |
| `size`        | `none`-`xs-xl` schema; extends to a `2xl-6xl` schema. |
| `weight`      | Descriptive `light-black` schema.                     |
| `line-height` | Descriptive `x-short-x-tall` schema.                  |
| `squeeze`     | Descriptive `x-tight-x-loose` schema.                 |
| `stretch`     | Descriptive `x-condensed-x-wide` schema.              |

### Family Tokens
| Token               | Value                         |
|---------------------|-------------------------------|
| `family.mono`       | `'Jetbrains Mono', monospace` |
| `family.sans-serif` | `'Inter', sans-serif`         |
| `family.serif`      | `'Noto Serif Display', serif` |


### Size Tokens
| Token      | Value                                                                               |
|------------|-------------------------------------------------------------------------------------|
| `size.xs`  | `clamp(#{tools.to-rem(9.60px)}, 0.6718rem + 0.1409vw, #{tools.to-rem(12.00px)})`    |
| `size.sm`  | `clamp(#{tools.to-rem(12.00px)}, 0.8048rem + 0.3509vw, #{tools.to-rem(16.00px)})`   |
| `size.md`  | `clamp(#{tools.to-rem(15.00px)}, 0.9594rem + 0.6716vw, #{tools.to-rem(21.33px)})`   |
| `size.lg`  | `clamp(#{tools.to-rem(18.75px)}, 1.1372rem + 1.15vw, #{tools.to-rem(28.43px)})`     |
| `size.xl`  | `clamp(#{tools.to-rem(23.44px)}, 1.3387rem + 1.8515vw, #{tools.to-rem(37.90px)})`   |
| `size.2xl` | `clamp(#{tools.to-rem(29.30px)}, 1.563rem + 2.8663vw, #{tools.to-rem(50.52px)})`    |
| `size.3xl` | `clamp(#{tools.to-rem(36.62px)}, 1.8066rem + 4.3184vw, #{tools.to-rem(67.34px)})`   |
| `size.4xl` | `clamp(#{tools.to-rem(45.78px)}, 2.0621rem + 6.3786vw, #{tools.to-rem(89.76px)})`   |
| `size.5xl` | `clamp(#{tools.to-rem(57.22px)}, 2.3163rem + 9.2803vw, #{tools.to-rem(119.66px)})`  |
| `size.6xl` | `clamp(#{tools.to-rem(71.53px)}, 2.5469rem + 13.3428vw, #{tools.to-rem(159.50px)})` |


### Weight Tokens
| Token           | Value |
|-----------------|-------|
| `weight.light`  | `200` |
| `weight.normal` | `400` |
| `weight.bold`   | `700` |
| `weight.black`  | `900` |


### Line Height Tokens
| Token                   | Value  |
|-------------------------|--------|
| `line-height.x-tall`    | `2.25` |
| `line-height.tall`      | `2`    |
| `line-height.broad`     | `2`    |
| `line-height.normal`    | `1.5`  |
| `line-height.short`     | `1.25` |
| `line-height.x-short`   | `1.1`  |
| `line-height.condensed` | `1.25` |

### Squeeze Tokens
| Token             | Value                |
|-------------------|----------------------|
| `squeeze.x-tight` | `tools.to-rem(-2px)` |
| `squeeze.tight`   | `tools.to-rem(-1px)` |
| `squeeze.normal`  | `normal`             |
| `squeeze.loose`   | `tools.to-rem(1px)`  |
| `squeeze.x-loose` | `tools.to-rem(2px)`  |

### Stretch Tokens
| Token                 | Value             |
|-----------------------|-------------------|
| `stretch.x-condensed` | `ultra-condensed` |
| `stretch.condensed`   | `condensed`       |
| `stretch.normal`      | `normal`          |
| `stretch.wide`        | `expanded`        |
| `stretch.x-wide`      | `ultra-expanded`  |

