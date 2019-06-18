import React from 'react';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
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

                    <div>
                        Counter: {store.counter}
                    </div>

                    <div onClick={() => {
                        console.log('page One click');
                        console.log(this);
                        this.props.history.push('/two');
                    }}>navigate About Us</div>

                    <Link to="/two">About</Link>

                    <div className="app-control">
                        <div className="app-control-label">Listing Name</div>
                        <input type="text" value={store.someInput} onChange={e => store.updateSomeInputProperty(e.target.value)} />
                    </div>

                    <div>
                        {store.someInput}
                    </div>

                    <div className="home-content-buttons">
                        <div className="app-button secondary" onClick={() => this.props.history.push('/two')}>Back</div>
                        <div className="app-button primary" onClick={() => this.props.history.push('/one')}>Next</div>
                    </div>

                    <div className="home-content-buttons">
                        <div className={`app-button secondary  ${false ? '' : 'disabled'}`} onClick={() => false && this.props.history.push('/two')}>Back</div>
                        <div className={`app-button primary  ${false ? '' : 'disabled'}`} onClick={() => false && this.props.history.push('/one')}>Next</div>
                    </div>

                </div>

            </React.Fragment>

        );
    }
}

export default HomeRoute;