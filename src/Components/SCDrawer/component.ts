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

export interface SCDrawerConstructor {
    trigger?: string;
    triggerIcon?: string;
    drawerClass?: string
}

class SCDrawer {

    call(opt?: SCDrawerConstructor) {

        const {
            trigger = ".sc-drawer__trigger",
            triggerIcon = ".sc-drawer__trigger__icon",
            drawerClass = ".sc-drawer"
        } = opt || {};

        const drawerTrigger: any = document.querySelector(trigger);
        const drawerTriggerIcon: any = document.querySelector(triggerIcon);
        const drawer: any = document.querySelector(drawerClass);

        if (!drawerTrigger) {
            throw new Error('Drawer trigger class is not provided! Please provide a trigger class')
        }
        if (!drawer) {
            throw new Error('Drawer class is not provided! Please provide a class')
        }

        let drawerData = Alpine.reactive({ drawer_open: true });

        Alpine.effect(() => {
            drawer.show = drawerData.drawer_open;
            drawerTriggerIcon.textContent = drawerData.drawer_open ? 'close' : 'menu';
            console.log(drawerData.drawer_open);
        });

        drawerTrigger.addEventListener('click', function(){
            drawerData = !drawerData;
        });

    }

}


export default SCDrawer;
