/* eslint-disable no-dupe-keys */
import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core";
import AddScreen from './Add'
import Modify from './Modify';
import Analyse from './Analyse';
import Predict from './Predict';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: '40px auto',
        flexWrap: 'wrap',
        marginLeft: '10%'
    },
    btn: {
        width: 350,
        height: 200,
        margin: 40,
        color: theme.palette.common.white,
        background: '#1d4350',
        fontSize: 22,
        textTransform: 'none',
        fontFamily: 'Cabin, sans-serif',
        background:' -webkit-linear-gradient(to right, #1d4350, #a43931)',
        background: 'linear-gradient(to right, #1d4350, #a43931)', 
        '&:hover': {
            boxShadow: '4px 4px 4px #1d4350'
        }
    }
}))

const HomeDashboard = ({setScreenToRender, setScreenName}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{width: '50%'}}>
                <Button 
                onClick={()=> 
                    {
                        setScreenToRender(<AddScreen />)
                        setScreenName("Add Student")
                    }}
                className={classes.btn}>Add Students</Button>
            </div>
            <div style={{width: '50%'}}>
                <Button
                onClick={()=> 
                    {
                        setScreenToRender(<Modify />)
                        setScreenName("View Students")
                    }}
                className={classes.btn}>View All Students</Button>
            </div>
            <div style={{width: '50%'}}>
                <Button 
                onClick={()=> 
                    {
                        setScreenToRender(<Analyse />)
                        setScreenName("Analyse Students")
                    }}
                className={classes.btn}>Analyse Results</Button>
            </div>
            <div style={{width: '50%'}}>
                <Button 
                onClick={()=> 
                    {
                        setScreenToRender(<Predict />)
                        setScreenName("Evaluate")
                    }}
                className={classes.btn}>Evaluation and Categorization</Button>
            </div>
        </div>
    )
}

export default HomeDashboard;
