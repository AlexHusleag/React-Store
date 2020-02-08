import React, { Component } from 'react';

import classes from '../Item/Item.css'

export default class Item extends Component {

    render() {
        return (
            <div className={classes.Showcase_Item}>
                
                <a href="/#" className={classes.ProductCard}>

                    <div className={classes.ProductCard_media} style={{"background-color": this.props.backgroundColor}}>
                        <div className={classes.ProductCard_media_inner}>
                            <img src={this.props.logo} />
                        </div>
                    </div>

                    <div class="ProductCard_actions">
                        <p>Whatever</p>
                    </div>
                    
                    <p>Mancare</p>
                    

                </a>
            </div>
        );
    }
}