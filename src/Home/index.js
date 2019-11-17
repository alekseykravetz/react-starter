import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import FontIcon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useHomeStyles } from './style';
import { useFormInput } from '../hooks/useFormInput.hook';

import TextInput from './TextInput.component';
import CurrentDateTime from './CurrentDateTime.component';
import PrivateData from './PrivateData.component';
import ServerConnectionCheck from './ServerConnectionCheck.component';




const Home = props => {
    const classes = useStyles();
    const commonClasses = useHomeStyles();

    const nameForm = useFormInput('enter name');
    const surnameForm = useFormInput('enter surname');

    return (
        <React.Fragment>

            <div className={classes.Title}>
                <span className={classes.TitleText}>Home Route</span>
            </div>

            <div className={classes.Content}>

                <FontIcon color="error">star</FontIcon>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <div className={classes.verticalContainer}>
                    <CurrentDateTime />
                </div>

                <div className={classes.verticalContainer}
                    onClick={() => props.history.push('/private-data')}>
                    navigate to Private Page
                </div>
                <div className={classes.verticalContainer}>
                    <Link to="/private-data">navigate Private Data</Link>
                </div>

                <div className={classes.verticalContainer}>
                    <TextInput label="Input label" />
                </div>

                <div className={classes.verticalContainer}>
                    <input type="text" {...nameForm} className={commonClasses.input} />
                </div>
                <div className={classes.verticalContainer}>
                    <input type="text" {...surnameForm} className={commonClasses.input} />
                </div>


                <Button variant="contained" color="primary" onClick={() => alert(nameForm.value)}>
                    Show Input Value
                </Button>

                <div className={classes.verticalContainer}>
                    <PrivateData />
                </div>

                <div className={classes.verticalContainer}>
                    <ServerConnectionCheck />
                </div>


                <div className={classes.Buttons}>
                    <div className="app-button secondary" onClick={() => console.log('Back button clicked')}>Back</div>
                    <div className="app-button primary" onClick={() => console.log('Next button clicked')}>Next</div>
                </div>

                <div className={classes.Buttons}>
                    <div className={`app-button secondary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Back button clicked')}>Back</div>
                    <div className={`app-button primary  ${false ? '' : 'disabled'}`} onClick={() => false && console.log('Next button clicked')}>Next</div>
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
