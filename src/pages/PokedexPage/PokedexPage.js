import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToHomePage} from "../../routes/coordinator";


const PokedexPage = () => {
    const history = useHistory()

    return (
        <>
            <h1>PokedexPage</h1>
            <Button variant={"contained"} color={"primary"} onClick={() => goToHomePage(history)}>Voltar para lista de pokemons</Button>
        </>
    )
}

export default PokedexPage