import React from 'react';

import classes from './Header.css';
import Logo from '../Logo/Logo';

const toolbar = (props) => (
        <nav className={classes.Nav}>
            <ul className={classes.Toolbar}>
                <Logo class={classes.Leftnav}/>
                <li class={classes.ToolbarRight}>
                    <a href="/menu">Menu</a>
                </li>

                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/shopping-cart">Shopping Cart</a>
                </li>
            </ul>
        </nav>

);

export default toolbar;