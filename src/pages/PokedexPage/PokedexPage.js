import {Button, Grid} from "@material-ui/core";
import {useContext} from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToHomePage} from "../../routes/coordinator";
import GlobalContext from "../../global/GlobalContext";
import PokemonCard from "../../components/Cards/PokemonCard";


const PokedexPage = () => {
    const history = useHistory()
    const {states} = useContext(GlobalContext);

    const renderListaPokedex = states.listPokedex ? states.listPokedex.map((pokemon) => {
        return (
            <Grid key={pokemon.name} item xs={3}>
                <PokemonCard
                    name={pokemon.name}
                    url={pokemon.url}
                    screen='Pokedex'
                />
            </Grid>
        )
    }) : <p>Carregando...</p>

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

            <Grid container spacing={4} style={{padding:'20px'}}>
                {renderListaPokedex}
            </Grid>
        </>
    )
}

export default PokedexPage