import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0
    },
    tableRow: {
        background: '#fff',
        '&:hover': {
            cursor: 'pointer',
            background: '#eee'
        }
    },
    btnClass: {
        display: 'block',
        margin: 'auto',
        background: theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 600,
        height: 40,
        color: '#fff',
        '&:hover': {
            background: theme.palette.primary.main,
            boxShadow: '3px 3px 3px #888'
        }
    }
}))