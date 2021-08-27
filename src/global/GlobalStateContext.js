import {useEffect, useState} from "react";
import {BASE_URL} from "../constants/url";
import {useRequestData} from "../hooks/useRequestData";
import GlobalContext from "./GlobalContext";


const GlobalStateContext = (props) => {
    const [listPokemon, setListPokemon] = useState([])  // name, url_pokemon
    const [listPokedex, setListPokedex] = useState([])  // name, url_front_default
    const [page, setPage] = useState(1)
    const [data] = useRequestData({}, `${BASE_URL}?limit=20&offset=${(page - 1) * 20}`)


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

        alert("Pokemon adicionado com sucesso!")

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

        alert("Pokemon removido com sucesso!")

        // remover da lista pokedex
        const newListPokedex = listPokedex.filter((item) => {
            return (item.name !== pokemon.name)
        })

        setListPokedex(newListPokedex)
    }

    const onChangePage = (event, value) => {
        setPage(value)
        console.log(value)
    }

    const states = {listPokemon, listPokedex, page};
    const setters = {addPokemon, removePokemon, onChangePage};
    const requests = {};

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext