import React, { Component } from 'react';

import classes from '../Item/Item.css'

export default class Item extends Component {

    render() {
        return (
            <div className={classes.Item}>
                <p>Whatever</p>
            </div>        
        );
    }
}