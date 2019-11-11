import React, { useContext, useState } from 'react';

import { BookContext } from '../../contexts/Book.context';

const BookForm = () => {

    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState('Title 1');
    const [author, setAuthor] = useState('Author Name 1');

    const onSubmit = e => {
        e.preventDefault();
        addBook({ title, author });
    };

    return (
        <form onSubmit={onSubmit}>
            <div>Add Book:</div>
            <label>Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>Author:
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            </label>

            <button type="submit">Add</button>
        </form>
    );

};

export default BookForm;
