import React, { Component } from 'react';

import Items from './Items/Items'

import classes from './HomePage.css'

export default class HomePage extends Component {

    render() {
        return (
            <div className={classes.Wrapper}>
                <div className={classes.Button_Wrapper}>
                    <a href="/#" className={classes["Button"]}>Our SHOP</a>
                </div>
                <div className={classes.Content_Wrapper}>
                    <Items />
                </div>
            </div>
        );
    }
}