import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomeRoute from './routes/home.route';
import AboutRoute from './routes/about.route';
import PageNotFound from './routes/not-found.route';


export default class App extends React.Component {
    render() {

        return (
            <div className="app">

                <div className="app-top-bar">

                    <Link to="/aaa">
                        <div className="logo" />
                    </Link>

                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/wrong-path">Wrong navigation</Link>
                    </nav>

                </div>

                <div className="app-content">
                    <Switch>
                        <Route exact path="/" component={HomeRoute} />
                        <Route path="/home" component={HomeRoute} />
                        <Route path="/about" component={AboutRoute} />
                        <Route path="**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
