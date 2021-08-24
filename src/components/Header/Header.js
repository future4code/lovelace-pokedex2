import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        // left: theme.spacing(2),
    },
}));

const Header = (props) => {
    const classes = useStyles()

    return (
        <>
            <Box>
                <AppBar className={classes.root}>
                    <Toolbar>
                        {props.Pokedex}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default Header