import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import {useHistory} from 'react-router-dom'
// import '../styles/Global.css'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
        fontFamily: 'Cabin, sans-serif',
        alignContent: 'center',
        margin: 0,
        padding: '0px 10px',
        position: 'sticky',
        top: 0,
        zIndex: 20

    },
    navItems: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        padding: 0,
        margin:0,
        marginLeft:10,

    },
    navItem: {
        color:'blue',
        fontWeight:'700',
        marginLeft: 20,
        fontSize: 18,
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding:3,
        borderRadius:8,
        '&:hover': {
            background: theme.palette.common.white,
            color: theme.palette.primary.main,
            transition: '0.5s',
        }
    },
    logo: {
        background: theme.palette.primary.text,
        height:57,
        width: 57,
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
  let history =  useHistory()
    const classes = useStyles();
    return (
        <div className={"global-card-shadow"}>
        <div className={classes.container}>
            {/* <div className={classes.navItems}>
                <p className={classes.navItem}>One</p>
                <p className={classes.navItem}>Two</p>
                <p className={classes.navItem}>Three</p>
            </div> */}
            <div className={classes.logo}>
                <p className={classes.logoTxt}>SDMEA</p>
            </div>
            <div className={classes.navBtns}>
                <Button className={classes.btn} onClick={()=>history.push("/auth")}>Signup</Button>
                <Button className={classes.btn} onClick={()=>history.push("/auth")}>Login</Button>
            </div>
        </div>
            </div>
    )
}

export default HomeHeader;
