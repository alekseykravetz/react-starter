import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Books from './Books.component';
import BookDetails from './BookDetails.component';


const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));


const BooksMasterDetails = () => {

    const classes = useStyles();
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
