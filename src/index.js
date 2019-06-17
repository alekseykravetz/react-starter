import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import store from './store';

// import './index.css';  // Webpack css loader required

import App from './app';


async function init() {

    await store.init();

    ReactDOM.render((
        <App />
    ), document.getElementById('root'));

}

init();



// to disable browser auto reloading
// module.hot.accept();
