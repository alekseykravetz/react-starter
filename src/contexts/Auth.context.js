import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';

import * as dataService from '../data.service';



export const AuthContext = createContext({ user: '', token: '', signIn: async (email, password) => { }, signUp: async (email, name, password) => { } });


const AuthContextProvider = props => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    const signUp = async (email, name, password) => {

        const newUser = { email, name, password };

        const accessToken = await dataService.signUpUser(newUser);
        const decodedUser = jwt.decode(accessToken);

        setUser(decodedUser);
        setToken(accessToken);

        // window.localStorage.setItem('accessToken', tokens.access_token);
    };

    const signIn = async (email, password) => {

        const accessToken = await dataService.signInUser({ email, password });
        const decodedUser = jwt.decode(accessToken);

        setUser(decodedUser);
        setToken(accessToken);

        // window.localStorage.setItem('accessToken', accessToken);
    };

    return (
        <AuthContext.Provider value={{ user, token, signIn, signUp }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;