import React, { Component } from 'react';

// import { Route, Link } from 'react-router-dom';

import Item from '../Item/Item'

import classes from './Items.css'

import lizard from '../../../assets/lizard.png'

import ShowcaseItem from '../Item/Showcase-Item/Showcase-Item'

export default class Items extends Component {

    render() {
        return (
            <div className={classes.Items}>
                <Item logo={lizard}
                    productName="lizard"
                    backgroundColor="#FEE8FF"
                    productCategory="Toys"
                    productNameColor="red"
                />
                <Item backgroundColor="#444444"/>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}