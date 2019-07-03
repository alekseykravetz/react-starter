import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import store from '../store';


@observer
class HomeRoute extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="home-title">
                    <span>Home Route</span>
                </div>

                <div className="home-content">

                    <div className="app-vertical-container-example">
                        Counter: {store.counter}
                    </div>

                    <div className="app-vertical-container-example" onClick={() => this.props.history.push('/about')}>navigate to About Page</div>
                    <div className="app-vertical-container-example">
                        <Link to="/about">About</Link>
                    </div>

                    <div className="app-vertical-container-example">
                        <div className="app-control">
                            <div className="app-control-label">Input Label</div>
                            <input type="text" value={store.someInput} onChange={e => store.updateSomeInputProperty(e.target.value)} />
                        </div>
                        <div>
                            Input Value: {store.someInput}
                        </div>
                    </div>

                    <div className="home-content-buttons">
                        <div className="app-button secondary" onClick={() => console.log('Back button clicked')}>Back</div>
                        <div className="app-button primary" onClick={() => console.log('Next button clicked')}>Next</div>
                    </div>

                    <div className="home-content-buttons">
                        <div className={`app-button secondary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Back button clicked')}>Back</div>
                        <div className={`app-button primary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Next button clicked')}>Next</div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default HomeRoute;
