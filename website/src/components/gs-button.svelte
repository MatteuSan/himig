<!--
  -  Copyright (c) 2022 GrowStocks
  -
  -  Permission is hereby granted, free of charge, to any person obtaining a copy
  -  of this software and associated documentation files (the "Software"), to deal
  -  in the Software without restriction, including without limitation the rights
  -  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  -  copies of the Software, and to permit persons to whom the Software is
  -  furnished to do so, subject to the following conditions:
  -
  -  The above copyright notice and this permission notice shall be included in all
  -  copies or substantial portions of the Software.
  -
  -  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  -  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  -  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  -  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  -  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  -  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  -  SOFTWARE.
  -->

<style lang="scss">
  @use 'node_modules/@growstocks/gaia' with ($vue-mode: true);
  @use 'node_modules/@growstocks/gaia/gs-button';

  @include gs-button.render();
</style>

<script lang="ts">
  import { GSButtonType } from '../lib/types/gs-button-types';

  export let label: string | undefined;
  export let link: string | undefined = null;
  export let type: GSButtonType | string | undefined = null;
  export let isDisabled: boolean = false;
  export let onClick: ((e: Event) => void) | undefined;

  const assertClassSet = (classes: string): string => {
    const finalClasses = [];
    classes.split(' ').forEach((className: string) => {
      finalClasses.push('is-' + className);
    });
    return finalClasses.join(' ');
  };

  const assertLinkTarget = (link: string): string => {
    if (!link.indexOf('http://') && !link.indexOf('https://')) {
      return '_self';
    }
    return '_blank';
  };

  const _variantClassSet: string = assertClassSet(type);
  const _linkTarget: string = assertLinkTarget(link);
</script>

{#if !link}
    <button
        class="gs-button{type && ' ' + _variantClassSet}"
        disabled={isDisabled}
        on:click={onClick}
        aria-label={label}
    >
        {#if $$slots.icon}
            <i class="gs-button__icon">
                <slot name="icon"></slot>
            </i>
        {/if}
        {#if $$slots}
            <span class="gs-button__label">
                <slot></slot>
            </span>
        {/if}
    </button>
{:else}
    <a href={link} target={_linkTarget} rel="noreferrer" aria-label={label}>
        {#if $$slots.icon}
            <i class="gs-button__icon">
                <slot name="icon"></slot>
            </i>
        {/if}
        {#if $$slots}
            <span class="gs-button__label">
                <slot></slot>
            </span>
        {/if}
    </a>
{/if}