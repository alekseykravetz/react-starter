import React, { useEffect, useContext } from 'react';

import { AuthContext } from './context';


export default props => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) props.history.push('/');
    }, [user]);

    useEffect(() => {
        document.title = 'Unauthorized User!';
        return () => {
            document.title = 'App Title';
        };
    }, []);

    return (
        <h1>Unauthorized User! (token has expired or no token provided)</h1>
    );
};
