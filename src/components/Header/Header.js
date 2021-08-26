import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from "@material-ui/core";
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
    },
    header100: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "uppercase"
    },
    header50:{
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "uppercase"
    }
}));

const Header = (props) => {
    const classes = useStyles()

    return (
        <>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Box className={props.display === "space" ? classes.header100 : classes.header50}>
                    {props.Button1}

                    <Typography>
                        {props.title}
                    </Typography>

                    {props.Button2}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header