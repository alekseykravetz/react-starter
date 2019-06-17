import React from 'react';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';



export default class PageOne extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>page One</div>
                <div onClick={() => {
                    console.log('page One click');
                    console.log(this);
                    this.props.history.push('/two');
                }}>navigate Two</div>

                <Link to="/two">
                Two
                </Link>

            </React.Fragment>

        );
    }
}
