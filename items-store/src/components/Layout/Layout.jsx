import React from 'react';
import Aux from '../../HOC/Auxiliary';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Section from '../Section/Section'

const layout = (props) => (

    <Aux>
        <Toolbar/>
        <Section/>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        {/* <div>Things to put </div> */}
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;