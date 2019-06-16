import React from 'react';


export default class PageTwo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>PageTwo</div>
                <div onClick={() => {
                    console.log('page Two click');
                    console.log(this);
                    this.props.history.push('/one');
                }}>navigate One</div>
            </React.Fragment>

        );
    }
}
