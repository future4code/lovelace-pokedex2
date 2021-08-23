import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import PokemonCard from "../../Components/Cards/PokemonCard";


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
        <h1>HomePage</h1>
        
        <Grid container spacing={4} style={{padding:'20px'}}>
            {renderListaPokemon}  
        </Grid>
        <Button variant={"contained"} color={"primary"} onClick={() => goToMyPokedex(history)}>Pokedex</Button>
        <Button variant={"contained"} color={"primary"} onClick={() => goToPokemonDetails(history)}>Detalhes do Pokemon</Button>
    </>
    )
}

export default HomePage