import { Button } from '@material-ui/core';
import React from 'react'
import { useStyles } from './css/Intro.css'
import dashboard from './images/dashboard.jpg'

const Intro = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <img src={dashboard} alt="Dashboard" className={classes.img} />
            <div className={classes.contentContainer}>
                <p className={classes.subHeading}>Management Software</p>
                <h2 className={classes.heading}>Now Manage, Evaluate and Analyse all at one place.</h2>
                <p className={classes.tagline}>Forget pen, paper and record registers and just enter the data and sit back to see results. This software will make you divide your work and make it extremely easy.</p>
                <Button className={classes.btn}>See Demos</Button>
            </div>
        </div>
    )
}

export default Intro
