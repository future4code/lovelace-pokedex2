import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/pokedex"}>
                    <PokedexPage/>
                </Route>

                <Route exact path={"/pokemon/:pokemonId"}>
                    <PokemonDetailsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router