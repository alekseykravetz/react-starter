import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import { useBookGlobalStyles } from './style';

import Books from './Books.component';
import BookDetails from './BookDetails.component';


const BooksMasterDetails = () => {

    const classes = useBookGlobalStyles();
    const [selectedBook, setSelectedBook] = useState(null);

    const changeSelectedBook = (book) => setSelectedBook(book);

    return (
        <Paper className={classes.container}>
            <Books onSelectedBookChanged={changeSelectedBook} />
            <BookDetails book={selectedBook} />
        </Paper>
    );
};

export default BooksMasterDetails;
