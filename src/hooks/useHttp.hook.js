import React, { useState, useEffect } from 'react';


export const useHttp = (url, fetchOptions, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await fetch(url, fetchOptions);
            const json = await result.json();

            setLoadedData(json);
            setIsLoading(false);
        })();

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