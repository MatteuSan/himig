---
title: Typography Tokens
slug: /foundation/typography/tokens
---
# Typography Tokens
Gaia provides an extensive list of carefully crafted, pre-made typography tokens ready to go.

## Typography Token Schema
The typography tokens follow a specific schema to make indexing much easier. Each token type follows its own schema:

| Token         | Schema                                                |
|---------------|-------------------------------------------------------|
| `family`      | Descriptive font name-based schema.                   |
| `size`        | `none`-`xs-xl` schema; extends to a `2xl-6xl` schema. |
| `weight`      | Descriptive `light-black` schema.                     |
| `line-height` | Descriptive `broad-condensed` schema.                 |

### Family Tokens
| Token               | Value                         |
|---------------------|-------------------------------|
| `family.sans-serif` | `'Inter', sans-serif`         |
| `family.mono`       | `'Jetbrains Mono', monospace` |
| `family.serif`      | `'Lora', serif`               |

### Size Tokens
| Token      | Value  |
|------------|--------|
| `size.xs`  | `12px` |
| `size.sm`  | `16px` |
| `size.md`  | `20px` |
| `size.lg`  | `25px` |
| `size.xl`  | `30px` |
| `size.2xl` | `36px` |
| `size.3xl` | `42px` |
| `size.4xl` | `49px` |
| `size.5xl` | `57px` |
| `size.6xl` | `66px` |

### Weight Tokens
| Token           | Value  |
|-----------------|--------|
| `weight.light`  | `300`  |
| `weight.normal` | `400`  |
| `weight.bold`   | `700`  |
| `weight.black`  | `900`  |

### Line Height Tokens
| Token                   | Value  |
|-------------------------|--------|
| `line-height.broad`     | `2`    |
| `line-height.normal`    | `1.5`  |
| `line-height.condensed` | `1.25` |