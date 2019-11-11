import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Tabs, Tab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { AuthContext } from '../contexts/Auth.context';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const AppTopBar = props => {

    const classes = useStyles();
    const { user, token, signIn } = useContext(AuthContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    App
                </Typography>
                <AppTopBarNavigationTabs {...props} />
                {token &&
                    <Typography variant="h6">
                        {user.email}
                    </Typography>
                }
                <Button color="inherit" onClick={() => signIn('alex2@alex.com', '123456')}>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AppTopBar;


const AppTopBarNavigationTabs = props => {

    const [tabsValue, setTabsValue] = useState(0);

    const handleTabsChange = (event, newValue) => {
        setTabsValue(newValue);
        switch (newValue) {
            case 0:
                props.history.push('/home');
                break;
            case 1:
                props.history.push('/about');
                break;
            case 2:
                props.history.push('/book');
                break;
            case 3:
                props.history.push('/wrong-path');
                break;
            default:
                break;
        }
    };

    return (
        <Tabs value={tabsValue} onChange={handleTabsChange}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Book" />
            <Tab label="Wrong navigation" />
        </Tabs>
    );
};
