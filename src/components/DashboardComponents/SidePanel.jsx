import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { Add, Create, Pageview, Poll, Settings, Timeline } from '@material-ui/icons';
import React from 'react'
import AddScreen from '../Screens/Add';
import Analyse from '../Screens/Analyse';
import Modify from '../Screens/Modify';
import Predict from '../Screens/Predict';
import View from '../Screens/View';
import SettingsScreen from '../Screens/Settings';
import { useStyles } from './css/SidePanel.css';

const OPTIONS = [
    {
        link: '',
        label: 'Add Student Data',
        value: 'add',
        icon: <Add />,
        jsx: <AddScreen />
    },
    {
        link: '',
        label: 'Modify Student Data',
        value: 'modify',
        icon: <Create />,
        jsx: <Modify />
    },
    {
        link: '',
        label: 'View',
        value: 'view',
        icon: <Pageview />,
        jsx: <View />
    },
    {
        link: '',
        label: 'Analyse',
        value: 'analyse',
        icon: <Poll />,
        jsx: <Analyse />
    },
    {
        link: '',
        label: 'Predict',
        value: 'predict',
        icon: <Timeline />,
        jsx: <Predict />
    },
    {
        link: '',
        label: 'Settings',
        value: 'settings',
        icon: <Settings />,
        jsx: <SettingsScreen />
    },
]

const SidePanel = ({setScreenToRender}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logContainer}>
                <p className={classes.logo}>SDMEA</p>
            </div>
            <Divider />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Select
                    </ListSubheader>
                }
                className={classes.listContainer}
            >
                {OPTIONS.map((option, index) => (

                    <ListItem button key={index} onClick={()=> setScreenToRender(option.jsx)}>
                        <ListItemIcon>
                            {option.icon}
                        </ListItemIcon>
                        <ListItemText primary={option.label} />
                    </ListItem>

                ))}
            </List>
        </div>
    )
}

export default SidePanel;
