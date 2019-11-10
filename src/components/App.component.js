import React from 'react';

import AppTopBar from './AppTopBar.component';
import AppRoutes from './AppRoutes.component';

import AuthContextProvider from '../contexts/Auth.context';


const App = props => (
    <AuthContextProvider>
        <AppTopBar {...props} />
        <AppRoutes />
    </AuthContextProvider>
);

export default App;
