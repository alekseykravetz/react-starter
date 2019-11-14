import React, { useEffect } from 'react';


export default () => {

    useEffect(() => {
        document.title = 'Unauthorized User!';
        return () => {
            document.title = 'App Title';
        };
    }, []);

    return (
        <h1 style={{ color: 'black' }}>Unauthorized User! (token has expired or no token provided)</h1>
    );
};
