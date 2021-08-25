import {useHistory, useParams} from "react-router-dom";

//Styles
import {Button, Grid, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

//Components
import Header from "../../components/Header/Header";

//Requests
import {goToMyPokedex} from "../../routes/coordinator";
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/url";

const useStyles = makeStyles((theme) => ({
    center: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    stats: {
        fontWeight: "800",
        fontSize: "25px",
        marginRight: "10px"
    }
}));


const PokemonDetailsPage = () => {
    const history = useHistory()
    const params = useParams()
    const [pokemon] = useRequestData({}, `${BASE_URL}/${params.pokemonId}`)
    const classes = useStyles();

    const stats = pokemon && pokemon.stats
    const types = pokemon && pokemon.types

    console.log(pokemon.moves)

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

            <Box m={20} className={classes.center}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box m={1} style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                             justifyContent={"center"}>
                            <img
                                src={pokemon.sprites && pokemon.sprites.front_default}
                                alt={pokemon.name}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </Box>

                        <Box m={1} style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                             justifyContent={"center"}>
                            <img
                                src={pokemon.sprites && pokemon.sprites.back_default}
                                alt={pokemon.name}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box m={1} style={{border: "1px solid #000", height: "98%", background: "#CCC"}}
                             display={"flex"}
                             flexDirection={"column"}
                             justifyContent={"flex-start"}
                             alignItems={"center"}>

                            <Box mt={5}>
                                <Typography variant={"h5"}>
                                    Stats
                                </Typography>
                            </Box>


                            <Box mt={4} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    hp:
                                </Typography>

                                <Typography>
                                    {stats && stats[0].base_stat}
                                </Typography>
                            </Box>

                            <Box mt={4} display={"flex"} alignItems={"center"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    attack:
                                </Typography>

                                <Typography>
                                    {stats && stats[1].base_stat}
                                </Typography>
                            </Box>

                            <Box mt={4} display={"flex"} alignItems={"center"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    defense:
                                </Typography>

                                <Typography>
                                    {stats && stats[2].base_stat}
                                </Typography>
                            </Box>

                            <Box mt={4} display={"flex"} alignItems={"center"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    special-attack:
                                </Typography>

                                <Typography>
                                    {stats && stats[3].base_stat}
                                </Typography>
                            </Box>

                            <Box mt={4} display={"flex"} alignItems={"center"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    special-defense:
                                </Typography>

                                <Typography>
                                    {stats && stats[4].base_stat}
                                </Typography>
                            </Box>

                            <Box mt={4} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}
                                 style={{width: "100%", padding: "0 10px"}}>
                                <Typography className={classes.stats}>
                                    speed:
                                </Typography>

                                <Typography>
                                    {stats && stats[5].base_stat}
                                </Typography>
                            </Box>


                        </Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Box m={1} style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                             justifyContent={"center"}
                             flexDirection={"column"}
                             alignItems={"center"}>

                            <Box mt={5}>
                                <Typography variant={"h5"}>
                                    Type
                                </Typography>
                            </Box>


                            <Box mt={2} display={"flex"} alignItems={"center"} justifyContent={"center"}
                                 style={{width: "100%", padding: "10px"}}>

                                {types && types.map((types) => {
                                    return (
                                        <Typography key={types.type.name} className={classes.stats}>

                                            {types.slot > 1
                                                ? "| " + types.type.name
                                                : types.type.name}
                                        </Typography>
                                    )
                                })}
                            </Box>

                        </Box>

                        <Box m={1} style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                             justifyContent={"center"}>
                            <Box mt={5}>
                                <Typography variant={"h5"}>
                                    Moves
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PokemonDetailsPage