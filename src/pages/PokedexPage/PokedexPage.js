import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToHomePage} from "../../routes/coordinator";

import React, { useContext } from 'react';
import { PokemonListContext } from '../../context/ContextPokemonList';

const PokedexPage = () => {
    const history = useHistory()
    const pokemonList = useContext(PokemonListContext)
    console.log('lista', pokemonList)
    return (
        <>
            <Header/>
            <h1>PokedexPage</h1>
            <Button variant={"contained"} color={"primary"} onClick={() => goToHomePage(history)}>Voltar para lista de pokemons</Button>
        </>
    )
}

export default PokedexPage