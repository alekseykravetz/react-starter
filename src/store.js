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

        try {
            const serverHistories = await dataService.getServerHistories();
            console.log('serverHistories', serverHistories);
    
            const lastServerHistory = serverHistories.slice(-1)[0];
            console.log('lastServerHistory', lastServerHistory);
    
            const serverHistoryFromServer = await dataService.getServerHistory(lastServerHistory._id);
            console.log('serverHistoryFromServer', serverHistoryFromServer);
    
            const serverPingResult = await dataService.pingServer('Some Name', 'Some message');
            console.log('serverPingResult', serverPingResult);

        } catch (error) {
            console.log(error);
            return null;
        }
        return null;
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
