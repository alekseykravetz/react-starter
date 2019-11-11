import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { BookContext } from '../../contexts/Book.context';

import BookDetails from './BookDetails.component';


const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));

const Books = () => {

    const classes = useStyles();
    const { books } = useContext(BookContext);

    return (
        <Paper className={classes.container}>
            <Typography variant="h5">Books:</Typography>
            <List dense component="div" role="list">
                {books.map(book => <BookDetails key={book.id} book={book} />)}
            </List>
        </Paper>
    );
};

export default Books;
