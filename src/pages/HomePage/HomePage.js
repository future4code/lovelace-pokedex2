
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";
import { useRequestData } from "../../Hooks/useRequestData";
import PokemonCard from "../../components/Cards/PokemonCard";

import Header from "../../components/Header/Header";

import GlobalContext from "../../global/GlobalContext";
import { useContext } from "react";



const HomePage = () => {
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalContext);


    const renderListaPokemon = states.listPokemon ? states.listPokemon.map((pokemon) => {

        return <Grid item xs={3} >
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                screen='HomePage'
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
                onClick={() => goToMyPokedex(history)}
                >Ver minha Pokedex
                </Button>
            }
            />
            <h1>HomePage</h1>
            
      
           
        <Grid container spacing={4} style={{padding:'20px'}}>
           {renderListaPokemon}  
        </Grid>
        </>
    )
}

export default HomePage