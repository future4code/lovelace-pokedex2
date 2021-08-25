import {Button, Grid, Box} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import {goToMyPokedex} from "../../routes/coordinator";


const PokemonDetailsPage = () => {
    const history = useHistory()
    const params = useParams()

    console.log(params.pokemonId)

    return (
        <>

            <Header
                title={'Pokedex'}
                Button1={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => history.goBack()}
                    >Voltar
                    </Button>
                }

                Button2={
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={() => goToMyPokedex(history)}
                    >Adicionar/Remover da Pokedex
                    </Button>
                }
            />

            <Box m={20}>
                <Grid container p={40} spacing={2}>
                    <Grid item xs={4}>
                        <Box m={1} style={{border: "1px solid #000"}} p={10}>
                            <p>imagem de frente</p>
                        </Box>

                        <Box m={1} style={{border: "1px solid #000"}} p={10}>
                            <p>imagem de costas</p>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box m={1} style={{border: "1px solid #000", height: "100%"}} p={10}>
                            <p>Stats</p>
                        </Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Box m={1} style={{border: "1px solid #000"}} p={10}>
                            <p>type 1 type 2</p>
                        </Box>

                        <Box m={1} style={{border: "1px solid #000"}} p={10}>
                            <p>Moves</p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default PokemonDetailsPage