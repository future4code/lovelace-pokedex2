import {Box, Button, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex, goToPokemonDetails} from "../../routes/coordinator";
import {useRequestData} from "../../hooks/useRequestData";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {BASE_URL} from "../../constants/url";
import Header from "../../components/Header/Header";
import {useState} from "react";
import {PokemonListContext} from "../../context/ContextPokemonList";

import GlobalContext from "../../global/GlobalContext";
import { useContext } from "react";



const HomePage = () => {
    const history = useHistory()
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=20`)
    const [pokemonList, setPokemonList] = useState([])
    const { states, setters, requests } = useContext(GlobalContext);

    const addPokemon = (pok) => {
        console.log('pokemon', pok)
        const novaLista = [...pokemonList]
        novaLista.push(pok)
        setPokemonList(novaLista)
        console.log('lista', pokemonList)
    }

    const renderListaPokemon = states.listPokemon ? states.listPokemon.map((pokemon) => {

        return <Grid item lg={3} md={3} sm={6} xs={12}>
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                screen='HomePage'
            />
        </Grid>
        
    }) : <p>Carregando...</p>
    return (
        <PokemonListContext.Provider value={pokemonList}>
            < Box m={10}>
                <Header
                    title={'Lista de Pokemons'}
                    Button1={
                        <Button
                            variant={"outlined"}
                            color={"secondary"}
                            onClick={() => goToMyPokedex(history)}
                        >Ver minha Pokedex
                        </Button>
                    }
                />
            </Box>

            <Grid container spacing={4}>
                {renderListaPokemon}
            </Grid>
        </PokemonListContext.Provider>
    )
}

export default HomePage