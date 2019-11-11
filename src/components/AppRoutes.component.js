import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth.context';

import Home from './Home.component';
import About from './About.component';
import UnauthorizedRoute from './UnauthorizedRoute.component';
import MissingRoute from './MissingRoute.component';

import BookRoute from './Book/BookRoute.component';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route {...rest} render={(props) => (
            user === null
                ? <Redirect to="/unauthorized" />
                : <Component {...props} />
        )} />
    );
};


const AppRoutes = () => (
    <Switch>
        <Route path="/unauthorized" component={UnauthorizedRoute} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/book" component={BookRoute} />
        <Route path="**" component={MissingRoute} />
    </Switch>
);

export default AppRoutes;
