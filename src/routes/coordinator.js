export const goToHomePage = (history) => {
    history.push("/")
}

export const goToMyPokedex = (history) => {
    history.push("/pokedex");
};

export const goToPokemonDetails = (history, pokemonName) => {
    history.push(`/pokemon/${pokemonName}`);
};
