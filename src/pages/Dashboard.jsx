import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SidePanel from '../components/DashboardComponents/SidePanel';
import { useStyles } from '../styles/Dashboard.css';
import HomeDashboard from '../components/Screens/HomeDashboard';

function Dashboard() {
    const classes = useStyles();
    const [screenToRender, setScreenToRender] = useState(<HomeDashboard />);
    return (
        <Grid
            container
            className={classes.root}
        >
            <Grid
                item
                lg={2}
            >
                <SidePanel setScreenToRender={setScreenToRender} />
            </Grid>
            <Grid
                item
                lg={10}
            >
               <div className={classes.header}>
                   Header
               </div>
               <div className={classes.screenContent}>
                   {screenToRender}
               </div>
            </Grid>

        </Grid>
    );
}

export default Dashboard;