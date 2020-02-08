import React, { Component } from 'react';

import Item from '../Item/Item'

import classes from '../Items/Items.css'

import lizard from '../../../../assets/lizard.png'

export default class Items extends Component {

    render() {
        return (
            <div className={classes.Items}>
                <Item logo={lizard}
                    //   backgroundColor="#FEE8FF"/>
                    backgroundColor="#444444"/>
                <Item backgroundColor="#444444"/>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}