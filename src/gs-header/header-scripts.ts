/*
 *  Copyright (c) 2022 GrowStocks
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

type WatchEvent = 'watch' | undefined;
type ConfigProps = 'header' | 'breakpoint';

export class GSHeader {
    static onScroll(
        action: WatchEvent,
        config?: Record<ConfigProps, any>
    ): void {
        const _initConfig: Record<ConfigProps, any> = {
            header: '.gs-header--scrolled',
            breakpoint: '.gs-hero'
        }

        const _mergedConfig: Record<ConfigProps, any> = {
            ..._initConfig,
            ...config
        };

        if (action == 'watch') {
            const header: string = _mergedConfig.header;
            const breakpoint: string = _mergedConfig.breakpoint;

            const headerElement: HTMLSelectElement | null = document.querySelector(header);
            const breakingPointElement: HTMLSelectElement | null = document.querySelector(breakpoint);

            const options: Record<string, string | number | any> = {
                rootMargin: '-100px 0px 0px 0px',
            }

            const observer: any = new IntersectionObserver(function (entries: IntersectionObserverEntry[]) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        headerElement?.classList.add('scrolled');
                    } else {
                        headerElement?.classList.remove('scrolled');
                    }
                });
            }, options);

            observer.observe(breakingPointElement)
        }
    }
}