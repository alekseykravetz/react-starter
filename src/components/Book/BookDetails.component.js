import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { BookContext } from '../../contexts/Book.context';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));


const BookDetails = ({ book }) => {

    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if(book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);


    const { updateBook } = useContext(BookContext);

    const saveBook = () => updateBook({ _id: book._id, title, author });

    return (

        <Paper className={classes.container}>
            <Typography variant="h5">Book Details:</Typography>
            {book &&
                <>
                    <TextField className={classes.textField} margin="normal" label="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField className={classes.textField} margin="normal" label="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <TextField disabled className={classes.textField} margin="normal" label="Id"
                        value={book && book._id}
                    />
                    <Button variant="contained" className={classes.button} onClick={saveBook}>Update</Button>
                </>
            }
        </Paper>
    );
};

export default BookDetails;
