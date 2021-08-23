import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToMyPokedex} from "../../routes/coordinator";


const PokemonDetailsPage = () => {
    const history = useHistory()

    return (
        <>
            <Header/>
            <h1>PokemonDetailsPage</h1>
            <Button variant={"contained"} color={"primary"} onClick={() => history.goBack()}>Voltar</Button>
            <Button variant={"contained"} color={"primary"} onClick={() => goToMyPokedex(history)}>Adicionar/Remover da Pokedex</Button>
        </>
    )
}

export default PokemonDetailsPage