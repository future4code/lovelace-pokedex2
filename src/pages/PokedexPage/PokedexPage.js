import React, { useContext } from 'react';

//Styles
import { Button } from "@material-ui/core";

//Components
import Header from "../../components/Header/Header";
import { goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

//Context
import { PokemonListContext } from '../../context/ContextPokemonList';

const PokedexPage = () => {
    const history = useHistory()
    const pokemonList = useContext(PokemonListContext)
    console.log('lista', pokemonList)
    return (
        <>
            <Header
                title={'Lista de Pokemon'}
                Button1={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => goToHomePage(history)}
                    >Voltar para Lista de Pokedex
                    </Button>
                }
            />
        </>
    )
}

export default PokedexPage