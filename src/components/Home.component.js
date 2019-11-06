import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useCommonStyle from './common.style';
import { useFormInput } from '../hooks/useFormInput.hook';

// import { observer } from 'mobx-react';

import store from '../store';

import TextInput from './controls/TextInput.control.component';


const Home = props => {
    const classes = useStyles();
    const commonClasses = useCommonStyle();
    
    const nameForm = useFormInput('enter name');

    return (
        <React.Fragment>

            <div className={classes.Title}>
                <span className={classes.TitleText}>Home Route</span>
            </div>

            <div className={classes.Content}>

                <div className={classes.verticalContainer}>
                    Counter: {store.counter}
                </div>

                <div className={classes.verticalContainer}
                    onClick={() => props.history.push('/about')}>
                    navigate to About Page
                </div>
                <div className={classes.verticalContainer}>
                    <Link to="/about">About</Link>
                </div>

                <div className={classes.verticalContainer}>
                    <TextInput label="Input label" />
                </div>

                <div className={classes.verticalContainer}>
                    <input type="text" {...nameForm} className={commonClasses.input} />
                </div>


                <Button variant="contained" color="primary">
                    Hello World
                </Button>

                <div className={classes.Buttons}>
                    <div className="app-button secondary" onClick={() => console.log('Back button clicked')}>Back</div>
                    <div className="app-button primary" onClick={() => console.log('Next button clicked')}>Next</div>
                </div>

                <div className={classes.Buttons}>
                    <div className={`app-button secondary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Back button clicked')}>Back</div>
                    <div className={`app-button primary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Next button clicked')}>Next</div>
                </div>

                <div className={classes.Buttons}>
                    <div className="app-button primary" onClick={store.signUp}>Signup</div>
                    <div className="app-button primary" onClick={store.signIn}>Signin</div>
                </div>

            </div>

        </React.Fragment>
    );
};

export default Home;

const useStyles = makeStyles(theme => ({
    verticalContainer: {
        padding: '5px 0',
    },
    Title: {
        padding: 10,
        borderRadius: '6px 6px 0 0',
        boxhsadow: '0 1px 2px rgba(0, 0, 0, 0.16)',
        backgroundColor: '#6b6b6b',
    },
    TitleText: {
        marginLeft: 20,
        color: '#61f4ff',
        fontSize: 19,
        fontWeight: 500,
    },

    Content: {
        padding: 20
    },
    Buttons: {
        display: 'flex',
        userSelect: 'none',
        justifyContent: 'flex-end',
        marginTop: 20,
        marginiRght: 20,
    },
}));
