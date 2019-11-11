import React from 'react';
import Typography from '@material-ui/core/Typography';

import BookContextProvider from '../../contexts/Book.context';

import Books from './Books.component';
import BookForm from './BookForm.componen';

const BookRoute = () => {

    return (
        <BookContextProvider>
            <Typography variant="h1">Book Route</Typography>
            <BookForm />
            <Books />
        </BookContextProvider>
    );
};

export default BookRoute;
