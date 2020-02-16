import React, { Component } from 'react';

import classes from './Item.css'
import { Link } from 'react-router-dom';

// import ShowcaseItem from './Showcase-Item/Showcase-Item'

export default class Item extends Component {

    state = {
        totalAvailable: 19,
        totalSold: 0,
        soldOut: false
    };

    render() {
        // let match = useRouteMatch
        return (
            <div className={classes.Showcase_Item}>
                {/* <a href={"/products/" + this.props.productName} className={classes.ProductCard}> */}
                <Link to="/product"
                    className={classes.ProductCard}
                >
                    <div className={classes.ProductCard_media} style={{ "backgroundColor": this.props.backgroundColor }}>
                        <div className={classes.ProductCard_media_inner}>
                            <img src={this.props.logo} />
                        </div>

                    </div>

                    <div class={classes.ProductCard_actions}>
                        <button className={[
                            classes.Button,
                            (this.state.soldOut ? classes.Soldout : (this.state.totalAvailable < 20 ? classes.Limited_Edition : classes.Available))
                        ].join(' ')}>
                            <p className={classes.Button_text}>{(this.state.totalAvailable >= 20 ? "Available" :
                                ((this.state.totalAvailable < 20 && this.state.totalAvailable > 0) ? "Limited Edition" : "Soldout")
                            )}
                            </p>
                        </button>
                    </div>

                    <div class={classes.ProductCard_content}>
                        <strong class={classes.ProductCard_category}>{this.props.productCategory}</strong>
                        <h3 class={classes.ProductCard_name} title="Motivational Lizard">
                            <span class={classes.ProductCard_name_inner} style={{ color: this.props.productNameColor }}>Yumi</span>
                        </h3>
                        <div class={classes.ProductCard_price}>
                            <span class={classes.ProductCard_price_current}>$29.99 USD</span>
                        </div>
                    </div>
                    {/* </a> */}
                </Link>

            </div>
        );
    }
}