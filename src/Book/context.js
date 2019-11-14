import React, { createContext, useState, useEffect } from 'react';

import config from '../config';


export const BookContext = createContext({ 
    books: [{_id: '', title: '', author: ''}], 
    addBook: async book => {}, 
    removeBook: async id => {}, 
    updateBook: async book => {},
});

const BookContextProvider = props => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('BookContextProvider.useEffect, []');

        const loadBooksAsync = async () => {
            console.log('BookContextProvider.useEffect, []');

            const result = await fetch(`${config.apiUrl}/books`);
            const loadedBooks = await result.json();

            setBooks(loadedBooks || []);
        };

        loadBooksAsync();

        return () => {
            console.log('BookContextProvider.useEffect, [] ---- unmount');
        };
    }, []);

    const removeBook = async id => {
    
        const result = await fetch(`${config.apiUrl}/book/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        });
        const isRemoved = await result.json();

        if (isRemoved) {
            setBooks(books.filter(b => b._id !== id));
        }
    };

    const addBook = async book => {

        const result = await fetch(`${config.apiUrl}/book`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(book)
        });
        const createdBook = await result.json();

        setBooks([...books, createdBook]);
    };

    const updateBook = async book => {
    
        const result = await fetch(`${config.apiUrl}/book`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(book)
        });
        const updatedBook = await result.json();
    
        const booksWithoutUpdated = books.filter(b => b._id !== updatedBook._id);
        setBooks([...booksWithoutUpdated, updatedBook]);
    };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook, updateBook }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
