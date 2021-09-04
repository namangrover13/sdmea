import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        background: theme.palette.primary.main,
        margin: 0,
        padding: 0
    },

}))

const HomeHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.navItems}>
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
            </div>
            <div className={classes.logo}>
                SDMEA
            </div>
            <div className={classes.navBtns}>
                <Button>Signup</Button>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default HomeHeader;
