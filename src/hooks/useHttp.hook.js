import React, { useState, useEffect } from 'react';


export const useHttp = (url, verb, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        console.log('useHttp.useEffect');

        async function fetchDataAsync() {
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


async function authFetch(uri, method, accessToken) {

    const result = await fetch(uri, { method, headers: { 'AUTHORIZATION': `Bearer ${accessToken}` } });

    return result;
}