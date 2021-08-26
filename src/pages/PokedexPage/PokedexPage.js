import {Box, Button, Grid, Zoom} from "@material-ui/core";
import {useContext} from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToHomePage} from "../../routes/coordinator";
import GlobalContext from "../../global/GlobalContext";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import CircularProgress from "@material-ui/core/CircularProgress";


const PokedexPage = () => {
    const history = useHistory()
    const {states} = useContext(GlobalContext);

    const renderListaPokedex = states.listPokedex
        ? states.listPokedex.map((pokemon) => {
            return (
                <Zoom key={pokemon.name} in style={{transitionDelay: pokemon ? '500ms' : '0ms'}}>
                    <Grid item xs={3}>
                        <PokemonCard
                            name={pokemon.name}
                            url={pokemon.url}
                            screen='Pokedex'
                        />
                    </Grid>
                </Zoom>
            )
        })
        : (
            <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                <CircularProgress color="secondary"/>
            </Box>
        )

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

            <Box m={15}>
                <Grid container spacing={4} style={{padding: '20px'}}>
                    {renderListaPokedex}
                </Grid>
            </Box>
        </>
    )
}

export default PokedexPage