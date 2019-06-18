import { observable, action, toJS } from 'mobx';

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