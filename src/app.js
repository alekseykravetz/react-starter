import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import store from './store';

import PageOne from './page-one';
import PageTwo from './page-two';
import PageUnauthorized from './page-unauthorized';
import PageNotFound from './page-not-found';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.user === null
            ? <Redirect to="/unauthorized" />
            : <Component {...props} />
    )} />
);

export default class App extends React.Component {
    render() {

        return (
            <div className="app">

                <div className="app-top-bar">

                    <Link to="/aaa">
                        <div className="logo" />
                    </Link>

                </div>

                <div className="app-content">
                    <Switch>
                        <Route path="/unauthorized" component={PageUnauthorized} />
                        <PrivateRoute exact path="/" component={PageOne} />
                        <PrivateRoute path="/one" component={PageOne} />
                        <PrivateRoute path="/two" component={PageTwo} />
                        <Route path="**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
