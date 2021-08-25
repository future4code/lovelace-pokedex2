
import {Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import PokemonCard from "../../components/Cards/PokemonCard";
import { BASE_URL } from "../../constants/url";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { PokemonListContext } from "../../context/ContextPokemonList";



const HomePage = () => {
    const history = useHistory()
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=20`)
    const [pokemonList, setPokemonList] = useState([])

    const addPokemon = (pok) => {
        console.log('pokemon', pok)
        const novaLista = [...pokemonList]
        novaLista.push(pok)
        setPokemonList(novaLista)
        console.log('lista', pokemonList)
      }

    const renderListaPokemon = data.results ? data.results.map((pokemon) => {

        return <Grid item xs={3} >
            <PokemonCard 
                name={pokemon.name}
                url={pokemon.url}
                addPokemon={addPokemon}
            />
        </Grid>
        
    }) : <p>Carregando...</p>
    return (
        <PokemonListContext.Provider value={pokemonList}> 
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


            <Button variant={"contained"} color={"primary"} onClick={() => goToPokemonDetails(history)}>Detalhes do Pokemon</Button>
        </PokemonListContext.Provider>
    )
}

export default HomePage