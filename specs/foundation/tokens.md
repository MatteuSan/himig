---
title: Tokens
slug: /foundation/tokens
---
# Tokens
Gaia uses tokens as the foundation of its design. Tokens provide the smallest unit of design in an interface.

## Token-Driven Architecture
> Token-driven architecture is a type of design system architecture that uses design tokens to run the designs. Design
> tokens are singular, immutable, and powerful values/rules that govern over the design system. <br/>
> 
> **- [Dev Protocol](https://hashi-docs.netlify.app/docs/develop/concepts#token-driven-architecture)**

The token-driven architecture allows us to power the design language to create a more consistent feel in the design
system, and in turn allow our developers (and you!) to build user experiences with confidence.

## Types of tokens
Gaia has two types of tokens, primitive tokens, and theme tokens.

### Primitive tokens
Primitive tokens have no theme value attached to them, and are generally used as 'for-value' only. These include the
pre-made color tokens, struct tokens, typography tokens, etc. These tokens cannot be accessed anywhere in the design
system apart from using it in global theming and component theming.

### Theme tokens
Theme tokens are the tokens that are most used in the design system, these token can be accessed all throughout the
design system. These drive the entire design system. Theme tokens are generally more organized. Theme tokens can take
both primitive token values, and user provided
values.

## Token Syntax
It is important to learn the token syntax to help you make sense of its nature when querying.

All tokens are in `snake-case` and **CANNOT** be in `camelCase`.

### Primitive token syntax
Primitive tokens have this same exact syntax:
```txt
[key].[variant]
```

For example:
```txt
ms-red.400
ms-white.200
```

### Theme token syntax
Theme tokens have a different syntax than the previous token type.
```txt
[key]-[variant]
```

For example:
```txt
primary-400
accent-200
surface-ink
```