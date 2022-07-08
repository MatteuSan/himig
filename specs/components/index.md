---
title: Components
slug: /components
---
# Components
Gaia's components serve as primitive building blocks to build complex interfaces. These are carefully crafted to produce
the same experiences all throughout the GrowStocks ecosystem.

## Instantiation
All components follow the same instantiation API: Always instantiating the component inside the design system
initializer (`gaia.init()`) using the component's provided `render()` mixin.

```scss
@use 'node_modules/@growstocks/gaia';
@use 'node_modules/@growstocks/gaia/gs-component';

@include gaia.init() {
  @include gs-component.render();
}
```

It's as easy as that!

## Modification (HTML)
Modifying a component in the markup is your first way of customizing a component according to your user interface needs. By using the component's variant classes ([or your own](#extending-components)).
```html
<!-- Default Variant -->
<button class="gs-button">
    <span class="gs-button__label">Button</span>
</button>

<!-- Outlined Variant -->
<button class="gs-button is-outlined">
    <span class="gs-button__label">Button</span>
</button>
```

## Modification (SCSS)
Modifying a component in the SCSS is your second way of customizing a component. By using the parameters in the component initializer, you can globally modify the component's properties.
```scss
@use 'node_modules/@growstocks/gaia';
@use 'node_modules/@growstocks/gaia/gs-component';

@include gaia.init() {
  @include gs-component.render(
    $color: (
      fill: (
        default: 'gs-green.400',
        hover: 'gs-green.300',
        active: 'gs-green.200',
        focus: 'gs-green.300',
        disabled: 'gs-green.800',
      ),
      ink: 'gs-white.200',
      border: (
        default: 'gs-green.400',
        hover: 'gs-green.300',
        active: 'gs-green.200',
        focus: 'gs-green.300',
        disabled: 'gs-green.800',
      ),
    )
  );
}
```

## Extending Components
Creating your own variant component uses Gaia's provided extension API. Instantiate a new variant by calling the `extend()` mixin and filling in the variant name parameter.

```scss
@use 'node_modules/@growstocks/gaia';
@use 'node_modules/@growstocks/gaia/gs-component';

@include gaia.init() {
  @include gs-component.extend('large') {
    //
  }
}
```

Make adjustments to the variant by calling the modifier mixins. These mixins are: `color()`, `struct()`, and `typography`.

```scss
@use 'node_modules/@growstocks/gaia';
@use 'node_modules/@growstocks/gaia/gs-component';

@include gaia.init() {
  @include gs-component.extend('large') {
    @include gs-component.struct((
      padding: ('md' 'xl')
    ));
    @include gs-component.typography((
      size: 'subtitle',
    ));
  }
}
```