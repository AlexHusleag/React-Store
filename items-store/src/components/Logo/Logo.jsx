import React from 'react'

import shopLogo from '../../../src/assets/logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={shopLogo} alt="MyShop"/>
    </div>
)

export default logo;