import React, { useContext } from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox, SvgIcon } from '@material-ui/core';
import { DeleteForeverOutlined, DeleteOutlined } from '@material-ui/icons';

import { BookContext } from './context';


const BooksItem = ({ book, onBookClick }) => {

    const { removeBook } = useContext(BookContext);

    const deleteBook = (e) => {
        e.stopPropagation();
        removeBook(book._id);
    };

    const bookClicked = () => {
        onBookClick(book);
    };

    return (
        <ListItem role="listitem" button onClick={bookClicked}>
            <ListItemIcon>
                <Checkbox tabIndex={-1} disableRipple disabled />
                {/* <SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon> */}
            </ListItemIcon>
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemText primary={book._id} />
            <DeleteForeverOutlined onClick={deleteBook} />
        </ListItem>
    );
};

export default BooksItem;
