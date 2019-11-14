import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './context';

import Home from '../Home';
import PrivatePage from '../PrivatePage';
import UnauthorizedRoute from './UnauthorizedRoute';
import MissingRoutePage from './MissingRoute';

import SignIn from './SignIn';
import SignUp from './SignUp';

import BookRoute from '../Book';


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


const ContentRoutes = () => (
    <Switch>
        <Route path="/unauthorized" component={UnauthorizedRoute} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/private-data" component={PrivatePage} />
        <Route path="/book" component={BookRoute} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="**" component={MissingRoutePage} />
    </Switch>
);

export default ContentRoutes;
