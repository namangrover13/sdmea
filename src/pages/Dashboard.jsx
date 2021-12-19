import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SidePanel from '../components/DashboardComponents/SidePanel';
import { useStyles } from '../styles/Dashboard.css';
import HomeDashboard from '../components/Screens/HomeDashboard';

function Dashboard() {
    const classes = useStyles();
    const [screenToRender, setScreenToRender] = useState(<HomeDashboard />);
    const [screenName, setScreenName] = useState("Home")
    return (
        <Grid
            container
            className={classes.root}
        >
            <Grid
                item
                lg={2}
            >
                <SidePanel setScreenToRender={setScreenToRender} setScreenName={setScreenName} />
            </Grid>
            <Grid
                item
                lg={10}
                style={{background: '#ddd', height: '100%'}}
            >
               <div className={classes.header}>
                   {screenName}
               </div>
               <div className={classes.screenContent}>
                   {screenToRender}
               </div>
            </Grid>

        </Grid>
    );
}

export default Dashboard;