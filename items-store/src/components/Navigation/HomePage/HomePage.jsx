import React, { Component } from 'react';

import classes from './HomePage.css'

export default class HomePage extends Component {

    render() {
        return (
            <div className={classes.Wrapper}>
               <div className={classes.Button_Wrapper}>
               <a href="/#" className={classes["Button"]}>Our SHOP</a>
               </div>
                <div className={classes.Content_Wrapper}>
                    <div className={classes.Content}>

                        <p className={classes.Item}>Whatever</p>
                        <p className={classes.Item}>Whatever</p>
                        <p className={classes.Item}>Whatever</p>
                        <p className={classes.Item}>Whatever</p>
                        <p className={classes.Item}>Whatever</p>
                    </div>
                </div>
            </div>

        );
    }
}