import { useState } from 'react';
import jwt from 'jsonwebtoken';

import * as dataService from '../data.service';


const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const signIn = async (email, password) => {

        const accessToken = await dataService.signInUser({ email, password });

        window.localStorage.setItem('accessToken', accessToken);

        const decodedUser = jwt.decode(accessToken);

        setUser(decodedUser);
        setToken(accessToken);


        // const privateData = await dataService.getPrivateData(accessToken);
        // console.log('privateData', privateData);
    };

    return { user, token, signIn };
};

export { useAuthentication };