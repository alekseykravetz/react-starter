import React, { useState, useEffect } from 'react';


export const useHttp = (url, verb, dependencies) => {

    console.log('useHttp running');

    const [isLoading, setIsLoading] = useState(false);
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        console.log('useHttp running useEffect');

        async function fetchDataAsync() {

            console.log('useHttp running useEffect fetchDataAsync', url, verb);

            const result = await window.fetch(url, { method: verb });

            const json = await result.json();

            console.log('useHttp running useEffect fetchDataAsync', json);


            setLoadedData(json);
            setIsLoading(false);
        }
        fetchDataAsync();
        setIsLoading(true);

    }, dependencies);


    return {
        isLoading,
        loadedData
    };
};


async function authFetch(uri, method) {

    const authenticationToken = window.localStorage.getItem('authenticationToken');

    const result = await fetch(uri, {
        method,
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${authenticationToken}`,
            'internal-secret': '5e3ocmXO+nBbdlsdtLgqH58E86QWXyWh',
            'x-api-key': '7CspdIbwSd6nPGDXqgTpo1UzYBDyoYdS5WZzIYT1'
        }
    });

    return result;
}