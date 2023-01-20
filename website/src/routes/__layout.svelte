<!--
  -  Copyright (c) 2023 GrowStocks
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
  import GSButton from '$components/gs-button.svelte';
  import GSNavbarItem from '$components/gs-navbar-item.svelte';

  import favicon from '$assets/gds-icon.png';

  const defaults: Record<string, any> = {
    title: 'Gaia Design System',
    description: 'The design system for building living, breathing experiences for Growtopians.',
    url: 'https://gaia.growstocks.org',
    twitter: '@InvestmentGt',
    themeColor: ''
  };

  let title: string = defaults.title;
  let description: string = defaults.description;

  const _finalTitle = title !== defaults.title ? title + ' - ' + defaults.title : defaults.title;

  let isNavbarOpen: boolean = false;
</script>

<svelte:head>
    <title>{_finalTitle}</title>
    <meta property="description" content={description} />

    <link rel="apple-touch-icon" sizes="180x180" href={favicon} />
    <link rel="icon" type="img/png" sizes="32x32" href={favicon} />
    <link rel="icon" type="img/png" sizes="16x16" href={favicon} />

    <meta property="og:title" content={_finalTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:url" content={defaults.url} />

    <meta name="twitter:title" content={_finalTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/favicon.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={defaults.twitter} />

    <meta name="theme-color" content={defaults.themeColor} />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
</svelte:head>

<header class="gs-header">
    <div class="gs-header__wrapper">
        <div class="gs-header__section">
            <a href="/" class="gs-header__mast">
                <img aria-hidden="true" src={favicon} alt="Gaia Design System" />
                <h1>Gaia Design System</h1>
            </a>
        </div>
        <div class="gs-header__section">
            <nav class={`gs-navbar${isNavbarOpen ? ' is-open' : ''}`}>
                <ul class="gs-navbar__wrapper">
                    <GSNavbarItem label="Home" link="/" />
                    <GSNavbarItem label="Documentation" link="/docs" />
                    <!--<GSNavbarItem label="Examples" link="/examples" />-->
                    <GSNavbarItem label="GitHub" link="https://github.com/GrowStocks/gaia" />
                </ul>
            </nav>
        </div>
        <div class="gs-header__section is-navbar-trigger">
            <GSButton onClick={() => isNavbarOpen = !isNavbarOpen} type="icon-only">
                <svelte:fragment slot="icon">
                    { isNavbarOpen ? 'close' : 'menu' }
                </svelte:fragment>
            </GSButton>
        </div>
    </div>
</header>
<main>
    <slot />
</main>
<footer class="gs-footer">
    <div class="gs-footer__wrapper">
        <h2>Gaia Design System <span><small>v0.6.4</small></span></h2>
        <ul class="gs-footer__links">
            <li class="gs-footer__link">
                <a href="https://growstocks.org">Price index</a>
            </li>
            <li class="gs-footer__link">
                <a href="https://shop.growstocks.org">Services Store</a>
            </li>
            <li class="gs-footer__link">
                <a href="https://pay.growstocks.org">GrowStocks Pay</a>
            </li>
            <li class="gs-footer__link">
                <a href="https://developers.growstocks.org">GrowStocks for Developers</a>
            </li>
        </ul>
        <small>Copyright {new Date().getFullYear()} &copy; GrowStocks</small>
    </div>
</footer>

<style lang="scss" global>
  @use 'node_modules/@growstocks/gaia' with ($vue-mode: true);
  @use 'node_modules/@growstocks/gaia/gs-button';
  @use 'node_modules/@growstocks/gaia/gs-utils';

  @include gaia.init() {
    ul { list-style: none; }

    @include gs-button.render();

    .gs-header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      @include gaia.color-apply('header', (
        fill: 'surface-600',
        ink: 'surface-ink'
      ));
      @include gaia.struct-apply('header', (
        padding: 'md',
        shadow: 'sm'
      ));

      .gs-header__wrapper {
        width: 100%;
        max-width: 1077px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 0 auto;

        .gs-header__section {
          //

          &.is-navbar-trigger {
            display: grid;
            place-content: center;
            padding-right: gaia.primitive-token-get('padding.md');

            @include gaia.breakpoint-create('medium') {
              display: none;
            }
          }
        }

        .gs-header__mast {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          user-select: none;

          img {
            width: 54px;
            height: 54px;
          }

          h1 {
            @include gaia.typography-apply('header-mast', (
              size: 'title',
              weight: 'bold',
            ));
          }
        }
      }
    }

    .gs-js-navbar__trigger {
      //
    }

    .gs-navbar {
      display: gaia.key-create('navbar-visibility', none);
      position: gaia.key-create('navbar-position', fixed);
      top: 76px;
      left: 0;
      right: 0;
      @include gaia.color-apply('navbar', (
        fill: 'surface-400',
        ink: 'surface-ink'
      ));
      @include gaia.struct-apply('navbar', (
        padding: 'md',
        shadow: 'md'
      ));

      &.is-open {
        display: gaia.key-create('navbar-visibility', block);
      }

      @include gaia.breakpoint-create('medium') {
        @include gaia.key-bind('navbar-position', static);
        @include gaia.key-bind('navbar-visibility', block);
        @include gaia.color-bind('navbar', (
          fill: rgba(0 0 0 / 0)
        ));
        @include gaia.struct-bind('navbar', (
          shadow: 'none'
        ));
      }

      .gs-navbar__wrapper {
        display: flex;
        flex-flow: row nowrap;
        gap: gaia.primitive-token-get('gap.sm');

        .gs-navbar__item {
          transition: all var(--gs-transition-time) ease;
          @include gaia.struct-apply('navbar-item', (
            padding: ('sm' 'md'),
            radius: 'small'
          ));

          &:not(.is-active) {
            @include gaia.color-apply('navbar-item', (
              fill: rgba(0 0 0 / 0),
              ink: 'surface-ink'
            ));

            &:hover,
            &:focus {
              @include gaia.color-apply('navbar-item', (
                fill: rgba(#fff, 20%),
                ink: 'surface-ink'
              ));
            }

            &:active {
              @include gaia.color-apply('navbar-item', (
                fill: rgba(#fff, 33%),
                ink: 'surface-ink'
              ));
            }
          }

          &.is-active {
            @include gaia.color-apply('navbar-item', (
              fill: rgba(gaia.token-get-raw('accent-400'), 20%),
              ink: gaia.token-get('accent-400')
            ));
            font-weight: bold;
          }
        }
      }
    }

    .gs-footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      @include gaia.color-apply('header', (
        fill: 'surface-600',
        ink: 'surface-ink'
      ));
      @include gaia.struct-apply('header', (
        padding: ('lg' 'md'),
        shadow: 'sm'
      ));

      .gs-footer__wrapper {
        width: 100%;
        max-width: 1077px;
        margin: 0 auto;

        h2 {
          @include gaia.typography-apply('footer', (
            size: 'subtitle',
            weight: 'bold',
          ));

          small {
            @include gaia.typography-apply('footer', (
              size: 'small',
              weight: 'normal',
            ));
          }
        }
      }

      .gs-footer__links {
        width: 100%;
        max-width: max-content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: gaia.primitive-token-get('gap.sm');
        margin: gaia.primitive-token-get('margin.md') 0;

        .gs-footer__link {
          @include gaia.color-apply('footer-link', (
            ink: 'surface-ink',
            border: 'surface-ink'
          ));
          @include gaia.struct-apply('footer-link', (
            padding: ('sm' 'md'),
            border-width: 1px,
            border-style: solid
          ));
          transition: all var(--gs-transition-time) ease;

          &:hover {
            @include gaia.color-bind('footer-link', (
              ink: gaia.token-get('accent-400'),
              border: gaia.token-get('accent-400'),
            ));
          }

          a {
            width: 100%;
          }
        }
      }
    }
  }
</style>