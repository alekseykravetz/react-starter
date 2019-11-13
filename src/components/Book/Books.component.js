import React, { useContext } from 'react';
import { Paper, Typography, List } from '@material-ui/core';

import { useBookGlobalStyles } from './style';
import { BookContext } from './context';

import BooksItem from './BooksItem.component';


const Books = ({ onSelectedBookChanged }) => {

    const classes = useBookGlobalStyles();
    const { books } = useContext(BookContext);

    const changeSelectedBook = (book) => onSelectedBookChanged(book);

    return (
        <Paper className={classes.container}>
            <Typography variant="h5">Books:</Typography>
            <List dense component="div" role="list">
                {books.map(book => <BooksItem key={book._id} book={book} onBookClick={changeSelectedBook} />)}
            </List>
        </Paper>
    );
};

export default Books;
