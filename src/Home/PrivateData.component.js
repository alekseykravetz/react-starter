import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';

import { AuthContext } from '../App/context';

import config from '../config';


const PrivateData = () => {

    const { token } = useContext(AuthContext);
    const [ data, setData ] = useState('');

    const getPrivateData = async accessToken => {
    
        const result = await fetch(`${config.apiUrl}/private-api`, { 
            method: 'GET', 
            headers: { 'AUTHORIZATION': `Bearer ${accessToken}` } 
        });
        if (result.status === 400 || result.status === 401) {
            alert('Unauthorized request! (token has expired or no token provided)');
        }
        const privateData = await result.json();

        setData(JSON.stringify(privateData));
    };

    return (
        <>
            <Button color="inherit" onClick={() => getPrivateData(token)}>Get Private Data</Button>
            <div>
                Private Data: {data || 'no data loaded'}
            </div>
        </>
    );
};


export default PrivateData;
