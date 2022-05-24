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

import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import './gs-footer.module.scss';


function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  const { copyright, version } = footer;
  return (
    <footer className="gs-footer">
      <div className="gs-footer__content">
        <h4 className="gs-footer__title">
          Gaia Design System <span className="gs-footer__version">v{version}</span>
        </h4>
        <p className="gs-footer__copyright">{ copyright }</p>
      </div>
      <div className="gs-footer__links">
        <a href="https://growstocks.org" className="gs-link">GrowStocks</a>
        <a href="https://github.com/GrowStocks" className="gs-link">GitHub</a>
        <a href="https://legal.growstocks.org" className="gs-link">Legal</a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
