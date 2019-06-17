import React from 'react';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import store from '../store';


@observer
class HomeRoute extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>Home Route</div>

                <div>
                    Counter: {store.counter}
                </div>

                <div onClick={() => {
                    console.log('page One click');
                    console.log(this);
                    this.props.history.push('/two');
                }}>navigate About Us</div>

                <Link to="/two">
                    About
                </Link>

            </React.Fragment>

        );
    }
}

export default HomeRoute;