import config from './config';


export async function getServerHistories() {
    const result = await fetch(`${config.apiUrl}/${'server-histories'}`);
    const json = await result.json();
    return json;
}

export async function getServerHistory(id) {
    const result = await fetch(`${config.apiUrl}/${'server-history'}/${id}`);
    const json = await result.json();
    return json;
}

export async function pingServer(name, message) {
    const result = await fetch(`${config.apiUrl}/${'server-ping'}/${name}/${message}`);
    const json = await result.json();
    return json;
}
