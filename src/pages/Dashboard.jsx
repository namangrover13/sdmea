import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SidePanel from '../components/DashboardComponents/SidePanel';
import { useStyles } from '../styles/Dashboard.css';
import HomeDashboard from '../components/Screens/HomeDashboard';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    const [user, loading] = useAuthState(auth);
    const [screenName, setScreenName] = useState("Home")
    const [screenToRender, setScreenToRender] = useState();
    useEffect(() => {
        setScreenToRender(<HomeDashboard setScreenToRender={setScreenToRender} setScreenName={setScreenName} />)
        if (!user) history.push('/auth')
    }, [])
    function logout() {
        localStorage.clear();
        history.push('auth')
    }
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
                style={{ background: '#ddd', height: '100%' }}
            >
                <div className={classes.header}>
                    {screenName}
                    <p className='_userEmail' style={{ marginTop: '0', display: 'flex' }}>Welcome {user?.email} <p style={{ margin: '0 10px', cursor: 'pointer' }} onClick={logout}><PowerSettingsNewIcon /></p></p>

                </div>
                <div className={classes.screenContent}>
                    {screenToRender}
                </div>
            </Grid>

        </Grid>
    );
}

export default Dashboard;
