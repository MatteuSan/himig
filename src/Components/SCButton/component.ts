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

// @ts-ignore
import Alpine from 'alpinejs';

class SCButton {
    ripple() {
        function createRipple(event: any) {
            const button: any = event.currentTarget;
            const circle: any = document.createElement('span');
            const diameter: any = Math.max(button.clientWidth, button.clientHeight);
            const radius: any = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
            circle.classList.add('sc-button__ripple');

            const ripple = button.getElementsByClassName('sc-button__ripple')[0];

            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        }

        const buttons: any = document.querySelector('.sc-button');

        for (const button of buttons) {
            button.addEventListener("click", createRipple);
        }
    }
}

export default SCButton;
