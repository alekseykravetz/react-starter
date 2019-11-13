import { makeStyles } from '@material-ui/core/styles';


const useBookGlobalStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
}));

export { useBookGlobalStyles };
