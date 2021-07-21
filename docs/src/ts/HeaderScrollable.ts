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

export interface HeaderScrollableOptions {
    headerClass?: string;
    breakingPoint?: string;
}

class HeaderScrollable {
    call(opt?: HeaderScrollableOptions) {

        const {
            headerClass = ".header--scrollable",
            breakingPoint = ".banner",
        } = opt || {};

        const headerElement = document.querySelector(headerClass)
        const breakingPointElement = document.querySelector(breakingPoint);

        if (!headerElement) throw new Error("Please provide a header selector.");
        if (!breakingPointElement) throw new Error("Please provide a breaking point element selector.");

        const options = {
            rootMargin: "-100px 0px 0px 0px",
        }

        // @ts-ignore
        const observer: any = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    headerElement.classList.add('scrolled', 'elevation--z3');
                } else {
                    headerElement.classList.remove('scrolled', 'elevation--z3');
                }
            });
        }, options);

        observer.observe(breakingPointElement)
    }
}

export default HeaderScrollable;