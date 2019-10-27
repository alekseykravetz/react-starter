import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

// import './index.css';  // Webpack css loader required


import App from './app';


async function init() {

    await store.init();

    ReactDOM.render((
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    ), document.getElementById('root'));

}

init();

// to disable browser auto reloading
// module.hot.accept();
