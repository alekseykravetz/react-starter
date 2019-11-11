import React, { useContext } from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import { BookContext } from '../../contexts/Book.context';


const BookDetails = ({ book }) => {

    const { removeBook } = useContext(BookContext);

    const onDelete = () => removeBook(book.id);

    return (
        <ListItem role="listitem" button onClick={onDelete}>
            <ListItemIcon>
                <Checkbox tabIndex={-1} disableRipple disabled />
                {/* <SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon> */}
            </ListItemIcon>
            <ListItemText primary={book.title} secondary={book.author} />
            <ListItemText primary={book.id} />
            <DeleteForeverOutlinedIcon />
        </ListItem>
    );
};

export default BookDetails;
