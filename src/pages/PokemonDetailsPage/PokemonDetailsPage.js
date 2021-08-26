import {useHistory, useParams} from "react-router-dom";

//Styles
import {Button, Grid, Box, Typography, Grow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

//Components
import Header from "../../components/Header/Header";

//Requests
import {goToMyPokedex} from "../../routes/coordinator";
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/url";

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        width: "50%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px auto auto",
        padding: "10px",
        // border: "1px solid #000"
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
    const types = pokemon && pokemon.types && pokemon.types.map((type) => {
        return (
            <Typography key={type.type.name} className={classes.stats}>
                {type.slot > 1
                    ? "| " + type.type.name
                    : type.type.name}
            </Typography>
        )
    })

    const moves = pokemon && pokemon.moves && pokemon.moves.slice(0, 10).map((move) => {
        return (
            <ul>
                <li>{move.move.name}</li>
            </ul>
        )
    })


    return (
        <>
            <Header
                title={pokemon.name}
                display={"space"}
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

            <Box className={classes.container}>

                <Grid
                    container
                    spacing={3}>
                    <Grid item xs={4}>

                        <Grow in timeout={1000}>
                            <Box style={{border: "1px solid #000", height: "45%", background: "#CCC"}} display={"flex"}
                                 justifyContent={"center"}>
                                <img
                                    src={pokemon.sprites && pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    style={{
                                        width: "100%"
                                    }}
                                />
                            </Box>
                        </Grow>

                        <Grow in timeout={1000}>
                            <Box mt={3} style={{border: "1px solid #000", height: "45%", background: "#CCC"}}
                                 display={"flex"}
                                 justifyContent={"center"}>
                                <img
                                    src={pokemon.sprites && pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    style={{
                                        width: "100%"
                                    }}
                                />
                            </Box>
                        </Grow>

                    </Grid>

                    <Grid item xs={4}>

                        <Grow in timeout={1000}>
                            <Box style={{border: "1px solid #000", height: "100%", background: "#CCC"}}
                                 display={"flex"}
                                 flexDirection={"column"}
                                 justifyContent={"flex-start"}
                                 alignItems={"center"}>

                                <Box mt={2}>
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
                        </Grow>

                    </Grid>

                    <Grid item xs={4}>

                        <Grow in timeout={1000}>
                            <Box style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                                 justifyContent={"center"}
                                 flexDirection={"column"}
                                 alignItems={"center"}>

                                <Box mt={2}>
                                    <Typography variant={"h5"}>
                                        Type
                                    </Typography>
                                </Box>


                                <Box mt={2} display={"flex"} alignItems={"center"} justifyContent={"center"}
                                     style={{width: "100%", padding: "10px"}}>

                                    {types}

                                </Box>
                            </Box>
                        </Grow>

                        <Grow in timeout={1000}>
                            <Box mt={3} style={{border: "1px solid #000", background: "#CCC"}} display={"flex"}
                                 justifyContent={"center"}
                                 flexDirection={"column"}
                                 alignItems={"center"}>
                                <Box mt={2}>
                                    <Typography variant={"h5"}>
                                        Moves
                                    </Typography>
                                </Box>


                                <Box mt={1}>

                                    <Typography>
                                        {moves}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grow>

                    </Grid>

                </Grid>
            </Box>

        </>
    )
}

export default PokemonDetailsPage