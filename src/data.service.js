import config from './config';


export async function getUsers() {
    const result = await fetch(`${config.apiUrl}/${'users'}`);

    const json = await result.json();
    return json;
}
