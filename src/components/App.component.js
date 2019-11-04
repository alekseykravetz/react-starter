import React from 'react';

import AppTopBar from './AppTopBar.component';
import AppRoutes from './AppRoutes.component';


const App = props => {

    return (
        <>
            <AppTopBar {...props} />
            <AppRoutes />
        </>
    );
};

export default App;
