import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex} from "../../routes/coordinator";


const PokemonDetailsPage = () => {
    const history = useHistory()

    return (
        <>
            <h1>PokemonDetailsPage</h1>
            <Button variant={"contained"} color={"primary"} onClick={() => history.goBack()}>Voltar</Button>
            <Button variant={"contained"} color={"primary"} onClick={() => goToMyPokedex(history)}>Adicionar/Remover da Pokedex</Button>
        </>
    )
}

export default PokemonDetailsPage