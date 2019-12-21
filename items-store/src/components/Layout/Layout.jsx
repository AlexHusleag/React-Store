import React from 'react';
import Aux from '../../HOC/Auxiliary';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (

    <Aux>
        <Toolbar/>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        {/* <div>Things to put </div> */}
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;