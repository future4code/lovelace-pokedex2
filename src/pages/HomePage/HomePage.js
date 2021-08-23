import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";
import { useRequestData } from "../../Hooks/useRequestData";
import PokemonCard from "../../Components/Cards/PokemonCard";
import { BASE_URL } from "../../constants/url";
import { Button } from "@material-ui/core";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { goToMyPokedex, goToPokemonDetails } from "../../routes/coordinator";


const HomePage = () => {
    const history = useHistory()
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=20`)

    const renderListaPokemon = data.results ? data.results.map((pokemon) => {

        return <Grid item xs={3} >
            <PokemonCard 
                name={pokemon.name}
                url={pokemon.url}
            />
        </Grid>
        
    }) : <p>Carregando...</p>
    return (
        <> 
            <Header
                Pokedex={
                <Button 
                variant={"outlined"} 
                onClick={() => goToMyPokedex(history)}
                color={"secondary"} 
                >Ver minha Pokedex
                </Button>
            }
            />
            <h1>HomePage</h1>
            
        </Grid>
            {renderListaPokemon}  
        <Grid container spacing={4} style={{padding:'20px'}}>
            <Button variant={"contained"} color={"primary"} onClick={() => goToPokemonDetails(history)}>Detalhes do Pokemon</Button>
        </>
    )
}

export default HomePage