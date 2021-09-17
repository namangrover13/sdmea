import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        height: '100%'
    },
    header: {
        height: 50,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        textAlign: 'center'
    }
}))