import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0
    },
    searchDiv: {
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    searchBtn: {
        width: 150,
        height: 40,
        marginTop: 20,
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 16
    }
}))