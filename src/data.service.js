import config from './config';


export async function getPrivateData(accessToken) {

    const result = await fetch(`${config.apiUrl}/private-api`, { method: 'get', headers: { 'AUTHORIZATION': `Bearer ${accessToken}` } });

    if (result.status === 400 || result.status === 401) {
        alert('Unauthorized request! (token has expired or no token provided)');
        // window.parent.postMessage('logout', '*');
    }

    const json = await result.json();
    return json;
}

export async function getUsers() {
    const result = await fetch(`${config.apiUrl}/users`);

    const json = await result.json();
    return json;
}

export async function signUpUser(user) {

    const fetchOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
    };

    const url = `${config.apiUrl}/signup`;

    const result = await fetch(url, fetchOptions);

    const json = await result.json();

    return json;
}

export async function signInUser(user) {

    const fetchOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
    };

    const url = `${config.apiUrl}/signin`;

    const result = await fetch(url, fetchOptions);

    const json = await result.json();

    return json;
}
