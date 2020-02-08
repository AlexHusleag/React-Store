import React from 'react';
import Aux from '../../HOC/Auxiliary';

import Toolbar from '../Navigation/Toolbar/Header/Header';

import HomePage from '../Navigation/HomePage/HomePage'


const layout = (props) => (
    <Aux>
        <Toolbar/>
        <HomePage/>
        
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;