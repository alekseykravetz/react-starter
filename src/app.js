import React from 'react';
import AppRouter from './app-router';


export default class App extends React.Component {
    render() {

        return (
            <div className="listings-component">
                <div>
                    <div className="logo">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <div />
                        </a>
                    </div>
                    <AppRouter />
                </div>
            </div>
        );
    }
}
