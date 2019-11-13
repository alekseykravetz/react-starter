import React, { useContext } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { useBookGlobalStyles } from './style';
import { BookContext } from './context';
import { useBookState } from './hook';


const BookForm = () => {

    const classes = useBookGlobalStyles();
    const { addBook } = useContext(BookContext);
    const { title, setTitle, author, setAuthor } = useBookState('', '');

    const submit = e => {
        e.preventDefault();
        addBook({ title, author });
    };

    return (
        <Paper className={classes.container}>
            <form onSubmit={submit}>
                <Typography variant="h5">Add Book:</Typography>
                <TextField className={classes.textField} margin="normal" label="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField className={classes.textField} margin="normal" label="Author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <Button type="submit" variant="contained" className={classes.button}>Add</Button>
            </form>
        </Paper>
    );

};

export default BookForm;
