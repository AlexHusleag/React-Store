import React from 'react'
import Aux from '../../HOC/Auxiliary'

const layout = (props) => (

    <Aux>
        <div>Things to put </div>
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;