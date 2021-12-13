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
    },
    studentDetailsContainer: {
        width: '50%',
        margin: 'auto',
        border: '2px solid #101928',
        borderRadius: 12,
        padding : 20
    },
    detailContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsTxt: {
        fontSize: 20,
        fontWeight: 500
    },
    detail: {
        fontSize: 20,
        fontWeight: 700,
    }
}))