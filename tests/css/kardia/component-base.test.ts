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

import { GSComponentBase } from '@growstocks/gaia/kardia';

class TestComponent extends GSComponentBase {
  constructor() {
    super(
      document.querySelector('#bruh'),
      'gs-button'
    );
  }
}

const testComponent = new TestComponent();

describe('Kardia Component Base [class]', () => {
  it('initializes a component', () => {
    expect(new TestComponent()).toBeInstanceOf(GSComponentBase);
  });

  it('retrieves the component element information', () => {
    expect(new TestComponent().getComponent()).toBe(document.querySelector('#bruh'));
  });

  it('retrieves the reference component information', () => {
    expect(new TestComponent().getReference()).toBe('gs-button');
  });
});