import {useEffect, useState} from "react";
import {BASE_URL} from "../constants/url";
import {useRequestData} from "../hooks/useRequestData";
import GlobalContext from "./GlobalContext";


const GlobalStateContext = (props) => {
    const [listPokemon, setListPokemon] = useState([])  // name, url_pokemon
    const [listPokedex, setListPokedex] = useState([])  // name, url_front_default
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=20`)

    useEffect(() => {
        setListPokemon(data.results)
    }, [data])

    const addPokemon = (pokemonName, pokemonUrl) => {  // name, url_pokemon
        const pokemon = {
            name: pokemonName,
            url: pokemonUrl
        }
        // adicionando a lista pokedex
        const newListPokedex = [...listPokedex, pokemon];
        setListPokedex(newListPokedex);

        // removendo da lista pokemon
        const newListPokemon = listPokemon.filter((item) => {
            return (item.name !== pokemon.name)
        })
        setListPokemon(newListPokemon)
    }

    const removePokemon = (pokemonName, pokemonUrl) => {  // name, url_pokemon
        const pokemon = {
            name: pokemonName,
            url: pokemonUrl
        }
        // adicionando na lista da pokemon
        const newListPokemon = [...listPokemon, pokemon];  // name, url_pokemon
        setListPokemon(newListPokemon);

        // remover da lista pokedex
        const newListPokedex = listPokedex.filter((item) => {
            return (item.name !== pokemon.name)
        })
        setListPokedex(newListPokedex)
    }

    // const isPokedex = (pokemonName) => {
    //     const ispokemon = listPokedex.find((pokemon) => {
    //         if (pokemon.name === pokemonName){
    //             setUrlPokemon(pokemon.url)
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    //
    //     // console.log(ispokemon)
    //
    //     if (ispokemon) {
    //         // console.log("estar a lista pokedex", ispokemon)
    //         setbeOnPokedex(true)
    //
    //         // addPokemon(ispokemon.name, ispokemon.url)
    //     } else {
    //         // console.log("não estar a lista pokedex", ispokemon)
    //
    //         setbeOnPokedex(false)
    //
    //         // removePokemon(ispokemon.name, ispokemon.url)
    //     }
    // }


    const states = {listPokemon, listPokedex};
    const setters = {addPokemon, removePokemon};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext