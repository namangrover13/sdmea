import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 40px',
        margin: '10px 0',
        background: theme.palette.primary.main
    },
    heading: {
        color: theme.palette.common.white,
        fontFamily: 'Cabin, sans-serif',
        fontSize: 40,
        textAlign: 'center',
        fontWeight:500
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius:12,
        // background: theme.palette.common.white,
        width: 350,
        margin: 20
    },
    img: {
        width: 250,
        height:250,
        borderRadius: '50%',
        display: 'block',
        margin: 'auto'
    },
    name: {
        color: theme.palette.common.white,
        fontSize: 28,
        fontFamily: 'Cabin, sans-serif',
        textAlign: 'center',
        margin: '8px 0'
    },
    tagline: {
        color: theme.palette.common.white,
        fontSize: 18,
        fontFamily: 'Cabin, sans-serif',
        textAlign: 'center',
        marginTop: 0,
        fontWeight:400
    }
}))