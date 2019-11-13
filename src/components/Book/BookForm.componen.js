import React, { useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useBookGlobalStyles } from './style';
import { BookContext } from './context';


const BookForm = () => {

    const classes = useBookGlobalStyles();

    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState('Title 1');
    const [author, setAuthor] = useState('Author Name 1');

    const onSubmit = e => {
        e.preventDefault();
        addBook({ title, author });
    };

    return (
        <Paper className={classes.container}>
            <form onSubmit={onSubmit}>
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
