import { observable, action } from 'mobx';
import jwt from 'jsonwebtoken';

import * as dataService from './data.service';


class Store {

    @observable
    user = null;

    @observable
    counter = 0;

    @observable
    someInput = 'free text';

    async init() {

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

    @action.bound
    async signUp() {

        const user = {
            email: 'alex2@alex.com',
            name: 'alex last',
            password: '123456'
        };

        const tokens = await dataService.signUpUser(user);
        console.log('tokens', tokens);

        window.localStorage.setItem('accessToken', tokens.access_token);

        this.user = jwt.decode(tokens.refresh_token);

        console.log('this.user', this.user);
    }

    @action.bound
    async signIn() {

        const user = {
            email: 'alex2@alex.com',
            password: '123456'
        };

        const accessToken = await dataService.signInUser(user);

        console.log('accessToken', accessToken);

        window.localStorage.setItem('accessToken', accessToken);

        this.user = jwt.decode(accessToken);

        console.log('this.user', this.user);

        const privateData = await dataService.getPrivateData(accessToken);
        console.log('privateData', privateData);
    }

}


const store = new Store();

export default store;