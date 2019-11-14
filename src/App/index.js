import React from 'react';

import AuthContextProvider from './context';

import TopBar from './TopBar';
import ContentRoutes from './ContentRoutes';


export default props => (
    <AuthContextProvider>
        <TopBar {...props} />
        <ContentRoutes />
    </AuthContextProvider>
);
