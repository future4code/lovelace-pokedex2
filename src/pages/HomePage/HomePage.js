import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";


const HomePage = () => {
    const history = useHistory()

    return (
    <>
        <h1>HomePage</h1>
        <Button variant={"contained"} color={"primary"} onClick={() => goToMyPokedex(history)}>Pokedex</Button>
        <Button variant={"contained"} color={"primary"} onClick={() => goToPokemonDetails(history)}>Detalhes do Pokemon</Button>
    </>
    )
}

export default HomePage