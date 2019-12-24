import React from 'react'

import clothing from '../../../assets/clothing.png'
import classes from './Logo.css'

const clothingLogo = (props) => (
    <div className={classes.Logo}>
        <img src={clothing} alt="Clothing"/>
    </div>
)

export default clothingLogo;