import React from 'react';


const About = props => {
    return (
        <React.Fragment>
            <div>About</div>
            <div onClick={() => props.history.push('/home')}>navigate to Home page</div>
        </React.Fragment>
    );
};

export default About;
