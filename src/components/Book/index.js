import React from 'react';
import Typography from '@material-ui/core/Typography';

import BookContextProvider from './context';

import BookForm from './BookForm.componen';
import BooksMasterDetails from './BooksMasterDetails.component';

export default () => {

    return (
        <BookContextProvider>
            <Typography variant="h1">Book Route</Typography>
            <BookForm />
            <BooksMasterDetails />
        </BookContextProvider>
    );
};
