import { observable, action, toJS } from 'mobx';

class Store {

    @observable
    user = null;

    @observable
    counter = 0;

    async init() {

        this.user = { name: 'alex' };

        this.startCounter();
    }

    @action
    startCounter() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }


}


const store = new Store();

export default store;