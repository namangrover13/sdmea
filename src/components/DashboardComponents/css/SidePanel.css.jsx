import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        // background: theme.palette.secondary.light,
        // color: theme.palette.common.white,
        height: '100%'
    },
    logo: {
        textAlign: 'center'
    },
    logContainer:{
    margin:'0px 0px 60px 0px'
    },
    listContainer: {
        padding: theme.spacing(0,1)
    }
}))