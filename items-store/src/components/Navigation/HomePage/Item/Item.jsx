import React, { Component } from 'react';

import classes from '../Item/Item.css'

export default class Item extends Component {

    state ={
        totalAvailable: 20,
        totalSold: 0,
        soldOut: false
    };
   
    render() {
        return (
            <div className={classes.Showcase_Item}>        
                <a href="/#" className={classes.ProductCard}>
                    <div className={classes.ProductCard_media} style={{"background-color": this.props.backgroundColor}}>
                        <div className={classes.ProductCard_media_inner}>
                            <img src={this.props.logo} />
                        </div>
                    </div>
                    <div class={classes.ProductCard_actions}>
                        <button className={classes.Button, (this.state.soldOut ? classes.Soldout : (this.state.totalAvailable < 20 ? classes.Limited_Edition : classes.Available ))}>
                            <p className={classes.Button_text}>{(this.state.totalAvailable >= 20 ? "Available" : 
                                                                (this.state.totalAvailable < 20 && this.state.totalAvailable > 0 ? "Limited Edition": "Soldout")
                                                                )}</p>
                        </button>
                    </div>
                </a>
            </div>
        );
    }
}