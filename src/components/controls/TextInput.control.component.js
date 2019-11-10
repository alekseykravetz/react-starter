import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';


const TextInput = ({label}) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    return (
        <>
            <div className={classes.control}>
                <div className={classes.label}>{label}</div>
                <input className={classes.input} type="text" value={value} onChange={e => setValue(e.target.value)} />
            </div>
            <div>
                Input Value: {value}
            </div>
        </>
    );
};

export default TextInput;


const useStyles = makeStyles(theme => ({
    control: {
        maxWidth: 200
    },
    label: {
        marginTop: 5,
        color: '#282828',
        fontSize: 14,
        fontWeight: 500
    },
    input: {
        background: 'none',
        border: '1px solid #8e8e8e',
        borderRadius: 6,
        fontSize: 14,
        color: '#282828',
        outline: 'none',
        padding: '5px 10px',
        whitepsace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

}));

