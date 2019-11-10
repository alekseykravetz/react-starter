import React, { createContext, useState } from 'react';
import jwt from 'jsonwebtoken';

import * as dataService from '../data.service';



export const AuthContext = createContext();


const AuthContextProvider = props => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    const signUp = async() => {

        const newUser = {
            email: 'alex2@alex.com',
            name: 'alex last',
            password: '123456'
        };

        const tokens = await dataService.signUpUser(newUser);
        const decodedUuser = jwt.decode(tokens.refresh_token);
        
        setUser(decodedUuser);
        setToken(tokens.access_token);

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