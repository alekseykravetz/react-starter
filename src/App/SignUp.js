
import React, { useContext, useState } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import { useAppStyles } from './style';

import { AuthContext } from './context';


const SignUp = () => {

    const classes = useAppStyles();
    const { signUp } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
        signUp(email, name, password );
    };

    return (
        <Paper className={classes.container}>
            <Typography variant="h5">Sign Up:</Typography>
            <form onSubmit={submit}>
                <TextField className={classes.textField} margin="normal"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField className={classes.textField} margin="normal"
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <TextField className={classes.textField} margin="normal"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit" variant="contained" className={classes.button}>Signup</Button>
            </form>
        </Paper>
    );

};

export default SignUp;

