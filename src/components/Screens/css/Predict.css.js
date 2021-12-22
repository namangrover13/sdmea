import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0
    },
    btnsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 40,
        padding: 40,
        justifyContent: 'center',
        marginLeft: '20%'
    },
    btn: {
        width: 230,
        height: 80,
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 18,
        margin: 30,
        borderRadius: 8,
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            boxShadow: '4px 4px 4px #101928'
        }
    }
}))