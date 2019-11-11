import React, { useContext } from 'react';

import { BookContext } from '../../contexts/Book.context';

import BookDetails from './BookDetails.component';

const Books = props => {

    const { books } = useContext(BookContext);

    return (
        <div>
            <div>Books:</div>
            {books.map(book => <BookDetails key={book.id} book={book} />)}
        </div>
    );

};

export default Books;
