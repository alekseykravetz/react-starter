import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth.context';

import * as dataService from '../../data.service';


const PrivateData = () => {

    const { token } = useContext(AuthContext);
    const [ data, setData ] = useState('');

    const getPrivateData = async accessToken => {
        const privateData = await dataService.getPrivateData(accessToken);
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
