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
import {imageLogo} from './logo.png';

const OPTIONS = [
    {
        link: '',
        label: 'Add Student',
        value: 'add',
        icon: <Add />,
        jsx: <AddScreen />
    },
    {
        link: '',
        label: 'View Students',
        value: 'modify',
        icon: <Create />,
        jsx: <Modify />
    },
    // {
    //     link: '',
    //     label: 'Analyze',
    //     value: 'view',
    //     icon: <Poll />,
    //     jsx: <View />
    // },
    {
        link: '',
        label: 'Analyse',
        value: 'analyse',
        icon: <Poll />,
        jsx: <Analyse />
    },
    {
        link: '',
        label: 'Evaluate',
        value: 'predict',
        icon: <Timeline />,
        jsx: <Predict />
    },
    // {
    //     link: '',
    //     label: 'Settings',
    //     value: 'settings',
    //     icon: <Settings />,
    //     jsx: <SettingsScreen />
    // },
]

const SidePanel = ({setScreenToRender, setScreenName}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logContainer}>
                <img src='/assets/images/logo.png' alt="logo" style={{height:'100px'}} />
                 </div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.listContainer}
            >
                {OPTIONS.map((option, index) => (

                    <ListItem button key={index} 
                    onClick={()=> 
                    {setScreenToRender(option.jsx)
                    setScreenName(option.label)}
                    }>
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
