import React from 'react';
import Typography from '@material-ui/core/Typography';

import BookContextProvider from './context';

import BookForm from './BookForm';
import BooksMasterDetails from './BooksMasterDetails';

export default () => {

    return (
        <BookContextProvider>
            <Typography variant="h1">Book Route</Typography>
            <BookForm />
            <BooksMasterDetails />
        </BookContextProvider>
    );
};
