import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';

import Toolbar from '../../containers/Toolbar/Header/Header';
import HomePage from '../../containers/HomePage/HomePage'

export default class Layout extends Component {

    render() {
        return (
            <Aux>
                <Toolbar />
                <HomePage />
                {/* <main>
                    {this.props.children}
                </main> */}
            </Aux>
        );
    }
}