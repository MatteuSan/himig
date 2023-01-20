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
<main class="content-wrap">
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
@use '../scss/main.scss';
</style>