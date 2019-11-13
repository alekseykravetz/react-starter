import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Tabs, Tab, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';

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


    const [profileMenuElement, setProfileMenuElement] = React.useState(null);
    const isProfileMenuOpen = Boolean(profileMenuElement);

    const handleProfileMenuOpen = event => {
        setProfileMenuElement(event.currentTarget);
    };

    const handleMenuClose = () => {
        setProfileMenuElement(null);
    };

    const handleSignIn = () => {
        handleMenuClose();
        props.history.push('/signin');
    };

    const handleSignUp = () => {
        handleMenuClose();
        props.history.push('/signup');
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={profileMenuElement}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isProfileMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
            <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
        </Menu>
    );

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

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />

                </IconButton>

                {renderMenu}

                {token &&
                    <Typography variant="h6">
                        {user.email}
                    </Typography>
                }
                <Button color="inherit" onClick={() => signIn('1@1', '1')}>Login</Button>
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
