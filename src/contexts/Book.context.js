import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

export const BookContext = createContext();

const BookContextProvider = props => {

    const [books, setBooks] = useState([]);

    const removeBook = id => setBooks(books.filter(b => b.id !== id));
    const addBook = book => { book.id = uuid(); setBooks([...books, book]); };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
