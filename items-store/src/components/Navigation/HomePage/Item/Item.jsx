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
                        <button className={classes.Button}>
                            <p className={classes.Button_text}>{this.props.buttonText}</p>
                        </button>
                    </div>
                    
                    {/* <p>Mancare</p> */}
                </a>
            </div>
        );
    }
}