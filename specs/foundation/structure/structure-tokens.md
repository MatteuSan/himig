---
title: Structure Tokens
slug: /foundation/structure/tokens
---
# Structure Tokens
Gaia provides an extensive list of carefully crafted, pre-made structure tokens ready to go.

## Structure Token Schema
The structure tokens follow a specific schema to make indexing much easier. The tokens follow a `none`-`xs-xl` schema and extends to a `2xl-6xl` schema when needed.

The structure token schema depends on the type of structure property. For example, `border-size` tokens is different from the `spacing` and `el-spacing` tokens.

### Spacing Tokens
Spacing tokens are used to space out (usually large or large sets of) elements outside and inside. The spacing tokens borrow the **
base-8** approach used by GitHub in their [Primer Design System](https://primer.style/css/support/spacing#spacing-scale)
.

| Token          | Value   |
|----------------|---------|
| `spacing.none` | `0`     |
| `spacing.xs`   | `4px`   |
| `spacing.sm`   | `8px`   |
| `spacing.md`   | `16px`  |
| `spacing.lg`   | `24px`  |
| `spacing.xl`   | `32px`  |
| `spacing.2xl`  | `48px`  |
| `spacing.3xl`  | `64px`  |
| `spacing.4xl`  | `80px`  |
| `spacing.5xl`  | `96px`  |
| `spacing.6xl`  | `112px` |

### Element Spacing Tokens
Element spacing is different from the regular spacing. These tokens are specifically used for components like buttons,
form fields, etc.

| Token             | Value     |
|-------------------|-----------|
| `el-spacing.none` | `0`       |
| `el-spacing.xs`   | `0.1rem`  |
| `el-spacing.sm`   | `0.3rem`  |
| `el-spacing.md`   | `0.7rem`  |
| `el-spacing.lg`   | `1.2rem`  |
| `el-spacing.xl`   | `2.3rem`  |
| `el-spacing.2xl`  | `3.4rem`  |
| `el-spacing.3xl`  | `4.5rem`  |
| `el-spacing.4xl`  | `6.1rem`  |
| `el-spacing.5xl`  | `8.2rem`  |
| `el-spacing.6xl`  | `12.3rem` |

### Dimension Tokens
Dimension tokens are applied to anything that defines the width and height of an element. We recommend only using these
for max and min values to preserve the responsiveness.

| Token            | Value    |
|------------------|----------|
| `dimension.none` | `0`      |
| `dimension.xs`   | `277px`  |
| `dimension.sm`   | `320px`  |
| `dimension.md`   | `640px`  |
| `dimension.lg`   | `890px`  |
| `dimension.xl`   | `1077px` |