import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import './index.css';  // Webpack css loader required


import App from './App';


ReactDOM.render((
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
), document.getElementById('root'));


// to disable browser auto reloading
// module.hot.accept();
