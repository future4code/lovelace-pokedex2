import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
    },
    header100: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "uppercase",
        width: "100%"
    },
    header50: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "uppercase",
        width: "50%"
    }
}));

const Header = (props) => {
    const classes = useStyles()

    return (
        <>
            <AppBar className={classes.root}>
                <Toolbar>
                    <Box className={props.display === "space" ? classes.header100: classes.header50 }>
                        {props.Button1}

                        <Typography variant={"body1"}>
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