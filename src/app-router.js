import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import store from './store';

import PageOne from './page-one';
import PageTwo from './page-two';
import PageUnauthorized from './page-unauthorized';
import PageNotFound from './page-not-found';

  
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.user.name !== 'alex'
            ? <Redirect to="/unauthorized" />
            : <Component {...props} />
    )} />
);

export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/unauthorized" component={PageUnauthorized} />
                    <PrivateRoute exact path="/" component={PageOne} />
                    <PrivateRoute path="/one" component={PageOne} />
                    <PrivateRoute path="/two" component={PageTwo} />
                    <Route path="**" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}