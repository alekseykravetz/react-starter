import React from 'react';


export default class PageOne extends React.Component {
    render() {
        return (
            <div>
                <div>page One</div>
                <div onClick={() => {
                    console.log('page One click');
                    console.log(this);
                    this.props.history.push('/two');
                }}>navigate Two</div>

            </div>

        );
    }
}
