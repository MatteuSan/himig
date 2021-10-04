/*
 *
 * Copyright (c) 2021 GrowStocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

//@ts-ignore
import Alpine from 'alpinejs';

export interface SCDrawerProps {
    componentSelector?: any;
    triggerSelector?: string;
}

class SCDrawer {

    render(opt?: SCDrawerProps) {

        const {
            componentSelector = {
                component: ".sc-drawer",
                overlay: ".sc-drawer__overlay"
            },
            triggerSelector = ".sc-js-drawer__trigger",
        } = opt || {};

        const drawer: any = document.querySelector(componentSelector.component);
        const drawerOverlay: any = document.querySelector(componentSelector.overlay);
        const drawerTrigger: any = document.querySelector(triggerSelector);

        if (!drawerTrigger) {
            throw new Error('Drawer trigger class is not provided! Please provide a trigger class')
        }
        if (!drawer) {
            throw new Error('Drawer class is not provided! Please provide a class')
        }

        let isDrawerOpen = false;

        drawerTrigger.addEventListener('click', () => {

            isDrawerOpen = !isDrawerOpen;

            if (!isDrawerOpen) {
                drawer.classList.remove('visible');
                drawerOverlay.classList.remove('visible');
            } else {
                drawer.classList.add('visible');
                drawerOverlay.classList.add('visible');
            }

        });

    }

}

export default SCDrawer;
