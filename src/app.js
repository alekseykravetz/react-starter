import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Tabs, Tab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import store from './store';

import HomeRoute from './routes/home.route';
import AboutRoute from './routes/about.route';
import PageUnauthorized from './routes/unauthorized.route';
import PageNotFound from './routes/not-found.route';


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



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.user === null
            ? <Redirect to="/unauthorized" />
            : <Component {...props} />
    )} />
);

const App = props => {
    const classes = useStyles();

    const [tabsValue, setTabsValue] = React.useState(0);

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
                props.history.push('/wrong-path');
                break;
            default:
                break;
        }
    };

    return (
        <div className="app">

            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>

                    <Tabs value={tabsValue} onChange={handleTabsChange}>
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Wrong navigation" />
                    </Tabs>

                    <Button color="inherit" onClick={store.signIn}>Login</Button>
                </Toolbar>
            </AppBar>

            <div className="app-content">

                <Button variant="contained" color="primary">
                    Hello World
                </Button>

                <Switch>
                    <Route path="/unauthorized" component={PageUnauthorized} />
                    <Route exact path="/" component={HomeRoute} />
                    <Route path="/home" component={HomeRoute} />
                    <PrivateRoute path="/about" component={AboutRoute} />
                    <Route path="**" component={PageNotFound} />
                </Switch>
            </div>

        </div>
    );
};

export default App;
