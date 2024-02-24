<!--
  -  Copyright (c) 2024 MatteuSan
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

<script lang="ts">
  type GSButtonStyleType = 'outlined' | 'filled' | 'filled raised' | 'icon-only';
  type GSButtonStateType = 'success' | 'warning' | 'danger';
  export type GSButtonType = GSButtonStyleType | GSButtonStateType | `${ GSButtonStyleType } ${ GSButtonStateType }`;

  export let label: string | undefined;
  export let link: string | undefined = '';
  export let type: GSButtonType | string | undefined = '';
  export let isDisabled: boolean = false;
  export let onClick: ((e: Event) => void) | undefined;

  const assertClassSet = (classes: string | null): string => {
    if (classes) {
      if (classes == null) return '';
      const finalClasses = [];
      classes.split(' ').forEach((className: string) => {
        finalClasses.push('is-' + className);
      });
      return finalClasses.join(' ');
    }
    return '';
  }

  const assertLinkTarget = (link: string): string => {
    if (link) if (!link.indexOf('http://') && !link.indexOf('https://')) return '_self';
    return '_blank';
  }

  const _variantClassSet: string = assertClassSet(type);
  const _linkTarget: string = assertLinkTarget(link);
</script>

{#if !link}
    <button
        class="ms-button{type && ' ' + _variantClassSet}"
        on:click={onClick}
        aria-label={label}
        disabled={isDisabled}
    >
        {#if $$slots.icon}
            <i class="ms-button__icon material-symbols-outlined">
                <slot name="icon"></slot>
            </i>
        {/if}
        {#if $$slots}
            <span class="ms-button__label">
                <slot></slot>
            </span>
        {/if}
    </button>
{:else}
    <a href={link} class={`ms-button${type ? ' ' + _variantClassSet : '' }`} target={_linkTarget} rel="noreferrer"
       aria-label={label}>
        {#if $$slots.icon}
            <i aria-hidden="true" class="ms-button__icon material-symbols-outlined">
                <slot name="icon"></slot>
            </i>
        {/if}
        {#if $$slots}
            <span class="ms-button__label">
                <slot></slot>
            </span>
        {/if}
    </a>
{/if}