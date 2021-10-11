import { Dialog, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
        margin: 0
    },
    title: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        textAlign: 'center',
    }
}))
const Popup = (props) => {
    const classes = useStyles();
    return (
        <Dialog onClose={props.handleClose} open={props.open} maxWidth={props.width ? props.width : 'md'} fullWidth>
            <DialogTitle className={classes.title}><h1 style={{margin: 0}}>{props.heading}</h1></DialogTitle>
            {props.children}
        </Dialog>
    )
}

export default Popup
