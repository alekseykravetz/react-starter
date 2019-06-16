import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

// import './index.css';

import App from './app';


async function init() {

    await store.init();

    ReactDOM.render(<App />, document.getElementById('app'));

}

init();



// to disable browser auto reloading
// module.hot.accept();
