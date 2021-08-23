import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

const Header = (props) => {
    const classes = useStyles()

    return (
        <>
            <AppBar>
                <Toolbar>
                    {props.Pokedex}
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header