import React from 'react';
import Typography from '@material-ui/core/Typography';

import BookContextProvider from '../../contexts/Book.context';

import BookForm from './BookForm.componen';
import BooksMasterDetails from './BooksMasterDetails.component';

const BookRoute = () => {

    return (
        <BookContextProvider>
            <Typography variant="h1">Book Route</Typography>
            <BookForm />
            <BooksMasterDetails />
        </BookContextProvider>
    );
};

export default BookRoute;
