import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AuthContextProvider from './context';

import TopBar from './TopBar';
import ContentRoutes from './ContentRoutes';


export default props => (
    <AuthContextProvider>
        <CssBaseline />
        <TopBar {...props} />
        <ContentRoutes />
    </AuthContextProvider>
);
