import {CssBaseline} from "@material-ui/core";
import GlobalStateContext from "./global/GlobalStateContext";
import Router from "./routes/Router";


function App() {
    return (
        <GlobalStateContext>
            <CssBaseline/>
            <Router/>
        </GlobalStateContext>
    );
}

export default App;
