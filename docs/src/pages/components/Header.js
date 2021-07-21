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

import React, {useEffect, useState} from 'react';
import NavItem from "./NavItem";

import '../../scss/components/_header.scss';
import '../../scss/components/_navbar.scss';
import Link from "gatsby-link";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if(typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrolled(window.pageYOffset > 20)
            );
        }
    }, []);
    

    return (
        <header className={`header header--scrollable ${scrolled ? 'scrolled elevation--z3' : ''}`}>
            <div className="header__wrap">
                <div className="header__text">
                    <Link to="/">
                        <h2>Stack</h2>
                    </Link>
                </div>
                <nav className="nav">
                    <div className="nav__container">
                        <NavItem
                            icon="home"
                            label="Home"
                            isActive="true"
                            link="/"
                        />
                        <NavItem
                            icon="code"
                            label="Dev Team"
                            link="/team"
                        />
                        <NavItem
                            icon="menu_book"
                            label="Docs"
                            link="https://growstocks.gitbook.io/stack/"
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
