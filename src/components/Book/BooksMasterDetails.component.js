import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core';

import { useBookGlobalStyles } from './style';

import Books from './Books.component';
import BookDetails from './BookDetails.component';


const BooksMasterDetails = () => {

    const classes = useBookGlobalStyles();
    const [selectedBook, setSelectedBook] = useState(null);

    const changeSelectedBook = book => setSelectedBook(book);

    return (
        <Paper className={classes.container}>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Grid item xs>
                    <Books onSelectedBookChanged={changeSelectedBook} />
                </Grid>
                <Grid item xs>
                    <BookDetails book={selectedBook} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default BooksMasterDetails;
