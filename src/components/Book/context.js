import React, { createContext, useState, useEffect } from 'react';

import * as dataService from '../../data.service';


export const BookContext = createContext();

const BookContextProvider = props => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log('BookContextProvider.useEffect, []');

        const loadBooksAsync = async () => {
            console.log('BookContextProvider.useEffect, []');
            const loadedBooks = await dataService.getBooks();
            setBooks(loadedBooks || []);
        };

        loadBooksAsync();

        return () => {
            console.log('BookContextProvider.useEffect, [] ---- unmount');
        };
    }, []);

    const removeBook = async id => {
        const result = await dataService.deleteBook(id);
        if (result) {
            setBooks(books.filter(b => b._id !== id));
        }
    };

    const addBook = async book => {
        const createdBook = await dataService.createBook(book);
        setBooks([...books, createdBook]);
    };

    const updateBook = async book => {
        const updatedBook = await dataService.updateBook(book);
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
