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

    @action.bound
    async signUp() {
        const user = {
            email: 'alex2@alex.com',
            display_name: 'alex last',
            password: '123456'
        };

        const tokens = await dataService.signUpUser(user);

        console.log('tokens', tokens);

        // dataService.setToken(tokens.access_token);

        this.loggedInUser = jwt.decode(tokens.refresh_token);

        console.log('this.loggedInUser', this.loggedInUser);

        // this.dxAccessToken = await dataService.createDxperienceUser();

        // window.localStorage.setItem('refresh_token', tokens.refresh_token);
    }

    @action.bound
    async signIn() {

        const user = {
            email: 'alex2@alex.com',
            password: '123456'
        };

        const tokens = await dataService.signInUser(user);

        console.log('tokens', tokens);

        // dataService.setToken(tokens.access_token);

        this.loggedInUser = jwt.decode(tokens.refresh_token);

        console.log('this.loggedInUser', this.loggedInUser);

        // this.dxAccessToken = await dataService.getDxperienceAccessToken();

        // window.localStorage.setItem('refresh_token', tokens.refresh_token);


        const privateData = await dataService.getPrivateData(tokens.access_token);
        console.log(privateData);
    }

}


const store = new Store();

export default store;