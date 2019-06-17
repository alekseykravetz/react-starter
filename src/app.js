import React from 'react';

import AppRouter from './app-router';

export default class App extends React.Component {
    render() {

        return (
            <div className="app">

                <div className="app-top-bar">

                    <div className="logo" />


                    {/* <Link to="/aaa">
                        <div className="logo" />
                    </Link> */}

                </div>

                <div className="app-content">
                    <AppRouter />

                </div>
            </div>
        );
    }
}
