

export async function authenticatedFetch(verb, url, body) {

    const headers = {
        'AUTHORIZATION': `Bearer ${'AccessToken'}`
    };

    if (body) {
        headers['Content-Type'] = 'application/json';
    }

    const requestInfo = {
        method: verb,
        headers,
        body: JSON.stringify(body)
    };

    const request = new Request(`http://localhost:1020/api/v1/${url}`, requestInfo);

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

export async function getUsers() {
    const result = await fetch(`http://localhost:1020/api/v1/${'users'}`);

    const json = await result.json();
    return json;
}

// export async function getUsers() {
//     const result = await authenticatedFetch('GET', 'users');
//     return result;
// }