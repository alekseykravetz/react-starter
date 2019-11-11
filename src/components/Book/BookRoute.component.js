import React from 'react';

import BookContextProvider from '../../contexts/Book.context';

import Books from './Books.component';
import BookForm from './BookForm.componen';

const BookRoute = () => {

    return (
        <BookContextProvider>
            <div>Book Route</div>
            <BookForm />
            <Books />
        </BookContextProvider>
    );
};

export default BookRoute;
