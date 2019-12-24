import React from 'react'
import classes from './Section.css'
import Clothing from './Logo/Clothing'

const section = (props) => (
    <div>
        <div className={classes.Parent}>
            <nav className={classes.SectionHalf}>
                <Clothing />
            </nav>

            <nav className={classes.SectionQuarter}>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </nav>
            <nav className={classes.SectionQuarter}>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </nav>
        </div>


        <div className={classes.Parent}>
            <nav className={classes.SectionHalf}>
                <Clothing />
            </nav>

            <nav className={classes.SectionQuarter}>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </nav>
            <nav className={classes.SectionQuarter}>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </nav>
        </div>
    </div>
);

export default section;