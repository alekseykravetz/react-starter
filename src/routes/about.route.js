import React from 'react';


class AboutRoute extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>About</div>
                <div onClick={() => {
                    console.log('page Home click');
                    this.props.history.push('/home');
                }}>navigate to Home page</div>
            </React.Fragment>

        );
    }
}

export default AboutRoute;
