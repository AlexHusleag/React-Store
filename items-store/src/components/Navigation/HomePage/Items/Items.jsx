import React, { Component } from 'react';

import Item from '../Item/Item'

import classes from '../Items/Items.css'

export default class Items extends Component {

    render() {
        return (
            <div className={classes.Items}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}