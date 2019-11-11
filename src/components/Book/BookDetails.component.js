import React, { useContext } from 'react';

import { BookContext } from '../../contexts/Book.context';


const BookDetails = ({ book }) => {

    const { removeBook } = useContext(BookContext);

    const onDelete = () => removeBook(book.id);

    return (
        <li onClick={onDelete}>
            <div>Id: {book.id}</div>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
        </li>
    );

};

export default BookDetails;
