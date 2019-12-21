import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
        <nav className={classes.Nav}>
            <ul className={classes.Toolbar}>
                <Logo class={classes.Leftnav}/>
                <li class={classes.ToolbarRight}>MENU</li>
                <li>CONTACT</li>
                <li>SHOPPING CART</li>
            </ul>
        </nav>

);

export default toolbar;