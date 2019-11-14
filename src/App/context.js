import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';

import config from '../config';


export const AuthContext = createContext({
    user: '', 
    token: '',
    signIn: async (email, password) => { },
    signUp: async (email, name, password) => { }
});

const AuthContextProvider = props => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const signUp = async (email, name, password) => {

        const newUser = { email, name, password };

        const fetchOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        };
    
        const url = `${config.apiUrl}/signup`;
    
        const result = await fetch(url, fetchOptions);
    
        const accessToken = await result.json();
        const decodedUser = jwt.decode(accessToken);

        setUser(decodedUser);
        setToken(accessToken);
        // window.localStorage.setItem('accessToken', tokens.access_token);
    };

    const signIn = async (email, password) => {

        const signInUser = { email, password };

        const fetchOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(signInUser)
        };

        const url = `${config.apiUrl}/signin`;

        const result = await fetch(url, fetchOptions);

        const accessToken = await result.json();

        const decodedUser = jwt.decode(accessToken);

        setUser(decodedUser);
        setToken(accessToken);
        // window.localStorage.setItem('accessToken', accessToken);
    };

    const getUsers = async () => {
        const result = await fetch(`${config.apiUrl}/users`);
        const json = await result.json();
        return json;
    };

    return (
        <AuthContext.Provider value={{ user, token, signIn, signUp }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
