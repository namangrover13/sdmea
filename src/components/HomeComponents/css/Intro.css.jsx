import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding:'30px',
        margin: 0, 
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Cabin, sans-serif',
        marginTop:40
    },
    subHeading: {
        color: theme.palette.primary.main,
        fontSize: 18,
        fontFamily: 'Cabin, sans-serif',
        marginBottom: 0
    },
    heading: {
        color: theme.palette.primary.main,
        fontSize: 40,
        width:500,
        marginTop:5,
        marginBottom:8
    },
    tagline: {
        color: theme.palette.primary.main,
        fontSize: 22,
        fontFamily: 'Cabin, sans-serif',
        marginBottom: 0,
        width:580
    },
    img: {
        width:700,
        borderRadius:12,
        marginRight: 100
    },
    btn: {
        alignSelf: 'flex-start',
        margin: '20px 0px',
        color: theme.palette.primary.text,
        background: theme.palette.primary.main,
        fontSize: 18,
        fontFamily: 'Cabin, sans-serif',
        marginBottom: 0,
        padding: '7px 15px',
        '&:hover': {
            color: theme.palette.primary.text,
            background: theme.palette.primary.main,
            boxShadow: '3px 3px 3px rgba(15,42,67, 0.5)'
        }
    }
}))