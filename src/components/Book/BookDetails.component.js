import React, { useContext, useEffect } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { useBookGlobalStyles } from './style';
import { BookContext } from './context';
import { useBookState } from './hook';



const BookDetails = ({ book }) => {

    const classes = useBookGlobalStyles();
    const { updateBook, books } = useContext(BookContext);
    const { title, setTitle, author, setAuthor, id, setId } = useBookState('', '');

    useEffect(() => {
        console.log('BookDetails useEffect[book]  -- book: ', book);

        setTitle(book ? book.title : '');
        setAuthor(book ? book.author : '');
        setId(book ? book._id : '');
    }, [book]);

    useEffect(() => {
        console.log('BookDetails useEffect[books]  -- books: ', books);

        if (book && !books.find(b => b._id === book._id)) {
            setTitle('');
            setAuthor('');
            setId('');
        }
    }, [books]);

    const submit = e => {
        e.preventDefault();
        updateBook({ _id: id, title, author });
    };

    return (
        <Paper className={classes.container}>
            <form onSubmit={submit}>
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
                            value={id}
                        />
                        <Button type="submit" variant="contained" className={classes.button}>Update</Button>
                    </>
                }
            </form>
        </Paper>
    );
};

export default BookDetails;
