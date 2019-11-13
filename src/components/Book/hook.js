import { useState } from 'react';


const useBookState = (initialTitle, initialAuthor, initialId) => {

    const [title, setTitle] = useState(initialTitle);
    const [author, setAuthor] = useState(initialAuthor);
    const [id, setId] = useState(initialId);

    return {
        title, setTitle,
        author, setAuthor,
        id, setId,
    };
};

export {
    useBookState
};
