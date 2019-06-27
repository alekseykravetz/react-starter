import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import store from './store';

import HomeRoute from './routes/home.route';
import AboutRoute from './routes/about.route';
import PageUnauthorized from './routes/unauthorized.route';
import PageNotFound from './routes/not-found.route';


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
                        <Route exact path="/" component={HomeRoute} />
                        <Route path="/one" component={HomeRoute} />
                        <PrivateRoute path="/two" component={AboutRoute} />
                        <Route path="**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
