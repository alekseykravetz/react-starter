import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
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
