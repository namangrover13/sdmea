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
        fontSize: 24,
        fontFamily: 'Cabin, sans-serif',  
        padding: 10,
        textAlign: 'left',
        textTransform: 'uppercase',
        display:"flex",
        justifyContent:'space-between'
    }
}))
