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

interface ConfigProps {
    drawer?: string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap| any;
    trigger?: string | keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap| any;
    state?: boolean;
}

class GSDrawer {

    /**
     * Static function for initializing scripts for the GSDrawer component.
     */
    static init(config?: ConfigProps) {

        const _initConfig: ConfigProps = {
            drawer: '.gs-drawer',
            trigger: '.gs-js-drawer__trigger',
            state: false
        }

        const _mergedConfig: ConfigProps = {
            ..._initConfig,
            ...config
        }

        if (_mergedConfig) {
            const _drawer = document.querySelector(_mergedConfig.drawer);
            const _trigger = document.querySelector(_mergedConfig.trigger);

            if (_mergedConfig.state === true) {
                if (!_drawer.classList.contains('open')) {
                    _drawer.classList.add('open');
                }
            } else {
                if (_drawer.classList.contains('open')) {
                    _drawer.classList.remove('open');
                }
            }

            _trigger.addEventListener('click', () => {
                _mergedConfig.state = !_mergedConfig.state;
            });
        }
    }
}