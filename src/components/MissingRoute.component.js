import React from 'react';


export default class MissingRoute extends React.Component {
    render() {
        return (
            <div className="page-not-found-wrapper">
                <img src="/assets/404.png" alt="page not found" />
            </div>
        );
    }
}
