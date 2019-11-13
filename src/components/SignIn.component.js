
import React, { useContext, useState } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { useBookGlobalStyles } from './Book/style';

import { AuthContext } from '../contexts/Auth.context';


const SignIn = () => {

    const classes = useBookGlobalStyles();
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
        signIn(email, password);
    };

    return (
        <Paper className={classes.container}>
            <Typography variant="h5">Sign In:</Typography>
            <form onSubmit={submit}>
                <TextField className={classes.textField} margin="normal"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField className={classes.textField} margin="normal"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit" variant="contained" className={classes.button}>Signin</Button>
            </form>
        </Paper>
    );

};

export default SignIn;

