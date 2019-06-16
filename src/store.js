import { observable, action, toJS } from 'mobx';

class Store {

    @observable
    user = null;

    async init() {

        this.user = { name: 'alex' };
    }

    // async navigateTo() {

    //     this.user = { name: 'alex' };
    // }

}


const store = new Store();

export default store;