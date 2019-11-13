import React, { useContext, useState, useEffect } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { useBookGlobalStyles } from './style';
import { BookContext } from './context';



const BookDetails = ({ book }) => {

    const classes = useBookGlobalStyles();

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
