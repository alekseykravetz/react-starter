import React from 'react';


class AboutRoute extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>About</div>
                <div onClick={() => {
                    console.log('page Two click');
                    console.log(this);
                    this.props.history.push('/one');
                }}>navigate Home</div>
            </React.Fragment>

        );
    }
}

export default AboutRoute;
