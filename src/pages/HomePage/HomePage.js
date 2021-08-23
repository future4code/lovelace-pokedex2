import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToMyPokedex, goToPokemonDetails } from "../../routes/coordinator";


const HomePage = () => {
    const history = useHistory()
   

    return (
        <> 
            <Header
                Pokedex={
                <Button 
                variant={"outlined"} 
                color={"secondary"} 
                onClick={() => goToMyPokedex(history)}
                >Ver minha Pokedex
                </Button>
            }
            />
            <h1>HomePage</h1>
            
            <Button variant={"contained"} color={"primary"} onClick={() => goToPokemonDetails(history)}>Detalhes do Pokemon</Button>
        </>
    )
}

export default HomePage