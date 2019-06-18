import { observable, action, toJS } from 'mobx';

import * as dataService from './data.service';


class Store {

    @observable
    user = null;

    @observable
    counter = 0;

    @observable
    someInput = 'free text';

    async init() {

        this.user = { name: 'alex' };

        this.startCounter();

        this.getUsers();
    }

    @action
    async getUsers() {
        const users = await dataService.getUsers();
        console.log(users);
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