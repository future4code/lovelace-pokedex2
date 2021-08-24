import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage, goToMyPokedex, goToPokemonDetails } from "../../routes/coordinator";


const PokemonDetailsPage = () => {
    const history = useHistory()

    return (
        <>

            <Header
                title={'Pokedex'}
                Button1={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => history.goBack()}
                        >Voltar
                      
                    </Button>

                }
                Button2={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => goToMyPokedex(history)}
                        >Adicionar/Remover da Pokedex
                      
                    </Button>

                }

                
            />

            <h1>PokemonDetailsPage</h1>

            
        </>
    )
}

export default PokemonDetailsPage