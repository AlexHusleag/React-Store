import React, { Component } from 'react';

import Item from '../Item/Item'

import classes from '../Items/Items.css'

import lizard from '../../../../assets/lizard.png'

export default class Items extends Component {

    render() {
        return (
            <div className={classes.Items}>
                <Item logo={lizard}
                      backgroundColor="#FEE8FF"
                    //   buttonText="Available"
                      />
                <Item backgroundColor="#444444"
                    //   buttonText="Limited Edition"
                      />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}