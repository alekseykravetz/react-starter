import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import store from '../store';

import Home from './Home.component';
import About from './About.component';
import UnauthorizedRoute from './UnauthorizedRoute.component';
import MissingRoute from './MissingRoute.component';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.user === null
            ? <Redirect to="/unauthorized" />
            : <Component {...props} />
    )} />
);

const AppRoutes = () => (
    <Switch>
        <Route path="/unauthorized" component={UnauthorizedRoute} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="**" component={MissingRoute} />
    </Switch>
);

export default AppRoutes;
