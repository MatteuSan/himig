/*
 * Copyright (c) 2022 GrowStocks
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
 */

import { GSComponent } from './types/gs-component';

export class GSComponentBase {

  protected GS_TARGET_COMPONENT: Element | HTMLElement | null;
  protected GS_REFERENCE_COMPONENT: GSComponent;

  constructor(targetComponent: Element | HTMLElement | null, referenceComponent: GSComponent) {
    this.GS_TARGET_COMPONENT = targetComponent;
    this.GS_REFERENCE_COMPONENT = referenceComponent;
  }

  protected addClass(className: string): void {
    this.GS_TARGET_COMPONENT?.classList.add(className);
  }

  protected removeClass(className: string): void {
    this.GS_TARGET_COMPONENT?.classList.remove(className);
  }

  protected hasClass(className: string): boolean {
    return this.GS_TARGET_COMPONENT?.classList.contains(className) ?? false;
  }

  protected getClasses(): DOMTokenList|undefined {
    return this.GS_TARGET_COMPONENT?.classList;
  }

  protected getComponent(): Element|HTMLElement|null {
    return this.GS_TARGET_COMPONENT;
  }

  protected getId(): string|undefined {
    return this.GS_TARGET_COMPONENT?.id;
  }

}