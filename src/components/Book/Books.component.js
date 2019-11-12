import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { BookContext } from '../../contexts/Book.context';

import BooksItem from './BooksItem.component';


const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));

const Books = ({ onSelectedBookChanged }) => {

    const classes = useStyles();
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
