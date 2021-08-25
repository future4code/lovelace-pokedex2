import {Button, Grid} from "@material-ui/core";
import { useContext } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToHomePage} from "../../routes/coordinator";
import GlobalContext from "../../global/GlobalContext";
import PokemonCard from "../../components/Cards/PokemonCard";


const PokedexPage = () => {
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalContext);

    const renderListaPokedex = states.listPokedex ? states.listPokedex.map((pokemon) => {

        return <Grid item xs={3} >
            <PokemonCard 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                screen='Pokedex'
            />
        </Grid>
        
    }) : <p>Carregando...</p>

    return (
        <>
            <Header 
                Pokedex={
                <Button 
                    variant={"outlined"} 
                    color={"secondary"} 
                    onClick={() => goToHomePage(history)}
                >Voltar para lista de pokemons
                </Button>
            }
            />
            <h1>PokedexPage</h1>

            <Grid container spacing={4} style={{padding:'20px'}}>
                {renderListaPokedex}  
            </Grid>
        </>
    )
}

export default PokedexPage