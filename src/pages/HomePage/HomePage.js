import {Box, Button, Zoom, Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {goToMyPokedex} from "../../routes/coordinator";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

import GlobalContext from "../../global/GlobalContext";
import {useContext} from "react";



const HomePage = () => {
    const history = useHistory()
    const {states, setters} = useContext(GlobalContext);

    const renderListaPokemon = states.listPokemon
        ? states.listPokemon.map((pokemon) => {
            return (
                <Zoom key={pokemon.name} in style={{transitionDelay: pokemon ? '500ms' : '0ms'}}>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <PokemonCard
                            name={pokemon.name}
                            url={pokemon.url}
                            screen='HomePage'
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
            <Box m={10}>
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

            <Box m={15}>
                <Grid container spacing={4}>
                    {renderListaPokemon}
                </Grid>

                <Box m={5} style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Pagination count={50}  variant="outlined" color="secondary" onChange={setters.onChangePage}/>
                </Box>
            </Box>
        </>
    )
}

export default HomePage