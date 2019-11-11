import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import * as dataService from '../data.service';

import { useHttp } from '../hooks/useHttp.hook';
import config from '../config';


const ServerConnectionCheck = () => {

    const [serverHistories, setServerHistories] = useState([]);
    const [lastServerHistory, setLastServerHistory] = useState(null);

    const { isLoading, loadedData } = useHttp(`${config.apiUrl}/${'server-histories'}`, 'get', []);

    const getServerHistories = async () => {

        try {
            const loadedHistories = await dataService.getServerHistories();
            setServerHistories(loadedHistories);

            const lastHistory = loadedHistories.slice(-1)[0];
            setLastServerHistory(lastHistory);

        } catch (error) {
            console.error(error);
        }
    };

    const [serverHistory, setServerHistory] = useState(null);

    const getServerHistory = async id => {

        try {
            const serverHistoryFromServer = await dataService.getServerHistory(id);
            setServerHistory(serverHistoryFromServer);

        } catch (error) {
            console.error(error);
        }
    };

    const [pingPayload, setPingPayload] = useState('');

    const pingServer = async () => {

        try {
            const serverPingResult = await dataService.pingServer('Some Name', 'Some message');
            setPingPayload(serverPingResult);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={getServerHistories}>Get Server Histories</Button>
            <Button variant="contained" color="primary" onClick={pingServer}>Ping Server</Button>

            <div>
                Ping Server Payload: {JSON.stringify(pingPayload)}
            </div>

            <div>
                Last Server History: {JSON.stringify(lastServerHistory)}
            </div>

            <div>
                Specific Server History: {JSON.stringify(serverHistory)}
            </div>

            <div>
                Server Histories:
                <ul>
                    {serverHistories.map(history => <li key={history._id} onClick={() => getServerHistory(history._id)}>{JSON.stringify(history)}</li>)}
                </ul>
            </div>

            <div>
                Is Loading: {isLoading.toString()}
            </div>
            <div>
                Is Loading: {JSON.stringify(loadedData)}
            </div>
        </>
    );
};


export default ServerConnectionCheck;