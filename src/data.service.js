import config from './config';


export async function authenticatedFetch(verb, url, body, accessToken) {

    const headers = {
        'AUTHORIZATION': `Bearer ${accessToken}`
    };

    const requestInfo = {
        method: verb,
        headers
    };

    if (body) {
        headers['Content-Type'] = 'application/json';
        requestInfo.body = JSON.stringify(body);
    }

    const request = new Request(`${config.apiUrl}/${url}`, requestInfo);

    const result = await fetch(request);

    if (result.status === 400 || result.status === 401) {
        alert('Unauthorized request! (token has expired or no token provided)');
        window.parent.postMessage('logout', '*');
    }

    if (result.status === 403) {
        const message = await result.json();
        return { errMsg: message };
    }

    if (result.status !== 200) {
        throw new Error(`The result status is not 200 (${result.status}), status text: ${result.statusText}`);
    }

    const json = await result.json();
    return json;
}

export async function getPrivateData(accessToken) {

    const result = await authenticatedFetch('get', 'private-api', null, accessToken);

    return result;
}

export async function getUsers() {
    const result = await fetch(`${config.apiUrl}/users`);

    const json = await result.json();
    return json;
}

// export async function getUsers() {
//     const result = await authenticatedFetch('GET', 'users');
//     return result;
// }


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