import { observable, action } from 'mobx';

import * as dataService from './data.service';


class Store {

    @observable
    counter = 0;

    @observable
    someInput = 'free text';

    async init() {

        this.startCounter();

        const serverHistories = await dataService.getServerHistories();
        console.log('serverHistories', serverHistories);

        const lastServerHistory = serverHistories.slice(-1)[0];
        console.log('lastServerHistory', lastServerHistory);

        const serverHistoryFromServer = await dataService.getServerHistory(lastServerHistory._id);
        console.log('serverHistoryFromServer', serverHistoryFromServer);

        const serverPingResult = await dataService.pingServer('Some Name', 'Some message');
        console.log('serverPingResult', serverPingResult);
    }

    @action
    startCounter() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }

    @action.bound
    updateSomeInputProperty(value) {
        this.someInput = value;
    }

}

const store = new Store();

export default store;
