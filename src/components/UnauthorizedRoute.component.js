import React from 'react';


export default class UnauthorizedRoute extends React.Component {
   
    async componentDidMount() {
        document.title = 'Unauthorized User!';
    }

    render() {
        return (
            <h1 style={{color: 'black'}}>Unauthorized User! (token has expired or no token provided)</h1>
        );
    }
}
