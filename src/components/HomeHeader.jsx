import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        background: theme.palette.primary.main,
        fontFamily: 'Cabin, sans-serif',
        alignContent: 'center',
        margin: 0,
        padding: '5px 10px',
    },
    navItems: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 0,
        margin:0,
        marginLeft:10
    },
    navItem: {
        color: theme.palette.primary.text,
        marginLeft: 20,
        fontSize: 20,
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding:0
    },
    logo: {
        background: theme.palette.primary.text,
        height:60,
        width: 60,
        borderRadius: '50%',
        margin: 'auto',
        cursor: 'pointer'
    },
    logoTxt: {
        textAlign: 'center',
        color: theme.palette.primary.main,
        display: 'block',
        padding: 'auto',
        fontWeight:800,
    },
    navBtns: {
        margin: 'auto 2px'
    },
    btn: {
        color: theme.palette.primary.main,
        background: theme.palette.common.white,
        margin: 'auto 10px',
        fontWeight: 600,
        '&:hover':{
            background: theme.palette.common.white,
            boxShadow: '3px 3px 3px rgba(255, 255, 255, 0.5)'
        }
    }
}))

const HomeHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.navItems}>
                <p className={classes.navItem}>One</p>
                <p className={classes.navItem}>Two</p>
                <p className={classes.navItem}>Three</p>
            </div>
            <div className={classes.logo}>
                <p className={classes.logoTxt}>SDMEA</p>
            </div>
            <div className={classes.navBtns}>
                <Button className={classes.btn}>Signup</Button>
                <Button className={classes.btn}>Login</Button>
            </div>
        </div>
    )
}

export default HomeHeader;
